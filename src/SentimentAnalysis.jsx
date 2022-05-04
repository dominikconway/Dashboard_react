import React from "react";

function SentimentAnalysis(props) {
    return (
        <div id="sentimentAnalysis">
            <span>Sentiment Analysis</span>
            <h3>{props.analysis} </h3>
            
        </div>
    )
}

export default SentimentAnalysis