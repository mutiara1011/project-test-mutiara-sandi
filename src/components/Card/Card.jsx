import "./Card.style.css";

const Card = (props) => {
    return(
        <div className="card-container">
            <div className="card-top">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="card-bottom">
                <h5>{props.date}</h5>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Card;