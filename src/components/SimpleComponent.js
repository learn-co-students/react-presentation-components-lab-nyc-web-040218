// Code SimpleComponentHere Here
import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class SimpleComponent extends Component{
   constructor(props){
    super(props);

    this.state={
      mood: "happy"

    }
  }
  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;

  }
}

export default SimpleComponent;
