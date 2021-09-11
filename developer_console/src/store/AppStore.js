import React, {useContext, useState, useEffect, useRef} from 'react';
import {Alert, Linking} from 'react-native';
import StorageController from '../lib/storage';

// CONTEXT
const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {
  const initData = require('./../data.json');
  const [appData, setAppData] = useState([]);

  const init = async () => {
    var storageData = await StorageController.getData();

    initData.forEach((initDataItem) => {
      const matchIdx = storageData.findIndex(
        (storageDataItem) => storageDataItem.link === initDataItem.link,
      );

      if (matchIdx === -1) {
        storageData.push(initDataItem);
      } else {
        storageData[matchIdx] = {
          ...storageData[matchIdx],
          ...initDataItem,
        };
      }
    });

    setAppData(storageData);
  };

  // ACTIONS
  const actionStar = (link) => {
    const matchIdx = appData.findIndex((it) => it.link === link);
    if (matchIdx === -1) {
      return;
    }
    var newAppData = appData.slice();
    newAppData[matchIdx] = {
      ...newAppData[matchIdx],
      stared: !newAppData[matchIdx].stared,
    };

    setAppData(newAppData);
  };

  const actionVisit = async (link) => {
    Linking.openURL(link);

    const matchIdx = appData.findIndex((it) => it.link === link);
    if (matchIdx === -1) {
      return;
    }
    var newAppData = appData.slice();
    newAppData[matchIdx] = {
      ...newAppData[matchIdx],
      last_visit: new Date().getTime(),
    };

    setAppData(newAppData);
  };

  const actionAddItem = (item, onSuccess, onFail) => {
    // Check duplicate
    const matchIdx = appData.findIndex((it) => it.link === item.site);
    if (matchIdx !== -1) {
      if (onFail) {
        onFail();
      }
      return false;
    }

    // Insert Item
    var newAppData = appData.slice();
    newAppData.push({
      site: item.name,
      link: item.site,
      img: item.img,
    });

    if (onSuccess) {
      onSuccess();
    }

    setAppData(newAppData);
  };

  // SELECTORS
  const getStarredList = () => {
    return appData.filter((it) => it.stared);
  };

  const getRecentlyVisitedList = () => {
    const sortedList = appData.slice();
    sortedList.sort((a, b) => {
      const a_time = a.last_visit || 0;
      const b_time = b.last_visit || 0;

      return b_time < a_time ? -1 : b_time > a_time ? 1 : 0;
    });

    return sortedList;
  };

  useEffect(() => {
    init();
  }, []);

  const firstRef = useRef(true);
  useEffect(() => {
    if (appData.length > 1) {
      if (firstRef.current) {
        firstRef.current = false;
        return;
      } else {
        StorageController.setData(appData);
      }
    }
  }, [appData]);

  const store = {
    appData,
    actionStar,
    actionVisit,
    actionAddItem,
    getStarredList,
    getRecentlyVisitedList,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useStore = () => {
  const state = useContext(AppContext);
  if (state) return state;
  else {
    throw new Error('Cannot find AppContext');
  }
};
