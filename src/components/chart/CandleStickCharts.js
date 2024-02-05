import React, { Component } from "react";
import ApexChart from "./ApexChart";

class CandleStickCharts extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    date.setDate(date.getDate() - 7);

    this.state = {
      data: this.props.data,
      sort: this.props.sort,
      history: ["Week", "Month", "2 Months", "3 Months", "6 Months"],
      currentDuration: "Week",
      pricesRange: [
        "All",
        "0-50",
        "50-100",
        "100-200",
        "200-500",
        "500-1000",
        "1000-10000",
        "10000-100000",
      ],
      currentPriceRange: "All",
      maxDate: date,
      showBullish: false,
      showBearish: false,
    };
  }

  toggleShowBullish = (e) => {
    this.setState((prevState) => ({
      showBullish: !this.state.showBullish,
    }));
    return false;
  };

  toggleShowBearish = (e) => {
    this.setState((prevState) => ({
      showBearish: !this.state.showBearish,
    }));
    return false;
  };

  filterCandleData = (candleData) => {
    let newCandleData = {};
    if (this.state.showBullish || this.state.showBearish) {
      Object.keys(candleData).forEach((symbol) => {
        if (candleData[symbol]) {
          let lastCandle = candleData[symbol][candleData[symbol].length - 1];
          if (
            (this.state.showBullish && lastCandle.close > lastCandle.open) ||
            (this.state.showBearish && lastCandle.close < lastCandle.open)
          ) {
            newCandleData[symbol] = candleData[symbol];
          }
        }
      });
    } else {
      newCandleData = candleData;
    }

    candleData = newCandleData;
    newCandleData = {};

    if (this.state.currentPriceRange !== "All") {
      const prices = this.state.currentPriceRange.split("-");
      const lowerPrice = parseInt(prices[0]);
      const upperPrice = parseInt(prices[1]);
      Object.keys(candleData).forEach((symbol) => {
        if (candleData[symbol]) {
          let lastCandle = candleData[symbol][candleData[symbol].length - 1];
          const lastClose = parseInt(lastCandle["close"]);
          if (lastClose > lowerPrice && lastClose <= upperPrice) {
            newCandleData[symbol] = candleData[symbol];
          }
        }
      });
    } else {
      newCandleData = candleData;
    }

    return newCandleData;
  };

  specifyDuration = (duration) => {
    let date = new Date();
    switch (duration) {
      case "Week":
        date.setDate(date.getDate() - 7);
        break;
      case "Month":
        date.setMonth(date.getMonth() - 1);
        break;
      case "2 Months":
        date.setMonth(date.getMonth() - 2);
        break;
      case "3 Months":
        date.setMonth(date.getMonth() - 3);
        break;
      case "6 Months":
        date.setMonth(date.getMonth() - 6);
        break;
      default:
        break;
    }

    this.setState({ ...this.state, maxDate: date, currentDuration: duration });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }

  schollToTop = () => {
    window.scrollTo(0, 0);
  };

  setSelectedPriceRange = (e) => {
    this.setState({ currentPriceRange: e.target.value });
  };

  render() {
    let candleData = this.filterCandleData(this.state.data);
    let symbols = Object.keys(candleData);
    if (this.state.sort) {
      symbols = symbols.sort();
    }

    console.log(this.state);

    return (
      <div>
        <div align="center" style={{ position: "fixed", zIndex: 99 }}>
          <table style={{ tableCollapse: "collapse" }}>
            <tbody>
              <tr>
                {this.state.history.map((eachDuration) => (
                  <td key={eachDuration}>
                    <button onClick={() => this.specifyDuration(eachDuration)}>
                      {eachDuration === this.state.currentDuration ? (
                        <b>{eachDuration}</b>
                      ) : (
                        eachDuration
                      )}
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                ))}
                <td key="top">
                  <button onClick={(event) => this.schollToTop()}>
                    Scroll to Top
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td key="bullish">
                  <input
                    type="checkbox"
                    value={this.state.showBullish}
                    onClick={(event) => this.toggleShowBullish()}
                  />
                  Show Bullish
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td key="bearish">
                  <input
                    type="checkbox"
                    value={this.state.showBearish}
                    onClick={(event) => this.toggleShowBearish()}
                  />
                  Show Bearish
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td key="prices">
                  Select Range:
                  <select
                    defaultValue={this.state.currentPriceRange}
                    onChange={(event) => this.setSelectedPriceRange(event)}
                  >
                    {this.state.pricesRange.map((eachPriceRange) => (
                      <option key={eachPriceRange}>{eachPriceRange}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <hr />
        <div>
          {symbols != null && symbols.length > 0 ? (
            symbols.map(
              (symbol, id) =>
                candleData[symbol] && (
                  <ApexChart
                    market={this.props.market}
                    key={symbol}
                    symbol={symbol}
                    maxDate={this.state.maxDate}
                    candleData={candleData[symbol]}
                  />
                )
            )
          ) : (
            <div align="center">No Data Found...!!!</div>
          )}
        </div>
      </div>
    );
  }
}

export default CandleStickCharts;
