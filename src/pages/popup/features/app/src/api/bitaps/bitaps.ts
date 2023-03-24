import { ApiResponse, TicketMarket, ExtractedData } from './types';

export const fetchCryptoTicker = async (pairs: TicketMarket[]): Promise<ApiResponse> => {
  const response = await fetch(`https://api.bitaps.com/market/v1/tickers/${pairs.join(',')}`);
  const data = await response.json();
  return data.data;
};

export function extractTickerData(data: ApiResponse): ExtractedData {
  const extractedData: ExtractedData = {};
  for (const symbol in data) {
    const { last, volume } = data[symbol].average;
    extractedData[symbol] = { last, volume };
  }
  return extractedData;
}
