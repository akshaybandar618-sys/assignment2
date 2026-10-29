import { useState } from "react";
import "./App.css";

function App() {
  // List of items
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  // State for light and dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>List of Fruits</h1>

      {/* Display items using Array.map() */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Toggle light and dark mode */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;