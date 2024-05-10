import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkComponent from './components/BlinkComponent';
import CBlinkComponent from './components/CBlinkComponent';
import CountComponent from './components/CountComponent';
import {useState} from 'react';
import FocusInputButton from './components/RegisterInputButton';
import PrimeCalculator from './components/CalculatePrimes';

function App() {
  const [showCount, setShowCount] = useState(true);

  return (
    // <div className="App">
    //   <HelloWorld style={{textAlign: "center"}}/>
    // </div>
    <div className="App">
      
    {/* <HelloWorld/> */}
    {/* <CaptionImage imgUrl="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7KPi/image/UGSyDK8noVFVfhr0PUyridMp6T8.JPG"
    caption="구름이미지"/>
    <CaptionImage imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsaOoe2KUxfphcXFyqy2q0LHCfMUIxbx8xA&s"
    caption="이건 트럭입니다."/> */}
    {/* <BlinkComponent text="안녕하세요"/> */}
    {/* <CBlinkComponent text="반갑습니다"/> */}
    {/* <CountComponent/> */}

    {/* <button onClick={e=>{
      setShowCount(!showCount);
    }}>버튼</button>
    {showCount? <CountComponent/> : null} */}
    <FocusInputButton />
    <PrimeCalculator/>
    
  </div>
  );
}

export default App;
