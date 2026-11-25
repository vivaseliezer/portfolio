// Advanced 4K Sprite System
class SpriteAnimator {
    constructor(imageSrc, frameWidth, frameHeight, frames, speed) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frames = frames;
        this.speed = speed; 
        this.currentFrame = 0;
        this.tick = 0;
        this.isLoaded = false;
        
        this.image.onload = () => {
            this.isLoaded = true;
        };
    }

    update() {
        this.tick++;
        if (this.tick >= this.speed) {
            this.tick = 0;
            this.currentFrame = (this.currentFrame + 1) % this.frames;
        }
    }

    draw(ctx, x, y, width, height, flip = false) {
        if (!this.isLoaded) return false;
        
        ctx.save();
        if (flip) {
            ctx.translate(x + width / 2, y + height / 2);
            ctx.scale(-1, 1);
            ctx.translate(-(x + width / 2), -(y + height / 2));
        }
        
        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            x, y,
            width, height
        );
        
        ctx.restore();
        return true;
    }
}

class Entity {
    // 4K Scale: Objects are about 4.8 times larger
    constructor(x, y, width, height, speed, hp) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.hp = hp;
        this.maxHp = hp;
        this.color = 'white';
        
        // Placeholder for SpriteAnimator
        this.animator = null; 
        this.flipSprite = false;
    }

    draw(ctx) {
        // Try to draw the Sprite. If it fails (not loaded yet or absent), draw test shape
        let drawn = false;
        if (this.animator) {
            this.animator.update();
            drawn = this.animator.draw(ctx, this.x, this.y, this.width, this.height, this.flipSprite);
        }

        if (!drawn) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    takeDamage(amount) {
        this.hp -= amount;
        return this.hp <= 0;
    }

    checkCollision(other) {
        return (
            this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.y + this.height > other.y
        );
    }
}

class Kabra extends Entity {
    constructor(x, y) {
        // In 4K: Size 250x250 px, Speed 25
        super(x, y, 250, 250, 25, 100);
        this.color = '#e0e0e0';
        this.vx = 0;
        this.vy = 0;
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackDuration = 15;
        this.attackCooldown = 0;
        this.facing = 'right'; 
        
        // --- UNIQUE IMAGE WITH PROCEDURAL ANIMATION ---
        this.image = new Image();
        this.image.src = 'assets/kabra.png'; // Make sure to save the image here!
        this.imageLoaded = false;
        this.image.onload = () => { this.imageLoaded = true; };
        
        // Variables for smooth animation via code
        this.runCycle = 0; 
    }

    update(keys, worldWidth, worldHeight) {
        if (this.attackCooldown > 0) this.attackCooldown--;

        if (this.isAttacking) {
            this.attackTimer--;
            if (this.attackTimer <= 0) {
                this.isAttacking = false;
            }
        } else {
            this.vx = 0;
            this.vy = 0;
            if (keys['w'] || keys['ArrowUp']) { this.vy = -this.speed; this.facing = 'up'; }
            if (keys['s'] || keys['ArrowDown']) { this.vy = this.speed; this.facing = 'down'; }
            if (keys['a'] || keys['ArrowLeft']) { this.vx = -this.speed; this.facing = 'left'; this.flipSprite = true; }
            if (keys['d'] || keys['ArrowRight']) { this.vx = this.speed; this.facing = 'right'; this.flipSprite = false; }

            if (this.vx !== 0 && this.vy !== 0) {
                let diagSpeed = this.speed * 0.7071;
                this.vx = Math.sign(this.vx) * diagSpeed;
                this.vy = Math.sign(this.vy) * diagSpeed;
            }

            this.x += this.vx;
            this.y += this.vy;
            
            // If moving, advance procedural animation cycle
            if (this.vx !== 0 || this.vy !== 0) {
                this.runCycle += 0.2; // Bounce speed
            } else {
                this.runCycle = 0; // Stops bounce
            }
        }

        this.x = Math.max(0, Math.min(this.x, worldWidth - this.width));
        this.y = Math.max(0, Math.min(this.y, worldHeight - this.height));
    }

    attack() {
        if (!this.isAttacking && this.attackCooldown <= 0) {
            this.isAttacking = true;
            this.attackTimer = this.attackDuration;
            this.attackCooldown = 30; 
        }
    }

