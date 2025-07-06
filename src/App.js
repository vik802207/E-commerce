import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Frontend from './pages/Frontend';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Home />} />
        <Route path='/' element={<Frontend/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
