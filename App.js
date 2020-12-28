import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import NavController from './components/NavController';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <NavController />
    </ThemeProvider>
  );
};

export default App;
