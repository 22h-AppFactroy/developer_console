import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const SettingItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.link) Linking.openURL(`${props.link}`);
      }}>
      <View style={styles.SettingItem}>
        <Text style={styles.setting_title}>{props.title}</Text>
        <Text style={styles.setting_value}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SettingScene = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.label}>Check your setting lists</Text>
      <View>
        <SettingItem
          title={'Developer'}
          value={'winterlood'}
          link={'https://github.com/winterlood'}
        />
        <SettingItem
          title={'Team'}
          value={'22Hours'}
          link={'https://github.com/22hours'}
        />
        <SettingItem title={'Ver'} value={'4.0'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    color: 'gray',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(240,240,240)',
  },
  SettingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(250,250,250)',
  },
  setting_title: {
    fontSize: 15,
    color: 'gray',
  },
  setting_value: {
    fontSize: 20,
  },
});
export default SettingScene;
