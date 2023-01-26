function Card(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <img alt="sdds" src={props.imgsrc}></img>
            <button className="btn-primary btn">{props.button}</button>
        </>
    );
}

export default Card;
