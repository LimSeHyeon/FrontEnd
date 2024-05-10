import React, {useState, useCallback} from 'react';

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoList() {

    const [todoList, setTodoList] = useState([{
        'text': '세현아 잘하자',
        'color': colors[0]
    }]);

    const [activeColor, setActiveColor] = useState(colors[0]);

    const addTodo = useCallback(()=>{

    })
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Todo App</h1>
            <div style={{display:'flex'}}>
                <input type='text' style={{backgroundColor:activeColor}}/>
                <button onClick={addTodo}>입력</button>
            </div>
            <div style={{display:'flex'}}>
                {colors.map(color=>(
                    <div onClick={()=>{
                        setActiveColor(color);
                    }} style={{backgroundColor:color, width:10, height:10, borderRadius:10}}></div>
                ))}
            </div>
            <div>
                <h3>Todo Items</h3>
                <ul>
                    {todoList.map(todo=>(
                        <li style={{backgroundColor:todo.color}}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

}