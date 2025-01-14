import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const trails = [
  {
    name: "大屯山連峰步道",
    imgUrl: "./02-web-images0102/explore-image/timo-volz-HQhtcNf0M6I-unsplash.jpg",
    location: "臺北市",
    duration: "5小時",
    description: "芒草草原景觀、眺望臺北盆地的都會地景、觀賞大屯火山群的壯闊地形。",
    popIcons: 3,  // Number of PopIcons to display
    height: 1120  // Height in meters
  },
  {
    name: "象山步道",
    imgUrl: "./02-web-images0102/explore-image/winston-chen-kaza5j6oVxU-unsplash.jpg",
    location: "臺北市",
    duration: "1.5小時",
    description: "這條步道能讓你在短時間內登上象山，享受壯麗的臺北市區全景。",
    popIcons: 1,
    height: 183  // Height in meters
  },
  {
    name: "陽明山步道",
    imgUrl: "./02-web-images0102/explore-image/tsaiga-QiVVtHrrC6I-unsplash.jpg",
    location: "臺北市",
    duration: "3小時",
    description: "陽明山以其多樣的自然景觀和溫泉聞名，步道旁有美麗的自然植被。",
    popIcons: 3,
    height: 1120  // Height in meters
  },
  {
    name: "九份老街步道",
    imgUrl: "./02-web-images0102/explore-image/13_sam-chang-L6xHmv2R3G4-unsplash.jpg",
    location: "新北市",
    duration: "2小時",
    description: "穿過迷人的老街，並享受眺望海景與山景的美好步道。",
    popIcons: 1,
    height: 600  // Height in meters
  },
  {
    name: "金山萬里步道",
    imgUrl: "./02-web-images0102/explore-image/home_oleg-kryzhanovskyi-BOdlu-2J2hg-unsplash.jpg",
    location: "新北市",
    duration: "4小時",
    description: "這條步道提供絕美的海岸線景觀，並且能欣賞到壯麗的岩石景觀。",
    popIcons: 2,
    height: 600  // Height in meters
  },
  {
    name: "基隆山步道",
    imgUrl: "./02-web-images0102/explore-image/dan-senior-hxXwunc_zT4-unsplash.jpg",
    location: "基隆市",
    duration: "3小時",
    description: "基隆山步道是欣賞基隆港美景的好地方，尤其在日落時分極具魅力。",
    popIcons: 2,
    height: 600  // Height in meters
  },
  {
    name: "貓空步道",
    imgUrl: "./02-web-images0102/explore-image/colton-jones-IWU3ObbrktY-unsplash.jpg",
    location: "臺北市",
    duration: "2.5小時",
    description: "貓空步道提供了美麗的茶園景觀，以及眺望整個台北盆地的壯觀景致。",
    popIcons: 3,
    height: 800  // Height in meters
  },
  {
    name: "雙溪步道",
    imgUrl: "./02-web-images0102/explore-image/chijui-yeh-hrjrnKY3o3Y-unsplash.jpg",
    location: "新北市",
    duration: "3小時",
    description: "雙溪步道沿著溪流而行，是一條適合放鬆的森林步道。",
    popIcons: 1,
    height: 300  // Height in meters
  },
  {
    name: "四獸山步道",
    imgUrl: "./02-web-images0102/explore-image/arthur-tseng-fUXNbMf-exs-unsplash.jpg",
    location: "臺北市",
    duration: "2小時",
    description: "四獸山步道是另一條受歡迎的登山步道，提供臺北市的壯觀視野。",
    popIcons: 1,
    height: 500  // Height in meters
  },
  {
    name: "烏來步道",
    imgUrl: "./02-web-images0102/explore-image/arthur-tseng-EwqCtmlYBFs-unsplash.jpg",
    location: "新北市",
    duration: "4小時",
    description: "烏來以原住民文化和溫泉著稱，這條步道能讓您穿越茂密的熱帶雨林。",
    popIcons: 1,
    height: 1000  // Height in meters
  },
  {
    name: "東眼山步道",
    imgUrl: "./02-web-images0102/explore-image/kalen-emsley-mgJSkgIo_JI-unsplash.jpg",
    location: "新北市",
    duration: "5小時",
    description: "東眼山步道提供獨特的遠足體驗，並能一覽東北角的美麗景觀。",
    popIcons: 3,
    height: 1000  // Height in meters
  },
  // Additional trails
  {
    name: "梨山步道",
    imgUrl: "./02-web-images0102/explore-image/14_ethan-chan-JBMRROVY3Ic-unsplash.jpg",
    location: "南投縣",
    duration: "5.5小時",
    description: "梨山步道以其壯麗的高山景觀和無敵的雲海景致而著名。",
    popIcons: 2,
    height: 2000  // Height in meters
  },
  {
    name: "梅峰步道",
    imgUrl: "./02-web-images0102/explore-image/15_joseph-barrientos-xcC5ozHk_N8-unsplash.jpg",
    location: "南投縣",
    duration: "3.5小時",
    description: "梅峰步道經過一片美麗的梅樹林，讓您享受悠閒的自然步道。",
    popIcons: 2,
    height: 1500  // Height in meters
  },
  {
    name: "阿里山步道",
    imgUrl: "./02-web-images0102/explore-image/16_casey-horner-4rDCa5hBlCs-unsplash.jpg",
    location: "嘉義縣",
    duration: "6小時",
    description: "阿里山步道穿越廣闊的森林和高山區，並提供美麗的雲海和日出景觀。",
    popIcons: 3,
    height: 2600  // Height in meters
  },
  {
    name: "合歡山步道",
    imgUrl: "./02-web-images0102/explore-image/17_ruslan-bardash-i49LRkvtjA0-unsplash.jpg",
    location: "南投縣",
    duration: "4小時",
    description: "合歡山步道以其壯麗的高山景觀、草原與藍天相映成趣，是登山健行的好地方。",
    popIcons: 3,
    height: 3400  // Height in meters
  },
  {
    name: "台中大雪山步道",
    imgUrl: "./02-web-images0102/explore-image/18_yehyunxiang-mrCVSIP4bK4-unsplash.jpg",
    location: "台中市",
    duration: "7小時",
    description: "大雪山步道穿越茂密的森林與高山，並能一覽壯觀的雪山風光。",
    popIcons: 2,
    height: 3100  // Height in meters
  },
  {
    name: "雪山步道",
    imgUrl: "./02-web-images0102/explore-image/19_eric-barbeau-dnVmJGGuFdo-unsplash.jpg",
    location: "台中市",
    duration: "9小時",
    description: "雪山步道是台灣挑戰性較高的登山路線之一，能登頂雪山並俯瞰壯麗景色。",
    popIcons: 3,
    height: 3886  // Height in meters
  },
  {
    name: "桃山步道",
    imgUrl: "./02-web-images0102/explore-image/20_anders-j-snMjp50emQ0-unsplash.jpg",
    location: "新北市",
    duration: "5.5小時",
    description: "桃山步道提供豐富的自然景觀，並且能登高望遠，俯瞰大台北地區。",
    popIcons: 2,
    height: 1810  // Height in meters
  }
,{
  name: "大湖山步道",
  imgUrl: "./02-web-images0102/explore-image/21_lucas-chizzali-IkOJFO65FWc-unsplash.jpg",
  location: "桃園市",
  duration: "4.5小時",
  description: "大湖山步道提供壯麗的山脈景觀，並可遠足至大湖山頂，眺望周圍美景。",
  popIcons: 2,
  height: 1300
},
{
  name: "大安山步道",
  imgUrl: "./02-web-images0102/explore-image/22_ethan-chan-yyFqdW3_Zc8-unsplash.jpg",
  location: "新北市",
  duration: "3小時",
  description: "這條步道通過原始森林，並提供壯觀的山景和都市全景。",
  popIcons: 2,
  height: 800
},
{
  name: "龍岡步道",
  imgUrl: "./02-web-images0102/explore-image/23_muhammad-azzam-jrydV4LC6kQ-unsplash.jpg",
  location: "新竹市",
  duration: "2小時",
  description: "沿著溪流的步道，有著優美的自然景觀，適合家庭出遊。",
  popIcons: 1,
  height: 400
},
{
  name: "四季山步道",
  imgUrl: "./02-web-images0102/explore-image/12_an_vision-tg6bXxR_XWE-unsplash.jpg",
  location: "宜蘭縣",
  duration: "6小時",
  description: "四季山步道四季皆可享受，春夏秋冬皆有不同風景。",
  popIcons: 3,
  height: 1500
},
{
  name: "雙溪步道",
  imgUrl: "./02-web-images0102/explore-image/11_jeff-ma-9x6PQOcPvYk-unsplash.jpg",
  location: "新北市",
  duration: "2小時",
  description: "雙溪步道沿著溪流而行，景色宜人，適合放鬆心情。",
  popIcons: 1,
  height: 300
},
{
  name: "富貴角步道",
  imgUrl: "./02-web-images0102/explore-image/24_yehyunxiang-PBpInGcIYXo-unsplash.jpg",
  location: "新北市",
  duration: "3.5小時",
  description: "富貴角步道是觀賞北海岸壯麗景觀的好地方，尤其在日落時分。",
  popIcons: 2,
  height: 600
},
{
  name: "東部海岸步道",
  imgUrl: "./02-web-images0102/explore-image/25_angela-lo-VJcsDjJuPcc-unsplash.jpg",
  location: "花蓮縣",
  duration: "5小時",
  description: "東部海岸步道提供壯麗的海景，適合喜愛自然和海邊的登山者。",
  popIcons: 3,
  height: 1000
}
];

