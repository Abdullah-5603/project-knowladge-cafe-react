import './App.css'
import { useState } from 'react';
import Blogs from './Component/Blog/Blogs';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [readTimes, setReadTime] = useState(0);

  const handleReadTime = (readTime) =>{
      const readTimeInt = parseInt(readTime);
      setReadTime(readTimes + readTimeInt);
  }

  return (
    <div className="App container">
      <Header></Header>
      <Blogs
      readTimes={readTimes}
      handleReadTime={handleReadTime}
      ></Blogs>
      
    </div>
  )
}

export default App;
