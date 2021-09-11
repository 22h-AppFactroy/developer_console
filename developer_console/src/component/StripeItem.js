import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import withSiteItem from '../hoc/withSiteItem';
import {timeSince} from '../lib/util';

const StripeItem = (props) => {
  return (
    <View style={[style.container, props.extraStyle]}>
      <TouchableOpacity
        onPress={() => {
          props.handleClickItem();
        }}
        style={style.info_col}>
        <Image
          onError={() => props.setImgError(true)}
          style={style.item_image}
          source={
            props.imgError
              ? {
                  uri: props.replaceImg,
                }
              : {uri: `${props.img}`}
          }
        />
        <View>
          <Text style={style.item_name}>{props.site}</Text>
          {props.last_visit && (
            <Text style={style.item_last_visit}>
              {timeSince(new Date(parseInt(props.last_visit)))}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.star_col}
        onPress={() => {
          props.handleClickStar();
        }}>
        <Icon
          name="star"
          size={props.iconSize}
          color={props.stared ? props.iconColor.on : props.iconColor.off}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    borderRadius: 10,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  info_col: {
    paddingLeft: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  item_image: {width: 25, height: 25, marginRight: 20},
  item_name: {fontSize: 12, fontWeight: 'bold'},
  item_last_visit: {
    fontSize: 10,
    color: 'gray',
  },

  star_col: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default withSiteItem(StripeItem);
