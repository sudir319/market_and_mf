import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: this.props.symbol,
      candleData: this.props.candleData,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      candleData: nextProps.candleData,
      symbol: nextProps.symbol,
    });
  }

  render() {
    const options = {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart : " + this.state.symbol,
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };

    const series = [
      {
        data: this.state.candleData
          .filter(
            (eachCandleData) =>
              Date.parse(eachCandleData["date"]) > this.props.maxDate
          )
          .map((eachCandleData) => {
            return {
              x: Date.parse(eachCandleData["date"]),
              y: [
                eachCandleData["open"],
                eachCandleData["high"],
                eachCandleData["low"],
                eachCandleData["close"],
              ],
            };
          }),
      },
    ];
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
