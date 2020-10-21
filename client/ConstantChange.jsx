import React from 'react';


const ConstantChange = (props) => {


  return (
    <div>
    <div>{props.dave}</div>  
    <input onChange={(e) => {props.handleChange(e.target.value)}} placeholder="constant"></input>    
    </div>
  )


 
}

export default ConstantChange;