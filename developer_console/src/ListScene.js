import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListContext} from './ListStore';
import {NativeAdsManager} from 'react-native-fbads';

import ListItem from './ListItem';
import AdComponent from './AdComponent';
const ListScene = () => {
  const adsManager = new NativeAdsManager('1595683040620066_1595683417286695');

  const {siteList} = useContext(ListContext);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState();
  const getData = async () => {
    console.log('getData');
    var listData = siteList.slice();
    var starData = [];
    await AsyncStorage.getItem('myList', (error, result) => {
      if (result !== null) {
        starData = JSON.parse(result);
      } else {
        starData = [];
      }
    });
    var resultData = listData.map((it) => {
      var stared = false;
      if (starData?.includes(it.site)) {
        stared = true;
      }
      return {
        ...it,
        stared: stared,
      };
    });
    setData(resultData);
  };

  const handleStar = async (site, flag) => {
    console.log(site);
    var starData = [];
    await AsyncStorage.getItem('myList', (error, result) => {
      if (result !== null) {
        starData = JSON.parse(result);
      } else {
        starData = [];
      }
    });
    if (flag) {
      // new Star
      console.log(starData);
      starData.push(site);
    } else {
      // remove Star
      var removeIdx = starData.indexOf(site);
      if (removeIdx > -1) starData.splice(removeIdx, 1);
    }
    AsyncStorage.setItem('myList', JSON.stringify(starData));
  };

  useEffect(() => {
    if (siteList) {
      getData();
    }
  }, [siteList]);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const filterItems = () => {
    if (searchText?.length === undefined) return data;
    else {
      return data.filter(
        (it) => it.site.toLowerCase().indexOf(searchText?.toLowerCase()) > -1,
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        placeholder="Search"
        placeholderTextColor="gray"
      />

      {data ? (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>All Consoles</Text>
          <Text style={styles.label}>Click the star to save the item.</Text>
          <AdComponent adsManager={adsManager} />

          {filterItems()
            // ?.filter((it) =>
            //   it.site.toLowerCase().indexOf(searchText?.toLowerCase() > -1),
            // )
            ?.filter((it) => it.stared)
            ?.map((it) => (
              <ListItem handleStar={handleStar} key={it.site} it={it} />
            ))}

          {filterItems()
            // ?.filter((it) => it.site.indexOf(searchText))
            ?.filter((it) => !it.stared)
            ?.map((it) => (
              <ListItem handleStar={handleStar} key={it.site} it={it} />
            ))}
        </ScrollView>
      ) : (
        <Text>Loading Now</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 20,
    marginBottom: 70,
  },
  searchBox: {
    borderBottomColor: 'rgb(240,240,240)',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    color: 'gray',
    marginBottom: 10,
  },
});

export default ListScene;
