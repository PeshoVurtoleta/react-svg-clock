import React from 'react';

import './App.css';

import {ClockMarks, SecondsArrow, MinutesArrow, HoursArrow, Clock, Circle} from "./components";

function App() {
    return <div className="App">
        <Clock render={(secondsDeg, minutesDeg, hoursDeg) => {
            return <>
                <Circle x="20" y="20" r="19"/>

                <ClockMarks/>
                <Circle x="25" y="25" r="4" className="Seconds__circle"/>
                <SecondsArrow deg={secondsDeg}/>
                <Circle x="25" y="25" r="0.3" className="Seconds__circle"/>
                <HoursArrow deg={hoursDeg}/>
                <MinutesArrow deg={minutesDeg}/>
                <Circle x="20" y="20" r="0.6" className="Clock__pin"/>
            </>
        }}/>
    </div>;
}

// points="14,25 18,25"

export default App;
