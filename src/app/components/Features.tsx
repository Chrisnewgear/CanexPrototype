import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const features = [
  {
    title: 'AGRICULTURA',
    description: 'Leading crop production with a firm commitment to food security and economic protection.',
    imageUrl: 'https://images.unsplash.com/photo-1594853570014-86ef76d4d3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGNvcm4lMjBmaWVsZCUyMGZhcm1pbmclMjBzdW5zZXR8ZW58MXx8fHwxNzc0NDAwNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#E87722',
  },
  {
    title: 'MAQUINARIA AGRÍCOLA',
    description: 'National coverage, immediate availability, guarantee and specialized support. Innovation constant at your service.',
    imageUrl: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwYWVyaWFsJTIwY3JvcCUyMHNwcmF5ZXJ8ZW58MXx8fHwxNzc0NDAwNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#ffffff',
  },
  {
    title: 'ALIMENTOS',
    description: 'Choosing us means betting on a leading brand in the production and commercialization of food.',
    imageUrl: 'https://images.unsplash.com/photo-1765461107744-3834d48e6dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0JTIwbWFya2V0fGVufDF8fHx8MTc3NDQwMDcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#E87722',
  },
  {
    title: 'PRECISIÓN GPS',
    description: 'Sub-centimeter accuracy for perfect field mapping and fully autonomous drone flight paths.',
    imageUrl: 'https://images.unsplash.com/photo-1669465006373-e8cc2ce98921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBHUFMlMjBmYXJtaW5nJTIwdHJhY3RvciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NDAwNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#ffffff',
  },
];

export function Features() {
  const [ref, isInView] = useInView();

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section heading — CANEX style: uppercase + orange underline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl tracking-widest uppercase text-[#1C3868] mb-4">
            Nuestros Servicios
          </h2>
          {/* Orange accent underline */}
          <div className="flex items-center justify-center gap-0">
            <div className="w-16 h-0.5 bg-[#E87722]" />
            <div className="w-3 h-3 rotate-45 bg-[#E87722] mx-1" />
            <div className="w-16 h-0.5 bg-[#E87722]" />
          </div>
          <p className="text-lg text-[#1C3868]/60 mt-5">
            Technology that works as hard as you do.
          </p>
        </motion.div>

        {/* 4-column image-overlay card grid — like CANEX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative group overflow-hidden"
              style={{ minHeight: '380px' }}
            >
              {/* Background image */}
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Soft dark scrim — lighter than before so glass can shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2247]/80 via-[#0F2247]/30 to-transparent transition-all duration-500" />

              {/* Glass content panel pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 bg-white/10 backdrop-blur-md border-t border-white/20 translate-y-0 transition-all duration-500 group-hover:bg-white/15">
                {/* Orange accent line */}
                <div className="w-8 h-0.5 bg-[#E87722] mb-3 transition-all duration-300 group-hover:w-14" />
                <h3
                  className="text-white mb-2 tracking-wide uppercase"
                  style={{ fontSize: '0.95rem', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed transition-all duration-400 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}