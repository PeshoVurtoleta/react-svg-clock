import React from "react";

import ClockMark from "../ClockMark/ClockMark";

import "./ClockMarks.css";

function generateMarks(marks = 12) {
    const degrees = [];

    for (let i = 0; i < marks; i++) {
        degrees.push(i * 30)
    }

    return degrees;
}

export function ClockMarks() {
    const degrees = generateMarks();

    return <g className="Clock__marks">
        {degrees.map((deg, index) => <ClockMark key={deg + '_' + index} deg={deg}/>)}
    </g>
}