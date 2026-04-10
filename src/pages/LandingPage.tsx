import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Users, 
  Zap, 
  Search, 
  Briefcase, 
  GraduationCap,
  Stars,
  Globe,
  Lock,
  MessageSquare,
  FileSearch,
  Layout,
  Rocket
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { cn } from '../utils/cn';

const LandingPage = () => {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Live Mission Ticker */}
      <div className="bg-slate-900 overflow-hidden py-3 relative z-50">
        <div className="animate-ticker flex whitespace-nowrap">
          {[
            "New Mission: Senior Security Architect at Google Cloud • 95% Match Found",
            "Expert Hired: Red Team Lead at CrowdStrike • Verified Placement",
            "Upcoming: Advanced Forensics Workshop by Elena Rossi",
            "New Mission: SOC Analyst at Microsoft Azure • Hybrid Role",
            "Platform Update: 2,500+ Verified Security Experts Joined This Week",
          ].map((text, i) => (
            <span key={i} className="text-white/80 text-[10px] uppercase tracking-widest font-bold mx-12 flex items-center">
              <span className="w-1 h-1 bg-brand-500 rounded-full mr-3 animate-pulse" />
              {text}
            </span>
          ))}
          {/* Duplicate for seamless wrap */}
          {[
            "New Mission: Senior Security Architect at Google Cloud • 95% Match Found",
            "Expert Hired: Red Team Lead at CrowdStrike • Verified Placement",
            "Upcoming: Advanced Forensics Workshop by Elena Rossi",
            "New Mission: SOC Analyst at Microsoft Azure • Hybrid Role",
            "Platform Update: 2,500+ Verified Security Experts Joined This Week",
          ].map((text, i) => (
            <span key={i} className="text-white/80 text-[10px] uppercase tracking-widest font-bold mx-12 flex items-center">
              <span className="w-1 h-1 bg-brand-500 rounded-full mr-3 animate-pulse" />
              {text}
            </span>
          ))}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-violet-200 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-8">
              <Stars className="w-4 h-4 mr-2" />
              The First Dedicated Cybersecurity Job Board
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Bridge your path to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600">
                Cybersecurity Elite
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed mb-12">
              The precision job matching platform exclusively for cybersecurity professionals.
              Get matched with top global firms based on your specific security expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/signup" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg px-10 shadow-xl shadow-brand-500/20">
                  Join as Candidate <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full text-lg px-10 bg-white shadow-sm">
                  Hire Talent
                </Button>
              </Link>
            </div>

            {/* Trusted By Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 pt-8 border-t border-slate-100/50"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-8">Trusted by Elite Teams Worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="text-xl font-bold tracking-tighter">Google</span>
                <span className="text-xl font-bold tracking-tighter">Microsoft</span>
                <span className="text-xl font-bold tracking-tighter">Amazon</span>
                <span className="text-xl font-bold tracking-tighter">Deloitte</span>
                <span className="text-xl font-bold tracking-tighter">Accenture</span>
                <span className="text-xl font-bold tracking-tighter">CrowdStrike</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <Card className="p-3 bg-white/50 backdrop-blur-md border-slate-200/50 shadow-2xl overflow-hidden group">
              <div className="bg-slate-900 rounded-xl border border-white/10 aspect-[16/9] overflow-hidden relative">
                {/* Advanced Mockup Design */}
                <div className="absolute inset-0 flex">
                  {/* Left Sidebar */}
                  <div className="w-16 border-r border-white/5 bg-white/5 p-4 space-y-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400">
                      <Layout className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/5" />
                    <div className="w-8 h-8 rounded-lg bg-white/5" />
                  </div>
                  {/* Main Header + Body */}
                  <div className="flex-1 flex flex-col">
                    <div className="h-12 border-b border-white/5 flex items-center justify-between px-6">
                      <div className="w-32 h-2 bg-white/10 rounded-full" />
                      <div className="flex space-x-3">
                        <div className="w-8 h-4 bg-emerald-500/20 rounded-full" />
                        <div className="w-8 h-4 bg-brand-500/20 rounded-full" />
                      </div>
                    </div>
                    {/* Content Grid */}
                    <div className="p-8 grid grid-cols-12 gap-6 h-full">
                       <div className="col-span-8 space-y-6">
                         <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-bold">AWS</div>
                              <div>
                                <div className="text-sm font-bold text-white">Cloud Security Architect</div>
                                <div className="text-[10px] text-white/40">Remote • High Priority Mission</div>
                              </div>
                            </div>
                            <div className="text-emerald-400 font-bold text-xs">98% Match</div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                           <div className="h-32 bg-white/5 rounded-2xl border border-white/5" />
                           <div className="h-32 bg-white/5 rounded-2xl border border-white/5" />
                         </div>
                       </div>
                       <div className="col-span-4 space-y-4">
                         <div className="h-48 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex flex-col items-center justify-center p-6 text-center">
                            <ShieldCheck className="w-12 h-12 text-brand-500 mb-4 animate-pulse" />
                            <div className="text-xs font-bold text-white">Trust Verifier</div>
                            <div className="text-[10px] text-white/40 mt-1">Level 4 Active</div>
                         </div>
                         <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
                       </div>
                    </div>
                  </div>
                </div>
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">500+</div>
              <div className="text-slate-500 text-sm">Verified Employers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">12k+</div>
              <div className="text-slate-500 text-sm">Expert Candidates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">98%</div>
              <div className="text-slate-500 text-sm">Matching Precision</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">150+</div>
              <div className="text-slate-500 text-sm">Active Trainers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Why Cyber-Specialized?</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Generic job boards don't understand the nuance of GRC vs. Red Teaming. 
              We've built the logic to ensure your skills meet the right mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-brand-600" />}
              title="AI-Guided Matching"
              description="Our system analyzes your certifications, hands-on labs, and preferences to suggest roles you'll actually excel in."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-violet-600" />}
              title="Hyper-Fast Hiring"
              description="Cut through the noise. Recruits get pre-vetted candidates tailored to their specific tech stack and security requirements."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-emerald-600" />}
              title="Verified Network"
              description="Every employer and every listing is manually verified to protect our community from fraudulent data harvesting."
            />
          </div>
        </div>
      </section>

      {/* Explore Roles Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Explore the Ecosystem</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Cykruit specializes in the high-stakes world of cybersecurity. Find your niche.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Red Teaming', icon: <Target className="w-5 h-5" />, count: '240+ Roles' },
              { title: 'Cloud Security', icon: <Globe className="w-5 h-5" />, count: '180+ Roles' },
              { title: 'GRC Expert', icon: <FileSearch className="w-5 h-5" />, count: '120+ Roles' },
              { title: 'SecOps', icon: <ShieldCheck className="w-5 h-5" />, count: '310+ Roles' },
              { title: 'Incident Response', icon: <Zap className="w-5 h-5" />, count: '95+ Roles' },
              { title: 'AppSec', icon: <Lock className="w-5 h-5" />, count: '150+ Roles' },
              { title: 'Crypto / Blockchain', icon: <Stars className="w-5 h-5" />, count: '60+ Roles' },
              { title: 'Forensics', icon: <Search className="w-5 h-5" />, count: '85+ Roles' },
            ].map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  {role.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{role.title}</h4>
                <p className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{role.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Human Stories, Technical Success</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Cykruit understood my certification path. I didn't have to explain what an OSCP meant to the recruiter—they already knew."
              author="Marcus Wright"
              role="Senior Pentester at Rapid7"
            />
            <TestimonialCard 
              quote="The matching precision is unmatched. Within 48 hours of joining, I was interviewing with three firms that fit my Cloud Sec toolkit."
              author="Julia Thorne"
              role="Lead Security Engineer at Coinbase"
            />
            <TestimonialCard 
              quote="As a hiring manager, the pre-vetted pool here is legendary. I've cut my 'time-to-hire' by 60% using the verified trainer badges."
              author="Devin Patel"
              role="CISO at TechGlobal"
            />
          </div>
        </div>
      </section>

      {/* Product Explanation / How it works */}
      <section className="py-24 bg-slate-900 text-white rounded-[2rem] mx-4 sm:mx-8 lg:mx-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Precision Matching <br /> for a Complex Field</h2>
              <div className="space-y-8">
                <Step 
                  number="01" 
                  title="Build Your Security DNA" 
                  description="Go beyond a resume. Link your TryHackMe, certifications, and GitHub to show your true technical depth." 
                />
                <Step 
                  number="02" 
                  title="Get AI-Matched" 
                  description="Our engine routes your profile to companies looking for your exact toolkit, from SOC to Pentesting." 
                />
                <Step 
                  number="03" 
                  title="Direct Mission Direct" 
                  description="Skip the initial HR filters. Connect directly with hiring managers who understand your value." 
                />
              </div>
            </div>
            <div className="relative">
               <Card className="bg-slate-800/50 border-slate-700/50 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-xs font-bold">JD</div>
                        <div>
                          <div className="text-sm font-semibold">Security Architect</div>
                          <div className="text-xs text-slate-400">Vertex Systems</div>
                        </div>
                      </div>
                      <div className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-400/10 rounded">98% Match</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 opacity-60">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">MS</div>
                        <div>
                          <div className="text-sm font-semibold">SOC Lead</div>
                          <div className="text-xs text-slate-400">Global Defense</div>
                        </div>
                      </div>
                      <div className="text-slate-400 text-xs font-bold px-2 py-1 bg-slate-400/10 rounded">82% Match</div>
                    </div>
                    <div className="p-6 bg-brand-600 rounded-xl text-center space-y-4">
                      <div className="text-white font-bold">Matching Insight</div>
                      <p className="text-brand-100 text-sm">Your expertise in AWS Cloud Security aligns perfectly with the current opening at Vertex Systems.</p>
                      <Link to="/login" className="block w-full">
                        <Button variant="secondary" size="sm" className="w-full bg-white text-brand-600 border-none">View Details</Button>
                      </Link>
                    </div>
                  </div>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Tabs - Simplified */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
               <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center mb-8">
                 <Briefcase className="w-8 h-8 text-brand-600" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">For Professionals</h3>
               <ul className="space-y-4 mb-10">
                 <li className="flex items-start space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1" />
                   <span className="text-slate-600">Anonymous profile browsing option</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1" />
                   <span className="text-slate-600">Skill-based verification badges</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1" />
                   <span className="text-slate-600">Access to specialized trainer directory</span>
                 </li>
               </ul>
               <Link to="/signup">
                 <Button className="w-full">Register as Candidate</Button>
               </Link>
            </div>
            
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
               <div className="w-16 h-16 bg-violet-600/10 rounded-2xl flex items-center justify-center mb-8">
                 <Users className="w-8 h-8 text-violet-600" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">For Employers</h3>
               <ul className="space-y-4 mb-10">
                 <li className="flex items-start space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-violet-600 mt-1" />
                   <span className="text-slate-600">Source from a pre-vetted expert pool</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-violet-600 mt-1" />
                   <span className="text-slate-600">Advanced filtering by specific toolsets</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-violet-600 mt-1" />
                   <span className="text-slate-600">Automated job posting translations</span>
                 </li>
               </ul>
               <Link to="/contact">
                 <Button variant="outline" className="w-full border-slate-200 text-slate-900 hover:bg-slate-100">Contact Sales</Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-50/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold mb-6">
               CYKRUIT ACADEMY
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Upskill with Industry Titans</h2>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed">
               More than just a job board. Access a global directory of verified cybersecurity trainers.
               Whether you're a candidate looking for a mentor or a company needing team training, 
               find the expert that fits your mission.
             </p>
             <div className="flex items-center space-x-4">
               <Link to="/signup">
                 <Button>Become a Trainer</Button>
               </Link>
               <Link to="/trainers">
                 <Button variant="ghost">Browse Directory</Button>
               </Link>
             </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <TrainerSmallCard name="Dr. Sarah Chen" specialty="Cloud Security" />
             <TrainerSmallCard name="Markus Vane" specialty="Malware Analysis" />
             <TrainerSmallCard name="Elena Rossi" specialty="GRC Expert" />
             <TrainerSmallCard name="Alex Rivera" specialty="Red Teaming" />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-10 tracking-tight">Ready to Secure Your Future?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Join thousands of professionals and top firms already using Cykruit to build the secure foundations of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-12 py-4 text-lg">Create Free Account</Button>
            </Link>
            <Link to="/jobs" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full px-12 py-4 text-lg bg-white">Explore Jobs</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components for cleaner structure
const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <Card className="p-8 flex flex-col h-full bg-slate-50 border-none shadow-none">
    <div className="flex space-x-1 mb-6">
      {[...Array(5)].map((_, i) => <Stars key={i} className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />)}
    </div>
    <p className="text-slate-700 italic leading-relaxed mb-8 flex-grow">"{quote}"</p>
    <div>
      <div className="text-sm font-bold text-slate-900">{author}</div>
      <div className="text-[10px] uppercase tracking-widest font-black text-brand-600 mt-1">{role}</div>
    </div>
  </Card>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="p-8 group">
    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </Card>
);

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex space-x-6">
    <div className="text-2xl font-bold text-brand-600/40 font-mono pt-1">{number}</div>
    <div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const TrainerSmallCard = ({ name, specialty }: { name: string, specialty: string }) => (
  <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center space-x-4 shadow-sm">
    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <div>
      <div className="text-sm font-bold text-slate-900">{name}</div>
      <div className="text-xs text-brand-600 font-medium">{specialty}</div>
    </div>
  </div>
);

export default LandingPage;
