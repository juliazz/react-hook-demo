import React, {useState,useRef,useEffect} from "react";

function List(props){
    
        // this.state = {
        //     isEdit: false,
        //     oldVal: props.itemData.txt
        // }
    let [isEdit,setIsEdit] = useState(false);
    let [oldVal,setoldVal] = useState(props.itemData.txt);

    let input = useRef();
    /*
        功能6. 编辑功能
        当我们进入编辑状态时，一定需要输入框获得焦点，否则在点击地方时，没有办法触发到输入框的失焦时间
    */
    useEffect(()=>{
        // 上一次编辑状态为 false，当前编辑状态为true 代表我们进入编辑状态
        if(isEdit===true){
            input.current.focus();    
        }
    })


        let {fDone,fDel,fTxt} = props;
        let {done,txt,id} = props.itemData;
        
        return(
            <div className="todo-list">


                <div className={isEdit?"unshow":""}>
                    <div className="listleft">
                        <input 
                            onChange={({target})=>{fDone(id,target.checked)}} 
                            checked={done} 
                            type="checkbox" />
                            
                        {/* 功能3： 点击复选框，文字添加中划线 */}
                        <span 
                            className={done?"strike":""}
                            // 双击进入编辑状态，isEdit为true
                            onDoubleClick={()=>{
                                setIsEdit(true)
                            }}
                        >{txt}</span>
                    </div>

                    {/* 功能2： 单行删除(点击X实现) */}
                    <div className="listright">
                        <span className="cha" onClick={()=>{fDel(id)}}>X</span>
                    </div>
                </div>

                <div className={isEdit?"":"unshow"}>
                    <input 
                        className="newInput"
                        type="text"
                        value={oldVal}
                        ref= {input}
                        onChange={({target})=>{
                            setoldVal(target.value)
                        }}  
                        onBlur={()=>{
                            if(oldVal.trim()){
                                fTxt(id,oldVal);
                            } else {
                                setoldVal(txt)
                                // this.setState({
                                //     oldVal:txt
                                // });
                            }
                            setIsEdit(false)
                        }}
                    
                    />
                </div>

            </div>)
        
}

export default List
