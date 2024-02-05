import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import niftyDataSummary from "../../json_data/nifty_data_summary.json";
import dataSummary from "../../json_data/market_data_summary.json";

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
    let symbolVsStockInfo;
    if (this.props.market) {
      symbolVsStockInfo =
        dataSummary[this.props.market]["symbol_vs_stock_info"];
    } else {
      symbolVsStockInfo = niftyDataSummary["symbol_vs_stock_info"];
    }

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

    return (
      <div id="chart">
        &nbsp;&nbsp;&nbsp;<b>Candle Stick Chart</b> : {this.props.market}{" "}
        :&nbsp;
        {symbolVsStockInfo[this.state.symbol]
          ? symbolVsStockInfo[this.state.symbol]["company"]
          : this.state.symbol}
        &nbsp;:&nbsp;
        <a
          href={
            "https://in.tradingview.com/chart/?symbol=" +
            (this.props.market ? this.props.market : "NSE") +
            ":" +
            this.state.symbol
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.symbol}
        </a>
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
