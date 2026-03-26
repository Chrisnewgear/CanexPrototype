export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#1C3868] pt-20 pb-10 px-6 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Glass CTA banner */}
        <div className="mb-16 rounded-3xl bg-white/8 backdrop-blur-xl border border-white/15 shadow-xl shadow-black/20 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#E87722] text-sm tracking-widest uppercase mb-2">Ready to transform your farm?</p>
            <h3 className="text-white text-3xl md:text-4xl">Talk to an AGRO expert.</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="bg-[#E87722] text-white px-8 py-3 rounded-full hover:bg-[#C4541A] transition-colors shadow-lg shadow-[#E87722]/30">
              Request a Demo
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/25 hover:bg-white/20 hover:border-white/40 transition-all">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-white" style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.5px' }}>AGRO</span>
              <span className="text-[#E87722]" style={{ fontSize: '1.4rem', fontWeight: 900 }}>✦</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Revolutionizing agriculture with cutting-edge drone technology.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#E87722] text-sm tracking-widest uppercase">Products</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">AGRO Air</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGRO Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGRO Max</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#E87722] text-sm tracking-widest uppercase">Support</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#E87722] text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>© 2026 AGRO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
