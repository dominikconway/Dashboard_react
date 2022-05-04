import React from "react";

function Reviews(props) {
    return (
        <div id="reviews">
            <span>Reviews</span>
            <h3>{props.reviews}</h3>
        </div>
    )
}

export default Reviews