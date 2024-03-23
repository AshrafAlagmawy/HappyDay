import img1 from '../assets/images/Event/event1.jpg';
import img2 from '../assets/images/Event/event2.jpg';
import img3 from '../assets/images/Event/event3.jpg';
import img4 from '../assets/images/Event/event4.jpg';
import Button from '../layout/Button';
import Heading from '../layout/Heading';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4 flex flex-wrap justify-center md:justify-start gap-5">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img1}
            alt="img1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img2}
            alt="img2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="w-full md:w-2/4 flex flex-wrap justify-center md:justify-start gap-5 mt-5 md:mt-0">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img3}
            alt="img3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img4}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
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
