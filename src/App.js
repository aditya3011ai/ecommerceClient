import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetails/ProductDetail';
import Categories from './pages/categories/Categories';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Categories/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
