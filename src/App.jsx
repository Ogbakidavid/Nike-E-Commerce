import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import SuperQuality from './components/SuperQuality';
import Services from './components/Services';
import SpecialOffer from './components/SpecialOffer';
import CustomerReview from './components/CustomerReview';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Product />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReview />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
