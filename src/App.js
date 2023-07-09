import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/category' Component={Category} />
        <Route path='/product-details' Component={ProductDetails} />
      </Routes>
    </>
  );
}

export default App;
