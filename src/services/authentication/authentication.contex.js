import React, { useState, createContext, useEffect } from "react";
import { loginRequest, createUserRequest, logout } from './authentication.service';
import { auth } from './authentication.config';
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const validateUser = () => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) setUser(userAuth);
        });
    }

    useEffect(() => {
        validateUser();
    }, []);


    const onLogin = async (email, password) => {
        setIsLoading(true);
        try {
            const authResponse = await loginRequest(email, password);
            if (authResponse) {
                setUser(authResponse.user);
            }
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    const onRegister = async (email, password) => {
        setIsLoading(true);
        try {
            const authResponse = await createUserRequest(email, password);
            if (authResponse) {
                setUser(authResponse.user);
            }
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    const onLogout = async () => {
        await logout();
        setUser(null);
    }

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};