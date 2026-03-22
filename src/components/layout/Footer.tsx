import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">H</span>
              </div>
              <span className="font-bold text-lg tracking-tight">HealthGuard</span>
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Providing premium health insurance coverage for you and your family. Your health is our priority.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-500 transition-colors">Careers</Link></li>
              <li><Link href="/news" className="hover:text-emerald-500 transition-colors">News</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Resources</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="/plans" className="hover:text-emerald-500 transition-colors">Find a Plan</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-500 transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link></li>
              <li><Link href="/support" className="hover:text-emerald-500 transition-colors">Support Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Legal</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} HealthGuard Insurance. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons placeholders */}
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
