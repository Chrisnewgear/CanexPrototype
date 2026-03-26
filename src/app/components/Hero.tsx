import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1626786795743-22ed52fc6720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYW5kcyUyMGhvbGRpbmclMjBncmFpbiUyMHNlZWRzJTIwaGFydmVzdHxlbnwxfHx8fDE3NzQ0MDA3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    headline: ['The future', 'of farming.'],
    sub: 'Precision agriculture meets cutting-edge drone technology. Revolutionize your farm with AGRO.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmx5aW5nJTIwZmllbGR8ZW58MXx8fHwxNzc0Mzk5NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    headline: ['Smarter', 'fields ahead.'],
    sub: 'AI-powered crop analysis delivers real-time insights, enabling faster decisions and higher yields.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1708192496970-f8d3c8706fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMGRyb25lJTIwY3JvcHxlbnwxfHx8fDE3NzQzOTk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    headline: ['Built for', 'every season.'],
    sub: 'IP67-rated for all-weather operation. From planting to harvest, AGRO works as hard as you do.',
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // Auto-advance every 5.5 s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent(prev => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0F2247]">
      {/* Crossfading background images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ y: bgY, willChange: 'transform' }}
            className="absolute w-full h-[130%] -top-[15%]"
          >
            <img
              src={slide.imageUrl}
              alt="AGRO Drone"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-[#0F2247]/85 via-[#0F2247]/55 to-[#0F2247]/30"
        />
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY, willChange: 'transform' }} className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl"
        >
          {/* Glass content card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-12 md:px-14 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-[#E87722]" />
              <span className="text-[#E87722] text-sm tracking-widest uppercase">AGRO Drones</span>
            </div>

            {/* Animated headline + subtext per slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-white leading-tight">
                  {slide.headline[0]}<br />{slide.headline[1]}
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-xl">
                  {slide.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E87722] text-white px-10 py-3.5 rounded-full text-lg hover:bg-[#C4541A] transition-colors shadow-lg shadow-[#E87722]/30">
                Learn more
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-10 py-3.5 rounded-full text-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all">
                Watch film
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Carousel controls — prev / dots / next */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button onClick={prev} aria-label="Previous slide" className="text-white/40 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-[#E87722]' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}

        <button onClick={next} aria-label="Next slide" className="text-white/40 hover:text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
