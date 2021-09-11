import React from 'react';
import {
  AdIconView,
  MediaView,
  AdChoicesView,
  TriggerableView,
  withNativeAd,
} from 'react-native-fbads';
import {View, Text} from 'react-native';
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
      <View>
        <View style={{flexDirection: 'row'}}>
          <AdChoicesView style={{width: 30, height: 30, left: 0, top: 0}} />
          <Text style={{marginLeft: 10}}>
            {this.props.nativeAd.translation}
          </Text>
        </View>
        <MediaView style={{width: '100%', height: 200}} />

        <View style={{flexDirection: 'row'}}>
          <View>
            <AdIconView style={{width: 25, height: 25, left: 0}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{marginLeft: 10, lineHeight: 25}}>
              {this.props.nativeAd.headline}
            </Text>
            <Text style={{marginLeft: 10, lineHeight: 25}}>
              {this.props.nativeAd.socialContext}
            </Text>
          </View>
        </View>

        {/* 광고주 */}
        <Text>{this.props.nativeAd.advertiserName}</Text>

        <TriggerableView>
          {/*  액션 텍스트 */}
          <Text>{this.props.nativeAd.callToActionText}</Text>
        </TriggerableView>
      </View>
    );
  }
}

export default withNativeAd(AdComponent);
