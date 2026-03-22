"use client";

import { motion } from "framer-motion";
import { LogOut, User, FileText, CreditCard, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the user's profile and policies from the API
    // fetch('/api/users/profile')...
    // For MVP, we mock the profile loading to show the UI
    setTimeout(() => {
      setProfile({
        name: "Alex Doe",
        email: "alex@example.com",
        policies: [
          {
            id: "pol_123",
            policy: { name: "Family Shield Plus", coverage: 500000, premium: 1200 },
            status: "ACTIVE",
            startDate: new Date().toISOString(),
          }
        ],
        claims: [],
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 mx-auto text-2xl font-bold">
              {profile?.name.charAt(0)}
            </div>
            <h2 className="text-center font-bold text-lg">{profile?.name}</h2>
            <p className="text-center text-sm text-neutral-500">{profile?.email}</p>
          </div>

          <nav className="flex flex-col gap-2">
            {[
              { icon: User, label: "Profile", active: true },
              { icon: ShieldCheck, label: "My Policies", active: false },
              { icon: FileText, label: "Claims", active: false },
              { icon: CreditCard, label: "Payments", active: false },
            ].map((item, i) => (
              <button
                key={i}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                  item.active 
                    ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" 
                    : "hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 mt-4"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-500/20"
          >
            <h1 className="text-3xl font-bold mb-2">Welcome back, {profile?.name.split(' ')[0]}!</h1>
            <p className="opacity-90 max-w-lg text-emerald-50">
              Your health policies are active and you are fully protected. Manage your claims, payments, and family coverage below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile?.policies.map((up: any) => (
              <motion.div
                key={up.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    {up.status}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{up.policy.name}</h3>
                <p className="text-sm text-neutral-500 flex-1">Coverage up to ${up.policy.coverage.toLocaleString()}</p>
                
                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                  <span className="text-xs text-neutral-500">Premium: ${up.policy.premium}/mo</span>
                  <button className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Add New Policy Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 flex flex-col items-center justify-center text-center cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all min-h-[240px]"
              onClick={() => router.push('/plans')}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 mb-4">
                <span className="text-2xl font-light">+</span>
              </div>
              <h3 className="font-bold text-neutral-700 dark:text-neutral-300">Add Cover</h3>
              <p className="text-sm text-neutral-500 mt-1">Browse new health plans</p>
            </motion.div>
          </div>
        </main>

      </div>
    </div>
  );
}
