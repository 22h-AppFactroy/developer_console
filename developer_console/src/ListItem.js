import React, {useState, useEffect} from 'react';
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

import axios from 'axios';
import list from '../site.json';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({it, handleStar}) => {
  const iconSize = 20;
  const iconColor = {
    on: '#58CCED',
    off: 'rgb(220,220,220)',
  };
  const [state, setState] = useState({...it});
  const [imgError, setImgError] = useState(false);

  const handleClickItem = async () => {
    setState({...state, stared: !state?.stared});
    handleStar(state?.site, !state?.stared);
  };
  return (
    <View style={styles.itemOutter}>
      {state ? (
        <>
          <TouchableOpacity
            style={styles.itemInner}
            onPress={() => Linking.openURL(`${state.link}`)}>
            <Image
              onError={() => setImgError(true)}
              style={styles.itemImg}
              source={
                imgError ? require('./default.png') : {uri: `${state.img}`}
              }
            />
            <Text style={styles.itemText}>{state.site}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleClickItem()}>
            <Icon
              name="star"
              size={iconSize}
              color={state.stared ? iconColor.on : iconColor.off}
            />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  itemOutter: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: 'rgb(240,240,240)',
    borderBottomWidth: 1,
  },
  itemInner: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemImg: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  itemText: {
    lineHeight: 30,
  },
});

export default ListItem;
