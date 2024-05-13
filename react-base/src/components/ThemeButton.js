import React, {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';

export default function ThemeButton() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick = {toggleTheme}>
            현재 테마 : {theme}
        </button>
    );
}