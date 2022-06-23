import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Views
import Home from './views/home/Home';
import SettingsProducts from './views/products/SettingsProducts';
import ProductView from './views/products/ProductView';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/storage/products' element={<SettingsProducts />} />
          <Route exact path='/detail/:id' element={<ProductView />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
