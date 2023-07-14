import Cookies from "js-cookie";
import React, {FC} from "react";
import { Navigate} from "react-router-dom";


 
  const Protected = (Component:FC ) => {
    const ProtectedComponent = () => {
        if (!Cookies.get('token')) {
            return <Navigate to='/login' />
        } 
       
        return (
            <Component />
        )
    }
    return ProtectedComponent
    
  };
  
  export default Protected;