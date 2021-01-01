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
  return (
    <ListProvider init={data}>
      {data ? <AppRouter /> : <Text>Loading Now</Text>}
    </ListProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
