import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TrendData from "./TrendData";

class TrendsList extends Component {
  render() {
    let trends = ["Bullish", "Bearish"];
    return (
      <div>
        <Tabs>
          <TabList>
            {trends.map((eachTrend) => (
              <Tab key={eachTrend}>{eachTrend}</Tab>
            ))}
          </TabList>
          {trends.map((eachTrend) => (
            <TabPanel key={eachTrend}>
              <TrendData trend={eachTrend} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default TrendsList;
