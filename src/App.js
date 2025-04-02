import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter valid numbers!");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = "Invalid Operation";
    }
    setResult(res);
  };

  return (
    <div className="container">
      <h2>Simple Calculator</h2>
      <input
        className="input-box"
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        className="input-box"
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br />
      <button className="button" onClick={() => handleCalculation("+")}>+</button>
      <button className="button" onClick={() => handleCalculation("-")}>-</button>
      <button className="button" onClick={() => handleCalculation("*")}>*</button>
      <button className="button" onClick={() => handleCalculation("/")}>/</button>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
