import React, {useRef, useEffect} from 'react';
import {Text, View} from 'react-native';
import NativeAdView from 'react-native-admob-native-ads';
import AdPlacement from '../lib/ad';

const AdView = () => {
  const nativeAdViewRef = useRef();

  React.useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <NativeAdView
      nativeBanner={true}
      ref={nativeAdViewRef}
      adUnitID={AdPlacement.HOME_NATIVE_AD}>
      <View></View>
    </NativeAdView>
  );
};

export default AdView;
