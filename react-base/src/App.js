import { ThemeProvider } from './components/ThemeProvider';
import ThemeButton from './components/ThemeButton';
import MyPage from './components/MyPage';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

// import TodoApp from './components/TodoApp';


function App() {
  return (
    <div className="App">
    return (
      <ThemeProvider>
        <Button variant="primary">기본</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="Info">Info</Button>
        <MyPage/>
        <ThemeButton/>
      </ThemeProvider>
    );
    
  </div>
  );
}

export default App;
