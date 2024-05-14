import React, {useEffect} from 'react';

export default function Search({todoList, searchText, setSearchText, searchTodo, setSearchTodo}) {

    useEffect(() => {
        if(searchText) {
            setSearchTodo(todoList.filter((todo) => {
                return todo.text.includes(searchText);
        }));
        } else {
            setSearchTodo([]);
        }
    }, [searchText, todoList]);

    return (
        <div>
            <div style={{display:'flex'}}>
                <input type="text" onChange={(e)=>{setSearchText(e.target.value)}}/>
                <div style={{backgroundColor: '#e9e9e9', borderWidth:'1px', borderStyle:'solid'}}>검색</div>
            </div>
        </div>
    )
}