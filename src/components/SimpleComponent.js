import React from 'react';

class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: "happy"
    }
  }

  handleClick = (e) => {
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    } else {
      this.setState({
        mood: 'happy'
      })
    }
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.mood}</h1>
      </div>
    )
  }
}

export default SimpleComponent;
