import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import NavController from './components/NavController';
import store from './store';
import theme from './styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <NavController />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
