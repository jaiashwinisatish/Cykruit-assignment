import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, CheckCircle2, Stars } from 'lucide-react';
import Button from '../components/Button';
import { useToast } from '../components/Toast';

interface LoginPageProps {
  isSignup?: boolean;
}

const LoginPage = ({ isSignup = false }: LoginPageProps) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(isSignup ? 'Account created successfully!' : 'Welcome back, verifying credentials...', 'success');
    
    // Smooth transition to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Pane - Marketing & Visuals (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center p-20 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="relative z-10 max-w-lg">
           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-semibold mb-8">
             <Stars className="w-4 h-4 mr-2" />
             Join the Cybersecurity Elite
           </div>
           <h2 className="text-5xl font-bold text-white leading-tight mb-8">
             {isSignup 
               ? "Secure the next step in your professional mission." 
               : "Your gateway to high-stakes security operations."
             }
           </h2>
           
           <div className="space-y-6">
              <FeatureItem title="Verified Roles" desc="Direct access to pre-vetted security missions at top firms." />
              <FeatureItem title="Skill DNA" desc="Showcase your certifications and technical depth automatically." />
              <FeatureItem title="Elite Tutors" desc="Connect with industry titans for specialized upskilling." />
           </div>

           <div className="mt-16 pt-12 border-t border-white/10">
              <div className="flex items-center space-x-4">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                        U{i}
                     </div>
                   ))}
                 </div>
                 <p className="text-sm text-slate-400 font-medium tracking-tight">
                   <span className="text-white font-bold">12k+</span> security experts already joined.
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Right Pane - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative">
        {/* Mobile Logo Only */}
        <div className="lg:hidden flex items-center space-x-2 absolute top-8 left-8">
          <div className="bg-brand-600 p-2 rounded-xl">
             <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">Cykruit</span>
        </div>

        <div className="max-w-[420px] mx-auto w-full">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {isSignup ? 'Create account' : 'Welcome back'}
            </h1>
            <p className="text-slate-500 font-medium">
              {isSignup 
                ? 'Register to start your cybersecurity journey' 
                : 'Sign in to access your dashboard'
              }
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleAuth}>
            {isSignup && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="name@company.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                {!isSignup && (
                  <a href="#" className="text-xs font-bold text-brand-600 hover:text-brand-700">Forgot?</a>
                )}
              </div>
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>

            <Button className="w-full py-4 text-lg shadow-xl shadow-brand-500/10" type="submit">
              {isSignup ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative mb-8 text-center">
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-100" />
              <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={handleAuth} className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-sm text-slate-600">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4 mr-3" alt="Google" />
                Google
              </button>
              <button onClick={handleAuth} className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-sm text-slate-600">
                <LinkedInIcon className="w-4 h-4 mr-3 text-[#0077b5]" />
                LinkedIn
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm font-medium">
            {isSignup ? 'Already have an account?' : 'New to Cykruit?'} {' '}
            <Link 
              to={isSignup ? '/login' : '/signup'} 
              className="text-brand-600 hover:text-brand-700 font-bold"
            >
              {isSignup ? 'Sign in' : 'Start free trial'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex items-start space-x-4">
     <div className="mt-1 bg-brand-500/20 p-1 rounded-md">
        <CheckCircle2 className="w-4 h-4 text-brand-400" />
     </div>
     <div>
        <h4 className="text-white font-bold leading-none mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{desc}</p>
     </div>
  </div>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default LoginPage;
