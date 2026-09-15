import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/systems';

interface Props {
  hasPick: boolean;
}

export default function FinalCTA({ hasPick }: Props) {
  return (
    <section
      className="bg-ink-900 py-14 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="wrap text-center">
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl font-black text-white mb-3"
        >
          {hasPick ? 'جاهز تبدأ؟' : 'محتاج مساعدة في الاختيار؟'}
        </h2>
        <p className="text-ink-300 text-base leading-relaxed mb-8 max-w-sm mx-auto">
          {hasPick
            ? 'تواصل مع فريق الإدارة للحجز أو الاستفسار.'
            : 'تواصل مع فريق الإدارة وهيساعدوك تختار الأنسب ليك.'}
        </p>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-10 py-4 shadow-lg shadow-teal-900/30"
          aria-label="تواصل مع الإدارة عبر واتساب"
        >
          <MessageCircle size={18} aria-hidden="true" />
          تواصل مع الإدارة
        </a>
      </div>
    </section>
  );
}
