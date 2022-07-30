import React, { useCallback, useState } from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

const data = [

]

function App(props) {

  const [teams, setTeams] = useState(data)
  const [recieveVote, setRecieveVote] = useState("")

  const onTeamAdd = (team) => {
    // aici o sa primesti datele din copil (faci call la o functie din copil si trimiti ca parametru team)
    console.log(team) // aici cel mai probabil o sa vrei sa adaogi echipa in state-ul ce tine toate echipele
    setTeams(
      prevState => [
        ...prevState, // punem tot ce era in state
         team // si mai adaugam o pozie noua - obiectul team
      ]
    )
  }
  
  const uniqueVote = (id) => {
    console.log(id)
  }

  const reciveVote = (changeVote) => {
    setRecieveVote(changeVote)
  }

  return (
    <div className="page-container">s
      <div className="container">
        <AddTeam
          onAddTeam={onTeamAdd}
      
        />

        {teams.map((item,key)=> ( <Vote key={key} nume={item.name} url={item.url} onChangeVote={reciveVote} unic={uniqueVote} />) )} 
     
      </div>

      <div className="right-container">
      
      <RightTopCard />
      <RightBottomCard />


      </div>
    </div>
  );
}

export default App;
