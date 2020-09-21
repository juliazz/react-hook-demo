import React,{useState,useEffect} from "react";
import Opt from './opt'
import List from './list'
function TodoList (){
  // 功能4： 本地存储 -- 取    
    let [data,setData] = useState(JSON.parse(localStorage.getItem("todo")) || []);   
    let [seldata,setSelect] = useState(data.filter(item => item.done!==false).length || 0)
    // 功能1： 实现用户添加(类似于购物车添加)以及非空检测
    let fn = (e)=>{
        if( e.keyCode === 13) {
            if(e.target.value === ""){
                alert("用户名不能为空")
            }else{
                setData([...data,{
                    id: new Date().getTime(), 
                    done: false, //默认为false，控制list部分的小选框是否为选中状态----关联changeDone方法
                    txt: e.target.value //input框里的value值
                }])
                e.target.value = '';
            }
            
        }
    }
    // 功能2： 单行删除(点击X实现)
    let del = (id)=>{
        data = data.filter(i=>i.id!==id)
        
        setData(data)
        setSelect(data.filter(i => i.done!==false).length)
    }
  // 关联功能3： 点击复选框，文字添加中划线
      // 改变获取done的值  在子级里使用，影响done的值
    let changeDone = (id, done) => {
        setData(
            data.map(el=>{
                if (el.id === id) {
                    el.done = done
                }
                setSelect(data.filter(item => item.done!==false).length)
                return el
            })
        )
        // this.setSelect(data) 
    }
    // 对于编辑功能里双击后输入为空时，获取原本对应的值
    let changeTxt = (id,txt) =>{
        setData(
            data.map(el=>{
                if(el.id === id){
                    el.txt = txt
                }
                return el
            })
        )
        // this.setState({data})
    }
      // 功能4： 本地存储 -- 存  
    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(data))
    },[data])


    // 5.2 选中删除
    let delSelect = ()=>{
        data = data.filter(item=>item.done!==true)
        setData(data)
        setSelect(data.filter(item => item.done!==false).length)
    }
    return(
        <div id="todoapp">
            {/* 标题 */}
            <h1 className="title">todos</h1>

            {/* input框 */}
            <input 
                type="text" 
                className="create-todo" 
                placeholder="What needs to be Done?" 
                onKeyDown={e=>fn(e)} 
            />
                
            {/* 列表 */}
            {
                data.map((item,index)=>{
                    return <List 
                            key={index}
                            itemData={item}
                            fDone={changeDone}
                            fTxt={changeTxt}
                            fDel={del}
                            />                        
                })
            }

            <Opt sel={seldata} data={data} del={delSelect} />

        </div>)
}
export default TodoList