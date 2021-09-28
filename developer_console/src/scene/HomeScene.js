import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BoxItem from '../component/BoxItem';
import StripeItem from '../component/StripeItem';
import {useStore} from '../store/AppStore';
import withLayout from './../hoc/withLayout';
import {useAd} from '../store/AdStore';
import AdView from '../adComponent/AdView';
import AdPlacement from '../lib/ad';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const Home = () => {
  const store = useStore();

  const recentlyVisitedList = store.getRecentlyVisitedList().slice(0, 5);
  const starredList = store.getStarredList().slice(0, 5);

  const {homeAdManager} = useAd();

  return (
    <>
      {/* Recently Visit */}
      <View style={sectionStyle.section}>
        <View style={sectionStyle.section__head}>
          <Text adjustsFontSizeToFit style={sectionStyle.section__head_typo}>
            Recently Visited
          </Text>
          <TouchableOpacity onPress={() => Actions['RecentlyTab']()}>
            <Text
              adjustsFontSizeToFit
              style={sectionStyle.section__viewmore_typo}>
              view more
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={sectionStyle.section_horizon_scroll_view}
          horizontal={true}>
          {recentlyVisitedList.map((it, idx) => (
            <BoxItem
              key={`recentvisit:${idx}`}
              {...it}
              extraStyle={{marginRight: 20}}
            />
          ))}
        </ScrollView>
      </View>
      {/* Star List */}
      {starredList.length >= 1 && (
        <View style={sectionStyle.section}>
          <View style={sectionStyle.section__head}>
            <Text adjustsFontSizeToFit style={sectionStyle.section__head_typo}>
              Starred
            </Text>
            <TouchableOpacity
              style={style.section__head_viewmore_wrapper}
              onPress={() => {
                console.log('HA');
                Actions['StarTab']();
              }}>
              <Text
                adjustsFontSizeToFit
                style={sectionStyle.section__viewmore_typo}>
                view more
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={sectionStyle.section_horizon_scroll_view}
            horizontal={true}>
            {starredList.map((it, idx) => (
              <BoxItem
                key={`recentvisit:${idx}`}
                {...it}
                extraStyle={{marginRight: 20}}
              />
            ))}
          </ScrollView>
        </View>
      )}
      {/* Ad */}
      <View style={[sectionStyle.section]}>
        {/* <View style={sectionStyle.section__head}>
          <Text adjustsFontSizeToFit style={sectionStyle.section__head_typo}>
          </Text>
        </View> */}
        <View style={sectionStyle.section_ad_box}>
          <BannerAd
            unitId={AdPlacement.GLOBAL_BANNER_AD}
            size={BannerAdSize.MEDIUM_RECTANGLE}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </View>

      {/* All List */}
      <View style={sectionStyle.section}>
        <View style={sectionStyle.section__head}>
          <Text style={sectionStyle.section__head_typo}>All</Text>

          <TouchableOpacity
            style={style.section__head_viewmore_wrapper}
            onPress={() => {
              console.log('HA');
              Actions['SearchTab']();
            }}>
            <Text
              adjustsFontSizeToFit
              style={sectionStyle.section__viewmore_typo}>
              view more
            </Text>
          </TouchableOpacity>
        </View>

        <View style={sectionStyle.section_vertical_item_list}>
          {store.appData.map((it, idx) => (
            <StripeItem
              key={`recentvisit:${idx}`}
              {...it}
              extraStyle={{marginBottom: 20}}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({});

const sectionStyle = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
  section__head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section__head_typo: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  section__head_viewmore_wrapper: {},
  section__viewmore_typo: {
    color: 'gray',
    fontSize: 12,
    padding: 10,
  },
  section_horizon_scroll_view: {
    paddingVertical: 20,
  },
  section_vertical_item_list: {
    paddingVertical: 20,
  },
  section_ad_box: {
    marginTop: 10,
    minHeight: 250,
    // borderRadius: 10,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withLayout(Home);
