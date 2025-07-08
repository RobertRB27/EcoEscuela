import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { BenefitsSection } from '@/components/benefits-section';
import { EnvironmentalGallery } from '@/components/environmental-gallery';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EnvironmentalGallery />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}