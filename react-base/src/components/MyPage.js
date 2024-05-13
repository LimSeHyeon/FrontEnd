import React, {useContext} from "react";
import { ThemeContext } from './ThemeProvider';

export default function MyPage() {
    // const { theme } = useTheme()
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{minHeight:600, backgroundColor:theme==='light' ? '#e9e9e9' : 'black'} }>
            <div style = {{minHeight: 600}}>
                MyPage
            </div>
        </div>
    )
}