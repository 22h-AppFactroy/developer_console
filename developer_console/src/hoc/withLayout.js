import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {BannerView} from 'react-native-fbads';
import AdPlacement from '../lib/ad';

const withLayout = (WrappedComponent) => {
  return (props) => {
    const [isBannerReady, setIsBannerReady] = useState(false);
    return (
      <SafeAreaView style={style.container}>
        <BannerView
          placementId={AdPlacement.GLOBAL_BANNER_AD}
          type="standard"
          style={isBannerReady ? style.show_banner : style.hide_banner}
          onPress={() => {}}
          onLoad={() => setIsBannerReady(true)}
          onError={(err) => setIsBannerReady(false)}
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
