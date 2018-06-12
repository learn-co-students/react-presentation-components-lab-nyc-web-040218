// Code SimpleComponentHere Here

import React, {Component} from 'react'

export default class SimpleComponent extends Component{

  constructor(props){
      super(props)

      this.state = {
        mood: "happy"
      }
  }

  handleClick = (e) =>{
    // let mood
    // e.target.innerText === "happy" ? mood = "sad" : mood = "happy"
    // this.setState({
    //   mood: mood
    // })

    this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )

  }
}
