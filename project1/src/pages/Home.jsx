import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

  const contents = [
    {
      title: "",
      disC: ["跨出第一步，", "你能征服每一顆山頭，沉浸在森林的懷抱"],
      imgUrl: './02-web-images0102/index.JPG'
    }, {
      title: "日常訓練",
      disC: "集中精力增加腿部、臀部和核心肌肉的力量。小腿抬高、深蹲和弓步等運動是讓肌肉為登山遠足做好準備的絕佳方法。",
      imgUrl: './02-web-images0102/neom-m5Wj2ThjA14-unsplash.jpg'
    },
    {
      title: "營養攝取",
      disC: "選擇白米、乾麵條和麵包作為您的主食。",
      imgUrl: './02-web-images0102/05_towfiqu-barbhuiya-4N0dLUmdLAY-unsplash.jpg'
    },
    {
      title: "探索未知",
      disC: "探索台灣最受歡迎的輕鬆步道，本站蒐羅時程、地形、熱門程度。",
      imgUrl: './02-web-images0102/explore-image/home_oleg-kryzhanovskyi-BOdlu-2J2hg-unsplash.jpg'
    },
    {
      title: "登山知識測驗",
      disC: "測試您的戶外導航技巧。",
      imgUrl: ''
    },
  ];

  const Entree = () => (
    <svg width="48" height="42" fill="currentColor" viewBox="0 0 48 42">
      <use xlinkHref="#enter-icon" />
    </svg>
  );
  function Home() {

  return (
    <div id="index-page">
          <Navbar />
      <div className='alignC' id='index-banner'>
        <Link className="card" id='grid-l' >
          <img className='bg' src={contents[0].imgUrl} alt="" />
            <div className="content">
              {contents[0].disC.map((text, index) => (
                <h4 key={index}>{text}</h4> // Each piece of content will be wrapped in a <p> tag
              ))}
            </div>
        </Link>
        <div className="grid-r">
          <div className="row" id='row1'>
            <Link to={'/' || '#'} className="col card" id='col1' >
              <img className='bg' src={contents[1].imgUrl} alt="" />
                <div className="content">
                  <h3>{contents[1].title}</h3>
                  <p>{contents[1].disC}</p>
                </div>
                <span><h5>詳細內容</h5> <Entree /> </span>
            </Link>
            <div className="col" id='col2'>
              <Link to={'/nutrition' || '#'} className='card' >
                <img className='bg' src={contents[2].imgUrl} alt="" />
                  <div className="content">
                    <h3>{contents[2].title}</h3>
                    <p>{contents[2].disC}</p>
                  </div>
                  <span><h5>詳細內容</h5> <Entree /> </span>
              </Link>
              <Link to={'/explore' || '#'} className='card' >
                <img className='bg' src={contents[3].imgUrl} alt="" />
                  <div className="content">
                    <h3>{contents[3].title}</h3>
                    <p>{contents[3].disC}</p>
                  </div>
                  <span><h5>詳細內容</h5> <Entree /> </span>
              </Link>
            </div>
          </div>
          <Link to={'/quiz' || '#'} className="row card" id='row2' style={{
            // backgroundImage: `url(${contents[4].imgUrl})`
          }}>
              <div className="content">
                <h3>{contents[4].title}</h3>
                <p>{contents[4].disC}</p>
              </div>
              <span><h5>詳細內容</h5><Entree /> </span>
          </Link>
        </div>
      </div>

      {/* Define the SVG in the bottom */}
      <h1 style={{
        display:'none'
      }}>
      <svg  id='enter-icon' xmlns="http://www.w3.org/2000/svg" width="48" height="42" fill="currentColor" viewBox="0 0 48 42">
        <path d="M33 6h6c1.66 0 3 1.34 3 3v24c0 1.66-1.34 3-3 3h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3h6c4.969 0 9-4.031 9-9V9c0-4.969-4.031-9-9-9h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-.881 17.119a3.005 3.005 0 0 0 0-4.247l-12-12a3.005 3.005 0 0 0-4.247 0 3.005 3.005 0 0 0 0 4.247L22.753 18H3c-1.66 0-3 1.34-3 3s1.34 3 3 3h19.753l-6.881 6.881a3.005 3.005 0 0 0 0 4.247 3.005 3.005 0 0 0 4.247 0l12-12v-.01Z" />
      </svg>
      </h1>



    </div>
  )
}

export default Home
