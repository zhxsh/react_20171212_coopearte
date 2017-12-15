import React, {Component} from 'react';


class Clock1 extends Component{
  constructor(props) {
    super(props);
    this.state = {date:new Date()}; 
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>带有自己的更新变量state</h1>
        <h2>时间:{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}


export default Clock1;