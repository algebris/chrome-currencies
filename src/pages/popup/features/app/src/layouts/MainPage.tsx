import {
  AppShell,
  Center,
  Loader,
} from '@mantine/core';
import { useCryptoTicker } from '../hooks/useCryptoTicker'
import { TickerDisplay } from '../components/TickerDisplay';
import { Footer } from '../components/Footer';

export const MainPage: React.FC = () => {
  const tickerData = useCryptoTicker();
  
  return (
    <AppShell
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      footer={<Footer />}
    >
    {
      !tickerData
      ? <Center><Loader /></Center>
      : Object.entries(tickerData)
          .map(([symbol, data]) => ( 
            <TickerDisplay key={symbol} symbol={symbol} {...data} /> 
          ))
    }
    </AppShell>
  );
}
