'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function MuiTheme({children}:{children:React.ReactNode}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <main>This app is using the dark mode</main> */}
      {children}
    </ThemeProvider>
  );
}
