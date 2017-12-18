import React, {Component} from 'react';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  render(){
    return (
      <div>
        <h1>Clock带有自己的变量state</h1>
        <h2>时间:{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}


export default Clock;