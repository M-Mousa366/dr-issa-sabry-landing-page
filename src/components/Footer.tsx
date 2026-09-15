import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/systems';

export default function Footer() {
  const year = new Date().getFullYear();

  const scroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      className="bg-ink-900 text-white"
      role="contentinfo"
      aria-label="تذييل الصفحة"
    >
      <div className="wrap py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center shrink-0">
            <span className="text-white font-black text-xs leading-none">د</span>
          </div>
          <div>
            <p className="font-extrabold text-sm leading-none">د. عيسى صبري</p>
            <p className="text-ink-400 text-xs mt-0.5">فريق عمل الدكتور / عيسى صبري</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-5 flex-wrap justify-center" aria-label="روابط سريعة">
          {[
            { label: 'اختار نظامك', href: '#quiz' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={scroll(l.href)}
              className="text-ink-400 hover:text-white text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
            aria-label="تواصل معنا عبر واتساب"
          >
            <MessageCircle size={14} aria-hidden="true" />
            تواصل
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-ink-400 text-xs text-center sm:text-left">
          &copy; {year} جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
