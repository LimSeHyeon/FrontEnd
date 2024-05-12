import React from 'react';
import TodoItem from './TodoItemComponent';

export default function TodoList(todoList) {

    return (
        // 투두리스트 각각을 map해서 아이템 컴포넌트로 표현
        <div>
            <h3>Todo Items</h3>
            <ul>
                {todoList.map(todo=>{
                   <TodoItem></TodoItem> 
                })}
            </ul>
        </div>
    )
}