export interface iStockInfo {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
  volume: number;
}

export interface iStockData {
  AAPL: iStockInfo[];
  AMZN: iStockInfo[];
  FB: iStockInfo[];
  GOOG: iStockInfo[];
  MSFT: iStockInfo[];
  TSLA: iStockInfo[];
}

export type tickerType = keyof iStockData;

export const stocks = {
  AAPL: { colour: "124, 181, 236" },
  AMZN: { colour: "67, 67, 72" },
  FB: { colour: "144, 237, 125" },
  GOOG: { colour: "247, 163, 92" },
  MSFT: { colour: "128, 133, 233" },
  TSLA: { colour: "241, 92, 128" },
};
