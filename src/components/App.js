
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "../../../assignmentDemo/src/WeatherDisplay";

const App = () => {
  const[info,setinfo]=useState(def)
  useEffect(()=>{
    setTimeout(()=>{
      setinfo({temperature:25,conditions:"sunny"})
    },1000)
  })
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay info={info}/>
    </div>
  )
}

export default App
