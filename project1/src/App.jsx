import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import News from './pages/News';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Footer from './components/Footer';
import Expbox from './components/Expbox';
import Explore from './pages/Explore';

function App() {

  return (
    <>
      {/* <h1>hi,App</h1> */}

      <Routes>
        <Route index element={<Home />} />
        {/* 默認首頁路由 */}
        <Route element={<Explore />} path='/explore'></Route>
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
