import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfoPageProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const InfoPage = ({ title, subtitle, content }: InfoPageProps) => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h1>
          {subtitle && <p className="text-xl text-slate-600 font-medium">{subtitle}</p>}
        </motion.div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;

// Pre-defined content blocks
export const AboutContent = () => (
  <>
    <p>
      Cykruit is the world's first dedicated recruitment and career development ecosystem built exclusively for the cybersecurity industry. 
      In an era where digital threats are evolving faster than traditional job boards can adapt, we provide a precision matching engine 
      that connects specialized talent with the organizations that need them most.
    </p>
    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Our Mission</h3>
    <p>
      Our mission is to bridge the global security skills gap by providing transparency, verification, and expert-led training paths. 
      We believe that the right match doesn't just fill a seat—it secures a future.
    </p>
    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Built by Experts, For Experts</h3>
    <p>
      The Cykruit team consists of veteran security architects, penetration testers, and recruitment specialists who understand the 
      nuance between GRC and Red Teaming. We've built the logic that ensures your specific toolset is recognized and valued.
    </p>
  </>
);

export const ContactContent = () => (
  <>
    <p>
      We're here to help you secure your path. Whether you're a candidate looking for a mission, a recruiter building a world-class team, 
      or a trainer looking to share your expertise, our team is ready to assist.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <h4 className="font-bold text-slate-900 mb-2">General Inquiries</h4>
        <p className="text-sm">hello@cykruit.com</p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <h4 className="font-bold text-slate-900 mb-2">Sales & Business</h4>
        <p className="text-sm">partnerships@cykruit.com</p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <h4 className="font-bold text-slate-900 mb-2">Technical Support</h4>
        <p className="text-sm">support@cykruit.com</p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <h4 className="font-bold text-slate-900 mb-2">Office</h4>
        <p className="text-sm">123 Security Blvd, Cyber City, Digital Realm</p>
      </div>
    </div>
  </>
);

export const LegalContent = () => (
  <>
    <h3 className="text-2xl font-bold text-slate-900 mb-6">1. Data Privacy</h3>
    <p>We take your professional data seriously. Every profile on Cykruit is encrypted, and your identity remains anonymous until you choose to reveal it to a verified employer.</p>
    
    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Verified Listings</h3>
    <p>We manually vet every employer on our platform to prevent data harvesting and fraudulent job postings.</p>

    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Professional Conduct</h3>
    <p>Cykruit is a professional network. Any misuse of the platform for unauthorized security research or exploitation of other members will result in an immediate and permanent ban.</p>
  </>
);
