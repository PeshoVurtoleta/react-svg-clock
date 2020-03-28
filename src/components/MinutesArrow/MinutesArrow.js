import React from "react";

import "./MinutesArrow.css";

export function MinutesArrow({deg}) {
    return <polygon points="20,22 20,6" className="Clock__minutes">

        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="3600s"
            type="rotate"
            from={`${deg} 20 20`}
            to={`${deg + 360} 20 20`}
            repeatCount="indefinite"
        />

    </polygon>
}