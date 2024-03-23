import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          transitionTime={500}
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`img${index + 1}`}
                style={{ width: '400px', height: '400px' }}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </Carousel>
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
