import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <SafeAreaView style={style.container}>
        <ScrollView
          style={style.scroll_container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <WrappedComponent {...props} />
        </ScrollView>
      </SafeAreaView>
    );
  };
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246, 247, 251)',
    paddingBottom: 30,
  },
  scroll_container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: '5%',
    paddingBottom: 100,
  },
});
export default withLayout;
