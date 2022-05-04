import React from "react";

function WebsiteVisitations(props) {
    return (
        <div id="websiteVisitations">
            <span>Website Visitation</span>
            <h3>{props.webVisits}</h3>
        </div>
    )
}

export default WebsiteVisitations