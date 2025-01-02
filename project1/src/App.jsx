import Quiz from './components/Quiz';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [backgroundStyles, setBackgroundStyles] = useState([]);

  // SVG source for the background

  const generateRandomPositionsAndRotations = () => {
    const positions = [];
    for (let i = 0; i < 3; i++) {
 /*控制背景圖影響破版*/

      const left = Math.random() * 60 + '%'; // Random left position within 0 to 60%
      const top = Math.random() * 60 + '%';  // Random top position within 0 to 80%
      const rotation = [8, 90, 180][i]; // Rotation angle for each
      positions.push({
        left,
        top,
        transform: `rotate(${rotation}deg)`,
        backgroundImage: `url('../public/02-web-images0102/contour1.svg')`,
      });
    }
    setBackgroundStyles(positions);
  };

  // Generate random positions and rotations when the component mounts
  useEffect(() => {
    generateRandomPositionsAndRotations();
  }, []);


  return (
    <>
      <h1>hi</h1>
      <div>
        <div id="banner" className='center'>
          
          <h1 className="heading center">Qu <span>i</span>z</h1>
        </div>
        <div className='wrapper alignC'>
        {/* 試卷區 */}
        <Quiz />
        {
          backgroundStyles.map((style, index) => (
            <div key={index} className="svg-background" style={{ left: style.left, top: style.top, transform: style.transform, backgroundImage: style.backgroundImage, }} >

            </div>))}
      </div>
      </div>


    </>
  )
}

export default App
