import React, { useState,useEffect  } from 'react';
function Example(props){
    const [isOnline,setIsOnline] = useState(null)
    const [count,setCount] =useState(0)
    useEffect(()=>{
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }
    })

}
export default Example