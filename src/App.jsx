import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App(props) {

  const [addTeamName, setAddTeamName] = useState("")
  const [addTeamUrl, setAddTeamUrl] = useState("")

  const nume = addTeamName
  const url = addTeamUrl

  const onTeamAdd = (team) => {
    setAddTeamName(team) 
  }

  const onTeamUrl = (url) => {
    setAddTeamUrl(url) 
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
