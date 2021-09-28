import React from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import GlobalBannerAd from '../adComponent/GlobalBannerAd';

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <SafeAreaView style={style.container}>
        <GlobalBannerAd />
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
    paddingTop: 35,
    paddingHorizontal: '5%',
    paddingBottom: 100,
  },

  hide_banner: {
    display: 'none',
  },
});
export default withLayout;
