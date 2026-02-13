"use client";

import { useState } from "react";
import Box from "./Box";

export default function Grid() {
  // create 3x3 grid filled with 0
  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  function handleClick(row: number, col: number) {
    // copy grid
    const newGrid = grid.map((r) => [...r]);

    // if locked → do nothing
    if (newGrid[row][col] >= 15) return;

    // increment clicked box
    newGrid[row][col] += 1;

    const value = newGrid[row][col];

    // 🔹 Rule A → divisible by 3 → decrement right
    if (value % 3 === 0 && col < 2) {
      if (newGrid[row][col + 1] < 15) {
        newGrid[row][col + 1] -= 1;
      }
    }

    // 🔹 Rule B → divisible by 5 → increment below
    if (value % 5 === 0 && row < 2) {
      if (newGrid[row + 1][col] < 15) {
        newGrid[row + 1][col] += 2;
      }
    }

    setGrid(newGrid);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: "10px",
      }}
    >
      {grid.map((row, i) =>
        row.map((value, j) => (
          <Box
            key={`${i}-${j}`}
            value={value}
            onClick={() => handleClick(i, j)}
          />
        ))
      )}
    </div>
  );
}
