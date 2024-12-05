'use client';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute w-full h-full object-cover">
        <img src="images/gym001.webp" />
      </div>
      <div className="text-center relative z-20">
        <h1 className="text-6xl font-bold mb-4 gsap-hero-title">
          ELITE <span className="text-red-600">COMBAT</span> FITNESS
        </h1>
        <p className="text-xl mb-8 gsap-hero-subtitle">
          Boxing • Muay Thai • MMA
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white gsap-hero-cta">
          Start Your Journey
        </Button>
      </div>
    </section>
  );
}
