import { BinanceFuturesDatafeed, Mainframe } from "@tradalize/core";
import { SimpleStrategy } from "./strategy";
import { PaperBroker } from "./broker";

const datafeed = new BinanceFuturesDatafeed({
  symbol: "BTCUSDT",
  interval: "1d",
  startTime: new Date("01 01 2020"),
});

const broker = new PaperBroker();
const strategy = new SimpleStrategy(broker);

const mf = new Mainframe(datafeed, strategy);

await mf.backtest();
