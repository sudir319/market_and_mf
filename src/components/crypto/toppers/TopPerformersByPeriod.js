import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import cryptoDataSummary from "../../../json_data/crypto_data_summary.json";

class TopPerformersByPeriod extends Component {
  constructor(props) {
    super(props);

    const cryptoCandleData = cryptoDataSummary["crypto_candle_data"];
    const topPerformers = cryptoDataSummary["top_performers"];

    const stocksData = {};
    const dataPerDuration = topPerformers[this.props.duration].slice(
      0,
      this.props.stockCount
    );
    dataPerDuration.forEach(
      (eachSymbol) => (stocksData[eachSymbol] = cryptoCandleData[eachSymbol])
    );

    this.state = {
      duration: this.props.duration,
      data: stocksData,
      fullNames: cryptoDataSummary["full_names"],
    };
  }

  render() {
    return (
      <div>
        {this.state.data != null ? (
          <CandleStickCharts
            fullNames={this.state.fullNames}
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
