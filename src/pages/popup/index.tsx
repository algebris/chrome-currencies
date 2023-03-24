import { createRoot } from 'react-dom/client';
import { Provider } from '@popup/provider';

import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import '@popup/static/index.css';
import { StrictMode } from 'react';

refreshOnUpdate('pages/popup');

function init() {
  const appContainer = document.querySelector('#app-container');
  const root = createRoot(appContainer);
  root.render(
    <StrictMode>
      <Provider />
    </StrictMode>
  );
}

init();
