"use client";

import Box from "./Box";

type GridProps = {
  grid: number[][];
  onBoxClick: (row: number, col: number) => void;
};

export default function Grid({ grid, onBoxClick }: GridProps) {
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
            onClick={() => onBoxClick(i, j)}
          />
        ))
      )}
    </div>
  );
}
