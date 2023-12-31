import React from "react";

const CompToDo=(props)=>{
    
    return(
     <> 
    <div className="itemsdiv">
    
    <span class="material-symbols-outlined del" onClick={()=>{
        props.onselect(props.id);
    }}>
delete
</span>
    <p>{props.text}</p>
  </div>
    
     </>);
}
export default CompToDo;

