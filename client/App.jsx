import React from 'react';
import ConstantChange from './ConstantChange.jsx';
import AddToDo from './AddToDo.jsx';
import ToDoList from './ToDoList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constant: '',
      todos: []
    }
  }
    
  
  handleChange(value) { 
    this.setState({
      constant: value
    })    
  }

  loadToDo(value) {   
    let newData = this.state.todos.slice();
    newData.push(value);
    this.setState({
      todos: newData
    })                
  }
  
  
  render() {
    return (
      <div>
        Hello World!            
        <ConstantChange dave={this.state.constant} handleChange={this.handleChange.bind(this)}/>
        <AddToDo iSendThingsToTheParent={this.loadToDo.bind(this)}/>
        <ToDoList listOfDos={this.state.todos}/>
      </div>
    )
  }
}

export default App;