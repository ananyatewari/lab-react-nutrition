import React, { Component } from 'react'
import "./App.css"
import Data from "../resources/FoodData"
import SearchData from "./components/SearchData"
import ShowData from './components/ShowData'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      key : "",
      searchInput : ""
    }
  }

  handleInput = (e) => {
    this.setState({
      searchInput : e.target.value
    })
  }

  render() {
    return (
    <>
    <SearchData input = {this.handleInput}/>
    {/* <input type="text" value={this.state.searchInput} onChange={(e) => {this.handleInput(e)}} /> */}
    {/* <p>{this.state.searchInput}</p> */}
    {
      this.props.data.filter((e) => {
        if (this.state.searchInput == "") {
          return e
        }
        else if (e.name.toLowerCase().includes(this.state.searchInput.toLowerCase())){
          return e
        }
      }).map((el) => {
        return (
          <div key={el.id}>
            <ShowData data = {el}></ShowData>
          </div>
        )
      })
    }
     </>
    )
  }
}
