import React from 'react';
import TodoItem from './TodoItemComponent';

export default function SearchResult({searchTodo}) {

    return (
        <div>
            <h3>검색 결과</h3>
            <ul>
                {searchTodo.map(todo=>(
                    <TodoItem color={todo.color} text={todo.text} />
                ))}
            </ul>
        </div>
    )
}