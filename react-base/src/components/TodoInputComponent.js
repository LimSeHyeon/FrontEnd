import React from 'react';

export default function TodoInput({inputColor}) {



    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input style={{backgroundColor:inputColor}} type="text"/>
                <button>입력</button>
            </div>
        </div>
    )
}