import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import News from './pages/News';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';

function App() {


  return (
    <>
      {/* <h1>hi,App</h1> */}
      
      <Routes>
        <Route index element={<Home />} />{/* 默認首頁路由 */}
        <Route element={<Nutrition />} path='/nutrition'></Route>
        <Route element={<Quiz />} path='/quiz'></Route>
        <Route element={<About />} path='/about'></Route>

      </Routes>
{/*撰寫區
  */}
    </>
  )
}

export default App
