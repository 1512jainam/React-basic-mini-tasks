import './App.css';
import React,{useState} from 'react';
import Counter from './components/Counter';
import Theme from './components/Theme';
import Inc from './components/Inc';
import Dic from './components/Dic';
import Eval from './components/Eval';
import Timer from './components/Timer';
import Upper from './components/Upper';
import obj from './data/data';

function App() {
  const [num,setNum]=useState(0);
  const [num1,setNum1]=useState(0);
  const [showtext,setshowtext] = useState(false);
  const [bgcolor,setBgcolor]=useState("white");
  const [time,setTime]=useState(0);
  const [thresholdExceeded, setThresholdExceeded] = useState(false);
  const [Length,setlength] = useState(0);
  const [lengthchecker,setlengthchecker] = useState(false)

  const handleTimeThreshold = (time) =>{
    if(!thresholdExceeded){
    alert(`Time exceed thresold ${time}`);
    setBgcolor("orange");
    setThresholdExceeded(true);
    }
  };

  const funchecklength = (Length)=>{
    if(!lengthchecker){
    alert(`length exedd ${Length}`);
    setlengthchecker(true);
    }
  };

  return(
    <>
    <div className="App">
      <Inc  num={num} setNum={setNum}></Inc>
      <Dic num1={num1} setNum1={setNum1}></Dic>=
      <Eval num={num} num1={num1}></Eval>
      <Timer bgcolor={bgcolor} setBgcolor={setBgcolor} time={time} setTime={setTime} onTimeThreshold={handleTimeThreshold}></Timer>
      <Theme bgcolor={bgcolor} setBgcolor={setBgcolor}></Theme>
      <br></br>
      <Upper bgcolor={bgcolor} setBgcolor={setBgcolor} Length={Length} setlength={setlength} checklength={funchecklength}> </Upper>
      <Counter showtext={showtext} setshowtext={setshowtext} obj={obj} ></Counter>
      <a href='http://localhost:3000/'>Refresh</a>
      
    </div>
    </>
  );
}

export default App;
