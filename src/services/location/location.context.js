import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("san francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = async (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        try {
            const result = await locationRequest(keyword.toLowerCase());
            const mappedResult = locationTransform(result);
            setIsLoading(false);
            setLocation(mappedResult);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        onSearch(keyword);
    }, []);

    return (
        <LocationContext.Provider
            value={{
                location,
                isLoading,
                error,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};