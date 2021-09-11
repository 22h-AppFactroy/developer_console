import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppRouter from './AppRouter';
import {AdProvider} from './store/AdStore';
import {AppProvider} from './store/AppStore';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <AdProvider>
        <AppRouter />
      </AdProvider>
    </AppProvider>
  );
};

export default App;
