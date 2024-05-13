import { ThemeProvider } from './components/ThemeProvider';
import ThemeButton from './components/ThemeButton';
import MyPage from './components/Mypage';
import "bootstrap/dist/css/bootstrap.min.css";

// import TodoApp from './components/TodoApp';


function App() {
  return (
    <div className="App">
    return (
      <ThemeProvider>
        <MyPage/>
        <ThemeButton/>
      </ThemeProvider>
    );
    
  </div>
  );
}

export default App;
