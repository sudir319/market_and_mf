import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TrendData from "./TrendData";

const TrendsList = ({market}) => {
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
            <TrendData trend={eachTrend} market={this.props.market} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default TrendsList;
