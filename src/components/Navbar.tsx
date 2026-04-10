import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import Button from './Button';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3' : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-600 p-2 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Cykruit</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-slate-600 hover:text-brand-600 transition-colors font-medium">Browse Jobs</Link>
            <Link to="/trainers" className="text-slate-600 hover:text-brand-600 transition-colors font-medium">Trainers</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-brand-600 transition-colors font-medium">Pricing</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Log in</Link>
            <Link to="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/jobs" className="block text-lg font-medium text-slate-600 py-2">Browse Jobs</Link>
            <Link to="/trainers" className="block text-lg font-medium text-slate-600 py-2">Trainers</Link>
            <Link to="/pricing" className="block text-lg font-medium text-slate-600 py-2">Pricing</Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login" className="text-center py-3 text-lg font-medium text-slate-600 border border-slate-200 rounded-full">Log in</Link>
              <Link to="/signup">
                <Button size="lg" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
