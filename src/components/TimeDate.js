import React, { Component } from 'react';

class TimeDate extends Component {
  getTime(){
    let time = new Date();
    return time.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true });
  }
  componentDidMount(){
    console.log("mounted");
    console.log(this.state);
    setInterval(()=> {
      this.setState({
        time: this.getTime()
      })
    }, 1000);

  }
  constructor(props) {
    // this.getTime();
    let d = new Date();
    super(props);
    this.state = {
      time: this.getTime(),
      date: `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    }
  }

  render() {
    this.getTime();
    const style = {
      position: "absolute",
      right: "25px",
      textAlign: "right",
      fontSize: '.8rem'
    }
    return (
      <div style={style}>
        { this.state.time }
        <br />
        { this.state.date }
      </div>

    )
  }
}

export default TimeDate;
