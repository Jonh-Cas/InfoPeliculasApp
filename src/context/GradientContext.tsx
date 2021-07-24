import React, { createContext, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors : ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); // TODO Definir tipo 

export const GrandeintProvider = ({children}: any) => {
    
    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (colors: ImageColors) => {
        setColors(colors);
    }

    const setPrevMainColors = (colors: ImageColors) => {
        setPrevColors(colors)
    }

    return(
        <GradientContext.Provider
        value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}
        >
            {children}
        </GradientContext.Provider>
    );

}