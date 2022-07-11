import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App(props) {

  const [addTeamName, setAddTeamName] = useState("")
  const [addTeamUrl, setAddTeamUrl] = useState("")
  const [addVote, setAddVote] = useState("")

  const nume = addTeamName
  const url = addTeamUrl
  const vote = addVote

  const onTeamAdd = (team) => {
    setAddTeamName(team) 
  }

  const onTeamUrl = (url) => {
    setAddTeamUrl(url) 
  }

  const onChangeVote = (vote) => {
    setAddVote(vote) 
  }


  return (
    <div className="page-container">
      <div className="container">
        
        < AddTeam 
        onAddTeam = {onTeamAdd} 
        onAddTeamUrl = {onTeamUrl}
        onSetAddVote = {onChangeVote}
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
           vote = {vote}
           />
          < RightBottomCard 
           nume = {nume}
           url = {url}
           vote = {vote}
           />
        
      </div>
    </div>
  );
}

export default App;
