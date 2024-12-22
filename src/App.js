import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import SocialMedia from './components/Services/SocialMedia/SocialMedia';
import WebDevelopment from './components/Services/WebDevelopment/WebDevelopment';
import AppDevelopment from './components/Services/AppDevelopment/AppDevelopment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/anksquare" element={<Main />} />
          <Route path="/anksquare/social-media" element={<SocialMedia />} />
          <Route path="/anksquare/web-development" element={<WebDevelopment />} />
          <Route path="/anksquare/app-development" element={<AppDevelopment />} />
        </Routes>
        <ContactUs />
        <Footer />
      </div >
    </Router>
  );
}

export default App;
