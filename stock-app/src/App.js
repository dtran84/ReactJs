import React from 'react';
import './App.css';
import _ from 'lodash';

class StockPrice extends React.Component {

  
}

function component() {
  var element = "";

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element = _.join(['Hello', 'webpack'], ' ');

  return element;
}

class App extends React.Component {

  render() {
    return (

      <div className="App" class="hello">
        {component()}
      </div>
    );
  }
}

export default App;
