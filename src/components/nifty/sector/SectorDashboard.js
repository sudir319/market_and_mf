import React, { Component } from "react";

class SectorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sector: props.sector,
    };
  }

  render() {
    return <div>{this.state.sector} Stocks</div>;
  }
}

export default SectorDashboard;
