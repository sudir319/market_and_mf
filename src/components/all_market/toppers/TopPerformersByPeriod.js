import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import jsonDataSummary from "../../../json_data/market_data_summary.json";

class TopPerformersByPeriod extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    const marketDataSummary = jsonDataSummary[this.props.market];
    const candleData = marketDataSummary["candle_data"];
    const topPerformers = marketDataSummary["top_performers"];

    const stocksData = {};
    const dataPerDuration = topPerformers[this.props.duration].slice(
      0,
      this.props.stockCount
    );
    dataPerDuration.forEach(
      (eachSymbol) => (stocksData[eachSymbol] = candleData[eachSymbol])
    );

    this.state = {
      duration: this.props.duration,
      data: stocksData,
    };
  }

  render() {
    return (
      <div>
        {this.state.data != null ? (
          <CandleStickCharts
            market={this.props.market}
            data={this.state.data}
            sort={false}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default TopPerformersByPeriod;
