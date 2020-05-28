import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const reverse = (e) => {
  alert(`You clicked on ${e.target.innerText}`)
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={reverse} />
  </div>,
  document.getElementById('root')
);
