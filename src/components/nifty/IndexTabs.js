import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import IndexData from "./IndexData";
import Industries from "./Industries";

export class IndexTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index,
      indices: this.props.indices,
    };
  }
  render() {
    if (this.state.index === "Industry") {
      return <Industries industries={this.state.indices} />;
    } else {
      return (
        <Tabs>
          <TabList>
            {this.state["indices"].map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
          </TabList>
          {this.state["indices"].map((tab) => (
            <TabPanel key={tab}>
              <IndexData index={tab} />
            </TabPanel>
          ))}
        </Tabs>
      );
    }
  }
}

export default IndexTabs;
