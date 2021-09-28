import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import AdPlacement from '../lib/ad';
import {Actions} from 'react-native-router-flux';
import withAd from '../hoc/withAd';

const GlobalBannerAd = ({reportClick, reportError}) => {
  return (
    <View style={{width: '100%', zIndex: 10, height: 40}}>
      <BannerAd
        onAdClicked={() =>
          reportClick({
            scene: Actions.currentScene,
            type: 'GLOBAL BANNER',
            from: AdPlacement.GLOBAL_BANNER_AD,
          })
        }
        onAdFailedToLoad={(err) => {
          reportError({
            scene: Actions.currentScene,
            type: 'GLOBAL BANNER',
            from: AdPlacement.GLOBAL_BANNER_AD,
            err: err,
          });
        }}
        unitId={AdPlacement.GLOBAL_BANNER_AD}
        size={BannerAdSize.ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

export default React.memo(withAd(GlobalBannerAd));
