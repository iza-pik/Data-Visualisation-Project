import { stockParser, getStockColour, defaultColour } from ".";

const mockStockData = {
  ABCD: [
    {
      date: "2010-01-04T00:00:00.000Z",
      open: 1,
      high: 1.2,
      low: 0.7,
      close: 1.1,
      adjClose: 1.1,
      volume: 493729600,
    },
    {
      date: "2010-01-05T00:00:00.000Z",
      open: 2,
      high: 2.2,
      low: 2.7,
      close: 2.1,
      adjClose: 2.1,
      volume: 493729660,
    },
  ],
  EFGH: [
    {
      date: "1998-01-04T00:00:00.000Z",
      open: 10,
      high: 10.2,
      low: 9.7,
      close: 10.1,
      adjClose: 10.1,
      volume: 5928300,
    },
    {
      date: "1998-01-05T00:00:00.000Z",
      open: 12,
      high: 12.2,
      low: 11.7,
      close: 12.1,
      adjClose: 12.1,
      volume: 7394800,
    },
    {
      date: "1998-01-06T00:00:00.000Z",
      open: 11.7,
      high: 11.7,
      low: 11.2,
      close: 11.6,
      adjClose: 11.6,
      volume: 7394800,
    },
  ],
};

describe("stockParser should", () => {
  const tests = [
    {
      ticker: "ABCD",
      expected: [
        [new Date("2010-01-04T00:00:00.000Z"), 1, 1.2, 0.7, 1.1],
        [new Date("2010-01-05T00:00:00.000Z"), 2, 2.2, 2.7, 2.1],
      ],
    },
    {
      ticker: "EFGH",
      expected: [
        [new Date("1998-01-04T00:00:00.000Z"), 10, 10.2, 9.7, 10.1],
        [new Date("1998-01-05T00:00:00.000Z"), 12, 12.2, 11.7, 12.1],
        [new Date("1998-01-06T00:00:00.000Z"), 11.7, 11.7, 11.2, 11.6],
      ],
    },
    {
      ticker: "IJKL",
      expected: [],
    },
  ];
  tests.forEach(({ ticker, expected }) =>
    it(`return the proper payload for ${ticker}`, () => {
      expect(stockParser(mockStockData, ticker)).toEqual(expected);
    })
  );
});

describe("getStockColour should", () => {
  it.each`
    ticker    | expected
    ${"AAPL"} | ${"124, 181, 236"}
    ${"AMZN"} | ${"67, 67, 72"}
    ${"FB"}   | ${"144, 237, 125"}
    ${"GOOG"} | ${"247, 163, 92"}
    ${"MSFT"} | ${"128, 133, 233"}
    ${"TSLA"} | ${"241, 92, 128"}
    ${"GME"}  | ${defaultColour}
  `("should return the right colour for $ticker", ({ ticker, expected }) => {
    expect(getStockColour(ticker)).toBe(expected);
  });
});
