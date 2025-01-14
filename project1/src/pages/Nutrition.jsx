import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from './About';
import News from './News';
import Quiz from './Quiz';
import Home from './Home';
import Footer from '../components/Footer';

function Nutrition() {


  const foodItems = [
    {
      name: "燕麥片",
      description: "想增加蛋白質，可加入蛋白粉或拌入一些花生醬。在燕麥片上灑些堅果、種子或乾果。最後加上蜂蜜，就是美味又充實的早餐。",
      convenience: "33px",
      imgUrl: "./02-web-images0102/nutrition/01_ma-training-box-fitness-et-nutrition-2fWGcrPi164-unsplash.jpg"
    },
    {
      name: "雞蛋",
      description: "雞蛋富含蛋白質且容易準備，它的營養非常豐富，有助於產生能量。高濃度存在於雞蛋中的胺基酸「亮氨酸」也能促進肌肉恢復。對耐力訓練也有幫助。",
      convenience: "55px",
      imgUrl: "./02-web-images0102/nutrition/02_you-le-f53-_amS0iA-unsplash.jpg"
    },
    {
      name: "水果",
      description: "水果含有豐富的碳水化合物和美味的天然糖分，是遠足途中絕佳的零食。一個香脆的蘋果能緩慢釋放約 25 克碳水化合物和 4 克纖維的能量。",
      convenience: "100px",
      imgUrl: "./02-web-images0102/nutrition/04_chris-bahr-w0y4FfzoeAM-unsplash.jpg"
    },
    {
      name: "香蕉",
      description: "香蕉含有豐富的鉀和維生素 B6。在耐力訓練期間，香蕉甚至可以像碳水化合物飲料一樣有效提供能量。",
      convenience: "55px",
      imgUrl: "./02-web-images0102/nutrition/04_chris-bahr-w0y4FfzoeAM-unsplash.jpg"
    },
    {
      name: "乾果",
      description: "連續幾天徒步旅行，記得以一份乾果作為一天的開始。乾果也可以是燕麥片的美味加料。尋找不含添加糖的乾燥或冷凍乾燥水果。這會給您健康的能量提升，而不會有糖分過多的問題。",
      convenience: "33px", // Change to "33px", "55px", or "100%" based on convenience
      imgUrl: "./02-web-images0102/05_towfiqu-barbhuiya-4N0dLUmdLAY-unsplash.jpg"
    },
    {
      name: "蔬菜",
      description: "蔬菜含有每日建議攝取量 50% 的錳。錳是一種有助於新陳代謝的礦物質，可幫助身體分解碳水化合物。胡蘿蔔、綠葉蔬菜和甜菜根是其他可以在遠足前享用的蔬菜。胡蘿蔔是長時間背包旅行的最佳選擇 - 事實上，不需冷藏也能保存更久。",
      convenience: "100px", // Change to "33%", "55%", or "100%" based on convenience
      imgUrl: "./02-web-images0102/nutrition/06_rasa-kasparaviciene-kmaHZV6MNQI-unsplash.jpg"
    }
  ];
  return (
    <>
      <Navbar />
      <header id="NuT-banner" className='banner justFC'>
        <h1 className="heading center">Nutrit <span>i</span>on</h1>
      </header>
      
      <ul id="nuT-wrap" className="center">
        {foodItems.map((item, index) => (
          <li key={index} className="center">
            <ul>
              <li className="alignC">
                <figure>
                  <img src={item.imgUrl} alt={item.name} />
                </figure>
                <h3 >
                  {item.name}
                </h3>
              </li>
              <li>
                <h4>便利程度</h4>
                <span className="progress-bar" style={{ width: item.convenience }}></span>
              </li><li>            <h4>回血指數</h4>
                <span className="progress-bar"></span>
              </li>
            </ul>
            <div className="content">
              {item.description}
            </div>
          </li>
        ))}
        <button className="upD-btn">我要提供</button>
      </ul>
      {/* ul#nuT-wrap.center>(li.center>(h3>(figure>img)+(h4{便利程度}>span)*2{粽子})+div.content>lorem5)*5 */}
<Footer/>
    </>
  )
}

export default Nutrition
