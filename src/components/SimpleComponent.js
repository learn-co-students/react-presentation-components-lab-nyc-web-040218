// Code SimpleComponentHere Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = event => {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
