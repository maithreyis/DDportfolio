import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudyDetail from './pages/CaseStudyDetail';
import HowIThink from './pages/HowIThink';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/utils/ScrollToTop'; // Utility I'll need to create

// Placeholder components until real ones are made
const Placeholder = ({ title }) => <div className="container py-20"><h1 className="heading-lg">{title}</h1></div>;

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* TODO: Create this to ensure nav to top on route change */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/how-i-think" element={<HowIThink />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Temporary internal component for ScrollToTop logic to avoid extra file immediately, 
// actually I'll just make the file next.
// Renaming ScrollToTop usage above to just be inline for now? No, better to separate.
export default App;
