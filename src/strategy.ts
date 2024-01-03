import { Candle, PositionDirection, Strategy } from "@tradalize/core";

export class SimpleStrategy extends Strategy {
  /**
   * Set this to needed position direction in the `update` method
   * and provided broker will open position on
   * the next candle open price
   */
  protected openOnNext: PositionDirection | null;

  /**
   * Set this to true in the`update` method and
   * provided broker will close position on
   * the next candle open price
   */
  protected closeOnNext: boolean;

  update(candle: Candle): void | Promise<void> {
    // Implement you logic here
    console.info("Strategy update: ", candle);
  }
}
