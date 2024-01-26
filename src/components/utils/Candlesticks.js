const candlestick = require("candlestick");

export function findPatterns(data) {
  const patterns = [];

  let current = data[data.length - 1];
  let previous = data[data.length - 2];

  if (candlestick.isHammer(current)) {
    patterns.push("Hammer");
  }
  if (candlestick.isInvertedHammer(current)) {
    patterns.push("InvertedHammer");
  }
  if (candlestick.isBullishHammer(current)) {
    patterns.push("BullishHammer");
  }
  if (candlestick.isBearishHammer(current)) {
    patterns.push("BearishHammer");
  }
  if (candlestick.isBullishInvertedHammer(current)) {
    patterns.push("BullishInvertedHammer");
  }
  if (candlestick.isBearishInvertedHammer(current)) {
    patterns.push("BearishInvertedHammer");
  }
  if (candlestick.isHangingMan(previous, current)) {
    patterns.push("HangingMan");
  }
  if (candlestick.isShootingStar(previous, current)) {
    patterns.push("ShootingStar");
  }
  if (candlestick.isBullishEngulfing(previous, current)) {
    patterns.push("BullishEngulfing");
  }
  if (candlestick.isBearishEngulfing(previous, current)) {
    patterns.push("BearishEngulfing");
  }
  if (candlestick.isBullishHarami(previous, current)) {
    patterns.push("BullishHarami");
  }
  if (candlestick.isBearishHarami(previous, current)) {
    patterns.push("BearishHarami");
  }
  if (candlestick.isBullishKicker(previous, current)) {
    patterns.push("BullishKicker");
  }
  if (candlestick.isBearishKicker(previous, current)) {
    patterns.push("BearishKicker");
  }

  return patterns;
}
