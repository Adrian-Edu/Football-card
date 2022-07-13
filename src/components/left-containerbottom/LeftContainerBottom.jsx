import "./LeftContainerBottom.css"
import React, {useState} from "react"

function Vote (props) {

  const [changeVote, setChangeVote]= useState(0)

  const handleClick = () => {
    setChangeVote(changeVote + 1)
    
    props.onChangeVote(changeVote)
 
  }

    return (
          
        <div className="bottom-container">
        <div className="logo">
          <img
            src={props.url}
            alt=""
          />
        </div>
        <div className="mid-writing">
          <h4>{props.nume}</h4>
            <div> 
            <p>{changeVote}</p>
            <h4>Votes</h4>
           </div>
        </div>

        <div>
          <button onClick={handleClick} className="vote">Vote</button>
        </div>
      </div>
    )
}

export default Vote