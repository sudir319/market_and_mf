import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ShowAllMFs from "./ShowAllMFs";
import MFToppers from "./MFToppers";
import MfDataGrid from "../grid/MfDataGrid";

import mfData from "../../json_data/mf_data_summary.json";

class fewMfTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: mfData["mf_data_summary"],
      toppers: mfData["mf_top_performers"],
      fundManagers: Object.keys(mfData["mf_data_summary"]).sort(),
      fewMfTabs: [
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

  render() {
    return (
      <Tabs>
        <TabList>
          {this.state.fundManagers &&
            this.state.fewMfTabs.map((tab) => (
              <Tab key={tab} data={this.state.data[tab]}>
                {tab}
              </Tab>
            ))}
          {this.state.fundManagers && (
            <>
              <Tab>All MFs</Tab>
              <Tab>Toppers</Tab>
            </>
          )}
        </TabList>
        {this.state.fundManagers &&
          this.state.fewMfTabs.map((tab) => (
            <TabPanel key={tab}>
              <MfDataGrid mfName={tab} data={this.state.data[tab]} />
            </TabPanel>
          ))}
        {this.state.fundManagers && (
          <>
            <TabPanel>
              <ShowAllMFs
                fundManagers={this.state.fundManagers}
                data={this.state.data}
              />
            </TabPanel>
            <TabPanel>
              <MFToppers data={this.state.toppers} />
            </TabPanel>
          </>
        )}
      </Tabs>
    );
  }
}

export default fewMfTabs;
