import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Shield, Zap, Target, Users, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { cn } from '../utils/cn';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: "Professional",
      description: "Ideal for cybersecurity candidates looking to land their next role.",
      price: isAnnual ? "0" : "0",
      cta: "Join as Professional",
      features: [
         "AI-Guided Job Matching",
         "Public Expert Profile",
         "Anonymous Mode",
         "Direct Messaging with Recruiters",
         "Basic Badge Verification",
      ],
      highlight: false
    },
    {
      name: "Recruiter",
      description: "Scale your security team with pre-vetted, high-quality talent.",
      price: isAnnual ? "249" : "299",
      cta: "Start Free Trial",
      features: [
         "Unlimited Job Postings",
         "Advanced Skill-Based Filters",
         "Candidate Identity Verification",
         "Priority Applicant Ranking",
         "dedicated Account Manager",
         "Unlimited direct messaging",
      ],
      highlight: true
    },
    {
      name: "Trainer",
      description: "For industry veterans looking to offer their expertise and training.",
      price: isAnnual ? "99" : "129",
      cta: "Become a Trainer",
      features: [
         "Verified Trainer Status",
         "Listed in Global Directory",
         "Integrated Session Booking",
         "Workshop Hosting Tools",
         "Payment Processing (3% fee)",
         "Analytics Dashboard",
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Simple, Transparent <span className="text-brand-600">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
          >
            No hidden fees. Choose the plan that fits your professional mission in the cybersecurity ecosystem.
          </motion.p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={cn("text-sm font-semibold", !isAnnual ? "text-slate-900" : "text-slate-500")}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-200 rounded-full p-1 relative transition-colors duration-200"
            >
              <div className={cn(
                "w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-200",
                isAnnual ? "translate-x-6 bg-brand-600" : "translate-x-0"
              )} />
            </button>
            <div className="flex items-center space-x-2">
              <span className={cn("text-sm font-semibold", isAnnual ? "text-slate-900" : "text-slate-500")}>Annual</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn(
                "p-8 h-full flex flex-col relative overflow-hidden",
                tier.highlight ? "ring-2 ring-brand-600 shadow-2xl scale-105 z-10" : "bg-white"
              )}>
                {tier.highlight && (
                  <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-8">{tier.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                  <span className="text-slate-500 text-sm ml-2">/ month</span>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                   {tier.features.map(feature => (
                     <div key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-600">{feature}</span>
                     </div>
                   ))}
                </div>

                <Link to="/signup" className="block w-full">
                  <Button 
                    variant={tier.highlight ? 'primary' : 'secondary'} 
                    className={cn("w-full py-4 text-base", tier.highlight && "shadow-lg shadow-brand-200")}
                  >
                    {tier.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ - Short */}
        <div className="mt-32 max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
           <div className="space-y-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Is there a free plan for candidates?</h4>
                <p className="text-slate-600 text-sm">Yes, Cykruit is and will always be free for cybersecurity professionals looking for work. We only charge for premium visibility and enterprise features.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">How does verified recruiter billing work?</h4>
                <p className="text-slate-600 text-sm">Recruiters are billed monthly or annually. You can cancel at any time. Once cancelled, your job posts will remain active until the end of the billing cycle.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
