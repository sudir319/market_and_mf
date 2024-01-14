import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AgGrid from "../grid/AgGrid";

const MFTabs = () => {
  let mfTabs = [
    "SBI",
    "HDFC",
    "ICICI",
    "KOTAK",
    "AXIS",
    "TATA",
    "MAHINDRA",
    "NIPPON",
    "QUANT",
  ];

  return (
    <Tabs>
      <TabList>
        {mfTabs.map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </TabList>
      {mfTabs.map((tab) => (
        <TabPanel key={tab}>
          <AgGrid mfName={tab} />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default MFTabs;
