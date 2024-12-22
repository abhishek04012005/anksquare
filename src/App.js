import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import SocialMedia from './components/Services/SocialMedia/SocialMedia';
import WebDevelopment from './components/Services/WebDevelopment/WebDevelopment';
import AppDevelopment from './components/Services/AppDevelopment/AppDevelopment';
import EcommerceSpecialist from './components/Services/EcommerceSpecialist/EcommerceSpecialist';
import FlipkartAccountManagement from './components/Services/FlipkartAccountManagement/FlipkartAccountManagement';
import EtsyAccountMangement from './components/Services/EtsyAccountMangement/EtsyAccountMangement';

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
          <Route path="/anksquare/amazon-account-management" element={<EcommerceSpecialist/>} />
          <Route path="/anksquare/flipkart-account-management" element={<FlipkartAccountManagement/>} />
          <Route path="/anksquare/etsy-account-management" element={<EtsyAccountMangement/>} />
        </Routes>
        <ContactUs />
        <Footer />
      </div >
    </Router>
  );
}

export default App;
