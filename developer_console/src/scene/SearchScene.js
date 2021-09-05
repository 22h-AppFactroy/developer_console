import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import StripeItem from '../component/StripeItem';
import {useStore} from '../store/AppStore';
import withLayout from './../hoc/withLayout';

const SearchScene = () => {
  const store = useStore();

  const [search, setSearch] = useState('');
  const [searchResultList, setSearchResultList] = useState(store.appData);

  useEffect(() => {
    if (search === '') setSearchResultList(store.appData);
    else {
      setSearchResultList(
        store.appData.filter((it) => it.site.includes(search)),
      );
    }
  }, [search, store.appData]);
  return (
    <>
      {/* All List */}
      <View style={sectionStyle.section}>
        <Text style={sectionStyle.section__head_typo}>All</Text>
        <View style={sectionStyle.section__search}>
          <TextInput
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={sectionStyle.section__search_textinput}
            placeholder={'search...'}
          />
        </View>
        <View style={sectionStyle.section_vertical_item_list}>
          {searchResultList.map((it, idx) => (
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

  section__search: {
    marginVertical: 20,
  },
  section__search_textinput: {
    backgroundColor: 'rgb(250,250,250)',
    borderColor: 'rgb(230,230,230)',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
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

export default withLayout(SearchScene);
