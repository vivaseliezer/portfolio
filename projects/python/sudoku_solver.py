"""
PyDoku — Sudoku Solver & Puzzle Generator (Python Tkinter + Backtracking)
"""

import random
import tkinter as tk

count = 0


class Sudoku:
    canvas_bg = "#fafafa"
    line_normal = "#4f4f4f"
    line_thick = "#000000"
    hbox_green = "#15fa00"
    hbox_red = "#d61111"

    def __init__(self, master: tk.Tk) -> None:
        self.grid: dict[tuple[int, int], list] = {}
        self.e = None
        self.canvas_width = 360
        self.canvas_height = 360

        self.canvas = tk.Canvas(
            master, bg=self.canvas_bg, width=self.canvas_width, height=self.canvas_height
        )
        self.t = tk.Entry(self.canvas)
        self.t.bind("<KeyRelease>", self.key_pressed)
        self.canvas.grid(columnspan=3)
        self.canvas.bind("<Button-1>", self.click)

        self.btn_solve = tk.Button(master, text="Solve", command=self.wrapper, width=10)
        self.btn_solve.grid(row=1, column=0, padx=5, pady=6)

        self.btn_gen = tk.Button(master, text="Generate", command=self.generate, width=10)
        self.btn_gen.grid(row=1, column=1, padx=5, pady=6)

        self.set_difficulty = tk.IntVar(master, 1)
        self.difficulty_selector = tk.OptionMenu(master, self.set_difficulty, 1, 2, 3, 4, 5)
        self.difficulty_selector.grid(row=1, column=2, pady=6)

        self.cell_width = self.canvas_width / 9
        self.cell_height = self.canvas_height / 9

        for x in range(1, 9):
            w, fill = (2, self.line_thick) if x % 3 == 0 else (1, self.line_normal)
            self.canvas.create_line(
                self.cell_width * x, 0, self.cell_width * x, self.canvas_height, width=w, fill=fill
            )
        for y in range(1, 9):
            w, fill = (2, self.line_thick) if y % 3 == 0 else (1, self.line_normal)
            self.canvas.create_line(
                0, self.cell_height * y, self.canvas_width, self.cell_height * y, width=w, fill=fill
            )

    def click(self, event) -> None:
        x, y = event.x, event.y
        col = int(x / self.cell_width)
        row = int(y / self.cell_height)
        rect_x = col * self.cell_width
        rect_y = row * self.cell_height
        coords = [
            rect_x,
            rect_y,
            rect_x + self.cell_width,
            rect_y,
            rect_x + self.cell_width,
            rect_y + self.cell_height,
            rect_x,
            rect_y + self.cell_height,
        ]
        editable = self.get_cell(col, row)[1]
        if editable:
            h_box = self.canvas.create_polygon(coords, outline=self.hbox_green, fill="", width=3)
            self.edit(rect_x, rect_y)
            self.canvas.after(300, lambda: self.canvas.delete(h_box))
        else:
            h_box = self.canvas.create_polygon(coords, outline=self.hbox_red, fill="", width=3)
            self.canvas.after(200, lambda: self.canvas.delete(h_box))

    def edit(self, cordx: float, cordy: float) -> None:
        if self.e is not None:
            self.canvas.delete(self.e)
        self.e = self.canvas.create_window(
            cordx + 1,
            cordy + 1,
            window=self.t,
            width=self.cell_width - 1,
            height=self.cell_height - 2,
            anchor=tk.NW,
        )
        self.t.delete(0, tk.END)
        self.t.focus_set()

    def key_pressed(self, _event) -> None:
        raw = self.t.get().strip()
        try:
            val = int(raw)
            if val > 9 or val < 0:
                raise ValueError
        except ValueError:
            self.t.delete(0, tk.END)
            return
        x = int(self.t.winfo_x() / self.cell_width)
        y = int(self.t.winfo_y() / self.cell_height)
        self.update_cell(val, x, y)
        if self.e is not None:
            self.canvas.delete(self.e)

    def update_cell(self, value: int, x: int, y: int, editable: bool = True) -> None:
        cell = self.get_cell(x, y)
        cell[0] = value
        cell[1] = editable
        text = " " if value == 0 else str(value)
        self.canvas.itemconfigure(cell[2], text=text)
        self.canvas.update()
        self.grid[(int(x), int(y))] = cell

    def get_cell(self, x: int, y: int) -> list:
        return self.grid[(int(x), int(y))]

    def populate(self, board: list[list[int]]) -> None:
        for i in range(9):
            for j in range(9):
                tx = j * self.cell_width + self.cell_width / 2
                ty = i * self.cell_height + self.cell_height / 2
                val = board[i][j]
                if val == 0:
                    item = self.canvas.create_text(tx, ty, text=" ", font=("Times", 14))
                    self.grid[(j, i)] = [0, True, item]
                else:
                    item = self.canvas.create_text(tx, ty, text=str(val), font=("Times", 15, "bold"))
                    self.grid[(j, i)] = [val, False, item]

    def clear_grid(self) -> None:
        for i in range(9):
            for j in range(9):
                self.update_cell(0, i, j)

    def get_value(self, col: int, row: int) -> int:
        return self.grid[(col, row)][0]

    def wrapper(self) -> None:
        global count
        count = 0
        if self.e is not None:
            self.canvas.delete(self.e)
        self.btn_gen.configure(state="disabled")
        self.btn_solve.configure(state="disabled")
        self.solve()
        self.btn_gen.configure(state="normal")
        self.btn_solve.configure(state="normal")

    def solve(self) -> bool:
        global count
        x, y = self.find_empty()
        if (x, y) == (None, None):
            print(f"Solved in {count} recursive steps.")
            return True
        count += 1
        for num in range(1, 10):
            if self.is_subgrid_safe(num, x, y) and self.is_cell_safe(num, x, y):
                self.update_cell(num, x, y, False)
                if self.solve():
                    return True
                self.update_cell(0, x, y, True)
        return False

    def generate(self) -> None:
        global count
        self.btn_solve.configure(state="disabled")
        self.btn_gen.configure(state="disabled")
        nos = list(range(1, 10))
        rand_grid = []
        for i in range(9):
            if i % 3 == 0:
                random.shuffle(nos)
            row = [0] * 9
            for j in range(3):
                t_pos = (i // 3) * 3 + j
                n_pos = (i % 3) * 3
                row[t_pos] = nos[n_pos + j]
            rand_grid.append(row)

        self.clear_grid()
        self.populate(rand_grid)
        self.solve()
        count = 0

        level = self.set_difficulty.get()
        if level <= 2:
            level += 2
        for i in range(9):
            for j in range(9):
                if level > random.randint(1, 5):
                    self.update_cell(0, i, j, True)

        self.btn_solve.configure(state="normal")
        self.btn_gen.configure(state="normal")

    def find_empty(self) -> tuple[int | None, int | None]:
        for i in range(9):
            for j in range(9):
                if self.get_cell(j, i)[1]:
                    return (j, i)
        return (None, None)

    def is_subgrid_safe(self, val: int, x: int, y: int) -> bool:
        sx = (x // 3) * 3
        sy = (y // 3) * 3
        for i in range(sx, sx + 3):
            for j in range(sy, sy + 3):
                if val == self.get_value(i, j) and not self.get_cell(i, j)[1]:
                    return False
        return True

    def is_cell_safe(self, val: int, x: int, y: int) -> bool:
        for i in range(9):
            if val == self.get_value(x, i) and not self.get_cell(x, i)[1]:
                return False
            if val == self.get_value(i, y) and not self.get_cell(i, y)[1]:
                return False
        return True


if __name__ == "__main__":
    root = tk.Tk()
    root.title("PyDoku — Sudoku Solver")
    root.resizable(False, False)
    game = Sudoku(root)
    sample_puzzle = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0],
    ]
    game.populate(sample_puzzle)
    root.mainloop()
