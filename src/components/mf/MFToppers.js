import React, { Component } from "react";
import MfToppersDataGrid from "../grid/MfToppersDataGrid";

class MFToppers extends Component {
  constructor(props) {
    super(props);

    let noOfFundsList = [20, 50, 100, 200, 500, "All"];
    this.state = {
      history: Object.keys(this.props.data),
      duration: Object.keys(this.props.data)[0],
      data: this.props.data,
      fundCountsToShow: noOfFundsList,
      noOfFundsToShow: noOfFundsList[0],
    };
  }

  specifyDuration = (duration) => {
    this.setState({ ...this.state, duration: duration });
  };

  setNoOfFundsToShow = (event) => {
    this.setState({ ...this.state, noOfFundsToShow: event.target.value });
  };

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
                <td>
                  Show Top&nbsp;
                  <select
                    defaultValue={this.state.noOfFundsToShow}
                    onChange={(event) => this.setNoOfFundsToShow(event)}
                  >
                    {this.state.fundCountsToShow.map((eachCount) => (
                      <option key={eachCount}>{eachCount}</option>
                    ))}
                  </select>
                  &nbsp;funds
                </td>
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
            noOfFundsToShow={this.state.noOfFundsToShow}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default MFToppers;
