import React, {useCallback} from 'react';

export default function TodoInput({inputColor, text, setText}) {

    const changeText = useCallback((e) => {
        setText(e.target.value);
    }, [text]);

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input onChange={changeText} style={{backgroundColor:inputColor}} type="text"/>
                <button>입력</button>
            </div>
        </div>
    )
}