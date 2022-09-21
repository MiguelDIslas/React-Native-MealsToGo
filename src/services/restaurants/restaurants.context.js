import React, { useState, createContext, useEffect } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = async () => {
        setIsLoading(true);
        setTimeout(async () => {
            try {
                const result = await restaurantsRequest();
                const mappedResults = await restaurantsTransform(result);
                setIsLoading(false);
                setRestaurants(mappedResults);
            } catch (error) {
                setIsLoading(false);
                setError(error);
            }
        }, 1000);
    };

    useEffect(() => {
        retrieveRestaurants();
    }, []);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};