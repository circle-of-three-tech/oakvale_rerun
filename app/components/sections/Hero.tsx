'use client';

import { useEffect, useRef } from 'react';

type Page = 'home' | 'about' | 'services' | 'corporates' | 'academic' | 'donors' | 'government' | 'contact';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const cycleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cycleRef.current;
    if (!el) return;
    const words = ['deserves', 'needs', 'is ready for'];
    let wordIdx = 0, charIdx = 0, deleting = false;
    const speed = { type: 90, delete: 55, pause: 2200, pauseShort: 400 };
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = words[wordIdx];
      if (!deleting) {
        el!.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(tick, speed.pause);
          return;
        }
        timer = setTimeout(tick, speed.type);
      } else {
        el!.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          timer = setTimeout(tick, speed.pauseShort);
          return;
        }
        timer = setTimeout(tick, speed.delete);
      }
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{display:"relative", backgroundImage: 'url(/hero-image2.png)', backgroundColor: 'var(--forest)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', position: 'relative', zIndex: 0}}>
      {/* <div className="announce">
        🌍 Now working across 12 African countries &mdash; <a onClick={() => onNavigate('about')}>Learn more about our reach →</a>
        </div> */}
        <div className="absolute top-0 left-0 w-full h-full bg-forest bg-opacity-60 z-5"/>
        <div className="absolute top-0 left-0 w-full h-full hero-grid-overlay z-10" />

        <section className="hero">
        
        <div className="hero-inner">

         <div className="hero-content relative z-20" style={{display: 'relative', zIndex: 20}}>
          <div className="hero-eyebrow">Workforce . Leadership Development . Organisational Development</div>
          <h1>
            Building the health systems Africa {" "}
            <em><span ref={cycleRef}></span></em><br /> 
          </h1>
          <p className="hero-sub">
            We design and deliver evidence-based learning programmes that build capability, raise professional standards and create genuine career pathways across Africa.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => onNavigate('contact')}>Work with us</button>
            <button className="btn-ghost" onClick={() => onNavigate('services')}>Our services</button>
          </div>
        </div>

        <div className="hero-visual relative z-20">
          <div className="hero-card-stack">
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">African Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50k+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="positioning-pill">
              High-quality, globally relevant learning. Tailored for African realities.
            </div>
          </div>
        </div>

       </div>
        <div className="hero-scroll"><div className="scroll-line" />Scroll</div>
      </section>
    </div>
  );
}
