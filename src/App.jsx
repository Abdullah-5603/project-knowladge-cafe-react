import './App.css'
import Blogs from './Component/Blog/Blogs';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App container">
      <Header></Header>
      <Blogs></Blogs>
      
    </div>
  )
}

export default App;
