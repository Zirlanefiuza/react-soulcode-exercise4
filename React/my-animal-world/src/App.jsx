import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componets/footer/Footer';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import './App.css';
import Navbar from './componets/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
