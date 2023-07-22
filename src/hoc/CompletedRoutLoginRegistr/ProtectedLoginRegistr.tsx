import Cookies from "js-cookie";
import React, {FC} from "react";
import { Navigate} from "react-router-dom";


 
  const ProtectedLoginRegistr = (Component:FC ) => {
    const ProtectedComponent = () => {
        if (Cookies.get('token')) {
            return <Navigate to='/' />
        } 
       
        return (
            <Component />
        )
    }
    return ProtectedComponent
    
  };
  
  export default ProtectedLoginRegistr;