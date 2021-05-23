import { tickerType, stocks } from "../constants";

export const defaultColour = "200, 100, 150";

export const getStockColour = (ticker: tickerType): string =>
  stocks[ticker]?.colour || defaultColour;
