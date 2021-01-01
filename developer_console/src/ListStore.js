import React, {useState, useEffect} from 'react';

const ListContext = React.createContext(null);
const ListProvider = ({init, children}) => {
  const [siteList, setSiteList] = useState();
  useEffect(() => {
    setSiteList(init);
  }, [init]);
  const store = {
    siteList,
  };
  return <ListContext.Provider value={store}>{children}</ListContext.Provider>;
};
export {ListProvider, ListContext};
