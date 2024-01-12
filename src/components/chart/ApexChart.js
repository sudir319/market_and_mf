import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';


class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candleData: this.props.candleData,
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart : ' + this.props.symbol,
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
    };
  }

  render() {
    const series = [{
      data: this.state.candleData
      .filter(eachCandleData => Date.parse(eachCandleData["date"]) > this.props.maxDate)
      .map(eachCandleData => {
        return {
          x: Date.parse(eachCandleData["date"]),
          y: [eachCandleData["open"], eachCandleData["high"], eachCandleData["low"], eachCandleData["close"]]
        }
      })
    }];
    return (
      <div id="chart">
          <ReactApexChart options={this.state.options} 
              series={series} type="candlestick" height={350} />
      </div>
    );
  }
}

export default ApexChart