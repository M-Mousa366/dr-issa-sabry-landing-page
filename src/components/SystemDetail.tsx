import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import type { System } from '../data/systems';
import { CONTACT } from '../data/systems';
import SystemVisual from './SystemVisual';

interface Props {
  sys: System;
  onReset: () => void;
}

export default function SystemDetail({ sys, onReset }: Props) {
  return (
    <section
      id="system-detail"
      className={`${sys.accent.section} border-t ${sys.accent.border} scroll-mt-16 py-12 sm:py-16`}
      aria-labelledby="detail-heading"
    >
      <div className="wrap">

        {/* ── Two-column layout ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT — visual */}
          <div className="order-1">
            <SystemVisual sys={sys} />
          </div>

          {/* RIGHT — information */}
          <div className="order-2 flex flex-col gap-6">

            {/* Header */}
            <div>
              <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${sys.accent.tag} mb-3`}>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${sys.accent.dot}`}
                  aria-hidden="true"
                />
                النظام الأنسب ليك
              </div>
              <h2
                id="detail-heading"
                className="text-2xl sm:text-3xl font-black text-ink-900 leading-tight mb-2"
              >
                {sys.title}
              </h2>
              <p className="text-ink-600 text-base leading-relaxed">
                {sys.tagline}
              </p>
            </div>

            {/* Suitable if */}
            <div>
              <p className="text-ink-900 font-bold text-sm mb-3 uppercase tracking-wide">
                مناسب ليك لو:
              </p>
              <ul className="space-y-2">
                {sys.suitableIf.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={15}
                      className={`${sys.accent.text} shrink-0 mt-[2px]`}
                      aria-hidden="true"
                    />
                    <span className="text-ink-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className={`${sys.accent.bg} border ${sys.accent.border} rounded-xl p-4`}>
              <p className="text-ink-900 font-bold text-sm mb-3">يشمل:</p>
              <ul className="space-y-2">
                {sys.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${sys.accent.dot} shrink-0 mt-[6px]`}
                      aria-hidden="true"
                    />
                    <span className="text-ink-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <p className="text-ink-400 text-sm">
              <span className="font-semibold text-ink-700">التسعير: </span>
              {sys.pricingNote}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center"
                aria-label={`تواصل للحجز في ${sys.title}`}
              >
                <MessageCircle size={17} aria-hidden="true" />
                تواصل للحجز
              </a>
              <button
                onClick={onReset}
                className="btn-ghost w-full sm:w-auto justify-center"
                aria-label="العودة لاختيار طريقة تانية"
              >
                <ArrowRight size={16} aria-hidden="true" />
                اختار طريقة تانية
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
