import React from 'react';
import partyImage from '../assets/party.png';

const ServicesCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 delay-80">
      <div className="w-3/5">
        <img src={props.img} alt="party" className="rounded-lg" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">
          {props.title}
        </h3>
        <p className="text-lightText text-center md:text-start flex gap-3 items-center">
          Take a step and reserve with us{' '}
          <img src={partyImage} className="w-8 h-auto" alt="emoji" />
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
