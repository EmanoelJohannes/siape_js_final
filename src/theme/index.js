import React from 'react';

import GlobalStyle from './global';

import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#EEE',
    primaryBlack: '#111',
    textPrimary: '#222',
    textPrimaryLight: '#EEE',
    secondary: '#0070f3',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    outline: '#36313D',
    darkHover: '#011017',
    lightHover: '#2C8ED6',
    darkText: '#818098',
    gray: '#7A7A7A',
    darkBackgroundLighter: '#282834',
    darkBackground: '#1d1c26',
    darkBackground2: '#1E1E27',
    yellowLight: '#FFD27B',
    blackBackground: '#14141A',
    purple: '#9C28C7'
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

const gridTheme = {
  gridColumns: 24,
  breakpoints: {
    veryGiant: 1440,
    giant: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576,
    smaller: 575
  },
  row: {
    padding: 10
  },
  col: {
    padding: 5
  },
  container: {
    padding: 0,
    maxWidth: {
      veryGiant: 1141,
      giant: 1140,
      desktop: 960,
      tablet: 720,
      phone: 540,
      smaller: 540
    }
  }
};

const ThemesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GridThemeProvider gridTheme={gridTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </GridThemeProvider>
  </ThemeProvider>
);

export default ThemesProvider;
