import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ShowAllMFs from "./ShowAllMFs";
import MFToppers from "./MFToppers";
import MfDataGrid from "../grid/MfDataGrid";

class MFTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fundManagers: null,
      mfTabs: [
        "SBI",
        "HDFC",
        "ICICI",
        "KOTAK",
        "AXIS",
        "TATA",
        "MAHINDRA",
        "UTI",
        "NIPPON",
        "QUANT",
      ],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/mf/getMutualFundManagers")
      .then((response) => response.json())
      .then((response) => this.setState({ fundManagers: response }));
  }

  render() {
    return (
      <Tabs>
        <TabList>
          {this.state.mfTabs.map((tab) => (
            <Tab key={tab}>{tab}</Tab>
          ))}
          {this.state.fundManagers && (
            <>
              <Tab>Others</Tab>
              <Tab>Toppers</Tab>
            </>
          )}
        </TabList>
        {this.state.mfTabs.map((tab) => (
          <TabPanel key={tab}>
            <MfDataGrid mfName={tab} />
          </TabPanel>
        ))}
        {this.state.fundManagers && (
          <>
            <TabPanel>
              <ShowAllMFs fundManagers={this.state.fundManagers} />
            </TabPanel>
            <TabPanel>
              <MFToppers />
            </TabPanel>
          </>
        )}
      </Tabs>
    );
  }
}

export default MFTabs;
