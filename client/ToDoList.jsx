import React from 'react';
import DoEntry from './DoEntry.jsx';


const ToDoList = ({listOfDos}) => {
    
  return (
    <div>
      {listOfDos.map((dos) => {
        return <DoEntry 
        key={dos.id}
        dos={dos}
        /> 
      })}
    </div>
  )
  
}

export default ToDoList;