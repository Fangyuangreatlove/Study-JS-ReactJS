import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import hết đống component vừa tạo vào đây
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ 
        padding: '15px', 
        backgroundColor: '#333', 
        color: 'white',
        marginBottom: '20px',
        display: 'flex',
        gap: '20px'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
      </nav>

      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;