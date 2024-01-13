import "dotenv/config";
import {
  BinanceFuturesDatafeed,
  Mainframe,
  MemoryBroker,
  getTradesSummary,
} from "@tradalize/core";
import { SampleStrategy } from "./strategies/simple.strategy.js";

const datafeed = new BinanceFuturesDatafeed({
  symbol: "BTCUSDT",
  timeframe: "1d",
  startTime: new Date("01 01 2023"),
});

const broker = new MemoryBroker();
const strategy = new SampleStrategy(broker);

const mf = new Mainframe(datafeed, strategy);

await mf.backtest();

console.info(getTradesSummary(broker.positionsList.toArray()));
