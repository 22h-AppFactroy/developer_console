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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListContext} from './ListStore';
import {BannerView} from 'react-native-fbads';

import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/AntDesign';
import AdComponent from './AdComponent';
const StarListScene = () => {
  const {siteList} = useContext(ListContext);

  const [data, setData] = useState([]);
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
    var resultData = listData?.filter((it) => {
      if (starData.includes(it.site)) return true;
      else return false;
    });
    resultData = resultData?.map((it) => {
      return {
        ...it,
        stared: true,
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

      setData(data?.filter((it) => it.site !== site));
    }
    AsyncStorage.setItem('myList', JSON.stringify(starData));
  };

  useEffect(() => {
    if (siteList) {
      getData();
    }
  }, [siteList]);

  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <ScrollView style={styles.scrollView}>
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.title}>Starred Consoles</Text>
            <Text style={styles.label}>
              Click the star to remove the item from this list
            </Text>
          </View>
          <BannerView
            placementId="1595683040620066_1596880140500356"
            type="large"
            onPress={() => console.log('click')}
            onLoad={() => console.log('loaded')}
            onError={(err) => console.log('error')}
          />
          <View style={{marginHorizontal: 20}}>
            {data?.map((it) => (
              <ListItem handleStar={handleStar} key={it.site} it={it} />
            ))}
            <TouchableOpacity
              onPress={() => getData()}
              style={styles.refreshBox}>
              <Icon style={{textAlign: 'center'}} name="reload1" size={30} />
            </TouchableOpacity>
          </View>
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
    paddingTop: 20,

    flex: 1,
    marginBottom: 70,
  },
  refreshBox: {
    paddingVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30,
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

export default StarListScene;
