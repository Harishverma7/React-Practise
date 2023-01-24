const name = "Harsh";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img = "https://picsum.photos/300/300";

function List() {
    return (
        <>
        <h1 className="name">{name}</h1>
            <p>Date= {date}</p>
            <p>Time= {time}</p>
            <img src={img} alt="dfsf" />
        <ol>
            <li>dhgsdh</li>
            <li>jdskhd</li>
        </ol>
        </>
    );
}

export default List;