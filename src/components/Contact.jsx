import img from '../assets/contactus.jpg';
import Heading from '../layout/Heading';
import Button from '../layout/Button';

import VodafoneCash from '../assets/images/Contactus/vodafone.jpg';
import WhatsApp from '../assets/images/Contactus/whatsapp.jpg';

const openWhatsAppChat = () => {
  window.open('https://wa.me/+201023237315', '_blank');
};

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" className="mt-10" />

      <div className="flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2 space-y-5 pr-5">
          <form className="w-full space-y-5">
            <div className="flex flex-col">
              <label htmlFor="userName">Your Name</label>
              <input
                className="py-3 px-2 rounded-lg hover:shadow-md transition-all w-full"
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userEmail">Your Email</label>
              <input
                className="py-3 px-2 rounded-lg hover:shadow-md transition-all w-full"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userNumber">Your Number</label>
              <input
                className="py-3 px-2 rounded-lg hover:shadow-md transition-all w-full"
                type="text"
                name="userNumber"
                id="userNumber"
                placeholder="Enter your number"
              />
            </div>
            <div className="flex justify-center">
              <Button title="Send Message" />
            </div>
          </form>

          <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
            <div className="w-full md:w-1/4">
              <img
                src={VodafoneCash}
                alt="vodafone-cash-img"
                className="w-20 mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-3 md:mt-0">
              <p>
                Reserve With Us From <span>Vodafone Cash</span>
              </p>
              <a href="tel:+201023237315" className="hover:text-green-500">
                01023237315
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
            <div className="w-full md:w-1/4">
              <img
                src={WhatsApp}
                alt="whatsapp-img"
                className="w-20 mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-3 md:mt-0">
              <p>
                Reserve With Us From <span>WhatsApp</span>
              </p>
              <a
                href="#!"
                onClick={openWhatsAppChat}
                className="hover:text-green-500"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-5 md:mt-0 mb-5 md:mb-0">
          <img src={img} alt="img" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
