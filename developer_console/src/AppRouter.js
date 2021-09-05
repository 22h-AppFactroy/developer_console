import React from 'react';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import {SafeAreaView} from 'react-native';
import BottomMenu from './BottomMenu';

import HomeScene from './scene/HomeScene';
import RecentlyVisitScene from './scene/RecentlyVisitScene';
import StarredScene from './scene/StarredScene';
import SearchScene from './scene/SearchScene';

const AppRouter = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router>
        <Tabs key="tabBar" tabBarComponent={BottomMenu} hideNavBar={true}>
          <Scene
            initial="true"
            key="HomeTab"
            component={HomeScene}
            title="Home"
            hideNavBar={true}
          />
          <Scene
            key="RecentlyTab"
            component={RecentlyVisitScene}
            title="Recently"
            hideNavBar={true}
          />
          <Scene
            key="StarTab"
            component={StarredScene}
            title="Star"
            hideNavBar={true}
          />
          <Scene
            key="SearchTab"
            component={SearchScene}
            title="Search"
            hideNavBar={true}
          />
        </Tabs>
      </Router>
    </SafeAreaView>
  );
};

export default AppRouter;
