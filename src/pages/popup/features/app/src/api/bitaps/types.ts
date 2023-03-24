export const localStorageLabel = 'bitapsData';
type Tickers =
  'btcusd' | 'btcusdt' | 'btceur' | 'bchusd' | 'ltcusd' | 'ethusd' | 'etheur';
type Markets =
  'HITBTC' | 'BITTREX' | 'BITFINEX' | 'BITSTAMP' | 'COINBASEPRO' | 'KRAKEN' | 'GEMINI' | 'BITLISH' | 'BINANCE' | 'COINEX' | 'BITFOREX' | 'HUOBI';
export type TicketMarket = Tickers | Markets;

interface MarketData {
  ask: number;
  bid: number;
  last: number;
  last_change: number;
  open: number;
  low: number;
  high: number;
  volume: number;
  timestamp: number;
}

interface TickerData {
  [marketName: string]: MarketData;
}

interface Ticker {
  markets: TickerData;
  average: MarketData;
}

export interface ExtractedData {
  [symbol: string]: {
    last: number;
    volume: number;
  };
}

export interface ApiResponse {
  data: {
    [symbol: string]: Ticker;
  };
  time: number;
}
