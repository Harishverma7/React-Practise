function Time() {
    let time = new Date().getHours();
    let greet = "";
    const stle = {};

    if (time > 1 && time < 12) {
        greet = "Good Morning";
        stle.color = 'Red';
        stle.backgroundColor = 'Purple';
    } else if (time >= 12 && time < 20) {
        greet = "Good Afternoon";
        stle.color = 'Green';
        stle.backgroundColor = 'Red';
    } else if (time >= 20 && time <= 24) {
        greet = "Good Night";
        stle.color = "Yellow";
        stle.backgroundColor = 'Purple';
    }


    return (
        <>
            <div>
                <h1>
                    Hello, <span style={stle}>{greet}</span>
                </h1>
            </div>
        </>
    );

}

export default Time;