const WelcomeSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4 gsap-about-image">
            <div className="flex space-x-4">
              <figure className="w-1/2 mt-8">
                <img
                  src="images/image002.webp"
                  alt="About One"
                  className="h-full w-auto object-cover rounded-lg"
                />
              </figure>
              <figure className="w-1/2 mb-8">
                <img
                  src="images/image001.webp"
                  alt="About One"
                  className="h-full w-auto object-cover rounded-lg"
                />
              </figure>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0 gsap-about-content">
            <div className="max-w-xl">
              <span className="text-gray-400 text-lg block mb-3">
                Welcome to Elite Combat Fitness
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Your Premier Destination for Combat Sports Excellence
              </h2>
              <div>
                <p className="text-gray-400 mb-8">
                  Whether you&apos;re stepping into the ring for the first time
                  or preparing for your next professional bout, Elite Combat
                  Fitness is your path to mastery. Our state-of-the-art facility
                  offers comprehensive training programs for all skill levels,
                  from beginners to professional athletes.
                </p>
                <p className="text-gray-400 mb-8">
                  Our experienced coaches are dedicated to developing both your
                  technical skills and mental fortitude, ensuring you reach your
                  full potential in combat sports. Join our community of
                  warriors and transform yourself into the fighter you&apos;ve
                  always wanted to be.
                </p>
                <p className="text-gray-200 text-xl mb-8">
                  Train Like a Champion. Fight Like a Warrior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
