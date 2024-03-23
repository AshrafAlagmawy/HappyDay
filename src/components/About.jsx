import Button from '../layout/Button';
import Heading from '../layout/Heading';
import { Link } from 'react-scroll';

import img1 from '../assets/images/Event/event1.jpg';
import img2 from '../assets/images/Event/event2.jpg';
import img3 from '../assets/images/Event/event3.jpg';
import img4 from '../assets/images/Event/event4.jpg';
import img5 from '../assets/images/Event/event5.jpg';
import img6 from '../assets/images/Event/event6.jpg';
import img7 from '../assets/images/Event/event7.jpg';
import img8 from '../assets/images/Event/event8.jpg';
import img9 from '../assets/images/Event/event9.jpg';
import img10 from '../assets/images/Event/event10.jpg';
import img11 from '../assets/images/Event/event11.jpg';
import img12 from '../assets/images/Event/event12.jpg';

const About = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div className="md:min-h-screen flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="md:w-2/3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-full rounded-md overflow-hidden transform transition-transform hover:scale-110"
            >
              <img
                src={img}
                alt={`img${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3 text-center md:text-left md:pl-10">
        <Heading title1="About" title2="Us?" />
        <p className="text-lightText">
          Welcome to our professional party planning services. We specialize in
          creating unforgettable experiences for all your special occasions.
          Whether it's a birthday bash, wedding celebration, corporate event, or
          any other gathering, our expert team will handle every detail with
          precision and creativity. Let us turn your vision into reality and
          make your event truly extraordinary.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
