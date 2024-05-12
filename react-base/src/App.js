import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoInput from './components/TodoInputComponent';
import ColorBar from './components/ColorBarComponent';

function App() {
  const [inputColor, setInputColor] = useState('red');

  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <TodoInput inputColor={inputColor}/>
      <ColorBar setInputColor={setInputColor}/>
    
  </div>
  );
}

export default App;
