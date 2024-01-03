import {
  Broker,
  ClosePositionPayload,
  OpenPositionPayload,
} from "@tradalize/core";

export class PaperBroker extends Broker {
  /**
   * Handeling open position action
   */
  openPosition(payload: OpenPositionPayload): void | Promise<void> {}

  /**
   * Handeling close position logic
   */
  closePosition(payload: ClosePositionPayload): void | Promise<void> {}
}
