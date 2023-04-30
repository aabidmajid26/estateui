// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';


import {
    Routes,
    Route
} from 'react-router-dom';


function App() {
  return (
    <div className='full-page'>
        <Header />
        <div className='page-body'>
            <Routes>
                <Route path="/" element={ <Body /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/about" element={ <About /> } />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
