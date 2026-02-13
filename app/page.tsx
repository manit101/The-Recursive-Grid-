"use client";

import { useState } from "react";
import Grid from "../components/Grid";

export default function Home() {
  // create 3x3 grid filled with 0
  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  function handleReset() {
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  }

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
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "var(--font-geist-sans), sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "40px", fontSize: "2.5rem", fontWeight: "bold" }}>
        The Recursive Grid
      </h1>

      <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Left Side: Game */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <Grid grid={grid} onBoxClick={handleClick} />

          <button
            onClick={handleReset}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "1rem",
              background: "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              boxShadow: "2px 2px 0px black",
            }}
          >
            Reset Grid
          </button>
        </div>

        {/* Right Side: Rules */}
        <div style={{ maxWidth: "300px", lineHeight: "1.6" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "15px", borderBottom: "2px solid #333", paddingBottom: "5px" }}>Rules</h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Click</strong> a box to increment by 1.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Rule A:</strong> If number is divisible by 3, right neighbor decreases by 1.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Rule B:</strong> If number is divisible by 5, bottom neighbor increases by 2.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Lock:</strong> At 15+, box turns red and locks forever.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
