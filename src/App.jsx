import React from "react";
import "./App.css";
import AddTeam from "./components/LeftContainerTop/LeftContainerTop";
import Vote from "./components/LeftContainerBottom/LeftContainerBottom";

function App() {
  return (
    <div className="page-container">
      <div className="container">
        
        <AddTeam />
        < Vote />
      
      </div>

      <div className="right-container">
        <div className="right-container-first">
          <img
            src="https://upload.wikimedia.org/wikipedia/ro/thumb/5/56/Real_Madrid_CF.svg/1468px-Real_Madrid_CF.svg.png"
            alt=""
          />
          <div className="right-container-first-h-p">
            <h4>Real Madrid</h4>
            <p>Votes</p>
          </div>
        </div>

        <div className="right-container-second">
          <img
            src="https://upload.wikimedia.org/wikipedia/ro/thumb/5/56/Real_Madrid_CF.svg/1468px-Real_Madrid_CF.svg.png"
            alt=""
          />
          <div className="right-container-first-h-p-second">
            <h4>Real Madrid</h4>
            <p>Votes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
