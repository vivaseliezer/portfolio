const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const hud = document.getElementById('hud');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const healthFill = document.getElementById('health-fill');
const scoreDisplay = document.getElementById('score');
const finalScore = document.getElementById('final-score');

// --- NEW: EXPANDED WORLD ---
const WORLD_WIDTH = 10000;
const WORLD_HEIGHT = 10000;

let isRunning = false;
let score = 0;
let keys = {};
let player;
let enemies = [];
let spawnTimer = 0;
let spawnRate = 120; 

// --- NEW: CAMERA SYSTEM (LERP & SHAKE) ---
class Camera {
    constructor() {
        this.x = WORLD_WIDTH / 2;
        this.y = WORLD_HEIGHT / 2;
        this.shakeTime = 0;
        this.shakeIntensity = 0;
    }

    follow(target) {
        // Linear interpolation (Lerp) for smooth tracking
        // The camera target is the center of the player minus half the canvas
        let targetX = target.x + target.width / 2 - canvas.width / 2;
        let targetY = target.y + target.height / 2 - canvas.height / 2;

        // Keep camera within the world
        targetX = Math.max(0, Math.min(targetX, WORLD_WIDTH - canvas.width));
        targetY = Math.max(0, Math.min(targetY, WORLD_HEIGHT - canvas.height));

        // 0.08 is the "elasticity" (smoothness) factor. 1 = instant, 0.01 = super slow.
        this.x += (targetX - this.x) * 0.08;
        this.y += (targetY - this.y) * 0.08;

        if (this.shakeTime > 0) {
            this.shakeTime--;
        }
    }

    apply(ctx) {
        let sx = 0;
        let sy = 0;
        if (this.shakeTime > 0) {
            sx = (Math.random() - 0.5) * this.shakeIntensity;
            sy = (Math.random() - 0.5) * this.shakeIntensity;
        }
        ctx.translate(-this.x + sx, -this.y + sy);
    }

    shake(frames, intensity) {
        this.shakeTime = frames;
        this.shakeIntensity = intensity;
    }
}

let camera = new Camera();

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    if (e.key === ' ' || e.code === 'Space') {
        if (isRunning && player) {
            player.attack();
            // SCREEN SHAKE WHEN ATTACKING FOR MORE FLUIDITY AND WEIGHT!
            camera.shake(12, 40); 
        }
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function initGame() {
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    hud.classList.remove('hidden');
    
    player = new Kabra(WORLD_WIDTH / 2, WORLD_HEIGHT / 2);
    // Position the camera quickly at start
    camera.x = player.x - canvas.width/2;
    camera.y = player.y - canvas.height/2;

    enemies = [];
    score = 0;
    spawnTimer = 0;
    spawnRate = 120;
    isRunning = true;
    
    updateHUD();
    gameLoop();
}

function spawnEnemy() {
    let type = Math.random();
    
    // Now spawns happen in a radius around the player outside the camera!
    let dist = Math.max(canvas.width, canvas.height); // Safe distance
    let angle = Math.random() * Math.PI * 2;
    
    let x = player.x + Math.cos(angle) * dist;
    let y = player.y + Math.sin(angle) * dist;

    // Confine within giant world
    x = Math.max(0, Math.min(x, WORLD_WIDTH - 200));
    y = Math.max(0, Math.min(y, WORLD_HEIGHT - 200));

    if (type < 0.5) {
        enemies.push(new Cadejo(x, y));
    } else if (type < 0.8) {
        enemies.push(new Llorona(x, y));
    } else {
        enemies.push(new Duende(x, y));
    }
}

function updateHUD() {
    let healthPercent = Math.max(0, (player.hp / player.maxHp) * 100);
    healthFill.style.width = healthPercent + '%';
    scoreDisplay.innerText = score;
}

function gameOver() {
    isRunning = false;
    hud.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    finalScore.innerText = `Score: ${score}`;
}

function gameLoop() {
    if (!isRunning) return;
    
    // --- DRAW LOGIC & CAMERA ---
    // 1. Reset transform to clear actual physical canvas (3840x2160)
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Draw background if we wanted before translate (not needed, it's in CSS)
    
    // 3. Update camera math
    camera.follow(player);

    // 4. Move entire canvas (Fluid magical translation 😎)
    camera.apply(ctx);

    // --- DRAW WORLD FLOOR ---
    ctx.fillStyle = '#1c1b26'; // Giant map base color
    ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
    // (Optional: Draw grid or dirty pattern on floor here)

    // --- UPDATE LOGIC ---
    spawnTimer++;
    if (spawnTimer >= spawnRate) {
        spawnEnemy();
        spawnTimer = 0;
        if (spawnRate > 30) spawnRate -= 2;
    }

    player.update(keys, WORLD_WIDTH, WORLD_HEIGHT);
    player.draw(ctx);

    let attackBox = null;
    if (player.isAttacking) {
        let reach = 250; 
        let ax = player.x, ay = player.y, aw = player.width, ah = player.height;
        if (player.facing === 'right') { ax += player.width; aw = reach; }
        else if (player.facing === 'left') { ax -= reach; aw = reach; }
        else if (player.facing === 'up') { ay -= reach; ah = reach; }
        else if (player.facing === 'down') { ay += player.height; ah = reach; }
        
        attackBox = { x: ax, y: ay, width: aw, height: ah };
    }

    for (let i = enemies.length - 1; i >= 0; i--) {
        let enemy = enemies[i];
        enemy.update(player, WORLD_WIDTH, WORLD_HEIGHT);
        enemy.draw(ctx);

        if (attackBox && enemy.checkCollision(attackBox)) {
            let dead = enemy.takeDamage(10); 
            
            let knock = 80;
            if (player.facing === 'right') enemy.x += knock;
            if (player.facing === 'left') enemy.x -= knock;
            if (player.facing === 'up') enemy.y -= knock;
            if (player.facing === 'down') enemy.y += knock;

            if (enemy.hp <= 0) {
                if (enemy instanceof Cadejo) score += 10;
                if (enemy instanceof Llorona) score += 20;
                if (enemy instanceof Duende) score += 15;
                enemies.splice(i, 1);
                updateHUD();
                continue;
            }
        }

        if (enemy.checkCollision(player)) {
            if (Math.random() < 0.1) { 
                player.takeDamage(5);
                updateHUD();
                
                // If goat takes damage, slight screen shake (Impact)
                camera.shake(5, 20);
                
                let dx = player.x - enemy.x;
                let dy = player.y - enemy.y;
                let dist = Math.hypot(dx, dy);
                if (dist > 0) {
                    player.x += (dx/dist) * 20; 
                    player.y += (dy/dist) * 20;
                }

                if (player.hp <= 0) {
                    player.hp = 0;
                    gameOver();
                    return;
                }
            }
        }
    }

    if (Math.random() < 0.05) {
        score++;
        updateHUD();
    }

    requestAnimationFrame(gameLoop);
}

startBtn.addEventListener('click', initGame);
restartBtn.addEventListener('click', initGame);

function initialDraw() {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
initialDraw();
