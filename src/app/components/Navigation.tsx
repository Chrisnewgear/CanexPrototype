import { Menu, X, Home, Package, Wrench, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-white/50 shadow-sm shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[#1C3868]" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.5px' }}>AGRO</span>
            <span className="text-[#E87722]" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.5px' }}>✦</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center h-full">
            {[
              { label: 'Inicio', icon: Home, href: '#' },
              { label: 'Features', icon: Package, href: '#features' },
              { label: 'Technology', icon: Wrench, href: '#technology' },
              { label: 'Nuestra Empresa', icon: Building2, href: '#products' },
              { label: 'Contáctenos', icon: MessageSquare, href: '#contact' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center h-full">
                {i > 0 && <div className="w-px h-5 bg-[#1C3868]/15 mx-1" />}
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 h-full text-sm text-[#1C3868]/70 hover:text-[#E87722] transition-colors group"
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <button
            className="md:hidden text-[#1C3868] p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-[#1C3868]/10 bg-white/60 backdrop-blur-xl rounded-b-2xl">
            {[
              { label: 'Inicio', icon: Home, href: '#' },
              { label: 'Features', icon: Package, href: '#features' },
              { label: 'Technology', icon: Wrench, href: '#technology' },
              { label: 'Nuestra Empresa', icon: Building2, href: '#products' },
              { label: 'Contáctenos', icon: MessageSquare, href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#1C3868]/70 hover:text-[#E87722] hover:bg-orange-50 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}