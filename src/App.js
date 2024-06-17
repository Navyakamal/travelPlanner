import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
        <Route path='/landing' element={<Landing></Landing>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      
      
      </Routes>   
      <Footer></Footer>
    </div>
  );
}

export default App;
