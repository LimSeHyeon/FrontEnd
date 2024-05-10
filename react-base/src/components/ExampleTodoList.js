import React, {useState, useMemo} from 'react';

export default function TodoList(props) {
    const [text, setText] = useState("입력");
    const [arr, setArr] = useState([1,2,3]);
    const [color, setColor] = useState("white");
    
    const changeTodo = useCallback(() => {
        
    });



    return (
        <div>
            <h1>Todo App</h1>
            <div style={{display:"flex"}}>
                <input type="text" onChange={e=>{
                setText(e.target.value);
                }}/>
                <button onClick={changeTodo}>입력</button>
            </div>
            

            <div className='buttons'>
                <button style={{background:"white"}} onClick={(e)=>setColor("white")}></button>
                <button style={{background:"red"}} onClick={(e)=>setColor("red")}></button>
                <button style={{background:"yellow"}} onClick={(e)=>setColor("yellow")}></button>
                <button style={{background:"pink"}} onClick={(e)=>setColor("pink")}></button>
            </div>

            <h1>Todo Items</h1>

            <div>
                {arr.map(elem=><div>{elem}</div>)}
            </div>
        </div>
    )
}