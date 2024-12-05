import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const trainers = [
  {
    name: 'John "The Rock" Johnson',
    specialty: 'Boxing',
    image: 'images/trainer001.webp',
  },
  {
    name: 'Alexis "The Striker" Lee',
    specialty: 'Muay Thai',
    image: 'images/trainer002.webp',
  },
  {
    name: 'Mike "The Grappler" Thompson',
    specialty: 'MMA',
    image: 'images/trainer003.webp',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gsap-section-title">
          Our Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 gsap-trainer-card"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-600">
                  {trainer.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  {trainer.specialty} Specialist
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
