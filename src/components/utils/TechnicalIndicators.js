const technicalindicators = require("technicalindicators");

export function testLogic() {
  const data = [
    { open: 10, high: 12, low: 6, close: 8 },
    { open: 5, high: 16, low: 4, close: 14 },
    // Add more candlestick data as needed
  ];

  // Convert data to the required format
  const input = {
    open: data.map((d) => d.open),
    high: data.map((d) => d.high),
    low: data.map((d) => d.low),
    close: data.map((d) => d.close),
  };

  return technicalindicators.bullishengulfingpattern(input);
}

export function findPatterns(data) {
  const patterns = [];
  const input = {
    open: data.map((d) => d.open),
    high: data.map((d) => d.high),
    low: data.map((d) => d.low),
    close: data.map((d) => d.close),
  };

  const patternFunctions = [
    "abandonedbaby",
    "doji",
    "bearishengulfingpattern",
    "bullishengulfingpattern",
    "darkcloudcover",
    "downsidetasukigap",
    "dragonflydoji",
    "gravestonedoji",
    "bullishharami",
    "bearishharami",
    "bullishharamicross",
    "bearishharamicross",
    "eveningdojistar",
    "eveningstar",
    "morningdojistar",
    "morningstar",
    "bullishmarubozu",
    "bearishmarubozu",
    "piercingline",
    "bullishspinningtop",
    "bearishspinningtop",
    "threeblackcrows",
    "threewhitesoldiers",
    "bullishhammerstick",
    "bearishhammerstick",
    "bullishinvertedhammerstick",
    "bearishinvertedhammerstick",
    "hammerpattern",
    "hammerpatternunconfirmed",
    "hangingman",
    "hangingmanunconfirmed",
    "shootingstar",
    "shootingstarunconfirmed",
    "tweezertop",
    "tweezerbottom",
    "bullish",
    "bearish",
  ];
  patternFunctions.forEach((eachPattern) => {
    if (technicalindicators[eachPattern](input)) {
      patterns.push(eachPattern);
    }
  });

  return patterns;
}
