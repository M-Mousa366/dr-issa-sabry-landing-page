import { useState, useEffect, useCallback } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/systems';

const navLinks = [
  { label: 'اختار نظامك', href: '#quiz' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => setScrolled(window.scrollY > 16), []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${scrolled
        ? 'bg-cream-50/95 backdrop-blur-md border-b border-cream-200 shadow-sm shadow-black/5'
        : 'bg-transparent'
        }`}
      role="banner"
    >
      <div className="wrap">
        <div className="flex items-center justify-between h-15 sm:h-16">

          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg py-1"
            aria-label="د. عيسى صبري — الرئيسية"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-black text-sm leading-none">د</span>
            </div>
            <span className="font-extrabold text-ink-900 text-[15px] tracking-tight group-hover:text-teal-600 transition-colors duration-150">
              د. عيسى صبري
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="التنقل الرئيسي">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="px-4 py-2 text-ink-600 hover:text-ink-900 text-sm font-semibold rounded-lg hover:bg-cream-100 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5 mr-2"
              aria-label="تواصل معنا"
            >
              <MessageCircle size={15} />
              تواصل معنا
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-ink-600 hover:text-ink-900 hover:bg-cream-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-250 ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        aria-hidden={!open}
      >
        <div className="bg-cream-50/98 backdrop-blur-md border-t border-cream-200 px-4 py-3 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className="block px-4 py-3 text-ink-700 hover:text-ink-900 hover:bg-cream-100 rounded-xl text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-sm"
              tabIndex={open ? 0 : -1}
            >
              <MessageCircle size={15} />
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
