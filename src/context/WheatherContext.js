import {createContext, useContext} from 'react';
const WheatherContext=createContext();

export const WheatherProvider = ({childer}) => {
  
    return <WheatherContext.Provider>{childer}</WheatherContext.Provider>
}

export const useWheatherContext = () => useContext(WheatherContext);