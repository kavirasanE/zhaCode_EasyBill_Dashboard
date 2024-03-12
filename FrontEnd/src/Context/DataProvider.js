import React, { useEffect } from "react";
import { createContext ,useState} from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const appName = "EasyBill";
  const [data, setData] = useState([]);
  const[subscription,setSubscription] =useState([]);

  useEffect (() => {
      localStorage.setItem('data',JSON.stringify(data));
      localStorage.setItem('subscription',JSON.stringify(subscription));
  },[data,subscription])
  return (
    <DataContext.Provider value={{ appName , data, setData ,subscription,setSubscription}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
