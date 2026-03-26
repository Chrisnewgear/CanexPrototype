import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Technology } from './components/Technology';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Technology imageUrl="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmx5aW5nJTIwZmllbGR8ZW58MXx8fHwxNzc0Mzk5NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080" />
      <Footer />
    </div>
  );
}