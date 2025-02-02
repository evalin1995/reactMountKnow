import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Expbox from '../components/Expbox';

const trailInfo = [
  {
    title: "健行筆記",
    description: "台灣各地的步道資訊、您評論、路線介紹及登山技巧。這個平台讓您能夠記錄自己每次健行的經歷，分享照片和故事，也可根據他人的經驗來規劃自己的健行行程。無論是初學者還是經驗豐富的登山者，都能在「健行筆記」找到適合自己的步道，並透過社群功能與其他健行愛好者互動交流。",
  },
  {
    title: "HikingBook",
    description: "完整的步道資訊平台。您可以查詢步道的詳細資料，包括步道的難度、距離、時間、路況等，並能夠根據個人需求搜尋最適合的路線。此外，HikingBook還允許您分享自己的登山經驗，並提供照片和評價，協助其他登山者規劃旅程。這個平台的目標是促進登山愛好者之間的交流與共享。",
  },
];

function Explore() {

  return (
    <>

      {/*撰寫區
  */}
      <Navbar />
      <header id="exP-banner" className='banner justFC'>
        <h1 className="heading center">Expl<span>o</span>re</h1>
      </header>
      <section id='explore' className='alignC'>


<img src="./02-web-images0102/valadzionak_volha3.png" className='exP-dec' alt="" />
<img src="./02-web-images0102/valadzionak_volha2.png" className='exP-dec' alt="" />
<img src="./02-web-images0102/valadzionak_volha1.png" className='exP-dec' alt="" />
        <Expbox />

      </section>
<section id="exP-end" className='alignC'>
      <h3 className='title'>More
        <img src="./02-web-images0102/exPtitle.png" alt="" />
      </h3>
      <div className='alignC'>
        {trailInfo.map((info, index) => (
          <div key={index} className="trail-info">
            <h3>{info.title}</h3>
            <p>{info.description}</p>
          </div>
        ))}
      </div></section>
      <Footer />

    </>
  )
}

export default Explore
