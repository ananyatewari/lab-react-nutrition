import React, { Component } from 'react'

export default class SearchData extends Component {    
    constructor(props) {
        super(props) 

    }
  render() {
    return (
        <>
        <h1>PRO-NUTRITION APP</h1>
        <h3>know your calorie intake on your fingertips &#128071;</h3>
        <input type="text" onChange={(e) => {this.props.input(e)}} />
        </>
    )
  }
}
