import React from 'react';
import DoEntry from './DoEntry.jsx';


const ToDoList = ({listOfDos}) => {
  //notice our parameter, isn't props... we can also add the parameter of whatever we labeled our prop in the parent
  // and not use propsDOT if we wrap it in curly braces   





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