const ScoreBoard = ({ score }) => {
    const headingStyle = {
        "border": "1px solid black", 
        "padding": "10px",
        "backgroundColor": "black",
        "color": "white",
        "borderRadius": "5px",
        "fontSize": "1.3rem"
    };

    return (
        <div className="score-board">
            <h2 style={headingStyle}>Score : {score}</h2>
        </div>
    );
};

export default ScoreBoard;
