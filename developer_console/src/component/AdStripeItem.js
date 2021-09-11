import React from 'react';
import {
  AdIconView,
  MediaView,
  AdChoicesView,
  TriggerableView,
  withNativeAd,
} from 'react-native-fbads';
import {View, Text, StyleSheet} from 'react-native';
class AdStripeItem extends React.Component {
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
        <View style={style.main_wrapper}>
          <View style={style.info_col}>
            <View style={style.ad_option_view}>
              <AdChoicesView style={style.adchoice} />
              <Text style={style.sponsored}>
                {this.props.nativeAd.sponsoredTranslation}
              </Text>
            </View>
            <View style={style.info_col__main_row}>
              <AdIconView style={style.adiconview} />
              <View style={style.text_col}>
                {this.props.nativeAd.headline === '' ? (
                  <>
                    <Text style={style.headline}>
                      {this.props.nativeAd.advertiserName}
                    </Text>
                    <Text style={style.socialContext}>
                      {this.props.nativeAd.socialContext}
                    </Text>
                  </>
                ) : (
                  <>
                    <Text style={style.headline}>
                      {this.props.nativeAd.headline}
                    </Text>
                    <Text style={style.socialContext}>
                      {this.props.nativeAd.socialContext}
                    </Text>
                    <Text style={style.advertiserName}>
                      {this.props.nativeAd.advertiserName}
                    </Text>
                  </>
                )}
              </View>
            </View>
          </View>
          <View style={style.cta_wrapper}>
            <TriggerableView style={style.cta}>
              {this.props.nativeAd.callToActionText}
            </TriggerableView>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },

  ad_option_view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  adchoice: {
    width: 15,
    height: 15,
  },
  sponsored: {
    fontSize: 11,
    marginLeft: 10,
    color: 'gray',
  },
  main_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_col: {},

  info_col__main_row: {
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
  cta_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58CCED',
    padding: 10,
    borderRadius: 5,
  },
  cta: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default withNativeAd(AdStripeItem);
