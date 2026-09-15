import { Users, Monitor, BookOpen, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { systems } from '../data/systems';
import type { SystemId } from '../data/systems';

interface QuizOption {
  id: SystemId;
  label: string;
  icon: LucideIcon;
}

const options: QuizOption[] = [
  { id: 'center', label: 'بحب الحضور والتفاعل', icon: Users },
  { id: 'online-live', label: 'عايز أدرس من البيت', icon: Monitor },
  { id: 'books', label: 'بحب أذاكر بطريقتي', icon: BookOpen },
  { id: 'club', label: 'محتاج متابعة مستمرة', icon: Zap },
];

interface Props {
  picked: SystemId | null;
  onPick: (id: SystemId) => void;
}

export default function Hero({ picked, onPick }: Props) {
  const pickedSys = picked ? systems.find((s) => s.id === picked) : null;

  const scrollToDetail = () => {
    setTimeout(() => {
      document.getElementById('system-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <section
      id="quiz"
      className="bg-cream-50 pt-16 scroll-mt-0"
      aria-label="القسم الرئيسي"
    >
      <div className="wrap py-14 sm:py-20">
        <div className="max-w-2xl mx-auto">

          {/* ── Text block ─────────────────────────────────────────── */}
          <div className="text-center mb-10">
            <p className="text-teal-600 text-xs font-bold tracking-widest uppercase mb-4">
              د. عيسى صبري — البرمجة وعلوم الحاسب
            </p>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] font-black text-ink-900 leading-tight mb-4">
              اختار طريقة الدراسة المناسبة ليك
            </h1>
            <p className="text-ink-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              قدامك 4 طرق مختلفة لدراسة البرمجة وعلوم الحاسب.
              اختار الطريقة الأنسب ليك حسب أسلوب مذاكرتك.
            </p>
          </div>

          {/* ── Quiz card ──────────────────────────────────────────── */}
          <div
            className="bg-white border border-cream-200 rounded-2xl p-5 sm:p-7 shadow-sm"
            role="group"
            aria-labelledby="quiz-heading"
          >
            <p
              id="quiz-heading"
              className="text-ink-900 font-extrabold text-lg mb-1 text-right"
            >
              إيه الطريقة الأقرب ليك؟
            </p>
            <p className="text-ink-400 text-sm mb-5 text-right">
              اختار واحدة وهنوصيلك بالنظام المناسب
            </p>

            {/* Options */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              role="radiogroup"
              aria-label="اختار أسلوبك في التعلم"
            >
              {options.map(({ id, label, icon: Icon }) => {
                const active = picked === id;
                const sys = systems.find((s) => s.id === id)!;
                return (
                  <button
                    key={id}
                    role="radio"
                    aria-checked={active}
                    onClick={() => onPick(id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-right transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${active
                        ? `${sys.accent.bg} ${sys.accent.border} shadow-sm`
                        : 'bg-cream-50 border-cream-200 hover:bg-cream-100 hover:border-cream-200'
                      }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150 ${active ? sys.accent.iconBg : 'bg-cream-200'
                        }`}
                    >
                      <Icon
                        size={18}
                        className={active ? sys.accent.text : 'text-ink-400'}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-sm leading-snug ${active ? sys.accent.text : 'text-ink-800'
                        }`}>
                        {label}
                      </p>
                      <p className="text-ink-400 text-xs mt-0.5 leading-snug">
                        → {sys.title}
                      </p>
                    </div>

                    {/* Active indicator */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-150 ${active
                          ? `${sys.accent.border} border-[3px]`
                          : 'border-cream-300 bg-white'
                        }`}
                      aria-hidden="true"
                    >
                      {active && (
                        <div className={`w-2 h-2 rounded-full ${sys.accent.dot}`} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Result row — revealed after selection */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${pickedSys ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}
              aria-live="polite"
              aria-label="النظام المقترح"
            >
              {pickedSys && (
                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl border ${pickedSys.accent.bg} ${pickedSys.accent.border}`}
                >
                  <div className="min-w-0">
                    <p className="text-ink-500 text-xs mb-0.5">الأنسب ليك:</p>
                    <p className={`font-extrabold text-base leading-snug ${pickedSys.accent.text}`}>
                      {pickedSys.title}
                    </p>
                    <p className="text-ink-500 text-xs mt-0.5">{pickedSys.fit}</p>
                  </div>
                  <button
                    onClick={scrollToDetail}
                    className="btn-primary text-sm px-5 py-2.5 shrink-0 w-full sm:w-auto"
                    aria-label={`اعرف تفاصيل ${pickedSys.title}`}
                  >
                    اعرف تفاصيل النظام
                  </button>
                </div>
              )}
            </div>

            {!picked && (
              <p className="text-ink-300 text-xs text-center mt-4">
                اختار واحدة من الخيارات فوق
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Visual separator */}
      <div className="h-6 bg-gradient-to-b from-cream-50 to-cream-100" aria-hidden="true" />
    </section>
  );
}
