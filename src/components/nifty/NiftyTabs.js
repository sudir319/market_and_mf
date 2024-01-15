import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React, { Component } from "react";
import IndexTabs from "./IndexTabs";
import TopPerformers from "./toppers/TopPerformers";

export class NiftyTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indices: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/data/indicesSummary")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ indices: response });
      });
  }
  render() {
    let content = <div>Loading....</div>;

    if (this.state.indices) {
      let groups = Object.keys(this.state.indices);
      return (
        <Tabs>
          <TabList>
            <Tab key="topper">Toppers</Tab>
            {groups.map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
          </TabList>
          <TabPanel key="topper">
            <TopPerformers />
          </TabPanel>
          {groups.map((tab) => (
            <TabPanel key={tab}>
              <IndexTabs index={tab} indices={this.state.indices[tab]} />
            </TabPanel>
          ))}
        </Tabs>
      );
    }

    return content;
  }
}

export default NiftyTabs;
