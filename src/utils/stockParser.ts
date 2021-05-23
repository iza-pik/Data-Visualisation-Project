import { iStockData, iStockInfo, tickerType } from "../constants";

export const stockParser = (
  stockData: iStockData,
  ticker: tickerType,
  value: keyof iStockInfo = "open"
) =>
  (stockData[ticker] || []).map((d: iStockInfo) => [
    new Date(d.date),
    d[value],
  ]);
