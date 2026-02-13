"use client";

type BoxProps = {
  value: number;
  onClick: () => void;
};

export default function Box({ value, onClick }: BoxProps) {
  let background = "#e0e0e0"; // even
  let color = "black";

  // odd number style
  if (value % 2 !== 0) {
    background = "#1a237e";
    color = "white";
  }

  // locked style
  if (value >= 15) {
    background = "red";
    color = "white";
  }

  return (
    <div
      onClick={value >= 15 ? undefined : onClick}
      style={{
        background,
        color,
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        boxShadow: "2px 2px 0px black",
        cursor: value >= 15 ? "not-allowed" : "pointer",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {value}
    </div>
  );
}
