import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import SocialMedia from './components/Services/SocialMedia/SocialMedia';
import WebDevelopment from './components/Services/WebDevelopment/WebDevelopment';
import AppDevelopment from './components/Services/AppDevelopment/AppDevelopment';
import AccountManagementDetails from './components/Services/AccountMangement/AccountManagementDetails/AccountManagementDetails';
import SocialMediaDetails from './components/Services/SocialMedia/SocialMediaDetails/SocialMediaDetails';
import WebDevelopmentService from './components/Services/WebDevelopment/WebDevelopmentService/WebDevelopmentService';
import AppDevelopmentService from './components/Services/AppDevelopment/AppDevelopmentService/AppDevelopmentService';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/anksquare" element={<Main />} />
          <Route path="/anksquare/account-management/:serviceType" element={<AccountManagementDetails />} />
          <Route path="/anksquare/social-media-ads/:serviceType" element={<SocialMediaDetails />} />
          <Route path="/anksquare/web-development/:serviceType" element={<WebDevelopmentService />} />
          <Route path="/anksquare/app-development/:serviceType" element={<AppDevelopmentService />} />
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
