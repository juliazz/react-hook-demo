import React,{useState} from 'react';
import Child from './refChild'

// useRef  

function Ref(){

  let [data,setData] = useState({
    name:"浩克",
    age:28
  });

  let [show,setShow] = useState(true)
  return <div>
            {show?<Child data={data} />:""}

            <button onClick={()=>{
              setData({
                name:"疯狂浩克",
                age:data.age
              });
            }}>变身
            </button>

            <button onClick={()=>{
              setShow(false);
              // setShow({
              //   show:false
              // });
            }}>卸载
            </button>

          </div>
}


export default Ref;

