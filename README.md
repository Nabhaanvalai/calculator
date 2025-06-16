# React Calculator

A simple yet functional calculator built with React. This application provides standard calculator functionality with both mouse and keyboard input support.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Percentage calculations
- Clear functionality
- Backspace to remove the last input
- Keyboard support for all operations
- Responsive design
- Sleek modern UI with a dark theme

## Usage

### Mouse Controls
- Click on the buttons to input numbers and perform operations
- "C" button clears the input
- "<" button removes the last character
- "=" button calculates the result

### Keyboard Controls
- Number keys (0-9) for numeric input
- "+" for addition
- "-" for subtraction
- "*" for multiplication
- "/" for division
- "%" for percentage
- "Enter" key to calculate result
- "Backspace" to remove the last character
- "c" key to clear the input

## Implementation Details

The calculator is built using React with hooks (useState and useEffect) for state management and side effects. Key features of the implementation include:

- Input state management using the useState hook
- Keyboard event handling using the useEffect hook
- Mathematical operations using JavaScript's eval() function
- Error handling for invalid expressions

## Design

The calculator features:
- Dark theme with elegant styling
- Circular buttons with subtle shadows
- Clean, minimalist interface
- Responsive layout that works across devices
- Red accent shadow effects for visual appeal

## Known Issues

- The "00" button displays "0" but inputs "00"
- The Clear button resets to a space (' ') instead of '0'
- The order of buttons 1, 2, and 3 is reversed in the UI layout
- No input validation before evaluation which could lead to security concerns with eval()

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Technologies Used

- React.js (v19.0.0)
- React DOM (v19.0.0)
- Create React App
- CSS for styling (no external UI libraries)
