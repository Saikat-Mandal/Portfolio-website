"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type DarkModeContextType = {
    darkModeEnabled: boolean;
    toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("darkModeEnabled");
        if (stored !== null) {
            setDarkModeEnabled(stored === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkModeEnabled", darkModeEnabled.toString());
    }, [darkModeEnabled]);

    const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

    return (
        <DarkModeContext.Provider value={{ darkModeEnabled, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
};
