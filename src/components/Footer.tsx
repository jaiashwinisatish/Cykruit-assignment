import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MessageSquare, Briefcase, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-600 p-2 rounded-xl">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Cykruit</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The first dedicated ecosystem for cybersecurity talent, training, and verified career growth. Join the elite network.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/cykruit" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-brand-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/cykruit" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-brand-600 transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="https://github.com/cykruit" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-brand-600 transition-colors">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/jobs" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Browse Jobs</Link></li>
              <li><Link to="/trainers" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Find Trainers</Link></li>
              <li><Link to="/pricing" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Pricing Plans</Link></li>
              <li><Link to="/roadmap" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Security Blog</Link></li>
              <li><Link to="/guides" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Career Guides</Link></li>
              <li><Link to="/certifications" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Certifications</Link></li>
              <li><Link to="/community" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Contact</Link></li>
              <li><Link to="/legal" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © 2026 Cykruit AI. All rights reserved. Precision match for the security era.
          </p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-xs text-green-600 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
