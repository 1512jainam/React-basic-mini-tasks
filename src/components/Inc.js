import React from "react";
import './Theme.css';


function Inc({num,setNum}){
    function incrementer(){
        setNum(num++);
    }

    return(
        <button onClick={incrementer}>{num}</button>
    ); 
}

export default Inc;