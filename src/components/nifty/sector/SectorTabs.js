import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectorDashboard from "./SectorDashboard";

const SectorTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Pharma</Tab>
      <Tab>Finance</Tab>
      <Tab>IT</Tab>
      <Tab>Defence</Tab>
    </TabList>

    <TabPanel>
      <SectorDashboard sector="Pharma" />
    </TabPanel>
    <TabPanel>
      <SectorDashboard sector="Finance" />
    </TabPanel>
    <TabPanel>
      <SectorDashboard sector="IT" />
    </TabPanel>
    <TabPanel>
      <SectorDashboard sector="Defence" />
    </TabPanel>
  </Tabs>
);

export default SectorTabs;
