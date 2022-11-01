import React, {useState} from 'react';

const FunctionCounter = () => {
    const [count, handleUpdate]= useState({number:0});

    
    return (
        <div>
            <h1> Function Counter:{count.number}</h1>
            
            <button onClick={()=>handleUpdate({number:count.number+1})}>Increase Count</button>
            <button onClick={()=>handleUpdate({number:count.number-1})}>Decrease Count</button> 

        </div>
    );
}

export default FunctionCounter;



