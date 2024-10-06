import React, { useEffect} from "react";
import './Theme.css';

function Theme({bgcolor,setBgcolor}){
    useEffect(()=>{
        document.body.style.backgroundColor=bgcolor; 
        },[bgcolor])
      
    return (
         <div style={{ backgroundColor: bgcolor }}>
             <button className="Theme" onClick={() => setBgcolor(bgcolor==="white"?"gray":"white")}>Change Background Color</button>
        </div>
    );
}

export default Theme;