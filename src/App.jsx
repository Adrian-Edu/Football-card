import React from "react";
import "./App.css";

const MOCK_DATA = [
  {
    name: "Real",
    src: "dakjlsldjaskl",
    votes: 4,
  },
]

function App() {
  // state

  return (
    <div className="page-container">
      <div className="up-container">
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
              <img src={require("./real.png")} />
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
        
        {/*
            dateleDinState.map((item)=>(
              <ComponentaDeEchipa name={item.name} votes={item.votes} />
            ))
              <ComponentaDeEchipa name={state[0].name} votes={item.votes} />
              <ComponentaDeEchipa name={state[1].name} votes={item.votes} />
              <ComponentaDeEchipa name={state[2].name} votes={item.votes} />
              <ComponentaDeEchipa name={state[2].name} votes={item.votes} />

            {teams.map((item) => (
      <TeamCard 
        key={item.id}
        name={item.name}
        src={item.src}
        vote={item.votes}
      />
    ))};
          */}

        <div className="right-container">
          <div className="right-container-first">
            <img src="https://upload.wikimedia.org/wikipedia/ro/thumb/5/56/Real_Madrid_CF.svg/1468px-Real_Madrid_CF.svg.png" />
            <div className="right-container-first-h-p">
              <h4>Real Madrid</h4>
              <p>Votes</p>
            </div>
          </div>

          <div className="right-container-second">
            <img src={require("./real.png")} />
            <div className="right-container-first-h-p-second">
              <h4>Real Madrid</h4>
              <p>Votes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
