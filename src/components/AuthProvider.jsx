import React, { useState } from 'react';
import { createContext } from 'react';

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {

     const [users,setUsers] = useState([])
      
    const authInfo={
         users
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;