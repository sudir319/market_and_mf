import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import jsonDataSummary from "../../../json_data/market_data_summary.json";

class StocksByPrice extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    const stocksData = {};
    const marketDataSummary = jsonDataSummary[this.props.market];
    const candleData = marketDataSummary["candle_data"];
    console.log(props);
    this.props.data.forEach(
      (eachSymbol) => (stocksData[eachSymbol] = candleData[eachSymbol])
    );

    this.state = {
      priceRange: this.props.priceRange,
      data: stocksData,
    };
  }

  render() {
    return (
      <div>
        {this.state.data != null ? (
          <CandleStickCharts data={this.state.data} sort={true} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default StocksByPrice;
