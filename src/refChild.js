import React,{useState,useEffect,useRef} from 'react';

function Child(props){
    let {data} = props;
    let [age,setAge] = useState(8);

    // 只要不做修改ref，就会存储初始的值(变化前的值)
    // let ageP = useRef(); //1 绑定DOM
    let ageP = useRef(age); //2 不绑定DOM，只随数据变化
    
    let [txt,setTxt] = useState("文字");
    let txtP = useRef(txt); //绑定数据


    // 挂载
    useEffect(()=>{
      console.log(ageP.current);
    });

    // 更新
    useEffect(()=>{
      console.log(ageP.current,age); //1. 当绑定DOM上时输出这种的 <h1>"age:""8"</h1> 8 DOM加数据
                                     //2. 当不绑定，只随数据变化时，输出的是 8 9 这种类型的数据
    },[age]);

    useEffect(()=>{
      console.log(ageP.current); // 绑在DOM上时，输出DOM  <h1>"age:""8"</h1>，
                                 // 否则输出数据，但该情况是只随txt变化，所以ageP一直是初始值 8
      console.log(txtP.current);

      console.log(txtP.current,txt); //因为下一行的重新赋值，所以这行输出txt变化前后的值
      txtP.current = txt;
    },[txt]);


    let message = `我哈哈哈哈`;
    return <div>
              {/* 解构与否都可以找到，结构的话省事些 */}
              <h1>name:{data.name}</h1>
              <h1>age:{age}</h1>

              <button onClick={()=>{
                  setAge(++age)
              }}>涨一岁</button>

              <p>{txt}</p>
              <input type="text" value={txt} 
                onChange={({target})=>{
                  setTxt(target.value)
                }}
              />

              <p dangerouslySetInnerHTML={{
                __html:message
              }}></p>
          </div>

}


export default Child;


