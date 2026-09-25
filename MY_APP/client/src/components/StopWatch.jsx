import "./StopWatch.css"
import {useState,useEffect} from "react";

const StopWatch = () => {
    const[timer,setTimer]=useState(0);
    const[running,setRunning]=useState(false);
    useEffect(()=>{
      let time=0;
      if(running){
        time=setInterval(()=>{
          setTimer((pt)=>pt+10)
        },10);
      }
      return ()=> clearInterval(time);
    },[running]);
    function toggleButton(){
      if(running){
      setRunning(false)
      }
      else
      setRunning(true)
    }
    function resetTimer(){
      setTimer(0);
      setRunning(false);
    }
    const ms=(timer%1000)/10;
    const s=Math.round((timer/1000)%60);
    const m=Math.round(s/60);
  return (
    <div>
      <h1>Stop Watch App</h1>
      <div className="box1">
        {m}:{s}:{ms}
      <button className="btn" onClick={toggleButton}>{running?"Stop":"Start"}</button>
      <button className="rbtn" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch
