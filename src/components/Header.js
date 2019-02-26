import React, { Component } from 'react';
//HA

//Header with greeting & time of the day
//TODO: greeting text color change depending on time of day (inline styles)

//set time and appropriate greeting
const date = new Date();
const hours = date.getHours();
let timeofDay;

if (hours < 12){
    timeofDay = "morning"
} else if (hours >= 12 && hours < 17) {
timeofDay = "afternoon"
} else if (hours >= 17 && hours < 22) {
    timeofDay ="evening"
} else {
    timeofDay ="night"
}

class Header extends Component {
    render() {
        return (
            <div>
                <header className="navbar">This is the header. Good {timeofDay}! <br /> It is currently about {date.getHours() % 12} o'clock</header>
            </div>
        );
    }
}

export default Header;