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
          <svg xmlns="http://www.w3.org/2000/svg" width="83" height="51" fill="none" viewBox="0 0 83 51">
            <g class="Frame 71">
              <path stroke="#DD711F" stroke-width="5" d="M30.182 48c-5.65-.422-15.24-.41-22.206-.277-3.293.063-5.479-3.695-3.726-6.483l22.448-35.7c1.592-2.532 5.298-2.484 6.826.087L44.434 24l14.253 24m-28.505 0h28.505m-28.505 0 24.943-36.213c1.66-2.41 5.26-2.28 6.743.243L79.46 41.974C81.026 44.64 79.104 48 76.01 48H58.688" class="Vector 1" />
            </g>
          </svg>
          <h4 className='alignC'>山知</h4></a>
        <nav className="navigation">
          <ul className="menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url || '#'}>
                  <p>{item.engTitle}</p>
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