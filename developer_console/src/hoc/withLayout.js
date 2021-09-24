import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import AdPlacement from '../lib/ad';

const withLayout = (WrappedComponent) => {
  return (props) => {
    const [isBannerReady, setIsBannerReady] = useState(false);

    return (
      <SafeAreaView style={style.container}>
        <BannerAd
          unitId={AdPlacement.GLOBAL_BANNER_AD}
          size={BannerAdSize.SMART_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
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

  hide_banner: {
    display: 'none',
  },
});
export default withLayout;
