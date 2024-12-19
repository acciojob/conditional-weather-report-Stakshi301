import React from "react";

const WeatherDisplay=(props)=>{
    const {info}=props
    const styles={
        color:info.temperaturee>20?"red":"blue"
    };
    return(
        <div>
            <p>temperature:<span styles={styles}>{info.temperature}</span></p>
            <p>conditions:{info.conditions}</p>
        </div>
    )
}
export default WeatherDisplay