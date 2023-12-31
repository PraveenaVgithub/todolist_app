import React, { useState } from "react";
import CompToDo from './ToDocomponent';
const ToDo = () => {
  const [currdata, newlytypeddata] = useState(""); //to get typed data
  const getdata = (eventtyped) => {
    newlytypeddata(eventtyped.target.value);
  };
  const [arrayinpdata, setinpdata] = useState([]); //to store all inputs in array and updating each new data to array
  const addDataToArray = () => {
    setinpdata((oldData) => {
      return [...oldData, currdata]; //olddata is just the parameter maybe firstarray val next the array is updated with currdata
      
    });
    newlytypeddata(" ");// to keepthe typing place empty. 
  };
    const deleteitem=(id)=>{
       setinpdata((oldData) => { // to update the array
      return oldData.filter((seletedelementasparamtr,i)=>{ //filter method creates a new array filled with elements that pass a test provided by a function.
        return i !== id ; //this means that return all the elements that are not = to id 
      }); 
      
    }); } 
    return (
    <>
      <div className=" bodyflex">
        <div className="d-flex flex-column mb-3 mainfelx">
          <h3 className=" heading ">ToDo List</h3>
          <div class=" d-flex justify-content-evenly">
            <input className="ipt"   onChange={getdata} placeholder="Add Items" value={currdata}/>
            <button className="iptbut" onClick={addDataToArray}>
              +
            </button>
          </div>
          <div className="d-flex flex-column mb-3 listdata">
            {arrayinpdata.map((datavalue, i) => {
                
             return  <CompToDo key={i} text= {datavalue} id={i} onselect={deleteitem}/> ;
               //here id is a callback fn to  return the value of the index clicked
              
            })}
          </div>
        </div>
      </div>
    </>
  );

        };
export default ToDo;
