import { loadToken } from 'api/auth';
import React from 'react';
const NavigationContext = React.createContext();
const NavigationProvider = ({children}) => {
  const [activeTab, setActiveTab] = React.useState('HOME');
  function toggleTab(tab) {
    setActiveTab(tab);
  }
  React.useEffect(()=>{
    loadToken();
  },[])
  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        toggleTab,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};
const useNavigationContext = () => React.useContext(NavigationContext);
export {NavigationProvider, useNavigationContext};
