import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

const data = [
  {
    id: "csadds",
    nume: "Team 1",
    url: "url",
    votes: 0,
  },
  {
    id: "xxsaf",
    nume: "Team 2",
    url: "url",
    votes: 0,
  },
];

function App() {
  const [teams, setTeams] = useState(data);

  const sortedTeams = [...teams];
  sortedTeams.sort((a, b) => {
    if (a.votes > b.votes) return -1;
    if (a.votes < b.votes) return 1;
    return 0;
  });

  console.log("sorted", sortedTeams);
  const onTeamAdd = (team) => {
    // aici o sa primesti datele din copil (faci call la o functie din copil si trimiti ca parametru team)
    console.log(team); // aici cel mai probabil o sa vrei sa adaogi echipa in state-ul ce tine toate echipele
    const id = Math.random().toString(36).slice(2, 10);

    setTeams((prevState) => [
      ...prevState, // punem tot ce era in state
      {
        id: id,
        ...team,
      }, // si mai adaugam o pozie noua - obiectul team
    ]);
  };

  const onVoteClick = (id) => {
    console.log(id);
    setTeams((prevState) =>
      prevState.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            votes: item.votes + 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="page-container">
      <div className="container">
        <AddTeam onAddTeam={onTeamAdd} />

        {teams.map((item, key) => (
          <Vote
            key={key}
            nume={item.name}
            url={item.url}
            onChangeVote={onVoteClick}
            votes={item.votes}
            id={item.id}
          />
        ))}
      </div>
      <div className="right-container">
        {sortedTeams[0] && <RightTopCard nume={sortedTeams[0].nume} />}
        {sortedTeams[1] && <RightBottomCard nume={sortedTeams[1].nume} />}
        {sortedTeams[2] && <RightBottomCard />}
      </div>
    </div>
  );
}

export default App;
