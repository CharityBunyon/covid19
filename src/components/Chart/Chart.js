import React from 'react';
import { Bar } from 'react-chartjs-2';
import getData from '../../data/covidData';

import './Chart.scss';

class Chart extends React.Component {
    state = {
      data: [],
    }

    async componentDidMount() {
      const data = await getData();
      this.setState({ data });
    }

    render() {
      const { data } = this.state;

      return (
            <div>
              <Bar
              data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                  {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [data.TotalConfirmed, data.TotalRecovered, data.TotalDeaths],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: 'Current state of The United States of America' },
              }}
            />

            </div>
      );
    }
}

export default Chart;
