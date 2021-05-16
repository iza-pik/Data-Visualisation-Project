import { iTicker, stocks } from "../constants";

const defaultColour = "200, 100, 150";

export const getStockColour = (ticker: string): string =>
  stocks[ticker as iTicker].colour || defaultColour;
