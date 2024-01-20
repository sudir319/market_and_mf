import React, { Component } from "react";
import MfDataGrid from "../grid/MfDataGrid";

class ShowAllMFs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundManagers: this.props.fundManagers,
      selectedMf: null,
    };
  }

  setSelectedMf = (e) => {
    this.setState({ selectedMf: e.target.value });
  };

  render() {
    return (
      <div>
        <div align="center">
          Select Fund Manager :
          <select
            defaultValue={this.state.selectedMf}
            onChange={(event) => this.setSelectedMf(event)}
          >
            <option key="--">--</option>
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
          />
        )}
      </div>
    );
  }
}

export default ShowAllMFs;
