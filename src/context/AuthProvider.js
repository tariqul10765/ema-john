import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const authContext = createContext();

const AuthProvider = ({children}) => {
    const value = useFirebase();
    return (
        <div>
            <authContext.Provider value={value}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;