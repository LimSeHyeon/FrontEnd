import React from 'react';

const colors = ["red", "yellow", "pink", "violet"]

export default function ColorBar({setInputColor}) {
    
    const changeColor = (newColor) => {
        setInputColor(newColor);
    }

    return (
        <div style={{display:'flex'}}>
            {colors.map(color=>(
                <div onClick={()=>{changeColor(color)}} style={{backgroundColor:color, width:10, height:10, borderRadius:10}}></div>
            ))}
        </div>
    )
}