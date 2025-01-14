import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Expbox from '../components/Expbox';

function Explore() {

  return (
    <>
     
      {/*撰寫區
  */}
      <Navbar />
      <header id="exP-banner" className='banner justFC'>
        <h1 className="heading center">Qu <span>i</span>z</h1>
      </header>
      <section id='explore' className='alignC'>
        <h3 className='title'>Height 500m Up
          <img src="./02-web-images0102/exPtitle.png" alt="" />
        </h3>
        <Expbox />
        <h3 className='title'>More
          <img src="./02-web-images0102/exPtitle.png" alt="" />
        </h3>
      </section>
      <Footer />

    </>
  )
}

export default Explore
