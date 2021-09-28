import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AdPlacement from '../lib/ad';

import NativeAdView, {
  AdBadge,
  HeadlineView,
  ImageView,
  TaglineView,
  AdvertiserView,
  PriceView,
  StoreView,
  StarRatingView,
  NativeMediaView,
  IconView,
  CallToActionView,
} from 'react-native-admob-native-ads';
import withAd from '../hoc/withAd';
import {Actions} from 'react-native-router-flux';

const NativeStripeAd = ({adUnitId, reportError, reportClick}) => {
  const nativeAdViewRef = useRef();

  React.useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <View style={style.wrapper}>
      <NativeAdView
        onAdClicked={() =>
          reportClick({
            scene: Actions.currentScene,
            type: 'NATIVE',
            from: adUnitId,
          })
        }
        onAdFailedToLoad={(err) => {
          reportError({
            scene: Actions.currentScene,
            type: 'NATIVE',
            from: adUnitId,
            err: JSON.stringify(err.error),
          });
        }}
        nativeBanner={true}
        ref={nativeAdViewRef}
        adUnitID={adUnitId}>
        <View style={style.container}>
          <ImageView style={style.mediaView} />
          <View style={style.contentView}>
            <HeadlineView style={style.headline__text} />
            <View style={{flexDirection: 'row'}}>
              <IconView
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <AdvertiserView style={style.advertiser__text} />
            </View>
            <CallToActionView
              style={[style.cta_btn]}
              textStyle={style.cta_text}
            />
          </View>
        </View>
        <AdBadge style={style.adBadge} textStyle={style.adBadge__text} />
      </NativeAdView>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mediaView: {
    width: 100,
    height: 100,
  },
  contentView: {
    marginLeft: 10,
    flex: 1,
    paddingTop: 10,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: 10,
  },

  headline__text: {
    fontWeight: 'bold',
  },
  advertiser__text: {
    fontSize: 12,
    color: 'gray',
  },

  cta_btn: {
    backgroundColor: '#58CCED',
    width: '100%',
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 0,
  },
  cta_text: {
    color: 'white',
    fontWeight: 'bold',
  },

  adBadge: {
    width: 20,
    height: 15,
    borderWidth: 0,
    justifyContent: 'center',
    backgroundColor: '#58CCED',
    overflow: 'hidden',
  },
  adBadge__text: {fontSize: 10, textAlign: 'center', color: 'white'},
});

export default withAd(NativeStripeAd);
