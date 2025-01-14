import { Link, Route, Routes } from 'react-router-dom';

const trails = [
  {
    name: "大屯山連峰步道",
    imgUrl: "./02-web-images0102/explore-image/timo-volz-HQhtcNf0M6I-unsplash.jpg",
    location: "臺北市",
    duration: "5小時",
    description: "芒草草原景觀、眺望臺北盆地的都會地景、觀賞大屯火山群的壯闊地形，",
    popIcons: 3  // Number of PopIcons to display

  },
  {
    name: "象山步道",
    imgUrl: "./02-web-images0102/explore-image/winston-chen-kaza5j6oVxU-unsplash.jpg",
    location: "臺北市",
    duration: "1.5小時",
    description: "這條步道能讓你在短時間內登上象山，享受壯麗的臺北市區全景。",
    popIcons: 1  // Number of PopIcons to display

  },
  {
    name: "陽明山步道",
    imgUrl: "./02-web-images0102/explore-image/tsaiga-QiVVtHrrC6I-unsplash.jpg",
    location: "臺北市",
    duration: "3小時",
    description: "陽明山以其多樣的自然景觀和溫泉聞名，步道旁有美麗的自然植被。",
    popIcons: 3  // Number of PopIcons to display

  },
  {
    name: "九份老街步道",
    imgUrl: "./02-web-images0102/explore-image/kalen-emsley-mgJSkgIo_JI-unsplash.jpg",
    location: "新北市",
    duration: "2小時",
    description: "穿過迷人的老街，並享受眺望海景與山景的美好步道。",
    popIcons: 1

  },
  {
    name: "金山萬里步道",
    imgUrl: "./02-web-images0102/explore-image/home_oleg-kryzhanovskyi-BOdlu-2J2hg-unsplash.jpg",
    location: "新北市",
    duration: "4小時",
    description: "這條步道提供絕美的海岸線景觀，並且能欣賞到壯麗的岩石景觀。",
    popIcons: 2

  },
  {
    name: "基隆山步道",
    imgUrl: "./02-web-images0102/explore-image/dan-senior-hxXwunc_zT4-unsplash.jpg",
    location: "基隆市",
    duration: "3小時",
    description: "基隆山步道是欣賞基隆港美景的好地方，尤其在日落時分極具魅力。",
    popIcons: 2

  },
  {
    name: "貓空步道",
    imgUrl: "./02-web-images0102/explore-image/colton-jones-IWU3ObbrktY-unsplash.jpg",
    location: "臺北市",
    duration: "2.5小時",
    description: "貓空步道提供了美麗的茶園景觀，以及眺望整個台北盆地的壯觀景致。",
    popIcons: 3

  },
  {
    name: "雙溪步道",
    imgUrl: "./02-web-images0102/explore-image/chijui-yeh-hrjrnKY3o3Y-unsplash.jpg",
    location: "新北市",
    duration: "3小時",
    description: "雙溪步道沿著溪流而行，是一條適合放鬆的森林步道。",
    popIcons: 1

  },
  {
    name: "四獸山步道",
    imgUrl: "./02-web-images0102/explore-image/arthur-tseng-fUXNbMf-exs-unsplash.jpg",
    location: "臺北市",
    duration: "2小時",
    description: "四獸山步道是另一條受歡迎的登山步道，提供臺北市的壯觀視野。",
    popIcons: 1

  },
  {
    name: "烏來步道",
    imgUrl: "./02-web-images0102/explore-image/arthur-tseng-EwqCtmlYBFs-unsplash.jpg",
    location: "新北市",
    duration: "4小時",
    description: "烏來以原住民文化和溫泉著稱，這條步道能讓您穿越茂密的熱帶雨林。",
    popIcons: 1

  },
  {
    name: "十份步道",
    imgUrl: "./02-web-images0102/explore-image/an_vision-tg6bXxR_XWE-unsplash.jpg",
    location: "新北市",
    duration: "3小時",
    description: "十份的步道充滿歷史與文化，並且能欣賞到著名的天燈放飛場景。",
    popIcons: 2

  },
  {
    name: "東眼山步道",
    imgUrl: "./02-web-images0102/explore-image/alex-azabache-1BGo0goiiIE-unsplash.jpg",
    location: "新北市",
    duration: "5小時",
    description: "東眼山步道提供獨特的遠足體驗，並能一覽東北角的美麗景觀。",
    popIcons: 3  // Number of PopIcons to display

  }
];
const PopIcon = () => (
  <svg width="68" height="77" fill="currentColor" viewBox="0 0 68 77">
    <use xlinkHref='#popIcon' />
  </svg>
)
export default function ExpBox(){
  return (
  <>
  <ul className="exPwrapper alignC">
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

</ul>
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