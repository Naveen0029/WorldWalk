import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import ContactsUs from './pages/ContactsUs';
import Europe from './pages/Europe';
import Services from './pages/Services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactsUs />} />
        <Route path='/europe' element={<Europe />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
