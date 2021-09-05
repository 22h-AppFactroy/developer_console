import React, {Component, useState, useEffect} from 'react';
import {Linking} from 'react-native';
import {useStore} from '../store/AppStore';

const withSiteItem = (WrappedComponent) => {
  return (props) => {
    const store = useStore();

    const [imgError, setImgError] = useState(false);
    const iconSize = 20;
    const iconColor = {
      on: '#58CCED',
      off: 'rgb(220,220,220)',
    };

    const handleClickStar = () => {
      store.actionStar(props.link);
    };

    const handleClickItem = () => {
      store.actionVisit(props.link);
    };

    return (
      <WrappedComponent
        {...props}
        imgError={imgError}
        setImgError={setImgError}
        iconSize={iconSize}
        iconColor={iconColor}
        handleClickStar={handleClickStar}
        handleClickItem={handleClickItem}
      />
    );
  };
};

export default withSiteItem;
