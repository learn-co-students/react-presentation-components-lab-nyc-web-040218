// Code SimpleComponentHere Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'happy'
    };
  }

  handleClick = (event) => {
    if (this.state.mood === 'happy') {
     return this.setState({mood: 'sad'})
    }
    if (this.state.mood === 'sad')
     return this.setState({mood: 'happy'})
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}

 SimpleComponent.propTypes = propTypes;
 SimpleComponent.defaultProps = defaultProps;
