import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAnimations() {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  gsap.fromTo(
    '.gsap-hero-title',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    '.gsap-hero-subtitle',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    '.gsap-hero-cta',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.1,
    }
  );

  // Section title animations
  gsap.utils.toArray('.gsap-section-title').forEach((title: any) => {
    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: 'top 100%',
        },
      }
    );
  });

  // About section animations
  gsap.fromTo(
    '.gsap-about-image',
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.gsap-about-image',
        start: 'top 80%',
      },
    }
  );

  gsap.fromTo(
    '.gsap-about-content',
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.gsap-about-content',
        start: 'top 80%',
      },
    }
  );

  // Service section animations
  gsap.fromTo(
    '.gsap-service-image',
    {
      opacity: 0,
      x: -40,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.gsap-service-image',
        start: 'top 80%',
      },
    }
  );

  gsap.fromTo(
    '.gsap-service-select',
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.gsap-service-select',
        start: 'top 80%',
      },
    }
  );

  // Classes animations
  gsap.utils.toArray('.gsap-class-card').forEach((card: any, index: number) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );
  });

  // Trainers animations
  gsap.utils
    .toArray('.gsap-trainer-card')
    .forEach((card: any, index: number) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });

  // Schedule animation
  gsap.fromTo(
    '.gsap-schedule-table',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.gsap-schedule-table',
        start: 'top 80%',
      },
    }
  );

  // Contact form animation
  gsap.fromTo(
    '.gsap-contact-form',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.gsap-contact-form',
        start: 'top 80%',
      },
    }
  );
}
