import "./RightComponentTop.css"

function RightTopCard (props) {
    return (
        
        <div className="right-container-first">
        <img
          src={props.url}
          alt=""
        />
        <div className="right-container-first-h-p">

          <h4>{props.nume}</h4>
          
          <div className="right-container-votes-number">
          <p>{props.vote}</p>
          <p>Votes</p>
          </div>
          
        </div>
        </div>
    )
}

export default RightTopCard