import React from 'react';
import {
  AdIconView,
  MediaView,
  AdChoicesView,
  TriggerableView,
  withNativeAd,
} from 'react-native-fbads';
import {View, Text, StyleSheet} from 'react-native';
class AdComponent extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.nativeAd !== nextProps.nativeAd) return true;
    else return false;
  }
  render() {
    return (
      <View style={style.container}>
        <AdChoicesView style={style.adchoice} />
        <MediaView style={style.media} />
        <View style={style.info_row}>
          <AdIconView style={style.adiconview} />
          <View style={style.text_col}>
            <Text style={style.headline}>{this.props.nativeAd.headline}</Text>
            <Text style={style.socialContext}>
              {this.props.nativeAd.socialContext}
            </Text>
            <Text style={style.advertiserName}>
              {this.props.nativeAd.advertiserName}
            </Text>
          </View>
        </View>
        <TriggerableView style={style.cta}>
          <Text style={style.cta_text}>
            {this.props.nativeAd.callToActionText}
          </Text>
        </TriggerableView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  adchoice: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 22,
    height: 22,
    backgroundColor: 'white',
  },
  media: {
    width: '100%',
    height: 200,
  },
  info_row: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  adiconview: {
    width: 50,
    height: 50,
  },

  text_col: {
    marginLeft: 10,
  },
  headline: {
    fontWeight: 'bold',
  },
  socialContext: {
    fontSize: 10,
    color: 'gray',
  },
  advertiserName: {
    fontSize: 10,
    color: 'gray',
  },

  cta: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#58CCED',
  },
  cta_text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default withNativeAd(AdComponent);
