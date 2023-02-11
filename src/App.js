import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
