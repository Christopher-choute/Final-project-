import React, { useEffect, useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    return (
        <DataContext.Provider>
            value={{
                user,
            }}
        </DataContext.Provider>
    )
}