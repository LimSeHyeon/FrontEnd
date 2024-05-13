import React from 'react';

export default function TodoItem({color, text}) {
    
    return (
        <li style={{backgroundColor:color}}>{text}</li>
    )
}