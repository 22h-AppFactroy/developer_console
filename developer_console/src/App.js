import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppRouter from './AppRouter';
import {AppProvider} from './store/AppStore';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
