import React from 'react';

export default function Search({setSearchText}) {

    return (
        <div>
            <div style={{display:'flex'}}>
                <input onChange={e=>{setSearchText(e.target.value)}}/>
                <div style={{backgroundColor: '#e9e9e9', borderWidth:'1px', borderStyle:'solid'}}>검색</div>
            </div>
        </div>
    )
}