import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import AdPlacement from '../lib/ad';

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <SafeAreaView style={style.container}>
        <View style={{width: '100%', zIndex: 10, height: 40}}>
          <BannerAd
            unitId={AdPlacement.GLOBAL_BANNER_AD}
            size={BannerAdSize.ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
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
    marginTop: 15,
    paddingHorizontal: '5%',
    paddingBottom: 100,
  },

  hide_banner: {
    display: 'none',
  },
});
export default withLayout;
