import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app/App';
import { NoteProvider } from './app/contexts/NoteContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <HashRouter>
      <NoteProvider>
        <App />
      </NoteProvider>
    </HashRouter>
  </StrictMode>
);
