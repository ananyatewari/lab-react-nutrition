import React, { Component } from "react";
import Total from "./Total";

export default class ShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      totalcalories: 0,
    };
  }

  handleChange = (count) => {
    this.setState({
        counter : count
    })
  }

  handleCalories = (e) => {
    e.preventDefault()
    this.setState({
        totalcalories : this.props.data.cal*this.state.counter
    })
  }

  handleReset = (e) => {
    this.setState({
        counter : 0,
        totalcalories : 0
    })
  }

  render() {
    return (
      <>
      <div className="list">
        <div>
          <span>{this.props.data.name}</span>
          <img src={this.props.data.img} alt="" height="100px" />
        </div>
        <div>
          <input id="user" type="number" onChange={count => {this.handleChange(count.target.value)}}/>
        </div>
        <button onClick={e => {this.handleCalories(e)}}>+</button>
        <button onClick={e => {
          this.handleReset(e)
          document.getElementById("user").value = ""
        }}>Reset</button>
        {/* <div>quantity = {this.state.counter}</div>
        <div>total cal = {this.state.totalcalories}</div> */}
        <Total quant = {this.state.counter} cal = {this.state.totalcalories}></Total>
      </div>
      </>
    );
  }
}
