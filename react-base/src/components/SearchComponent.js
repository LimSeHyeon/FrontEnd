import React, {useCallback} from 'react';

export default function Search({todoList, searchText, setSearchText, searchTodo, setSearchTodo}) {

    // const changeSearchText = useCallback((e)=> {
    //     setSearchText(e.target.value);
    //     console.log(searchText);
    // }, [searchText]);

    const changeSearchTodo = useCallback((e) => {
        setSearchTodo(todoList.filter((todo)=>{
            return todo.text.includes(e.target.value);
        }));
        console.log(searchTodo.length);
    }, [searchText]);

    return (
        <div>
            <div style={{display:'flex'}}>
                <input type="text" onChange={changeSearchTodo}/>
                <div style={{backgroundColor: '#e9e9e9', borderWidth:'1px', borderStyle:'solid'}}>검색</div>
            </div>
        </div>
    )
}