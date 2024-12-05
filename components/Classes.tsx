import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const classes = [
  {
    title: 'Boxing',
    description: 'Master the sweet science of boxing with our expert coaches.',
    image: 'images/sport001.webp',
  },
  {
    title: 'Muay Thai',
    description: 'Learn the art of eight limbs and dominate the ring.',
    image: 'images/sport002.webp',
  },
  {
    title: 'MMA',
    description: 'Combine multiple disciplines for complete fighter training.',
    image: 'images/sport003.webp',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gsap-section-title">
          Our Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 gsap-class-card"
            >
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-600">
                  {cls.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  {cls.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
