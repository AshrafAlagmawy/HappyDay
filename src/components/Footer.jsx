import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handlePhoneClick = () => {
    window.open('https://wa.me/01004167358', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@evento.com';
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2">Happy Day</h2>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
              01004167358
            </span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
              info@evento.com
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-8">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-green-500 transition-all">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#about"
                  className="hover:text-green-500 transition-all"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#courses"
                  className="hover:text-green-500 transition-all"
                >
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#reviews"
                  className="hover:text-green-500 transition-all"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-500 transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Social Media</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500 transition-all">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500 transition-all">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-all">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; Developed by Ashraf Alagmawy . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
