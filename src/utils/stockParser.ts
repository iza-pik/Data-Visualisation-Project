export const stockParser = (stockData: any, ticker: string) =>
  stockData[ticker].map((d: any) => [
    new Date(d.date),
    d.open,
    d.high,
    d.low,
    d.close,
  ]);
