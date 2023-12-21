'use client'

import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)