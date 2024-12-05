export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center gsap-section-title">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-6">
          <div className="gsap-about-image">
            <img
              src="images/pic001.webp"
              alt="Gym Interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="gsap-about-content">
            <p className="text-lg mb-6">
              At Elite Combat Fitness, we bring together the best of Boxing,
              Muay Thai, and MMA under one roof. Our state-of-the-art facility
              and expert trainers are dedicated to helping you achieve your
              fitness and combat sports goals.
            </p>
            <p className="text-lg">
              Whether you're a beginner looking to get in shape or an
              experienced fighter aiming to sharpen your skills, we have the
              programs and support you need to succeed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-6">
          <div className="gsap-about-content">
            <p className="text-lg mb-6">
              At Elite Combat Fitness, we bring together the best of Boxing,
              Muay Thai, and MMA under one roof. Our state-of-the-art facility
              and expert trainers are dedicated to helping you achieve your
              fitness and combat sports goals.
            </p>
            <p className="text-lg">
              Whether you're a beginner looking to get in shape or an
              experienced fighter aiming to sharpen your skills, we have the
              programs and support you need to succeed.
            </p>
          </div>
          <div className="gsap-about-image">
            <img
              src="images/pic002.webp"
              alt="Gym Interior"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}