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
  BackHandler,
  ToastAndroid,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
const menu = [{item: 'Home'}, {item: 'Star'}, {item: 'Setting'}];

const getIcon = (select, type) => {
  const iconSize = 20;
  const iconColor = {
    on: '#58CCED',
    off: 'gray',
  };
  switch (type) {
    case 'Home':
      return select ? (
        <Icon
          style={styles.onClickIcon}
          name="home"
          size={iconSize}
          color={iconColor.on}
        />
      ) : (
        <Icon
          style={styles.unClickIcon}
          name="home"
          size={iconSize}
          color={iconColor.off}
        />
      );
    case 'Star':
      return select ? (
        <Icon
          name="star"
          style={styles.unClickIcon}
          size={iconSize}
          color={iconColor.on}
        />
      ) : (
        <Icon
          name="star"
          style={styles.unClickIcon}
          size={iconSize}
          color={iconColor.off}
        />
      );
    case 'Setting':
      return select ? (
        <Icon
          name="setting"
          style={styles.unClickIcon}
          size={iconSize}
          color={iconColor.on}
        />
      ) : (
        <Icon
          name="setting"
          style={styles.unClickIcon}
          size={iconSize}
          color={iconColor.off}
        />
      );
    default:
      break;
  }
};

const BottomItem = ({activeTabIndex, idx, item}) => {
  var flag = false;
  var itemText = item.split('T')[0];
  if (activeTabIndex === idx) {
    flag = true;
  }
  const textColor = {
    on: '#58CCED',
    off: 'gray',
  };
  return (
    <TouchableOpacity
      onPress={() => Actions[item].call()}
      style={{
        paddingTop: 5,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      {getIcon(flag, itemText)}
      <Text style={{color: flag ? textColor?.on : textColor?.off}}>
        {itemText}
      </Text>
    </TouchableOpacity>
  );
};

const BottomMenu = (props) => {
  const {state} = props.navigation;
  const activeTabIndex = state.index;
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Close App',
      'are you sure to close app?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: false},
    );

  const handleBackButton = () => {
    createTwoButtonAlert();
    //  // 앱 종료
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  }, []);
  return (
    // <View >
    //   {menu?.map((it) => (
    //     <BottomItem key={it.item} item={it.item} />
    //   ))}
    // </View>
    <View style={styles.bottomNavigation}>
      {state.routes.map((element, idx) => (
        <TouchableOpacity
          key={element.key}
          onPress={() => Actions[element.key]()}>
          <BottomItem
            activeTabIndex={activeTabIndex}
            idx={idx}
            key={element.key}
            item={element.key}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  onClickIcon: {
    textAlign: 'center',
  },
  unClickIcon: {
    textAlign: 'center',
  },
});

export default BottomMenu;
