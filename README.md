# The Recursive Grid

A logical interaction game built with Next.js and TypeScript. This project demonstrates complex state management and recursive logic within a simple 3x3 grid interface.

## How it Works

The goal is to interact with a 3x3 grid of numbers. Each box starts at 0.

### Interaction
- **Click**: Tap any unlocked box to increase its number by **1**.

### Ripple Effects
Your actions trigger automatic changes in neighboring boxes:
1. **Divisible by 3**: If a number becomes a multiple of 3 (e.g., 3, 6, 9), the box to its **RIGHT** decreases by **1**.
2. **Divisible by 5**: If a number becomes a multiple of 5 (e.g., 5, 10), the box **BELOW** increases by **2**.

### Visual Feedback
- **Even Numbers**: Light Gray background.
- **Odd Numbers**: Navy Blue background with White text.
- **Locked State**: Once a box hits **15**, it turns **Red** and locks permanently. It can no longer be clicked or modified by neighbors.

## Technical Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Inline styles for precision matching of design (Shadows, Rounded Corners).

## Getting Started

First, run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
