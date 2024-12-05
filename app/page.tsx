'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Classes from '@/components/Classes';
import Trainers from '@/components/Trainers';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import WelcomeSection from '@/components/WelcomeSection';
import ClassSchedule from '@/components/ClassesSchedule';
import Gallery from '@/components/Gallery';
import AnimationWrapper from '@/components/AnimationWrapper';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <AnimationWrapper>
        <Hero />
        <WelcomeSection />
        <About />
        <Classes />
        <Services />
        <Trainers />
        <ClassSchedule />
        <Contact />
        <Gallery />
      </AnimationWrapper>
    </main>
  );
}
