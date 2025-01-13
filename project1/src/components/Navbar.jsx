import { Link } from "react-router-dom"


export default function Navbar() {
    
  const navItems = [
    { engTitle: 'Explore', title: '探索', url: '/explore' },
    { engTitle: 'Wear', title: '裝備', url: '/wear' },
    { engTitle: 'Train', title: '訓練', url: '/about' },
    { engTitle: 'Nutrition', title: '營養', url: '/nutrition' },
    { engTitle: 'Quiz', title: '測驗', url: '/quiz' },
  ];
  

    return (
        <>
         <header id="topbar" className='alignC'>
        <a href="" className="logo">
          <img src="./02-web-images0102/contour2.svg" alt="" />
          <h4 className='alignC'>山知</h4></a>
        <nav className="navigation">
            <ul className="menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url || '#'}>
                  {item.engTitle}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
              
              {/* <li>
                <Link to='/about'>關於我們</Link>
              </li>
              <li>
                <Link to='/news'>最新消息</Link>
              </li> */}
              </ul></nav>
      </header>

            {/* <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/news">                NEWS</Link></li>
                <li><a href="./html/masonry.html" target="_blank">Mount Masonry</a></li>
                <li><a href="./html/carousel.html" target="_blank">NEW Curry</a></li>
                <li><a href="./html/cycle.html" target="_blank">Mount Cycle</a></li>
                <li><Link to="/login">登入</Link></li>
                <li><Link to="/user">使用者使用者資料</Link></li>


            </ul> */}
        </>
    )
}