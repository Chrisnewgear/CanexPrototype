import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useInView } from './hooks/useInView';

interface Product {
  name: string;
  tagline: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    name: 'AGRO Air',
    tagline: 'Perfect for small farms',
    price: 'From $4,999',
    imageUrl: 'https://images.unsplash.com/photo-1624952627456-14559ef04cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNsb3NlJTIwdXAlMjB0ZWNobm9sb2d5JTIwd2hpdGV8ZW58MXx8fHwxNzc0Mzk5NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'AGRO Pro',
    tagline: 'Professional grade performance',
    price: 'From $12,999',
    imageUrl: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmx5aW5nJTIwZmllbGR8ZW58MXx8fHwxNzc0Mzk5NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'AGRO Max',
    tagline: 'Enterprise solution',
    price: 'From $24,999',
    imageUrl: 'https://images.unsplash.com/photo-1708192496970-f8d3c8706fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMGRyb25lJTIwY3JvcHxlbnwxfHx8fDE3NzQzOTk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function ProductShowcase() {
  const [ref, isInView] = useInView();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // Pixel values — avoids per-frame CSS string parsing
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} id="products" className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#e8eef7] via-[#f0f4fa] to-[#fdf0e8]">
      {/* Decorative blurred orbs — give glass cards something to blur against */}
      <motion.div style={{ y: orb1Y, willChange: 'transform' }} className="absolute top-10 left-0 w-80 h-80 bg-[#1C3868]/12 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: orb2Y, willChange: 'transform' }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: orb3Y, willChange: 'transform' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1C3868]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl tracking-widest uppercase mb-4 text-[#1C3868]">
            Choose your AGRO.
          </h2>
          {/* Orange accent underline */}
          <div className="flex items-center justify-center gap-0 mb-5">
            <div className="w-16 h-0.5 bg-[#E87722]" />
            <div className="w-3 h-3 rotate-45 bg-[#E87722] mx-1" />
            <div className="w-16 h-0.5 bg-[#E87722]" />
          </div>
          <p className="text-xl text-[#1C3868]/60">
            A model for every size of operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/70 shadow-xl shadow-[#1C3868]/8 hover:shadow-2xl hover:shadow-[#1C3868]/15 hover:bg-white/55 hover:border-white/90 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle glass shimmer on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Glass info panel */}
              <div className="p-8 text-center bg-white/20 backdrop-blur-sm border-t border-white/40">
                <h3 className="text-3xl mb-2 text-[#1C3868]">{product.name}</h3>
                <p className="text-[#1C3868]/60 mb-4">{product.tagline}</p>
                <p className="text-2xl mb-6 text-[#E87722]">{product.price}</p>
                <button className="w-full bg-[#1C3868]/90 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-[#1C3868] hover:bg-[#0F2247] transition-all duration-300 shadow-md shadow-[#1C3868]/20">
                  Buy now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
