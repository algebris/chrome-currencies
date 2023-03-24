export const localStorageLabel = 'cbrData';
export type Valutes = 
"AUD" | "AZN" | "GBP" | "AMD" | "BYN" | "BGN" | "BRL" | "HUF" | "HKD" | "DKK" | "USD" | "EUR" | "INR" 
| "KZT" | "CAD" | "KGS" | "CNY" | "MDL" | "NOK" | "PLN" | "RON" | "XDR" | "SGD" | "TJS" | "TRY" | "TMT" 
| "UZS" | "UAH" | "CZK" | "SEK" | "CHF" | "ZAR" | "KRW" | "JPY"

type Valute = {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
};

export type CbrApiResponse = {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: {
    [key: string]: Valute
  };
}
