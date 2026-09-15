import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemDetail from './components/SystemDetail';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { systems } from './data/systems';
import type { SystemId } from './data/systems';

export default function App() {
  const [picked, setPicked] = useState<SystemId | null>(null);

  const pickedSys = picked ? systems.find((s) => s.id === picked) ?? null : null;

  const handlePick = (id: SystemId) => {
    // If same option clicked again, deselect
    setPicked((prev) => (prev === id ? null : id));
  };

  const handleReset = () => {
    setPicked(null);
    // Scroll back to quiz
    setTimeout(() => {
      document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="min-h-screen bg-cream-50 font-arabic" dir="rtl" lang="ar">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] btn-primary text-sm"
      >
        تخطى للمحتوى الرئيسي
      </a>

      <Header />

      <main id="main">
        {/* Step 1 & 2: understand + choose */}
        <Hero picked={picked} onPick={handlePick} />

        {/* Step 3 & 4: see detail for ONLY the chosen system */}
        {pickedSys && (
          <SystemDetail sys={pickedSys} onReset={handleReset} />
        )}

        {/* Step 5: contact — always visible */}
        <FinalCTA hasPick={!!picked} />
      </main>

      <Footer />
    </div>
  );
}
