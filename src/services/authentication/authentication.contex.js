import React, { useState, createContext, useEffect } from "react";
import { loginRequest } from './authentication.service';
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onLogin = async (email, password) => {
        setIsLoading(true);
        try {
            const user = await loginRequest(email, password);
            if (user) setUser(user);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    return (
        <AuthenticationContext.Provider value={{
            user,
            isLoading,
            error,
            onLogin,
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};