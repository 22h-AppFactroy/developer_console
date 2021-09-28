import React, {useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import CloseModalBoxAd from '../adComponent/CloseModalBoxAd';
const CloseModal = () => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const handleBackButton = () => {
    if (Actions.currentScene === '_HomeTab') {
      if (!isOpen) {
        setIsOpen(true);
      }
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  }, [isOpen]);
  return (
    <Modal onBackButtonPress={() => BackHandler.exitApp()} isVisible={isOpen}>
      <TouchableOpacity
        onPress={() => setIsOpen(false)}
        style={{flex: 1, justifyContent: 'center'}}
        activeOpacity={1}>
        <View style={style.container}>
          <View style={style.ad_wrapper}>
            <CloseModalBoxAd />
          </View>

          <View style={style.bottom_control_bar}>
            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              style={style.bottom_btn}>
              <View>
                <Text style={{color: 'gray'}}>Stay</Text>
              </View>
            </TouchableOpacity>
            <View style={style.bar}></View>
            <TouchableOpacity
              onPress={() => BackHandler.exitApp()}
              style={style.bottom_btn}>
              <View>
                <Text>Close App</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{textAlign: 'center', color: 'white', marginTop: 20}}>
          press the back button one more time to quit
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  ad_wrapper: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_control_bar: {
    borderTopColor: 'rgb(220,220,220)',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bar: {
    width: 1,
    backgroundColor: 'rgb(200,200,200)',
  },
  bottom_btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default CloseModal;
