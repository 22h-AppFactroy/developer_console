import {Platform} from 'react-native';

export const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

export function Logger(tag = 'AD', type, value) {
  console.log(`[${tag}][${type}]:`, value);
}
export const Events = {
  onViewableItemsChanged: 'onViewableItemsChanged',
};

export const adUnitIDs = {
  image:
    Platform.OS === 'ios'
      ? 'ca-app-pub-3940256099942544/3986624511'
      : 'ca-app-pub-3940256099942544/2247696110',
  video:
    Platform.OS === 'ios'
      ? 'ca-app-pub-3940256099942544/2521693316'
      : 'ca-app-pub-3940256099942544/1044960115',
};
