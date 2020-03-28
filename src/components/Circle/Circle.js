import React from "react";

import "./Circle.css";

export function Circle({x, y, r, className}) {
    const cname = className ? className : '';

    return <circle cx={x} cy={y} r={r} className={cname}/>;
}