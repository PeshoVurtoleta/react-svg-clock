import React from "react";

import "./HoursArrow.css";

//20,21.5 20,10
export function HoursArrow({deg}) {
    return <polygon points="20,21.5 20,10" className="Clock__hours">

        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="43200s"
            type="rotate"
            from={`${deg} 20 20`}
            to={`${deg + 360} 20 20`}
            repeatCount="indefinite"
        />

    </polygon>
}