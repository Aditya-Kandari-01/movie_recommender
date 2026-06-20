import { createContext, useState } from "react";
export const authContext = createContext();

const authProvider = (props) => {
  const [user,setUser] = useState()
  const [loading,setLoading] = useState(false);
  
  return (
    <div>
      <authContext.Provider value = {{user,setUser,loading,setLoading}}>
         {props.children}
      </authContext.Provider>
    </div>
  );
};

export default authProvider;
