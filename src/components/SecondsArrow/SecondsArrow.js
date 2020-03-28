import React from "react";

import "./SecondsArrow.css";

export function SecondsArrow({deg}) {
    return <polygon points="25,26 25,22" className="Clock__seconds">

        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="60s"
            type="rotate"
            from={`${deg} 25 25`}
            to={`${deg + 360} 25 25`}
            repeatCount="indefinite"
        />

    </polygon>
}