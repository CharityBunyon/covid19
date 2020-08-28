import React from 'react';
import Summary from '../components/Summary/Summary';
import Chart from '../components/Chart/Chart';

import './App.scss';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h3>United States of America COVID-19 Data</h3>
     <Summary/>
     <Chart />

    </div>
    );
  }
}

export default App;
