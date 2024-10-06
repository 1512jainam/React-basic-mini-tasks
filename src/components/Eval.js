import React,{useEffect} from "react";

function Eval({num,num1}){
    const ev=num+num1;
    useEffect(()=>{
        document.title=`hello ${ev}`;
    },[ev]);

    return(
        <button >{num+num1}</button>
    ); 
}

export default Eval;