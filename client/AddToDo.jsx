import React from 'react';


class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      count: 1
    }
    this.sendToParent = this.sendToParent.bind(this); //we bind this here in order to keep this context and use this function in this context or in easier words (on this page)
    this.updateToDo = this.updateToDo.bind(this);
  }
  


  sendToParent() {   
    this.state.count++; //increment a count to keep track of a unique key for each child 
    let newToDo = { //creating an object that we can send to the parent and add to the todos array 
      id: this.state.count,
      value: this.state.todo 
    };
    this.props.iSendThingsToTheParent(newToDo); //call function from parent to update the todos array   
    this.setState({
      todo: '' //reset the todo to blank on page 
    }) 
  }


  updateToDo(e) {    
    this.setState({
      todo: e.target.value //sets the todo state to the target value of the input tag below    
    })
  }



  render() {
    return (
      <div>
        <input placeholder='Add "to do"' value={this.state.todo} onChange={this.updateToDo}></input>
        {/* we can call updateToDo here since we have bound this to this context above */}
        <button onClick={this.sendToParent}>Send It!</button> 
        {/* we can call sendToParent here since we have bound this to this context above */}
      </div>
    )
  }


}

export default AddToDo;