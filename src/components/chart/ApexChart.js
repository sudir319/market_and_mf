import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import niftyDataSummary from "../../json_data/nifty_data_summary.json";
import { findPatterns } from "../utils/Candlesticks";

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
    const symbolVsStockInfo = niftyDataSummary["symbol_vs_stock_info"];

    const options = {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
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

    const patterns = findPatterns(this.state.candleData.slice(0, 3));

    return (
      <div id="chart">
        &nbsp;&nbsp;&nbsp;<b>CandleStick Chart : </b>
        {symbolVsStockInfo[this.state.symbol]["company"]} :&nbsp;
        <a
          href={
            "https://in.tradingview.com/chart/?symbol=NSE:" + this.state.symbol
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.symbol}
        </a>
        {patterns.length > 0 && " : Candle Patterns : "}
        <b>{patterns.join(" | ")}</b>
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
