import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StripeItem from '../component/StripeItem';
import {useStore} from '../store/AppStore';
import withLayout from './../hoc/withLayout';
import {useAd} from '../store/AdStore';

const RecentlyVisitScene = () => {
  const store = useStore();
  const recentlyVisitedList = store.getRecentlyVisitedList();

  return (
    <>
      {/* All List */}
      <View style={sectionStyle.section}>
        <Text style={sectionStyle.section__head_typo}>Recently Visited</Text>

        <View style={sectionStyle.section_vertical_item_list}>
          {recentlyVisitedList.map((it, idx) => (
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

export default withLayout(RecentlyVisitScene);
