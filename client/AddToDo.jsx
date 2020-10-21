import React from 'react';


class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      count: 1
    }
    this.sendToParent = this.sendToParent.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
  }
  


  sendToParent() {   
    this.state.count++; 
    let newToDo = {
      id: this.state.count,
      value: this.state.todo
    };
    this.props.iSendThingsToTheParent(newToDo);   
    this.setState({
      todo: ''
    }) 
  }


  updateToDo(e) {    
    this.setState({
      todo: e.target.value      
    })
  }



  render() {
    return (
      <div>
        <input placeholder='Add "to do"' value={this.state.todo} onChange={this.updateToDo}></input>
        <button onClick={this.sendToParent}>Send It!</button>
      </div>
    )
  }


}

export default AddToDo;