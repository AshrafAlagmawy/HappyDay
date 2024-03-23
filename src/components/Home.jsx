import img from '../assets/hero.jpg';
// import img from '../assets/hero.svg';
import Button from '../layout/Button';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl font-semibold leading-tight">
          Professional Event Planning
          <span className="text-brightGreen"> Evento</span>
        </h2>
        <p className="text-lightText mt-5 text-start">
          Elevate your events with our professional event planning services.
          From corporate conferences to private parties, our experienced team
          will handle every detail to ensure a seamless and memorable experience
          for you and your guests. Let us bring your vision to life and create
          unforgettable moments together.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div
        className="w-full md:w-2/4"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={img}
          alt="img"
          style={{
            width: '95%',
            borderRadius: '5%',
            marginLeft: '0',
            marginTop: '20px',
          }}
          className="md:ml-5"
        />
      </div>
    </div>
  );
};

export default Home;
