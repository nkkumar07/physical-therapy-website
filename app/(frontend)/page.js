import Carousel from '@/components/Carousel';
import Service from '@/components/Service';
import About from '@/components/About';
import Appointment from '@/components/Appointment';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <Service />
      <About/>
      <Appointment/>
      <Team/>
      <Testimonial/>
    </div>
  );
}
