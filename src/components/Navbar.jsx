import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : ''
      }`}
    >
      <div className="flex flex-row justify-between p-5 px-5 md:px-32">
        <div className="cursor-pointer">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="font-semibold text-2xl p-1 cursor-pointer"
            onClick={() => setMenu(false)}
          >
            Happy Day
          </ScrollLink>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <NavItem to="home" onClick={() => setMenu(false)}>
            Home
          </NavItem>
          <NavItem to="about" onClick={() => setMenu(false)}>
            About
          </NavItem>
          <NavItem to="services" onClick={() => setMenu(false)}>
            Services
          </NavItem>
          <NavItem to="reviews" onClick={() => setMenu(false)}>
            Reviews
          </NavItem>
          <NavItem to="contact-us" onClick={() => setMenu(false)}>
            Contact Us
          </NavItem>
        </nav>

        <div className="flex md:hidden cursor-pointer" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 shadow-md `}
      >
        <NavItemMobile to="home" onClick={() => setMenu(false)}>
          Home
        </NavItemMobile>
        <NavItemMobile to="about" onClick={() => setMenu(false)}>
          About
        </NavItemMobile>
        <NavItemMobile to="services" onClick={() => setMenu(false)}>
          Services
        </NavItemMobile>
        <NavItemMobile to="reviews" onClick={() => setMenu(false)}>
          Reviews
        </NavItemMobile>
        <NavItemMobile to="contact-us" onClick={() => setMenu(false)}>
          Contact Us
        </NavItemMobile>
      </div>
    </div>
  );
};

const NavItem = ({ to, children, onClick }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className="nav-link cursor-pointer"
    onClick={onClick}
    activeClass="text-green-500 border-b-2 border-green-500"
  >
    {children}
  </ScrollLink>
);

const NavItemMobile = ({ to, children, onClick }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className="nav-link-mobile cursor-pointer"
    onClick={onClick}
    activeClass="text-green-500 border-b-2 border-green-500"
  >
    {children}
  </ScrollLink>
);

export default Navbar;
