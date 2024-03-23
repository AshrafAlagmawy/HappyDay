import Heading from '../layout/Heading';
import ServicesCard from '../layout/ServicesCard';

import EventOrganizer from '../assets/images/Services/service1.jpg';
import Photography from '../assets/images/Services/service2.jpg';
import Planning from '../assets/images/Services/service3.jpg';
import Happiness from '../assets/images/Services/service4.jpg';

const Services = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Services" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <ServicesCard img={EventOrganizer} title="Event Organizing" />
        <ServicesCard img={Photography} title="Photography" />
        <ServicesCard img={Planning} title="Planning" />
        <ServicesCard img={Happiness} title="Happiness All Around" />
      </div>
    </div>
  );
};

export default Services;
