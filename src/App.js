import React, { useState, useEffect } from "react";
import "./App.css";

const colorUrl = "https://unpkg.com/color-name-list@9.6.0/dist/colornames.json";

function App() {
  const [colorData, setColorData] = useState({});

  useEffect(() => {
    getColorWithFetch();
  }, []);

  const getColorWithFetch = async () => {
    const response = await fetch(colorUrl);
    const jsonData = await response.json();
    setColorData(jsonData);
  };

  let color1Index = Math.floor(Math.random() * colorData.length);
  // let color1Hex = colorData[color1Index].hex;
  let color2Index = Math.floor(Math.random() * colorData.length);
  // let color2Hex = colorData[color2Index].hex;

  return (
    <div className="App">
      <header className="App-header">
        <h2>What's Your Favorite Color, Really?</h2>
      </header>
      <div className="color-container">
        <h3
          className="color-item"
          style={{ backgroundColor: colorData[color1Index].hex }}
        >
          {colorData[color1Index].name}
        </h3>
        <h2>VS.</h2>
        <h3
          className="color-item"
          style={{ backgroundColor: colorData[color2Index].hex }}
        >
          {colorData[color2Index].name}
        </h3>
      </div>
    </div>
  );
}

export default App;
