import React, {useContext} from 'react';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';

// import AdPlacement from '../lib/ad';

// CONTEXT
const AdContext = React.createContext(null);

export const AdProvider = ({children}) => {
  // const homeAdManager = new NativeAdsManager(AdPlacement.HOME_NATIVE_AD);
  // const recentlyAdManager = new NativeAdsManager(
  //   AdPlacement.RECENTLY_SCENE_NATIVE_AD,
  // );
  admob()
    .setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    })
    .then((data) => {
      // Request config successfully set!
      console.log(data);
    });
  const store = {
    // homeAdManager,
    // recentlyAdManager,
  };

  return <AdContext.Provider value={store}>{children}</AdContext.Provider>;
};

export const useAd = () => {
  const state = useContext(AdContext);
  if (state) return state;
  else {
    throw new Error('Cannot find AppContext');
  }
};
