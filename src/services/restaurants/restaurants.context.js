import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext)

    const retrieveRestaurants = async (locationString) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(async () => {
            try {
                const result = await restaurantsRequest(locationString);
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
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

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