import {
  Candle,
  POSITION_DIRECTION,
  PositionDirection,
  Strategy,
} from "@tradalize/core";

export class SampleStrategy extends Strategy {
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
    const dayOfTheWeek = new Date(candle.openTime).getDay();

    if (dayOfTheWeek === 0) {
      this.openOnNext = POSITION_DIRECTION.Long;
    }

    if (dayOfTheWeek === 5) {
      this.closeOnNext = true;
    }
  }
}
