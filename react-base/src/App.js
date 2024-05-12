import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoInput from './components/TodoInputComponent';

function App() {
  const [inputColor, setInputColor] = useState('red');

  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <TodoInput inputColor={inputColor}/>
    
  </div>
  );
}

export default App;
