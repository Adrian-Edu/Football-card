import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App(props) {

  const nume = "Real Madrid";
  const url = "https://upload.wikimedia.org/wikipedia/ro/thumb/5/56/Real_Madrid_CF.svg/1468px-Real_Madrid_CF.svg.png"
 
  const onTeamAdd = (team) => {
    console.log(team) 
  }

  return (
    <div className="page-container">
      <div className="container">
        
        < AddTeam onAddTeam={onTeamAdd} />

        < Vote 
        nume = {nume}
        url = {url}
        />

      </div>

      <div className="right-container">

          < RightTopCard 
           nume = {nume}
           url = {url}
           />
          < RightBottomCard 
           nume = {nume}
           url = {url}
           />
        
      </div>
    </div>
  );
}

export default App;
