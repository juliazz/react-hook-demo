import React from "react";

function Opt(props) {
    
        let {sel,data,del} = props
        return(
            <div className="optcontainer">
                <div>已选<span>{sel}</span>个</div>
                <div>未选<span>{data.length-sel}</span>个</div>
                <div>删除所选<a href="#javascript" onClick={del}>clear</a></div>                
            </div>
        )
   
}
export default Opt
