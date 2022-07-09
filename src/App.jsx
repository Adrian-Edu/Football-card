import React from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App() {

  return (
    <div className="page-container">
      <div className="container">
        
        < AddTeam />
        < Vote />

      </div>

      <div className="right-container">

          < RightTopCard />
          < RightBottomCard />
        
      </div>
    </div>
  );
}

export default App;