const PopIcon = () => (
  <svg width="68" height="77" fill="currentColor" viewBox="0 0 68 77">
    <use xlinkHref='#popIcon' />
  </svg>
)
const filterTrailsByHeight = (trails, selectedHeight) => {
  return trails.filter(trail => {
    if (!selectedHeight) return true; // If no option is selected, return all trails
    if (selectedHeight === "over1501M") {
      return trail.height > 1501; // Return trails with height greater than 1501M
    }
  
    const heightLimit = parseInt(selectedHeight);
    return trail.height < heightLimit;
  });
};
export default function ExpBox() {
  // State for the selected height option
  const [selectedHeight, setSelectedHeight] = useState('');

  // Filter trails based on the selected height
  const filteredTrails = filterTrailsByHeight(trails, selectedHeight);

  return (
    <>
      {/* Select dropdown for height filter */}
      <label htmlFor="selectH">請選擇高度</label>
      <select
        value={selectedHeight}
        onChange={(e) => setSelectedHeight(e.target.value)}
      id='selectH'>
        <option value="">All</option>
        <option value="500">500公尺以下</option>
        <option value="1000">1000公尺以下</option>
        <option value="1500">1500公尺以下</option>
        <option value="over1501M">1501公尺以上</option>

      </select>

      {/* Display filtered trails in the list */}
      <ul className="exPwrapper alignC">
        {filteredTrails.map((trail, index) => (
          <li className="exPcard" key={index}>
            <Link>
              <img alt={trail.name} src={trail.imgUrl} />
              <h3>{trail.name}</h3>
            </Link>
            <div>
              <h4>{trail.location}</h4>
              <h4>全程<span>{trail.duration}</span></h4>
              <h4>熱門程度<span>
                {Array.from({ length: trail.popIcons }).map((_, iconIndex) => (
                  <PopIcon key={iconIndex} />
                ))}
              </span></h4>
              <p>{trail.description}</p>
            </div>
          </li>
        ))}
        <button className="upD-btn">我要提供</button>
      </ul>
      {/* <ul className="exPwrapper alignC">
  {
    trails.map((trail, index) => (
      <li className="exPcard" key={index}>
        <Link><img alt={trail.name} src={trail.imgUrl} />
          <h3>{trail.name}</h3></Link>
        <div><h4>{trail.location}</h4>
          <h4>全程<span>{trail.duration}</span></h4>
          <h4>熱門程度<span>
            {Array.from({ length: trail.popIcons }).map((_, iconIndex) => (
              <PopIcon key={iconIndex} />
            ))}
          </span></h4>
          <p>{trail.description}</p></div>
      </li>
    ))
  }
        <button className="upD-btn">我要提供</button>

</ul> */}
      {/* ul.exPwrapper>(li.exPcard>((h3{步道名稱}>img)+(h4{位置}>span{123km})*3+p{lorem9}))*3 */}
      <p style={{
        display: 'none'
      }}>
        <svg id='popIcon' xmlns="http://www.w3.org/2000/svg" width="68" height="77" fill="currentColor" viewBox="0 0 68 77">
          <g clip-path="url(#a)">
            <path d="M34 38.5a19.52 19.52 0 0 0 13.738-5.638 19.161 19.161 0 0 0 5.69-13.612 19.161 19.161 0 0 0-5.69-13.612A19.52 19.52 0 0 0 34 0a19.52 19.52 0 0 0-13.738 5.638 19.161 19.161 0 0 0-5.69 13.612 19.161 19.161 0 0 0 5.69 13.612A19.52 19.52 0 0 0 34 38.5Zm-6.937 7.219C12.113 45.719 0 57.719 0 72.533 0 75 2.019 77 4.508 77h58.984C65.982 77 68 75 68 72.533 68 57.72 55.888 45.72 40.937 45.72H27.063Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h68v77H0z" />
            </clipPath>
          </defs>
        </svg>
      </p>
    </>
  )
}