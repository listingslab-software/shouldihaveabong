import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  Box,
} from "@mui/material"
import {
  CTA,
  Shared,
  Yes,
} from "./features";

const container = document.getElementById('shouldihaveabong')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Box sx={{position:"relative"}}>
        <CTA />
        <Yes />
        <Shared />
      </Box>
    </Provider>

  </React.StrictMode>
);

