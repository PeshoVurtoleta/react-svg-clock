import React, {useEffect, useState} from "react";

export function Clock({render}) {
    const [secondsDeg, setSecondsDeg] = useState(0);
    const [minutesDeg, setMinutesDeg] = useState(0);
    const [hoursDeg, setHoursDeg] = useState(0);

    useEffect(() => {
        const {seconds, minutes, hours} = setTime();

        setSecondsDeg(seconds * 6);
        setMinutesDeg(minutes * 6);
        setHoursDeg((hours * 30) + minutes / 2);

    }, []);

    return <svg viewBox="0 0 40 40">
        {render(secondsDeg, minutesDeg, hoursDeg)}
    </svg>
}