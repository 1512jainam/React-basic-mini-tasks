import React from 'react';

function Counter({showtext,setshowtext,obj}){

    function handleclick(){
        setshowtext(!showtext);
    }

    return (
        <>
        <div className="counter">
            <button onClick={handleclick}>click on me</button>
            {/* {showtext && <p className="new">{obj[1].channel}</p>} */}
            {showtext && (
            <ul>
                {
                    obj.map(item=>(
                        <li>
                            <p>id:{item.id}</p>
                            <p>title:{item.title}</p>
                            <p>views:{item.views}</p>
                            <p>channel:{item.channel}</p>
                            <p>likes:{item.likes}</p>
                        </li>
                        
                    ))}
            </ul>)}
        </div>
        </>
    );
}

export default Counter;