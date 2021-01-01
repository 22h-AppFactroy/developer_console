import React, {useState, useEffect} from 'react';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import ListScene from './ListScene';
import {SafeAreaView} from 'react-native';
import BottomMenu from './BottomMenu';
import StarListScene from './StarListScene';
import SettingScene from './SettingScene';

const AppRouter = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router>
        <Tabs key="tabBar" tabBarComponent={BottomMenu} hideNavBar={true}>
          <Scene
            initial="true"
            key="HomeTab"
            component={ListScene}
            title="Home"
            hideNavBar={true}
          />
          <Scene
            key="StarTab"
            component={StarListScene}
            title="Star"
            hideNavBar={true}
          />
          <Scene
            key="SettingTab"
            component={SettingScene}
            title="Setting"
            hideNavBar={true}
          />
        </Tabs>
      </Router>
      {/* <BottomMenu /> */}
    </SafeAreaView>
  );
};

export default AppRouter;
