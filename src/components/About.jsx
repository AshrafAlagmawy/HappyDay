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

import Button from '../layout/Button';
import Heading from '../layout/Heading';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Image 1 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img1}
            alt="img1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 2 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img2}
            alt="img2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 3 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img3}
            alt="img3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 4 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img4}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 5 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img5}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 6 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img6}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 7 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img7}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 8 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img8}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 9 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img9}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 10 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img10}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 11 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img11}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 12 */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-md overflow-hidden">
          <img
            src={img12}
            alt="img4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2 md:ml-10">
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
