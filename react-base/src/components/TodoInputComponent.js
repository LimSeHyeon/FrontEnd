import React, {useCallback} from 'react';
import {TodoStore} from '../lib/utils';

export default function TodoInput({inputColor, text, setText, todoList, setTodoList}) {

    const changeText = useCallback((e) => {
        setText(e.target.value);
    }, [text]);

    const addTodo = useCallback((e) => {
        const todos = [...todoList, {text: text, color: inputColor}];

        setTodoList(todos);
        TodoStore.setTodo(todos);
                
    }, [text, inputColor, todoList]);

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input onChange={changeText} style={{backgroundColor:inputColor}} type="text"/>
                <button onClick={addTodo}>입력</button>
            </div>
        </div>
    )
}