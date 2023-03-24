import { Valutes, CbrApiResponse } from './types';

export const fetchDaily = async (valute?: Valutes[]): Promise<CbrApiResponse> => {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  return response.json();
};

export const fetchLatest = async () => {
  const response = await fetch('https://www.cbr-xml-daily.ru/latest.js');
  return response.json();
};
