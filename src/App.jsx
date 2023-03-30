import './App.css'
import { useState } from 'react';
import Blogs from './Component/Blog/Blogs';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [readTimes, setReadTime] = useState(0);
  const [bookmarks, setBookmark] = useState([]);

  const handleReadTime = (readTime) =>{
    const readTimeInt = parseInt(readTime);
    setReadTime(readTimes + readTimeInt);
  }

  const handleBookmark = (bookmark) => {
    if (bookmarks.includes(bookmark)) {
      toast('This bookmark is already added');
      return;
    }
    const newBookmark = [...bookmarks, bookmark];
    setBookmark(newBookmark);
  }
  
  return (
    <div className="App container">
      <Header></Header>
      <Blogs
      readTimes={readTimes}
      bookmarks={bookmarks}
      handleReadTime={handleReadTime}
      handleBookmark={handleBookmark}
      ></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App;
