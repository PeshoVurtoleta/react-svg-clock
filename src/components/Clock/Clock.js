import React, {Component} from "react";

export class Clock extends Component {
    currentTime = new Date();

    state = {
        secondsDeg: 0,
        minutesDeg: 0,
        hoursDeg: 0
    };

    getTime = () => {
        return {
            seconds: this.currentTime.getSeconds(),
            minutes: this.currentTime.getMinutes(),
            hours: this.currentTime.getHours()
        }
    };

    setDegrees = () => {
        const {seconds, minutes, hours} = this.getTime();

        return {
            secondsDeg: seconds * 6,
            minutesDeg: minutes * 6 + (seconds * 6) / 60,
            hoursDeg: (hours * 30) + minutes / 2
        }
    };

    componentDidMount() {
        this.setState(() => ({
            ...this.setDegrees()
        }))
    }

    render() {
        const {render} = this.props;
        const {secondsDeg, minutesDeg, hoursDeg} = this.state;

        return <svg viewBox="0 0 40 40">
            {render(secondsDeg, minutesDeg, hoursDeg)}
        </svg>
    }
}
