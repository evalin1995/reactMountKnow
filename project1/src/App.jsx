import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import News from './pages/News';
import Quiz from './pages/Quiz';

function App() {
  const contents = [
    {
      title: "",
      disC: "跨出第一步，你能征服每一顆山頭，沈浸在森林的懷抱",
      imgUrl:''
    },{
      title: "日常訓練",
      disC: "集中精力增加腿部、臀部和核心肌肉的力量。小腿抬高、深蹲和弓步等運動是讓肌肉為登山遠足做好準備的絕佳方法。",
      imgUrl:''
    },
    {
      title: "營養攝取",
      disC: "選擇白米、乾麵條和麵包作為您的主食。",
      imgUrl:''
    },
    {
      title: "探索未知",
      disC: "探索台灣最受歡迎的輕鬆步道，本站蒐羅時程、地形、熱門程度。",
      imgUrl:''
    },
    {
      title: "登山知識測驗",
      disC: "測試您的戶外導航技巧。",
      imgUrl:''
    },
  ];
  return (
    <>
      <h1>hi</h1>
      <header id="topbar" className='alignC'>
        <a href="" className="logo"><img src="public\02-web-images0102\contour2.svg" alt="" /><h4 className='alignC'>山知</h4></a>
        <nav className="navigation">
          <Navbar />

        </nav>
      </header>
      <Routes>
        <Route element={<Quiz />} path='/quiz'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<News />} path='/news'></Route>

      </Routes>
      <div className='alignC' style={{
        height: 760,width:1380
      }}>
        <figure className="grid-l"></figure>
        <div className="grid-r">
          <div className="row" id='row1'>
            <div className="col card" id='col1'>
              <div className="content">
              <h3>日常訓練</h3>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti provident quasi, optio sapiente veniam dolor illo aspernatur illum neque, corporis vero at earum hic, odit ea cupiditate laborum tenetur!</h5>
              </div>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="48" height="42" fill="currentColor" viewBox="0 0 48 42">
  <path d="M33 6h6c1.66 0 3 1.34 3 3v24c0 1.66-1.34 3-3 3h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3h6c4.969 0 9-4.031 9-9V9c0-4.969-4.031-9-9-9h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-.881 17.119a3.005 3.005 0 0 0 0-4.247l-12-12a3.005 3.005 0 0 0-4.247 0 3.005 3.005 0 0 0 0 4.247L22.753 18H3c-1.66 0-3 1.34-3 3s1.34 3 3 3h19.753l-6.881 6.881a3.005 3.005 0 0 0 0 4.247 3.005 3.005 0 0 0 4.247 0l12-12v-.01Z"/>
</svg></a>
            </div>
            <div className="col card" id='col2'>
              <div className='card'></div>
              <div className='card'></div>
            </div>
          </div>
          <div className="row card" id='row2'>            </div>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="42" fill="currentColor" viewBox="0 0 48 42">
  <path d="M33 6h6c1.66 0 3 1.34 3 3v24c0 1.66-1.34 3-3 3h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3h6c4.969 0 9-4.031 9-9V9c0-4.969-4.031-9-9-9h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-.881 17.119a3.005 3.005 0 0 0 0-4.247l-12-12a3.005 3.005 0 0 0-4.247 0 3.005 3.005 0 0 0 0 4.247L22.753 18H3c-1.66 0-3 1.34-3 3s1.34 3 3 3h19.753l-6.881 6.881a3.005 3.005 0 0 0 0 4.247 3.005 3.005 0 0 0 4.247 0l12-12v-.01Z"/>
</svg>


    </>
  )
}

export default App
