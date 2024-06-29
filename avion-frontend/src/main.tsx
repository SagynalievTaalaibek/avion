import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './app/css/main.css';
import { PersistGate } from 'redux-persist/integration/react';
import { addInterceptors } from './axiosApi';
import store, { persistor } from './app/store/store';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

addInterceptors(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
