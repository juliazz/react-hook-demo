import React, { useState,useEffect  }  from 'react';
function ClockHook(props) {
  const [date,setDate] = useState(new Date())
  useEffect(()=>{
      function tick(){
        setDate(new Date());
      }
     
      const timerID = setInterval(tick,1000);
      return function clearTick(){
        clearInterval(timerID);
      };  
  })
  return (
    <div>
      <h1>Hello, world!HOOK</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}




export default ClockHook