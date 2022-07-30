import "./RightContainerBottom.css"

function RightBottomCard (props) {
    return  (
        <div className="right-container-second">
        <img
           src={props.url}
            alt=""
        />
        
        <div className="right-container-first-h-p-second">
          <h4>{props.nume}</h4>

          <div className="right-container-first-2-p">
          <p>{props.vote}</p>
          <p>Votes</p>

          </div>
        
        </div>
      </div>

    )
}

export default RightBottomCard