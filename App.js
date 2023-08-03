// import logo from './logo.svg';
// import './App.css';
import Home from './Home';
import Blogfrom from './Blogfrom';
import Blog from './Blog';
import SingleBlog from './Single_component';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';

  
function App() {
  return (
    <body className='body'>
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/blogfrom' element={<Blogfrom/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
