import Image from "next/image";
import Scaffold from "../shared/scaffold";
import TitleBadge from "../shared/title-badge";

interface Testimonial {
  pfp: string; // Link to profile picture
  name: string;
  designation: string;
  content: string;
}

const testimonials = [
  {
    pfp: '/testimonials/pfp.png',
    name: 'Alex John',
    designation: 'Pharmacy Student',
    content: "The instant feedback system helped me understand my mistakes and improve faster. It's a game-changer for pharmaceutical education.",
  },
  {
    pfp: '/testimonials/pfp.png',
    name: 'Alex John',
    designation: 'Pharmacy Student',
    content: "ClientLabs has completely redefined pharmaceutical education for our institution. The AI-guided experiments and real-time feedback allow students to grasp complex concepts faster than ever. It’s not just a virtual lab; it’s a gateway to innovation.",
  },
  {
    pfp: '/testimonials/pfp.png',
    name: 'Alex John',
    designation: 'Pharmacy Student',
    content: "The instant feedback system helped me understand my mistakes and improve faster. It's a game-changer for pharmaceutical education.",
  },
  {
    pfp: '/testimonials/pfp.png',
    name: 'Alex John',
    designation: 'Pharmacy Student',
    content: "The instant feedback system helped me understand my mistakes and improve faster. It's a game-changer for pharmaceutical education.",
  },
  {
    pfp: '/testimonials/pfp.png',
    name: 'Alex John',
    designation: 'Pharmacy Student',
    content: "The instant feedback system helped me understand my mistakes and improve faster. It's a game-changer for pharmaceutical education.",
  },
  {
    pfp: '/testimonials/pfp.png',
    name: 'Alex John',
    designation: 'Pharmacy Student',
    content: "The instant feedback system helped me understand my mistakes and improve faster. It's a game-changer for pharmaceutical education.",
  },
];

const TestimonialCard = ({ pfp, name, designation, content }: Testimonial) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border">
      <div className="flex gap-4 mb-4 w-full">
        <Image
          src={pfp}
          alt={name}
          width={36}
          height={36}
          className="size-8 rounded-full mt-1"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-gray-500">{designation}</p>
        </div>
      </div>
      <p className="text-gray-600"> {content} </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <Scaffold>
      <div className="text-center mb-12">
        <TitleBadge title="Testimonials" />
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Scaffold>
  );
};

export default Testimonials;
