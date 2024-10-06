import React from "react";
import './Theme.css';


function Dic({num1,setNum1}){
    function decrementer(){
        setNum1(num1--);
    }

    return(
        <button onClick={decrementer}>{num1}</button>
    ); 
}

export default Dic;