import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import withSiteItem from '../hoc/withSiteItem';
import {timeSince} from '../lib/util';

const BoxItem = (props) => {
  return (
    <View style={[style.container, props.extraStyle]}>
      <View style={style.head_bar}>
        <TouchableOpacity
          style={style.head_bar__left_col}
          onPress={() => {
            props.handleClickItem();
          }}>
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
        </TouchableOpacity>
        <TouchableOpacity
          style={style.head_bar__right_col}
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
      <TouchableOpacity
        style={style.bottom_bar}
        onPress={() => {
          props.handleClickItem();
        }}>
        <View>
          <Text style={style.item_name}>{props.site}</Text>
          {props.last_visit && (
            <Text style={style.item_last_visit}>
              {timeSince(new Date(parseInt(props.last_visit)))}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  head_bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head_bar__left_col: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexGrow: 1,
  },
  head_bar__right_col: {
    paddingHorizontal: 20,

    paddingTop: 20,
  },
  item_image: {
    width: 25,
    height: 25,
  },

  bottom_bar: {
    minWidth: 150,
    paddingHorizontal: 20,
    paddingBottom: 20,

    paddingTop: 10,
  },
  item_name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  item_last_visit: {
    fontSize: 10,
    color: 'gray',
  },
});

export default withSiteItem(BoxItem);
