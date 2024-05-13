import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoInput from './components/TodoInputComponent';
import ColorBar from './components/ColorBarComponent';
import TodoList from './components/TodolistComponent';
import Search from './components/SearchComponent';
import SearchResult from './components/SearchResultComponent';

function App() {
  const [inputColor, setInputColor] = useState('red');
  const [text, setText] = useState('빠샤빠샤 화이팅');
  const [todoList, setTodoList] = useState([{
    'text': '세현아 잘하자',
    'color': 'red'
  }]);
  const [searchText, setSearchText] = useState('');
  const [searchTodo, setSearchTodo] = useState([]);

  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <TodoInput inputColor={inputColor} text={text} setText={setText} todoList={todoList} setTodoList={setTodoList}/>
      <ColorBar setInputColor={setInputColor}/>
      <TodoList todoList={todoList}/>
      <Search todoList={todoList} searchText={searchText} setSearchText={setSearchText} searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      <SearchResult searchTodo={searchTodo}/>
      
    
  </div>
  );
}

export default App;
