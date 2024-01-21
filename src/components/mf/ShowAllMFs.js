import React, { Component } from "react";
import MfDataGrid from "../grid/MfDataGrid";

class ShowAllMFs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundManagers: this.props.fundManagers,
      selectedMf: this.props.fundManagers[0],
      data: this.props.data,
    };
  }

  setSelectedMf = (e) => {
    this.setState({ selectedMf: e.target.value });
  };

  render() {
    return (
      <div>
        <div align="center">
          Select Fund Manager:&nbsp;&nbsp;
          <select
            defaultValue={this.state.selectedMf}
            onChange={(event) => this.setSelectedMf(event)}
          >
            {this.state.fundManagers.map((eachFm) => (
              <option key={eachFm}>{eachFm}</option>
            ))}
          </select>
        </div>
        <br />
        {this.state.selectedMf && (
          <MfDataGrid
            key={this.state.selectedMf}
            mfName={this.state.selectedMf}
            data={this.state.data[this.state.selectedMf]}
          />
        )}
      </div>
    );
  }
}

export default ShowAllMFs;
