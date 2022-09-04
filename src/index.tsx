import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {Yes} from "./features/Yes";

const container = document.getElementById('shouldihaveabong')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Yes />
    </Provider>
  </React.StrictMode>
);

