import React, { Component } from "react";
import MfToppersDataGrid from "../grid/MfToppersDataGrid";

class MFToppers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: ["1D", "7D", "15D", "1M", "2M", "3M", "6M", "9M", "1Y"],
      duration: "1D",
      data: null,
    };
  }

  specifyDuration = (duration) => {
    this.setState({ ...this.state, duration: duration });
  };

  componentDidMount() {
    fetch("http://localhost:8080/mf/getMutualFundToppers")
      .then((response) => response.json())
      .then((response) => this.setState({ data: response }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div align="center" style={{ position: "fixed", zIndex: 99 }}>
          <table style={{ tableCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td>
                  <nobr>For the last</nobr>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                {this.state.history.map((eachDuration) => (
                  <td key={eachDuration}>
                    <button onClick={() => this.specifyDuration(eachDuration)}>
                      {eachDuration === this.state.duration ? (
                        <b>{eachDuration}</b>
                      ) : (
                        eachDuration
                      )}
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        {this.state.data ? (
          <MfToppersDataGrid
            key={this.state.duration}
            duration={this.state.duration}
            data={this.state.data[this.state.duration]}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default MFToppers;
