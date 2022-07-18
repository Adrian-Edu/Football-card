import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

const data = [
  {
    nume: "FCSB",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    vote: 0
  },
  {
    nume: "FCSB",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    vote: 1
  },  
  {
    nume: "FCSB",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    vote: 0
  },
  {
    nume: "FCSB",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    vote: 1
  },
]


function App(props) {

  const [teams, setTeams] = useState(data)

  const onTeamAdd = (team) => {
    console.log(team);
  };

  return (
    <div className="page-container">s
      <div className="container">
        <AddTeam
          onAddTeam={onTeamAdd}
        />

        {teams.map((item)=> ( <Vote nume={item.nume} url={item.url} onChangeVote={onChangeVoteNr0}/>) )} 
     
      </div>

      <div className="right-container">
      
      </div>
    </div>
  );
}

export default App;
