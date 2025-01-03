import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export default function Na() {
  return (
    <div className="wrap">
      <Navbar/>
      <hr />
      <Routes>
        <Route element={<Quiz/>} path='/'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<News />} path='/news'></Route>

      </Routes>
    </div>
  )
}