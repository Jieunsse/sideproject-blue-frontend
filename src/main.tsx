import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>,
);
