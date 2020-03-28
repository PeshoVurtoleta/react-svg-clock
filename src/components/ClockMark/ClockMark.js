import React from "react";

import "./ClockMarк.css";

export default function ClockMark({deg}){
    return <line x1="20" y1="3" x2="20" y2="5" transform={`rotate(${deg} 20 20)`} className="Clock__mark"/>
};