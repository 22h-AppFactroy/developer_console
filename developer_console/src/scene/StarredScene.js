import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text, View} from 'react-native';
import StripeItem from '../component/StripeItem';
import {useStore} from '../store/AppStore';
import withLayout from './../hoc/withLayout';
import {useAd} from '../store/AdStore';
import AdStripeItem from '../component/AdStripeItem';

const StarredScene = () => {
  const store = useStore();
  const starredList = store.getStarredList();
  const {recentlyAdManager} = useAd();

  return (
    <>
      {/* All List */}
      <View style={sectionStyle.section}>
        <Text style={sectionStyle.section__head_typo}>Starred</Text>
        <AdStripeItem
          adsManager={recentlyAdManager}
          onAdLoaded={(ad) => {
            console.log('LOAD END ', {ad});
          }}
        />
        <View style={sectionStyle.section_vertical_item_list}>
          {starredList.map((it, idx) => (
            <StripeItem
              key={`starreditem:${idx}`}
              {...it}
              extraStyle={{marginBottom: 20}}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const sectionStyle = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
  section__head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  section__head_typo: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  section__viewmore_typo: {
    color: 'gray',
    fontSize: 12,
  },
  section_horizon_scroll_view: {
    paddingVertical: 20,
  },
  section_vertical_item_list: {
    paddingVertical: 20,
  },
});

export default withLayout(StarredScene);
