import React from 'react';

const colors = ["red", "yellow", "pink", "violet"];

export default function TodoApp() {
    const todoList = [];
    // const [activeColor, setActiveColor] = useState(colors[0]);

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input type="text" />
                <button>입력</button>
            </div>
            <div>
                {colors.map(color=>{
                    <div style={{display: 'flex', flexDirection: 'row'}}/>
                })}
            </div>
            <div>
                <h3>Todo List</h3>
                <ul>
                    {todoList.map(elem=> {
                        return <li>{elem}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}