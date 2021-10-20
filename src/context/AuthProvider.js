import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //const {children} = props;
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value= {allContext}>
            {children}
        </AuthContext.Provider>
    );
};

 export default AuthProvider;
 //export  {AuthProvider, AuthContext};