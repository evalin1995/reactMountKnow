import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import News from './pages/News';
import Quiz from './pages/Quiz';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <h1>hi</h1> */}
     
          <Navbar />
        <Routes>
        <Route index element={<Home />} /> {/* 默認首頁路由 */}

          <Route element={<Quiz />} path='/quiz'></Route>
          <Route element={<About />} path='/about'></Route>
          <Route element={<News />} path='/news'></Route>

        </Routes>
     


    </>
  )
}

export default App
