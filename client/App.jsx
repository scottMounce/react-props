import React from 'react';
import ConstantChange from './ConstantChange.jsx';
import AddToDo from './AddToDo.jsx';
import ToDoList from './ToDoList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constant: '',  //constant state change 
      todos: [] //todos array contains the object we create 
    }
  }
    
  
  handleChange(value) { 
    this.setState({
      constant: value  //updates the constant state as it changes 
    })    
  }

  loadToDo(value) {   
    let newData = this.state.todos.slice(); //copy the original state 
    newData.push(value);  //push the new value into the array 
    this.setState({
      todos: newData  //set state to the new array with the added value 
    })                
  }
  
  
  render() {
    return (
      <div>
        React Props To Do            
        <ConstantChange dave={this.state.constant} handleChange={this.handleChange.bind(this)}/> 
         {/*You can call the react props anything that you want to call them*/}
        <AddToDo iSendThingsToTheParent={this.loadToDo.bind(this)}/>
        {/* we are sending our child AddToDo a function, so we need to bind this context here */}
        <ToDoList listOfDos={this.state.todos}/>
        {/* we send our array of todos to our child ToDoList again we can call this anything we want to */}
      </div>
    )
  }
}

export default App;