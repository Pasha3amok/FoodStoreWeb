import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Preloader } from './components/Preloader';
import config from '../config';
import showErrorMessage from '../utils/showErrorMessage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState();

    const handleFetchProtected = () => {};

    const handleLogOut = () => {};

    const handleSignUp = (data) => {};

    const handleSignIn = (data) => {};

    return (
        <AuthContext.Provider
            value={{
                data,
                handleFetchProtected,
                handleSignUp,
                handleSignIn,
                handleLogOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
