import { useEffect, useState } from 'react';
import { createEffect, createStore, createEvent } from 'effector';
import { fetchCryptoTicker, extractTickerData, ExtractedData, ApiResponse } from '../api/bitaps';

const fetchCryptoTickerFx = createEffect(() => fetchCryptoTicker(['btcusd', 'ethusd']));

const saveTickerData = createEvent();
const $tickerData = createStore(null).on(fetchCryptoTickerFx.doneData, (_, data) => data).on(saveTickerData, (_, data) => data);

export const useCryptoTicker = (interval: number = 5000) => {
  const [tickerData, setTickerData] = useState<ExtractedData | null>(null);

  useEffect(() => {
    // Retrieve stored data and start fetching
    chrome.storage.local.get('tickerData', (storedData) => {
      if (storedData.tickerData) {
        setTickerData(storedData.tickerData);
        saveTickerData(storedData.tickerData);
      }
      fetchCryptoTickerFx();
    });

    // Fetch data every interval
    const intervalId = setInterval(() => {
      fetchCryptoTickerFx();
    }, interval);

    // Update local state when the Effector store changes
    const unsubscribe = $tickerData.watch((data: ApiResponse) => {
      const extractedData: ExtractedData = extractTickerData(data);
      setTickerData(extractedData);

      // Store the fetched data for future use
      chrome.storage.local.set({ tickerData: data });
    });

    return () => {
      clearInterval(intervalId);
      unsubscribe();
    };
  }, []);

  return tickerData;
};
