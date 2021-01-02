/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ListProvider} from './ListStore';
import axios from 'axios';

import AppRouter from './AppRouter';
import SplashScreen from 'react-native-splash-screen';
const dataUri =
  'https://raw.githubusercontent.com/22h-AppFactroy/developer_console/main/developer_console/site.json';

const App = () => {
  const [data, setData] = useState();

  const getAPI = async () => {
    const restData = await axios
      .get(dataUri)
      .then((response) => response?.data);
    setData(restData);
  };
  useEffect(() => {
    getAPI();
  }, []);
  useEffect(() => {
    if (data) {
      console.log(data.length);
      var siteList = data?.map((it) => it.site);
      console.log(siteList);

      console.log('DATA FIND');
      SplashScreen.hide();
    }
  }, [data]);
  return (
    <ListProvider init={data}>
      {data ? <AppRouter /> : <Text>Loading Now</Text>}
    </ListProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
