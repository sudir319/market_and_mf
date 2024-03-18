import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import niftyDataSummary from "../../../json_data/nifty_data_summary.json";

class TopPerformersByPeriod extends Component {
  constructor(props) {
    super(props);

    const niftyCandleData = niftyDataSummary["nifty_candle_data"];
    const topPerformers = niftyDataSummary["top_performers"];

    const stocksData = {};
    const dataPerDuration = topPerformers[this.props.duration].slice(
      0,
      this.props.stockCount
    );
    dataPerDuration.forEach(
      (eachSymbol) => (stocksData[eachSymbol] = niftyCandleData[eachSymbol])
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
          <CandleStickCharts market="NSE" data={this.state.data} sort={false} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default TopPerformersByPeriod;
