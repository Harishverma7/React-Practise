function Card(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <img alt="sdds" src={props.imgsrc}></img>
            <button>{props.button}</button>
        </>
    );
}

export default Card;
