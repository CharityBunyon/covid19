import React from 'react';
import Summary from '../components/Summary/Summary';

import './App.scss';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h3>COVID-19</h3>
     <Summary/>

    </div>
    );
  }
}

export default App;
