import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";

class StocksByPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceRange: this.props.priceRange,
      data: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/data/stocksByPrice/" + this.state.priceRange)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(Object.keys(response));
        this.setState({ data: response });
      });
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
