import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';

function App() {
  return (
    // <div className="App">
    //   <HelloWorld style={{textAlign: "center"}}/>
    // </div>
    <div className="App">
    {/* <HelloWorld/> */}
    <CaptionImage imgUrl="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7KPi/image/UGSyDK8noVFVfhr0PUyridMp6T8.JPG"
    caption="구름이미지"/>
    <CaptionImage imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsaOoe2KUxfphcXFyqy2q0LHCfMUIxbx8xA&s"
    caption="이건 트럭입니다."/>
  </div>
  );
}

export default App;
