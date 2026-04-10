import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  Briefcase, 
  Bookmark, 
  User, 
  Bell, 
  LogOut, 
  Setting,
  ChevronRight,
  Filter,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Stars,
  Lock,
  Globe,
  Link2,
  Shield,
  Trash2
} from 'lucide-react';
import { cn } from '../utils/cn';
import Card from '../components/Card';
import Button from '../components/Button';
import { useToast } from '../components/Toast';

// Mock Icon fix for 'Setting' -> 'Settings'
const Settings = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;

const JobSeekerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { title: 'Overview', icon: <LayoutDashboard className="w-5 h-5" />, path: '/dashboard' },
    { title: 'Browse Jobs', icon: <Search className="w-5 h-5" />, path: '/dashboard/jobs' },
    { title: 'Applied Jobs', icon: <Briefcase className="w-5 h-5" />, path: '/dashboard/applied' },
    { title: 'Saved Jobs', icon: <Bookmark className="w-5 h-5" />, path: '/dashboard/saved' },
    { title: 'Profile', icon: <User className="w-5 h-5" />, path: '/dashboard/profile' },
    { title: 'Notifications', icon: <Bell className="w-5 h-5" />, path: '/dashboard/notifications' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Dashboard Sidebar */}
      <aside className={cn(
        "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col z-20 sticky top-0 h-screen",
        isSidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="p-6 flex items-center mb-6">
          <div className="bg-brand-600 p-2 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          {isSidebarOpen && <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">Cykruit</span>}
        </div>

        <nav className="flex-grow px-3 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.title}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-brand-50 text-brand-600 font-semibold" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <div className={cn("transition-transform group-hover:scale-110", isActive && "scale-110")}>
                  {item.icon}
                </div>
                {isSidebarOpen && <span className="ml-4">{item.title}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-slate-100">
          <Link
            to="/dashboard/settings"
            className={cn(
              "flex items-center px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all group"
            )}
          >
            <Settings className="w-5 h-5" />
            {isSidebarOpen && <span className="ml-4">Settings</span>}
          </Link>
          <button
            className="w-full flex items-center px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all group"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="ml-4 font-medium">Log out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 capitalize">
            {location.pathname.split('/').pop() || 'Overview'}
          </h2>
          <div className="flex items-center space-x-4">
             <div className="relative hidden md:block">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search dashboard..." 
                 className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
               />
             </div>
             <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors relative">
               <Bell className="w-5 h-5" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-600 rounded-full border-2 border-white"></span>
             </button>
             <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs ring-2 ring-white">
               JD
             </div>
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<OverviewTab />} />
            <Route path="/jobs" element={<JobsTab />} />
            <Route path="/applied" element={<AppliedTab />} />
            <Route path="/saved" element={<SavedTab />} />
            <Route path="/notifications" element={<NotificationsTab />} />
            <Route path="/profile" element={<ProfileTab />} />
            <Route path="/settings" element={<SettingsTab />} />
            <Route path="*" element={<OverviewTab />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Tab Components ---

const OverviewTab = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard label="Profile Completion" value="85%" color="bg-brand-600" />
      <StatCard label="Applied Jobs" value="12" color="bg-violet-600" />
      <StatCard label="Interviews" value="3" color="bg-emerald-600" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-900">Recommended for You</h3>
          <Link to="/dashboard/jobs" className="text-sm font-medium text-brand-600 hover:underline">View all</Link>
        </div>
        <div className="space-y-4">
           {[
             { title: 'Senior Cloud Security', company: 'Amazon Web Services', location: 'Remote', salary: '$160k - $210k' },
             { title: 'Security Consultant', company: 'Deloitte', location: 'London, UK', salary: '$90k - $120k' },
             { title: 'Red Team Lead', company: 'CrowdStrike', location: 'Hybrid', salary: '$180k - $230k' },
           ].map((job, i) => (
             <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 transition-colors">
               <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-400">
                   {job.company[0]}
                 </div>
                 <div>
                   <div className="text-sm font-bold text-slate-900">{job.title}</div>
                   <div className="text-xs text-slate-500">{job.company} • {job.location}</div>
                 </div>
               </div>
               <div className="text-xs font-semibold text-slate-900">{job.salary}</div>
             </div>
           ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-slate-900 mb-6">Application Activity</h3>
        <div className="space-y-6">
          {[
            { status: 'Interviewing', company: 'Google', date: 'Oct 14, 2026', title: 'SecOps Engineer' },
            { status: 'Applied', company: 'Microsoft', date: 'Oct 12, 2026', title: 'Privacy Specialist' },
            { status: 'Rejected', company: 'StartUp Inc', date: 'Oct 08, 2026', title: 'Pentester' },
          ].map((activity, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className={cn(
                "w-2 h-2 rounded-full mt-2",
                activity.status === 'Interviewing' ? 'bg-brand-600' : 
                activity.status === 'Rejected' ? 'bg-red-500' : 'bg-slate-300'
              )} />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-slate-900">{activity.title} at {activity.company}</span>
                  <span className="text-xs text-slate-400">{activity.date}</span>
                </div>
                <div className="text-xs font-medium uppercase tracking-wider mt-1 text-slate-500">{activity.status}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const JobsTab = () => {
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState('All');
  const jobs = [
    { id: 1, title: 'Network Security Architect', company: 'Cisco', location: 'San Jose, CA', type: 'Full-time', posted: '2d ago', match: '95%', salary: '$150k - $190k' },
    { id: 2, title: 'SOC Analyst L2', company: 'Palo Alto Networks', location: 'Remote', type: 'Full-time', posted: '1d ago', match: '88%', salary: '$110k - $140k' },
    { id: 3, title: 'DevSecOps Specialist', company: 'GitLab', location: 'Remote', type: 'Contract', posted: '4h ago', match: '92%', salary: '$90/hr' },
    { id: 4, title: 'GRC Consultant', company: 'KPMG', location: 'New York, NY', type: 'Full-time', posted: '3d ago', match: '82%', salary: '$130k - $160k' },
    { id: 5, title: 'Vulnerability Researcher', company: 'Intel', location: 'Hillsboro, OR', type: 'Full-time', posted: '5d ago', match: '91%', salary: '$140k - $180k' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex space-x-2">
          {['All', 'Full-time', 'Contract', 'Remote'].map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === f ? "bg-brand-600 text-white shadow-lg shadow-brand-200" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <Button variant="outline" size="sm" className="bg-white">
          <Filter className="w-4 h-4 mr-2" /> Filters
        </Button>
      </div>

      <div className="space-y-4">
        {jobs.map(job => (
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
               <div className="flex flex-col items-end gap-3 min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold px-2 py-1 bg-brand-50 text-brand-600 rounded">Match: {job.match}</div>
                    <div className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">{job.type}</div>
                  </div>
                  <div className="text-lg font-bold text-slate-900">{job.salary}</div>
                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-grow p-0 h-10"
                      onClick={() => showToast(`Successfully saved ${job.title}`, 'info')}
                    >
                      Save
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-grow h-10"
                      onClick={() => showToast(`Application sent to ${job.company}!`, 'success')}
                    >
                      Apply Now
                    </Button>
                  </div>
               </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
};

const AppliedTab = () => (
   <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
     <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Briefcase className="w-10 h-10 text-slate-300" />
       </div>
       <h3 className="text-xl font-bold text-slate-900 mb-2">Manage your applications</h3>
       <p className="text-slate-500 max-w-sm mx-auto mb-8">
         Once you start applying to positions, they will appear here so you can track your progress.
       </p>
       <Link to="/dashboard/jobs">
         <Button>Browse Open Roles</Button>
       </Link>
     </div>
   </div>
);

const SavedTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
             <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 font-bold border border-brand-100">C</div>
             <button className="text-slate-300 hover:text-red-500 transition-colors"><Bookmark className="w-5 h-5 fill-current" /></button>
          </div>
          <h4 className="font-bold text-slate-900">Cloud Security Engineer</h4>
          <p className="text-xs text-slate-500 mb-6">Cloudflare • Remote</p>
          <div className="flex justify-between items-center">
             <span className="text-sm font-bold text-slate-900">$180k+</span>
             <Button size="sm" className="h-9 px-4 text-xs">Apply</Button>
          </div>
       </Card>
    </div>
  </div>
);

const NotificationsTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-4">
    {[
      { title: 'New Job Match', desc: 'Amazon just posted a Senior Security role matching your skills.', type: 'match', time: '2h ago' },
      { title: 'Application Update', desc: 'Google has moved your application to the Interview stage.', type: 'status', time: '5h ago' },
      { title: 'Security Alert', desc: 'Your profile is now 85% verified. Complete the last step.', type: 'alert', time: '1d ago' },
    ].map((note, i) => (
      <Card key={i} className="p-4 flex items-start space-x-4">
         <div className={cn(
           "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
           note.type === 'match' ? 'bg-brand-50 text-brand-600' : 
           note.type === 'status' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
         )}>
           {note.type === 'match' ? <Stars className="w-5 h-5" /> : 
            note.type === 'status' ? <CheckCircle2 className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
         </div>
         <div className="flex-grow">
            <div className="flex justify-between">
               <h4 className="text-sm font-bold text-slate-900">{note.title}</h4>
               <span className="text-xs text-slate-400">{note.time}</span>
            </div>
            <p className="text-xs text-slate-600 mt-1">{note.desc}</p>
         </div>
      </Card>
    ))}
  </div>
);

const SettingsTab = () => {
  const { showToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState('profile');

  const settingsLinks = [
    { id: 'profile', label: 'Profile Settings', icon: <User className="w-4 h-4" /> },
    { id: 'security', label: 'Security & Auth', icon: <Lock className="w-4 h-4" /> },
    { id: 'professional', label: 'Professional Links', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'preferences', label: 'Preferences', icon: <Bell className="w-4 h-4" /> },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Sidebar */}
        <aside className="lg:col-span-1 space-y-2">
           {settingsLinks.map(link => (
             <button
               key={link.id}
               onClick={() => setActiveSubTab(link.id)}
               className={cn(
                 "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left",
                 activeSubTab === link.id 
                   ? "bg-brand-600 text-white shadow-lg shadow-brand-200" 
                   : "text-slate-500 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-100"
               )}
             >
               {link.icon}
               <span>{link.label}</span>
             </button>
           ))}
        </aside>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {activeSubTab === 'profile' && (
            <Card className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Personal Information</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); showToast('Profile updated', 'success'); }}>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-2xl border border-brand-100 italic">
                    JD
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="mb-2">Change Avatar</Button>
                    <p className="text-xs text-slate-400">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                    <input type="text" defaultValue="John" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" defaultValue="john.doe@security.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Short Bio</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none"
                    placeholder="Briefly describe your security background..."
                  />
                </div>

                <div className="pt-4">
                  <Button className="px-10">Save Profile</Button>
                </div>
              </form>
            </Card>
          )}

          {activeSubTab === 'security' && (
            <Card className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Security & Authentication</h3>
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); showToast('Password changed!', 'success'); }}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none" />
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Two-Factor Authentication</div>
                      <div className="text-xs text-slate-400">Keep your account secure with 2FA</div>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1" />
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="px-10">Update Security</Button>
                </div>
              </form>

              <div className="mt-12 pt-8 border-t border-red-50">
                 <h4 className="text-sm font-bold text-red-600 mb-2 uppercase tracking-widest">Danger Zone</h4>
                 <p className="text-xs text-slate-400 mb-6">Permanently delete your account and all security clearance data.</p>
                 <Button variant="outline" className="border-red-200 text-red-500 hover:bg-red-50">
                   <Trash2 className="w-4 h-4 mr-2" /> Delete Account
                 </Button>
              </div>
            </Card>
          )}

          {activeSubTab === 'professional' && (
            <Card className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Professional Links</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); showToast('Links updated', 'success'); }}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                     <Link2 className="w-5 h-5 text-slate-400" />
                     <input type="text" placeholder="LinkedIn URL" className="bg-transparent flex-grow text-sm outline-none" />
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                     <Globe className="w-5 h-5 text-slate-400" />
                     <input type="text" placeholder="Portfolio / Personal Cite" className="bg-transparent flex-grow text-sm outline-none" />
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                     <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                     <input type="text" placeholder="GitHub Username" className="bg-transparent flex-grow text-sm outline-none" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="px-10">Save Links</Button>
                </div>
              </form>
            </Card>
          )}

          {activeSubTab === 'preferences' && (
            <Card className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Preferences</h3>
              <div className="space-y-8">
                <PreferenceToggle 
                  title="Job Matching Alerts" 
                  desc="Get notified when an elite mission matches your security DNA." 
                  active={true}
                />
                <PreferenceToggle 
                  title="Marketing Updates" 
                  desc="Receive the latest news on cybersecurity trends and platform updates." 
                  active={false}
                />
                <PreferenceToggle 
                  title="Recruiter Messages" 
                  desc="Allow verified recruiters to message you directly even if anonymous." 
                  active={true}
                />
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

const PreferenceToggle = ({ title, desc, active }: { title: string, desc: string, active: boolean }) => (
  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="flex-grow pr-12">
      <div className="text-sm font-bold text-slate-900 mb-1">{title}</div>
      <div className="text-xs text-slate-500">{desc}</div>
    </div>
    <button className={cn(
      "w-12 h-6 rounded-full p-1 relative transition-colors duration-200",
      active ? "bg-brand-600" : "bg-slate-300"
    )}>
      <div className={cn(
        "w-4 h-4 bg-white rounded-full transition-all duration-200",
        active ? "translate-x-6" : "translate-x-0"
      )} />
    </button>
  </div>
);



const ProfileTab = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="flex items-center justify-between">
       <div className="flex items-center space-x-6">
         <div className="w-24 h-24 rounded-3xl bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-3xl ring-4 ring-white shadow-lg">
           JD
         </div>
         <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">John Doe</h1>
            <p className="text-slate-500">Senior SecOps Engineer • San Francisco, CA</p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold rounded-full">CISSP</span>
              <span className="px-3 py-1 bg-violet-50 text-violet-600 text-xs font-bold rounded-full">AWS Certified Security</span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full">CompTIA Sec+</span>
            </div>
         </div>
       </div>
       <Button variant="outline">Edit Profile</Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       <Card className="col-span-2 p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Professional Summary</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Security engineer with 8+ years of experience specializing in cloud infrastructure protection and automated threat response. 
            Deep knowledge of AWS Security Hub, Kubernetes hardening, and Python-based security automation tooling.
          </p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Experience</h3>
          <div className="space-y-8">
             <div className="flex space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center font-bold text-slate-400">P</div>
                <div>
                   <div className="text-base font-bold text-slate-900">Senior Security Engineer</div>
                   <div className="text-sm text-slate-500">Prisma Cloud • 2021 - Present</div>
                </div>
             </div>
             <div className="flex space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center font-bold text-slate-400">S</div>
                <div>
                   <div className="text-base font-bold text-slate-900">SecOps Specialist</div>
                   <div className="text-sm text-slate-500">SendGrid • 2018 - 2021</div>
                </div>
             </div>
          </div>
       </Card>

       <div className="space-y-6">
          <Card className="p-6">
             <h3 className="font-bold text-slate-900 mb-4">Resume</h3>
             <div className="p-4 border border-slate-200 rounded-xl flex items-center justify-between mb-4">
                <div className="flex items-center text-sm font-medium text-slate-700">
                   <Briefcase className="w-4 h-4 mr-3 text-slate-400" />
                   John_Doe_CV.pdf
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
             </div>
             <Button variant="outline" className="w-full h-10 py-0 font-semibold text-sm">Upload New Resume</Button>
          </Card>

          <Card className="p-6">
             <h3 className="font-bold text-slate-900 mb-4">Verification Level</h3>
             <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                   <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                   <div className="text-sm font-bold text-slate-900">Identity Verified</div>
                   <div className="text-xs text-slate-500 font-medium tracking-tight">Level 2 Trust Score</div>
                </div>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-2/3" />
             </div>
          </Card>
       </div>
    </div>
  </div>
);

const StatCard = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <Card className="p-6">
    <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">{label}</div>
    <div className="flex items-end space-x-3">
       <div className="text-4xl font-bold text-slate-900">{value}</div>
       <div className={cn("h-1 w-12 rounded-full mb-2", color)} />
    </div>
  </Card>
);

export default JobSeekerDashboard;
