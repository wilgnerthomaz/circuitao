import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { CalendarSection } from './components/CalendarSection';
import { StatsMapSection } from './components/StatsMapSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <CalendarSection />
        <StatsMapSection />
      </main>
      <Footer />
    </div>
  );
}
