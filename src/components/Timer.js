import React, { useEffect, useRef} from "react";
import './Timer.css';

function Timer({bgcolor,setBgcolor,time,setTime,onTimeThreshold}){
    const intervalRef =useRef(null);

    useEffect(()=>{
        if(time >10 && onTimeThreshold){
            onTimeThreshold(time);
        }
    },[time,onTimeThreshold]);


    function timing(){
        if(intervalRef.current!==null) return;
        intervalRef.current=setInterval(()=>{
            setTime((time)=>(time)+1);
        },100);
    }

    function stoptiming(){
        if(intervalRef.current!==null){
            clearInterval(intervalRef.current);
            intervalRef.current=null;
        }
    }

    function reset(){
       stoptiming();
       setTime(0);
       document.body.style.backgroundColor="White";
       setBgcolor("white");
    }
    
    const timestyle = {
        color:bgcolor ==="gray" ? "white" : "rgb(9, 123, 123)" 
    };

    return(
        <>
        <p className="pi" style={timestyle}>{time}</p>
        <button className="st" onClick={timing}>start</button>
        <button className="sto" onClick={stoptiming}>stop</button>
        <button className="r" onClick={reset}>Reset</button>
        </>
    );
}

export default Timer;