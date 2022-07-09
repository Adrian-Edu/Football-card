import React, {useState} from "react"
import "./LeftContainertTop.css"


function AddTeam () {

  const addTeamData = [{
    nume: {},
    url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1969660083350605&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Frealmadridfootballfansclub%2F&tbnid=cTWIdQeiKg3V7M&vet=12ahUKEwi0-PSq1uv4AhX_nf0HHVRkBsAQMygEegUIARDDAQ..i&docid=VZpj4fJSNvPz2M&w=1000&h=950&q=url%20image%20real%20mad&ved=2ahUKEwi0-PSq1uv4AhX_nf0HHVRkBsAQMygEegUIARDDAQ"
 }]
 
  const [changeTeam, setChangeTeam] = useState("Club Name")

  const [changeUrl, setChangeURl] = useState("Logo Url")

   const handleTeamChange = (e) => {
    setChangeTeam(e.target.value)
   }

   const handleUrlChange = (e) => {
    setChangeURl(e.target.value)
   }

   const handleClickTeam = () => {
    setChangeTeam("")
   }

   const handleClickUrl = () => {
    setChangeURl("")
   }

   const handleSubmit = (e) => {

    console.log(changeTeam)
    console.log(changeUrl)

    setChangeTeam(" ")
    setChangeURl(" ")

    e.preventDefault()
   }


 
    return (
        <div className="top-container">
          <h1>Football Teams</h1>
          <form onSubmit={handleSubmit} className="form">
            <input onClick={handleClickTeam } onChange={handleTeamChange } value={changeTeam}></input>
            <input onClick={handleClickUrl} onChange={handleUrlChange} value={changeUrl}></input>
            <button>Add a Team</button>
          </form>
        </div>
    )
}

export default AddTeam