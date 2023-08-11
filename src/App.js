import React from "react";
import QuoteGenerator from "./QuoteGenerator";
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 id="main">Random Quote Generator</h1>
      <QuoteGenerator />
      <div id="copyrights">
        <footer>
        <p>&copy;Build by Abhinav Reddy</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
