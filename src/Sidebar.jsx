import React from "react";
import Dashboard from "./Dashboard";
import Widget from "./Widget";
import ReviewsSB from "./ReviewsSB";
import Customers from "./Customers";
import OnlineAnalysis from "./OnlineAnalysis";
import Settings from "./Settings";


function Sidebar(props) {
    return (
        <div id="sidebar">
            <Dashboard />
            <Widget />
            <ReviewsSB />
            <Customers />
            <OnlineAnalysis />
            <Settings />
        </div>
    )
}

export default Sidebar