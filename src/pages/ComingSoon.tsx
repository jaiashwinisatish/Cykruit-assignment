import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ComingSoon = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-50 border border-brand-100 text-brand-600"
        >
          <Hammer className="w-10 h-10" />
        </motion.div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Under Construction</h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          We're busy architecting this part of the ecosystem. 
          The Cykruit mission is expanding, and this module will be live soon.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/">
            <Button variant="secondary" className="px-8 border-slate-200">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="px-8">Join the Waitlist</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
