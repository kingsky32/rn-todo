import React from 'react';
import {StatusBar} from 'react-native';
import NavController from './components/NavController';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavController />
    </>
  );
};

export default App;
