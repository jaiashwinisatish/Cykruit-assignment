import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShieldCheck, Star, Clock, Globe, Award, MessageCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { cn } from '../utils/cn';

const trainers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    specialty: "Cloud Security Architecture",
    experience: "12+ Years",
    rating: 4.9,
    reviews: 124,
    verified: true,
    price: "$150/hr",
    tags: ["AWS", "Azure", "Kubernetes"],
    image: "SC"
  },
  {
    id: 2,
    name: "Marcus Vane",
    specialty: "Advanced Malware Analysis",
    experience: "15+ Years",
    rating: 5.0,
    reviews: 89,
    verified: true,
    price: "$200/hr",
    tags: ["Reverse Engineering", "C++", "Kernel"],
    image: "MV"
  },
  {
    id: 3,
    name: "Elena Rossi",
    specialty: "GRC & Security Compliance",
    experience: "10+ Years",
    rating: 4.8,
    reviews: 56,
    verified: true,
    price: "$120/hr",
    tags: ["ISO 27001", "SOC2", "GDPR"],
    image: "ER"
  },
  {
    id: 4,
    name: "Alex Rivera",
    specialty: "Red Team Ops & Pentesting",
    experience: "8+ Years",
    rating: 4.7,
    reviews: 112,
    verified: false,
    price: "$140/hr",
    tags: ["OSCP", "Active Directory", "Exploit Dev"],
    image: "AR"
  },
  {
    id: 5,
    name: "James Wilson",
    specialty: "Digital Forensics (DFIR)",
    experience: "14+ Years",
    rating: 4.9,
    reviews: 74,
    verified: true,
    price: "$180/hr",
    tags: ["EnCase", "Incident Response", "Python"],
    image: "JW"
  },
  {
    id: 6,
    name: "Priya Sharma",
    specialty: "Application Security (AppSec)",
    experience: "9+ Years",
    rating: 4.8,
    reviews: 43,
    verified: true,
    price: "$130/hr",
    tags: ["OWASP", "Burp Suite", "SAST/DAST"],
    image: "PS"
  }
];

const TrainersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Learn from the <span className="text-brand-600">World's Best</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Book 1-on-1 sessions, specialized workshops, or enterprise training cycles 
            with verified cybersecurity industry veterans.
          </motion.p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by specialty, tool, or name..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-poppins"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="secondary" className="px-8 border-slate-200">
            <Filter className="w-5 h-5 mr-3" /> Filters
          </Button>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col p-6 hover:border-brand-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-2xl border border-brand-100 shadow-sm">
                      {trainer.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg flex items-center">
                        {trainer.name}
                        {trainer.verified && <ShieldCheck className="w-4 h-4 ml-1.5 text-emerald-500 fill-emerald-500/10" />}
                      </h3>
                      <p className="text-sm text-brand-600 font-semibold">{trainer.specialty}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 px-2 py-1 rounded flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-slate-700">{trainer.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="flex items-center text-slate-500 text-xs font-medium">
                     <Clock className="w-4 h-4 mr-2" /> {trainer.experience} Exp.
                   </div>
                   <div className="flex items-center text-slate-500 text-xs font-medium">
                     <Globe className="w-4 h-4 mr-2" /> Remote / Global
                   </div>
                   <div className="flex items-center text-slate-500 text-xs font-medium">
                     <Award className="w-4 h-4 mr-2" /> Top Rated
                   </div>
                   <div className="flex items-center text-slate-500 text-xs font-medium text-brand-600 font-bold">
                     <p>{trainer.price}</p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {trainer.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                   <Button variant="outline" className="flex-grow h-11 py-0 font-bold text-sm">
                     <MessageCircle className="w-4 h-4 mr-2" /> Message
                   </Button>
                   <Button className="flex-grow h-11 py-0 font-bold text-sm">
                     Book Session
                   </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainersPage;
