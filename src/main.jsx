import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './RTK/store.js';
import App from './App.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
