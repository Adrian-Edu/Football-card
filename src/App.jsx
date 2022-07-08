import React from "react";
import "./App.css";

const MOCK_DATA = [
  {
    name: "Real",
    src: "dakjlsldjaskl",
    votes: 4,
  },
];

function App() {
  return (
    <div className="page-container">

      <div className="left-container">
        <div className="container">
          <h1>Football Teams</h1>
          <div className="mid-container">
            <form className="form">
              <input></input>
              <input></input>
              <button>Add a Team</button>
            </form>
          </div>

          <div className="bottom-container">
            <div className="logo">
              <img
                src="data:image/png;base64,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 "
                alt=""
              />
            </div>
            <div className="mid-writing">
              <h4>Real Madrid</h4>
              <p>Votes</p>
            </div>

            <div>
              <button className="vote">Vote</button>
            </div>
          </div>

        </div>
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
          <img  src="https://upload.wikimedia.org/wikipedia/ro/thumb/5/56/Real_Madrid_CF.svg/1468px-Real_Madrid_CF.svg.png"
            alt="" />
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
