import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import { Router } from './router';


export const Provider: React.FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    const color = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(color);
    chrome.storage.local.set({theme: color});
  }

  useEffect(()=>{
    chrome.storage.local.get(['theme'])
      .then(({theme}: {theme: ColorScheme}) => {
        if(theme) {
          setColorScheme(theme);
        } else {
          setColorScheme('light');
        }
      });
  });
  
  return (
    <HashRouter>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{colorScheme}}
        >
          <Router />
        </MantineProvider>
      </ColorSchemeProvider>
    </HashRouter>
  );
};

export default Provider;
