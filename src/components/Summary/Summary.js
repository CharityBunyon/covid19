import React from 'react';
import CountUp from 'react-countup';
import getData from '../../data/covidData';

import './Summary.scss';

class Summary extends React.Component {
    state = {
      data: {},
      total: '',
      deaths: '',
      recovered: '',
    }

    async componentDidMount() {
      const data = await getData();
      this.setState({ data });
      console.log(data);
      this.getTotalConfirmed();
      this.getTotalDeaths();
      this.getTotalRecovered();
    }

    getTotalConfirmed = () => {
      const x = this.state.data.TotalConfirmed;
      this.setState({ total: x });
    };

    getTotalDeaths = () => {
      const x = this.state.data.TotalDeaths;
      this.setState({ deaths: x });
    };

    getTotalRecovered = () => {
      const x = this.state.data.TotalRecovered;
      this.setState({ recovered: x });
    };

    render() {
      const { total, deaths, recovered } = this.state;
      return (
            <div className='container'>
                <div className='row justify-content-around'>
                    <div className='col'>
                    <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Total Confirmed Cases:</h5>

                        <CountUp start={0} end={Number(total)} duration={2.75} separator=','/>
                        <p className="card-text">Number of active cases from COVID-19.</p>
                    </div>
                    </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Total Deaths:</h5>
                        <CountUp start={0} end={Number(deaths)} duration={2.75} separator=','/>
                        <p className="card-text">Number of deaths caused by COVID-19.</p>

                    </div>
                    </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Recovered Cases:</h5>
                        <CountUp start={0} end={Number(recovered)} duration={2.75} separator=','/>
                        <p className="card-text">Number of recoveries from COVID-19.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
      );
    }
}

export default Summary;
