'use client';

import React from 'react';

function Services() {
  const [activeTab, setActiveTab] = React.useState(0);
  const services = [
    {
      title: 'Personal Trainer',
      imgUrl: 'images/service001.webp',
      intro:
        'Customized one-on-one training tailored to your fitness and combat goals, guided by professional coaches.',
    },
    {
      title: "Kids' Martial Arts",
      imgUrl: 'images/service002.webp',
      intro:
        'Fun and disciplined classes designed to introduce kids to martial arts, fitness, and self-confidence.',
    },
    {
      title: 'Combat Athlete Conditioning',
      imgUrl: 'images/service003.webp',
      intro:
        'Comprehensive conditioning program for combat sports, improving power, speed, and endurance, with expert guidance on weight management and competition preparation.',
    },
    {
      title: "Ladies' Combat Fitness",
      imgUrl: 'images/service004.webp',
      intro:
        "Unleash your inner strength with our women's combat fitness classes, combining self-defense and high-energy workouts.",
    },
    {
      title: 'Combat Techniques Workshop',
      imgUrl: 'images/service005.webp',
      intro:
        'Elevate your combat skills with our specialized workshops. Focus on specific disciplines like throwing, grappling, boxing, and wrestling, led by expert instructors. These intensive sessions are designed for experienced practitioners looking to refine their technique and take their abilities to the next level.',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 gsap-service-select">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What We Provide
              </h2>
              <div className="flex flex-col space-y-2 " role="tablist">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-left ${
                      activeTab === index
                        ? 'text-white bg-red-600'
                        : 'text-gray-400'
                    } hover:text-white hover:bg-red-600 rounded transition`}
                    role="tab"
                    onClick={() => setActiveTab(index)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 mt-8 px-4 lg:mt-0">
            <div className="tab-content gsap-service-image ">
              <div className="block" role="tabpanel">
                <figure className="w-full  relative ">
                  <img
                    className="w-full md:w-10/12 max-h-[400px] object-cover rounded-lg"
                    src={services[activeTab].imgUrl}
                    alt={services[activeTab].title}
                  />
                  <figcaption className="mt-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {services[activeTab].title}
                    </h3>
                    <p className="text-gray-400">{services[activeTab].intro}</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
