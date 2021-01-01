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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.nativeAd !== nextProps.nativeAd) return true;
    else return false;
  }
  render() {
    return (
      <View>
        <AdChoicesView style={{left: 0, top: 0}} />
        {/* <AdIconView style={{width: '100%', height: 10}} /> */}
        <MediaView style={{width: '100%', height: 100}} />
        <TriggerableView>
          <Text>{this.props.nativeAd.description}</Text>
        </TriggerableView>
      </View>
    );
  }
}

export default withNativeAd(AdComponent);
