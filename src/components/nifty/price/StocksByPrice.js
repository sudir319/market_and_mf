import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import niftyDataSummary from "../../../json_data/nifty_data_summary.json";

class StocksByPrice extends Component {
  constructor(props) {
    super(props);

    const stocksData = {};
    const niftyCandleData = niftyDataSummary["nifty_candle_data"];
    console.log(props);
    this.props.data.forEach(
      (eachSymbol) => (stocksData[eachSymbol] = niftyCandleData[eachSymbol])
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
