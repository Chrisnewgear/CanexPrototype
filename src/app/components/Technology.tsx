import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useInView } from './hooks/useInView';
import { Camera, BrainCircuit, MapPin, Shield, Gauge, Droplets, Zap, Wifi } from 'lucide-react';

interface TechnologyProps {
  imageUrl: string;
}

const specs = [
  { icon: Camera, label: '48MP Camera', value: 'Multi-spectral imaging system' },
  { icon: BrainCircuit, label: 'AI Crop Analysis', value: 'Real-time pest & health detection' },
  { icon: MapPin, label: 'GPS Precision', value: 'Sub-centimeter field mapping' },
  { icon: Shield, label: 'IP67 Rated', value: 'All-weather operation' },
];

const stats = [
  { icon: Gauge, value: '36%', label: 'Efficiency Increase' },
  { icon: Droplets, value: '30L/min', label: 'High Flow Rate' },
  { icon: Zap, value: '8h', label: 'Battery Life' },
  { icon: Wifi, value: '5km', label: 'Control Range' },
];

export function Technology({ imageUrl }: TechnologyProps) {
  const [ref, isInView] = useInView();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // Pixel values — avoids per-frame CSS string parsing
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={sectionRef} id="technology" className="relative overflow-hidden bg-[#0F2247] text-white">
      {/* Full-bleed background image with overlay like CANEX product pages */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={imageUrl}
          alt="AGRO Technology"
          style={{ y: bgY, willChange: 'transform' }}
          className="w-full h-[130%] -top-[15%] absolute object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2247]/95 via-[#0F2247]/80 to-[#0F2247]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl tracking-widest uppercase text-white mb-4">
            Tecnología Agrícola Avanzada
          </h2>
          <div className="flex items-center justify-center gap-0 mb-4">
            <div className="w-16 h-0.5 bg-[#E87722]" />
            <div className="w-3 h-3 rotate-45 bg-[#E87722] mx-1" />
            <div className="w-16 h-0.5 bg-[#E87722]" />
          </div>
          <p className="text-white/60 text-lg">Innovación para el campo</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Specs like CANEX FJD AT2 MAX section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="inline-block mb-8 px-4 py-1.5 border border-[#E87722]/40 rounded-full">
              <span className="text-[#E87722] text-sm tracking-widest uppercase">AGRO PRO MAX</span>
            </div>
            <p className="text-white/70 mb-10 text-base leading-relaxed">
              The AGRO Pro Max comes equipped with dual-atomization centrifugal sprayers, enabling faster flight speeds, wider spray coverage, and greater operational efficiency for large-scale agricultural applications.
            </p>

            <div className="space-y-6">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/8 backdrop-blur-sm border border-white/15 shrink-0 group-hover:bg-[#E87722]/20 group-hover:border-[#E87722]/40 transition-all duration-300">
                    <spec.icon className="w-5 h-5 text-[#E87722]" />
                  </div>
                  <div>
                    <h3 className="text-[#E87722] text-base">{spec.label}</h3>
                    <p className="text-white/60 text-sm">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/14 hover:border-[#E87722]/50 transition-all duration-300 shadow-inner shadow-white/5"
                >
                  <stat.icon className="w-6 h-6 text-[#E87722] mb-3" />
                  <div className="text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Precision note — glass panel */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 border-l-2 border-l-[#E87722]">
              <h4 className="text-[#E87722] text-sm tracking-wider uppercase mb-2">Millimeter-Wave Radar</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                The front radar performs 5,000 vertical aerial scans per second combined with 360° horizontal mechanical rotation, offering the most complete detection range for obstacle avoidance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}