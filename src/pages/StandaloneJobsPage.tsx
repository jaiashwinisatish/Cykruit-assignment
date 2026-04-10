import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Clock, Filter, ArrowRight, ShieldCheck, Stars } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { cn } from '../utils/cn';

const jobs = [
  { id: 1, title: 'Network Security Architect', company: 'Cisco', location: 'San Jose, CA', type: 'Full-time', posted: '2d ago', match: '95%', salary: '$150k - $190k' },
  { id: 2, title: 'SOC Analyst L2', company: 'Palo Alto Networks', location: 'Remote', type: 'Full-time', posted: '1d ago', match: '88%', salary: '$110k - $140k' },
  { id: 3, title: 'DevSecOps Specialist', company: 'GitLab', location: 'Remote', type: 'Contract', posted: '4h ago', match: '92%', salary: '$90/hr' },
  { id: 4, title: 'GRC Consultant', company: 'KPMG', location: 'New York, NY', type: 'Full-time', posted: '3d ago', match: '82%', salary: '$130k - $160k' },
  { id: 5, title: 'Vulnerability Researcher', company: 'Intel', location: 'Hillsboro, OR', type: 'Full-time', posted: '5d ago', match: '91%', salary: '$140k - $180k' },
  { id: 6, title: 'Security Engineer', company: 'Cloudflare', location: 'Remote', type: 'Full-time', posted: '1w ago', match: '94%', salary: '$170k - $220k' },
];

const StandaloneJobsPage = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Stars className="w-3 h-3 mr-2" />
              Verified Roles Only
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Browse Open <span className="text-brand-600">Missions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Direct access to the world's most critical cybersecurity positions. 
              Sign in to see your personalized AI match scores.
            </p>
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
             <div className="relative flex-grow">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
               <input 
                 type="text" 
                 placeholder="Search by title, technology, or company..."
                 className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
               />
             </div>
             <Button className="px-10">Search Jobs</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-8">
             <div>
               <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                 <Filter className="w-4 h-4 mr-2" /> Filters
               </h4>
               <div className="space-y-2">
                 {['All', 'Full-time', 'Contract', 'Internship', 'Remote'].map(f => (
                   <button 
                     key={f}
                     onClick={() => setFilter(f)}
                     className={cn(
                       "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                       filter === f ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-white border border-transparent hover:border-slate-200"
                     )}
                   >
                     {f}
                   </button>
                 ))}
               </div>
             </div>

             <Card className="p-6 bg-brand-600 text-white border-none">
                <ShieldCheck className="w-10 h-10 mb-4 opacity-50" />
                <h4 className="font-bold mb-2">Want better matches?</h4>
                <p className="text-xs text-brand-100 mb-6 leading-relaxed">Create a security profile to unlock hidden roles and get direct headhunter pings.</p>
                <Link to="/signup">
                  <Button variant="secondary" className="w-full text-brand-600 bg-white py-2 text-sm border-none">Get Started</Button>
                </Link>
             </Card>
          </aside>

          {/* Jobs List */}
          <div className="lg:col-span-3 space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6 hover:border-brand-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div className="flex items-start space-x-6">
                     <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-slate-400 border border-slate-100">
                       {job.company[0]}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                       <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
                         <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {job.company}</span>
                         <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {job.location}</span>
                         <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {job.posted}</span>
                       </div>
                     </div>
                   </div>
                   <div className="flex flex-col items-end gap-3 min-w-[180px]">
                      <div className="text-lg font-bold text-slate-900">{job.salary}</div>
                      <Link to="/login" className="w-full">
                        <Button variant="outline" size="sm" className="w-full h-10 border-slate-200 hover:bg-slate-50 text-slate-900">
                          View Mission <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                   </div>
                </div>
              </Card>
            ))}
            
            <div className="pt-8 text-center">
               <p className="text-slate-500 text-sm mb-4">Viewing 6 of 1,240 active cybersecurity roles</p>
               <Link to="/signup">
                 <Button variant="ghost" className="text-brand-600 font-bold">Load more positions</Button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandaloneJobsPage;
