import { useEffect, useRef } from 'react';
import Gallery from '../components/Gallery';
import OurStory from '../components/OurStory';
import InstagramSection from '../components/InstagramSections';
import Header from '../components/Header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const Hero = () => {
  const badgeRef = useRef(null);

  useEffect(() => {
    const badge = badgeRef.current;
    if (badge) {
      const handleMouseEnter = () => {
        badge.style.transition = 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };
      badge.addEventListener('mouseenter', handleMouseEnter);
      return () => badge.removeEventListener('mouseenter', handleMouseEnter);
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.story-image-wrapper, .story-content, .signature-card'
    );

    revealElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>

      <Header />
      <main className="main-container">
        {/* Header + Hero wrapped together so they share one viewport */}
        <div className="relative flex flex-col min-h-[100svh]">
          {/* Subtle patterned grid overlay */}
          <div className="micro-dot-grid absolute right-0 top-0 w-[60%] h-full pointer-events-none z-0 max-sm:w-[50%] max-sm:opacity-40" />



          {/* Hero Content Area */}
          <section className="hero-section" data-purpose="hero-section">
            <svg className="curve-svg" fill="none" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-40 180 C220 180 340 380 430 450 C520 530 680 560 880 490 C1060 420 1200 480 1460 380"
                fill="none" opacity="0.8" stroke="#dec8b5" strokeLinecap="round" strokeWidth="6"
              />
              <path
                d="M-20 180 C240 180 370 410 470 490 C560 560 740 590 920 460 C1100 370 1250 430 1480 340"
                fill="none" opacity="0.65" stroke="#b57351" strokeLinecap="round" strokeWidth="4.5"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-12 gap-4 mt-2">
              <div className="col-span-12 relative">
                <div className="elevated-badge">
                  <h2>An Elevated</h2>
                </div>
                <div className="z-10">
                  <h1 className="main-headline">
                    <span className="headline-coffee">Mickey's</span>
                    <span className="headline-experience">Experience</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="cup-container">
              <div className="cup-wrapper">
                <div className="relative w-full h-full flex items-center justify-center glass-container">
                  {/* <img
                    alt="Cold craft iced coffee splashing with roasted coffee beans"
                    className="glass-image w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(40,15,6,0.3)] pointer-events-auto"
                    src="/glass.png"
                  /> */}
                  <img
                    src="/glass.png"
                    alt="Cold craft iced coffee splashing with roasted coffee beans"
                    draggable="false"
                    className="glass-image w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(40,15px,6,0.3)] pointer-events-none select-none touch-none "
                    style={{
                      WebkitUserSelect: 'none',
                      WebkitTouchCallout: 'none',
                      WebkitUserDrag: 'none',
                      userSelect: 'none',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  />
                </div>
                <a
                  aria-label="Order now"
                  className="order-badge"
                  data-purpose="order-badge"
                  href="#order"
                  ref={badgeRef}
                >
                  <div className="order-badge-inner">
                    <svg className="w-full h-full fill-[#a33816] drop-shadow-md" viewBox="0 0 100 100">
                      <path d="M50 0 C54 0 57 7 61 8 C65 9 71 4 75 7 C79 10 81 17 84 21 C87 25 94 28 95 33 C96 38 92 44 92 49 C92 54 96 60 95 65 C94 70 87 73 84 77 C81 81 79 88 75 91 C71 94 65 89 61 90 C57 91 54 98 50 98 C46 98 43 91 39 90 C35 89 29 94 25 91 C21 88 19 81 16 77 C13 73 6 70 5 65 C4 60 8 54 8 49 C8 44 4 38 5 33 C6 28 13 25 16 21 C19 17 21 10 25 7 C29 4 35 9 39 8 C43 7 46 0 50 0 Z" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white badge-font">
                      <span className="text-2xl sm:text-[28px] md:text-[32px] tracking-tight leading-none block -rotate-3">Order</span>
                      <span className="text-2xl sm:text-[28px] md:text-[32px] tracking-tight leading-none block -rotate-3 mt-1">now</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bottom-content" data-purpose="product-description">
              <h3>Single-Origin</h3>
              <p>Notes of cacao slow roasted in small batches.</p>
            </div>

            {/* <div className="absolute bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-roast/70">
                Scroll
              </span>

              <div className="w-[24px] h-[40px] rounded-full border border-roast/40 flex items-start justify-center p-1">
                <div className="w-[4px] h-[8px] rounded-full bg-terracotta animate-bounce" />
              </div>
            </div> */}
          </section>

          
        </div>

              

        {/* Our Story Section */}
        {/* <section className="story-section" id="about">
        <div className="story-bg-text">OUR STORY</div>
        <div className="story-grid">
          <div className="story-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
              alt="Barista preparing coffee in artisan café"
              loading="lazy"
            />
          </div>
          <div className="story-content">
            <div className="eyebrow">Since 2018</div>
            <h2>
              A Little More
              <br />
              Than Just <em>Coffee.</em>
            </h2>
            <p>
              We believe great coffee begins long before the first sip. From carefully sourced beans to
              thoughtful brewing, every detail is part of the experience. Our journey started with a
              simple obsession — to craft the perfect cup that brings people together.
            </p>
            <p>
              Every bean is hand-selected, roasted in small batches, and brewed with intention. It's not
              just coffee — it's a ritual, a moment of calm, and a celebration of craft.
            </p>

            <div className="story-stats">
              <div>
                <div className="story-stat-number">12+</div>
                <div className="story-stat-label">Origins</div>
              </div>
              <div>
                <div className="story-stat-number">8</div>
                <div className="story-stat-label">Roast Profiles</div>
              </div>
              <div>
                <div className="story-stat-number">100%</div>
                <div className="story-stat-label">Ethically Sourced</div>
              </div>
            </div>

            <a href="#story" className="story-btn">
              Discover Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section> */}

        <OurStory />

        {/* Signature Items Section */}
        <section className="signature-section" id="collections">
          <div className="signature-bg-text">SIGNATURE</div>

          <div className="signature-header">
            <div className="eyebrow">The Ultimate Experience</div>
            <h2>Signature <em>Items</em></h2>
          </div>

          <div className="signature-grid">
            {/* Card 1 */}
            <div className="signature-card">
              <div className="signature-card-image">
                <span className="signature-card-badge">Best Seller</span>
                <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop" alt="Signature Caramel Latte" loading="lazy" />
              </div>
              <h3>Signature Caramel Latte</h3>
              <p>Velvety espresso layered with steamed milk and our house-made caramel, finished with a dusting of sea salt.</p>
              <div className="signature-card-footer">
                <span className="signature-price">$6.50</span>
                <a href="#order" className="signature-link">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="signature-card">
              <div className="signature-card-image">
                <span className="signature-card-badge">New</span>
                <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop" alt="Classic Cappuccino" loading="lazy" />
              </div>
              <h3>Classic Cappuccino</h3>
              <p>Equal parts rich espresso, velvety steamed milk, and airy foam — a timeless Italian classic done right.</p>
              <div className="signature-card-footer">
                <span className="signature-price">$5.25</span>
                <a href="#order" className="signature-link">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="signature-card">
              <div className="signature-card-image">
                <span className="signature-card-badge">Fan Favorite</span>
                <img src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop" alt="Velvet Mocha" loading="lazy" />
              </div>
              <h3>Velvet Mocha</h3>
              <p>Rich dark chocolate melted into espresso, topped with silky microfoam and a swirl of cocoa.</p>
              <div className="signature-card-footer">
                <span className="signature-price">$6.00</span>
                <a href="#order" className="signature-link">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="ultimate-banner">
            <h3>This Is The <span>Ultimate</span> Coffee Experience.</h3>
            <p>Every cup is a journey — from the first aroma to the last sip. Crafted slowly, enjoyed fully.</p>
          </div>
        </section>

        <Gallery />

        <InstagramSection />

        {/* <Newsletter/> */}

      </main>

      <Footer />

    </>

  );
};

export default Hero;