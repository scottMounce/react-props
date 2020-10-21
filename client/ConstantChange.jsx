import React from 'react';


const ConstantChange = (props) => {
// props is what we have sent to this child in this case we have 2 props dave and handleChange

  return (
    <div>
    <div>{props.dave}</div>  
    {/* Here's dave! our constant state from the parent */}
    <input onChange={(e) => {props.handleChange(e.target.value)}} placeholder="constant"></input>    
    {/* in this format our onChange handler can take a value */}
    </div>
  )


 
}

export default ConstantChange;