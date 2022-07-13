import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App(props) {

  const [addTeamName, setAddTeamName] = useState("");
  const [addTeamUrl, setAddTeamUrl] = useState("");
  const [addVote, setAddVote] = useState("");


  const data = [
    {
      nume: addTeamName,
      url: addTeamUrl,
      vote: addVote
    },
    {
      nume: "FCSB",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
      vote: addVote
    },
    {
      nume: "FC Barcelona",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
      vote: addVote
    }
  ]

  const onTeamAdd = (team) => {
    setAddTeamName(team);
  };

  const onTeamUrl = (url) => {
    setAddTeamUrl(url);
  };

  const onChangeVote = (vote) => {
    setAddVote(vote);
  };


  return (
    <div className="page-container">
      <div className="container">
        <AddTeam
          onAddTeam={onTeamAdd}
          onAddTeamUrl={onTeamUrl}
     
        />

        <Vote nume={data[0].nume} url={data[0].url} setAddVot={data[0].vote}  onChangeVote={onChangeVote}/>
        <Vote nume={data[1].nume} url={data[1].url} setAddVot={data[1].vote}  onChangeVote={onChangeVote} />
        <Vote nume={data[2].nume} url={data[2].url} setAddVot={data[2].vote}  onChangeVote={onChangeVote} />
        
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
