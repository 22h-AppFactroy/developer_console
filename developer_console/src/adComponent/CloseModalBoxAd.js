import React, {useEffect} from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import AdPlacement from '../lib/ad';
import withAd from '../hoc/withAd';
import {Actions} from 'react-native-router-flux';
function areEqual(prevProps, nextProps) {
  return true;
}

const CloseModalBoxAd = ({reportClick, reportError}) => {
  return (
    <BannerAd
      onAdClicked={() =>
        reportClick({
          scene: Actions.currentScene,
          type: 'CLOSE MODAL BANNER',
          from: AdPlacement.GLOBAL_BANNER_AD,
        })
      }
      onAdFailedToLoad={(err) => {
        reportError({
          scene: Actions.currentScene,
          type: 'CLOSE MODAL BANNER',
          from: AdPlacement.GLOBAL_BANNER_AD,
          err: err,
        });
      }}
      style={{backgroundColor: 'black'}}
      unitId={AdPlacement.CLOSE_MODAL_AD}
      size={BannerAdSize.MEDIUM_RECTANGLE}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default React.memo(withAd(CloseModalBoxAd), areEqual);
