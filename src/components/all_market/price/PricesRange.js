import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StocksByPrice from "./StocksByPrice";
import dataSummary from "../../../json_data/market_data_summary.json";

function PricesRange({ market }) {
  const marketDataSummary = dataSummary[market];
  const stocksByPricesRange = marketDataSummary["stocks_by_price_range"];
  const pricesRange = [
    "0-50",
    "50-100",
    "100-200",
    "200-500",
    "500-1000",
    "1000-10000",
    "10000-100000",
  ];

  return (
    <div>
      <Tabs>
        <TabList>
          {pricesRange.map((priceRange) => (
            <Tab key={priceRange}>{priceRange}</Tab>
          ))}
        </TabList>
        {pricesRange.map((priceRange) => (
          <TabPanel key={priceRange}>
            <StocksByPrice
              priceRange={priceRange}
              data={stocksByPricesRange[priceRange]}
              market={market}
            />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default PricesRange;
