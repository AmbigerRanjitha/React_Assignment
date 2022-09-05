
import './App.css';
import Heading from './components/heading';
import Para from './components/para';
import pic from './img2.png';
import pic1 from './mh.jpg';
import Link from './components/link';

function App() {
  return (
    <div className='App'>
        <img src={pic1} alt='mental health'/>
        <Heading/>
        <div className='para'>
          <Para/>
        </div>
        <div className='img'>
          <img src={pic} alt='mental health'/>
        </div>
        <div className='link'>
          <Link/>
        </div>
    </div>

  );
}

export default App;
