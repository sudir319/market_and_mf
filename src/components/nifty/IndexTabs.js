import React, { Component } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import IndexData from './IndexData';

export class IndexTabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: this.props.index,
            indices: this.props.indices
        }
    }
    render() {
        console.log(this.state);
        return <Tabs>
        <TabList>
          { 
            this.state['indices'].map(tab =>
              <Tab key={tab}>{tab}</Tab>
            )
          }
        </TabList>
          { 
            this.state['indices'].map(tab =>
              <TabPanel key={tab}><IndexData index={tab}/></TabPanel>
            )
          }
      </Tabs>
    }
}

export default IndexTabs