    draw(ctx) {
        super.draw(ctx); // Retain base behavior
        
        if (this.imageLoaded) {
            ctx.save();
            
            // Goat's center for rotations
            let cx = this.x + this.width / 2;
            let cy = this.y + this.height / 2;
            ctx.translate(cx, cy);

            // Flip if facing left
            if (this.facing === 'left') {
                ctx.scale(-1, 1);
            }
            
            // SMOOTH PROCEDURAL ANIMATION
            let drawWidth = this.width;
            let drawHeight = this.height;
            let drawYOffset = 0;

            if (this.isAttacking) {
                // Ramming: dramatic stretch and forward push
                ctx.translate(50, 0); 
                ctx.rotate(0.3); // Sharp tilt
                drawWidth = this.width * 1.2;
                drawHeight = this.height * 0.8;
            } else if (this.runCycle > 0) {
                // Running: cartoon/anime style elastic bounce
                let bounce = Math.abs(Math.sin(this.runCycle));
                drawYOffset = -bounce * 30; // Jumps up to 30px
                ctx.rotate(Math.sin(this.runCycle) * 0.1); // Small lateral oscillation
                
                // Visual stretch when jumping
                drawHeight = this.height * (1 + bounce * 0.1);
                drawWidth = this.width * (1 - bounce * 0.05);
            } else {
                // Idle Breathing
                let breathe = Math.sin(Date.now() / 200) * 0.02;
                drawHeight = this.height * (1 + breathe);
                drawWidth = this.width * (1 - breathe);
            }

            ctx.drawImage(
                this.image, 
                -drawWidth / 2, -drawHeight / 2 + drawYOffset, 
                drawWidth, drawHeight
            );
            
            ctx.restore();
        } else {
            // Original yellow placeholder (if image is missing)
            ctx.fillStyle = '#f0c367';
            let hornSize = 40;
            ctx.save();
            ctx.translate(this.x + this.width/2, this.y + this.height/2);
            if (this.facing === 'up') ctx.rotate(-Math.PI/2);
            else if (this.facing === 'down') ctx.rotate(Math.PI/2);
            else if (this.facing === 'left') ctx.rotate(Math.PI);
            
            if (this.isAttacking) {
                ctx.fillStyle = '#ff3333'; 
                ctx.translate(40, 0); 
                ctx.fillRect(this.width/2, -hornSize, hornSize*2, hornSize*2);
            } else {
                ctx.fillRect(this.width/2, -60, hornSize, 30); 
                ctx.fillRect(this.width/2, 30, hornSize, 30);  
            }
            ctx.restore();
        }
    }
}

class Cadejo extends Entity {
    constructor(x, y) {
        // In 4K: 280x180 px, Speed 12
        super(x, y, 280, 180, 12, 30);
        this.color = '#1f1b1b'; 
        // this.animator = new SpriteAnimator('assets/cadejo_run.png', ...);
    }

    update(player) {
        let dx = player.x + player.width/2 - (this.x + this.width/2);
        let dy = player.y + player.height/2 - (this.y + this.height/2);
        let dist = Math.hypot(dx, dy);
        
        if (dist > 0) {
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
        }
        
        if (dx < 0) this.flipSprite = true;
        else this.flipSprite = false;
    }

    draw(ctx) {
        super.draw(ctx);
        if (!this.animator) {
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(this.x + 60, this.y + 40, 20, 20);
            ctx.fillRect(this.x + 120, this.y + 40, 20, 20);
        }
    }
}

class Llorona extends Entity {
    constructor(x, y) {
        // In 4K: 180x300 px, Speed 5
        super(x, y, 180, 300, 5, 40);
        this.color = 'rgba(210, 240, 255, 0.7)'; 
        this.angle = Math.random() * Math.PI * 2;
    }

    update(player) {
        let dx = player.x - this.x;
        let dy = player.y - this.y;
        let dist = Math.hypot(dx, dy);
        
        this.angle += 0.1;
        
        if (dist > 0) {
            this.x += (dx / dist) * this.speed + Math.sin(this.angle) * 5;
            this.y += (dy / dist) * this.speed + Math.cos(this.angle) * 5;
        }
        if (dx < 0) this.flipSprite = true;
        else this.flipSprite = false;
    }
}

class Duende extends Entity {
    constructor(x, y) {
        // In 4K: 150x200 px, Speed 18
        super(x, y, 150, 200, 18, 15);
        this.color = '#5c4033'; 
        this.moveTimer = 0;
        this.targetX = x;
        this.targetY = y;
    }

    update(player, worldWidth, worldHeight) {
        this.moveTimer--;
        
        if (this.moveTimer <= 0) {
            this.moveTimer = 40 + Math.random() * 60;
            this.targetX = player.x + (Math.random() - 0.5) * 1200;
            this.targetY = player.y + (Math.random() - 0.5) * 1200;
        }

        let dx = this.targetX - this.x;
        let dy = this.targetY - this.y;
        let dist = Math.hypot(dx, dy);
        
        if (dist > 20) {
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
        }
        
        if (dx < 0) this.flipSprite = true;
        else this.flipSprite = false;
    }

    draw(ctx) {
        super.draw(ctx);
        if (!this.animator) {
            ctx.fillStyle = '#b8860b'; 
            ctx.fillRect(this.x - 40, this.y - 40, 230, 60);
        }
    }
}
