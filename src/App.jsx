import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App(props) {

  const [addTeamName, setAddTeamName] = useState("");
  const [addTeamUrl, setAddTeamUrl] = useState("");
  const [addVoteNr0, setAddVoteNr0] = useState("");
  const [addVoteNr1, setAddVoteNr1] = useState("");
  const [addVoteNr2, setAddVoteNr2] = useState("");

  const data = [
    {
      nume: addTeamName,
      url: addTeamUrl,
      vote: addVoteNr0
    },
    {
      nume: "FCSB",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
      vote: addVoteNr1
    },
    {
      nume: "FCSB",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
      vote: addVoteNr2
    },
  ]

  const onTeamAdd = (team) => {
    setAddTeamName(team);
  };

  const onTeamUrl = (url) => {
    setAddTeamUrl(url);
  };

  const onChangeVoteNr0 = (vote) => {
    setAddVoteNr0(vote);
  };

  
  const onChangeVoteNr1 = (vote) => {
    setAddVoteNr1(vote);
  };


  const onChangeVoteNr2 = (vote) => {
    setAddVoteNr2(vote);
  };




  return (
    <div className="page-container">s
      <div className="container">
        <AddTeam
          onAddTeam={onTeamAdd}
          onAddTeamUrl={onTeamUrl}
        />

        <Vote nume={data[0].nume} url={data[0].url} onChangeVote={onChangeVoteNr0}/>
        <Vote nume={data[1].nume} url={data[1].url} onChangeVote={onChangeVoteNr1} />
        <Vote nume={data[2].nume} url={data[2].url} onChangeVote={onChangeVoteNr2} />
        
      </div>

      <div className="right-container">
        <RightTopCard nume={data[0].nume} url={data[0].url} vote={data[0].vote} />
        <RightBottomCard nume={data[1].nume} url={data[1].url} vote={data[1].vote} />
        <RightBottomCard nume={data[2].nume} url={data[2].url} vote={data[2].vote} />
      </div>
    </div>
  );
}

export default App;
