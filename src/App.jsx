import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App(props) {

  const nume = "FCSB"
  const url = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Steaua_Bucure%C8%99ti.svg/1200px-Steaua_Bucure%C8%99ti.svg.png"

  const [addTeamName, setAddTeamName] = useState("")
  const [addTeamUrl, setAddTeamUrl] = useState("")


  const onTeamAdd = (team) => {
    console.log(team) 
  }

  const onTeamUrl = (url) => {
  console.log(url) 
  }

  return (
    <div className="page-container">
      <div className="container">
        
        < AddTeam 
        onAddTeam = {onTeamAdd} 
        onAddTeamUrl = {onTeamUrl}
        />

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
