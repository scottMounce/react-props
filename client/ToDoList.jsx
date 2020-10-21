import React from 'react';
import DoEntry from './DoEntry.jsx';


const ToDoList = ({listOfDos}) => {
    
  return (
    <div>
      {listOfDos.map((dos) => {
        // map over our list of dos, and do is a reserved word, so we will just use dos here, but know it is just one do
        return <DoEntry 
        key={dos.id}
        //when we map we need to have a key thus the count from when we created our object 
        dos={dos}
        //dos equal a do!
        /> 
      })}
    </div>
  )
  
}

export default ToDoList;