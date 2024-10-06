import React,{useState,useRef, useEffect} from 'react';


function Upper({bgcolor,setBgcolor,Length,setlength,checklength}){
    const intervalRef =useRef(null);
    const [value,setvalue]=useState("");
    const [isHacking, setIsHacking] = useState(false);

    useEffect(()=>{
        if(Length>100 && checklength){
            checklength(Length);
        }
    },[Length,checklength]);

    function handleInput(event){
        setvalue(event.target.value.toUpperCase());
    };
    let v=Math.ceil(Math.random(200,1000)*100);
    let s=v.toString();

    function hacking(){
        if(intervalRef.current!==null) return;
        setIsHacking(true);
        intervalRef.current=setInterval(()=>{
            let v2=Math.ceil(Math.random(1,1000)*100);
            let s2=v2.toString();
           setvalue(s=s.concat(s2));
           setlength(s.length);
        },100);  
        document.body.style.backgroundColor="black"; 
        document.getElementsByClassName("t").backgroundColor="green"; 
        setBgcolor("Black");
    };

    function stophacking(){
        if(intervalRef.current!==null){
            clearInterval(intervalRef.current);
            intervalRef.current=null;
            setIsHacking(false);
        }
    }

    const changestyle={
        color: isHacking ? "black" :( bgcolor ==="gray" ? "White" : "rgb(9, 123, 123)") ,
        backgroundColor: isHacking ? "green" : (bgcolor === "gray" ? "black" : "white")
    }
    
    return(
        <>
        <textarea className='t' value={value} onInput={handleInput} placeholder='ENTER TEXT HERE!!!' style={changestyle}></textarea>
        <button onClick={hacking} >start hacking</button>
        <button onClick={stophacking}>stop hacking</button>
        </>
    );
}

export default Upper;