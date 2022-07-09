import React, {useState} from "react"
import "./LeftContainertTop.css"


function AddTeam () {

  const [changeTeam, setChangeTeam] = useState("Club Name")
  const [changeUrl, setChangeURl] = useState("Logo Url")
  const [changeTheTeam, setChangeTheTeam] = useState ("")
  const [changeTheUrl, setChangeTheUrl] = useState ("")

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

    setChangeTheTeam(changeTeam)
    setChangeTheUrl(changeUrl)


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