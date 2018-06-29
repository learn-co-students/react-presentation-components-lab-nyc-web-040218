import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function SimplerComponent(props) {
  return (
    <div onClick={props.handleClick}>
      I am just happy
      </div>
  );
}

SimplerComponent.propTypes = propTypes;
SimplerComponent.defaultProps = defaultProps;
