import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import PricingPage from './pages/PricingPage';
import TrainersPage from './pages/TrainersPage';

import StandaloneJobsPage from './pages/StandaloneJobsPage';
import InfoPage, { AboutContent, ContactContent, LegalContent } from './pages/InfoPage';
import ComingSoon from './pages/ComingSoon';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<LoginPage isSignup />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/jobs" element={<StandaloneJobsPage />} />
          
          {/* Info Pages */}
          <Route path="/about" element={<InfoPage title="About Cykruit" subtitle="Securing the future of cybersecurity talent." content={<AboutContent />} />} />
          <Route path="/contact" element={<InfoPage title="Contact Us" subtitle="We're here to help you secure your path." content={<ContactContent />} />} />
          <Route path="/privacy" element={<InfoPage title="Privacy Policy" subtitle="How we protect your professional data." content={<LegalContent />} />} />
          <Route path="/terms" element={<InfoPage title="Terms of Service" subtitle="Guidelines for the cybersecurity elite network." content={<LegalContent />} />} />
          <Route path="/legal" element={<InfoPage title="Legal Information" content={<LegalContent />} />} />
          
          {/* Resources & Future Modules */}
          <Route path="/roadmap" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/guides" element={<ComingSoon />} />
          <Route path="/certifications" element={<ComingSoon />} />
          <Route path="/community" element={<ComingSoon />} />
          
          <Route path="/dashboard/*" element={<JobSeekerDashboard />} />
          
          {/* Fallback */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
