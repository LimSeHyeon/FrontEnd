import React, {useCallback} from 'react';
import TodoItem from './TodoItemComponent';

export default function SearchResult({todoList, searchText}) {

    let tmpTodo = [];

    

    return (
        <div>
            <h3>검색 결과</h3>
            <ul>
                {tmpTodo.map(todo=>(
                    <TodoItem color={todo.color} text={todo.text} />
                ))}
            </ul>
        </div>
    )
}