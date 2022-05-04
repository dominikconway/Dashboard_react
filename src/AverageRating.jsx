import React from "react";

function AverageRating(props) {
    return (
        <div id="averageRating">
            <span>Average Rating</span>
            <h3>{props.avgRating}</h3>
        </div>
    )
}

export default AverageRating