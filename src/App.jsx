import React from "react";
import "./App.css";
import AddTeam from "./components/left-containertop/LeftContainerTop";
import Vote from "./components/left-containerbottom/LeftContainerBottom";
import RightTopCard from "./components/right-containertop/RightComponent";
import RightBottomCard from "./components/right-containerbottom/RightContainerBottom";

function App() {

  const addTeamData = [{
     nume: "Real",
     url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1969660083350605&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Frealmadridfootballfansclub%2F&tbnid=cTWIdQeiKg3V7M&vet=12ahUKEwi0-PSq1uv4AhX_nf0HHVRkBsAQMygEegUIARDDAQ..i&docid=VZpj4fJSNvPz2M&w=1000&h=950&q=url%20image%20real%20mad&ved=2ahUKEwi0-PSq1uv4AhX_nf0HHVRkBsAQMygEegUIARDDAQ"
  }]


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
