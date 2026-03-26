import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Pixel values — avoids per-frame CSS string parsing, stays on GPU compositor
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0F2247]">
      {/* Full-bleed background image — high opacity like CANEX */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8 }}
          style={{ y: bgY, willChange: 'transform' }}
          className="w-full h-[130%] -top-[15%] absolute"
        >

          <img
            src={imageUrl}
            alt="AGRO Drone"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark gradient overlay like CANEX */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-[#0F2247]/85 via-[#0F2247]/55 to-[#0F2247]/30"
        />
      </div>

      {/* Content — left-aligned like CANEX */}
      <motion.div style={{ y: contentY, willChange: 'transform' }} className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl"
        >
          {/* Glass content card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-12 md:px-14 shadow-2xl shadow-black/20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-0.5 bg-[#E87722]" />
              <span className="text-[#E87722] text-sm tracking-widest uppercase">AGRO Drones</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-white leading-tight">
              The future<br />of farming.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-xl">
              Precision agriculture meets cutting-edge drone technology.
              Revolutionize your farm with AGRO.
            </p>
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