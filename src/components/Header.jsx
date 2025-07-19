import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    upskilling: false,
    contact: false,
    services: false,
  });

  const dropdownRefs = useRef({
    upskilling: useRef(null),
    contact: useRef(null),
    services: useRef(null),
  });
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prevState) => {
      const newState = {
        upskilling: false,
        contact: false,
        services: false,
        // ...prevState,
      };
      newState[dropdown] = !newState[dropdown];
      return newState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dropdownKeys = Object.keys(dropdownRefs.current);
      const isClickInsideDropdown = dropdownKeys.some((key) => {
        return dropdownRefs.current[key].current && dropdownRefs.current[key].current.contains(e.target);
      });

      if (!isClickInsideDropdown && menuButtonRef.current && !menuButtonRef.current.contains(e.target)) {
        setIsDropdownOpen({
          upskilling: false,
          contact: false,
          services: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 bg-white">
        <header className=" py-4 px-6 flex justify-between items-center">
          <div className="pr-12">
            <img src={logo} alt="" className='md:h-[36px]' />
          </div>

          <div className="w-[80%] flex justify-between">
            <nav className="hidden md:flex space-x-4 text-[16px] font-[400] font-montserrat text-base leading-[19.5px] text-[#171717]">
              <a href="https://aquarianconsult.com/about-us/" className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4">About Us</a>

              <div className="relative" ref={dropdownRefs.current.services}>
                <a
                  href="#services"
                  className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center"
                  onClick={() => toggleDropdown('services')}
                >
                  What We Do
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.services ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`z-[1] absolute left-0 ${isDropdownOpen.services ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10 md:w-[300px]`}>
                  <a href="https://aquarianconsult.com/what-we-do#organizationalefficiency" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Organisation Efficency Through Team Effectiveness</a>
                  <a href="https://aquarianconsult.com/what-we-do#businessprocess" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Business Process Re-Engineering</a>
                  <a href="https://aquarianconsult.com/what-we-do#executiveplacement" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Executive Placement</a>
                  <a href="https://aquarianconsult.com/what-we-do#manpowermanagement" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Manpower Management</a>
                  <a href="https://aquarianconsult.com/what-we-do#talentacquisition" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Talent Acquisition</a>
                  <a href="https://aquarianconsult.com/what-we-do#businessdevelopment" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Business Development Services</a>
                  <a href="https://aquarianconsult.com/what-we-do#skillenhancement" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Skills Enhancement Programme</a>
                </div>
              </div>

              <a href="https://aquarianconsult.com/standard-portfolio/" className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4">Gallery</a>

              <div className="relative" ref={dropdownRefs.current.upskilling}>
                <a
                  href="#upskilling"
                  className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center"
                  onClick={() => toggleDropdown('upskilling')}
                >
                  Upskilling Centre
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.upskilling ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`z-[1] absolute left-0 ${isDropdownOpen.upskilling ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                  <a href="https://aquarianconsult.com/upskill-photography/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Photography</a>
                  <a href="https://aquarianconsult.com/entrepreneurship_program/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Business</a>
                </div>
              </div>

              <div className="relative" ref={dropdownRefs.current.contact}>
                <a
                  href="#contact"
                  className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center"
                  onClick={() => toggleDropdown('contact')}
                >
                  Contact Us
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.contact ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`z-[1]  absolute left-0 ${isDropdownOpen.contact ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                  <a href="https://aquarianconsult.com/our-location/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Our Location</a>
                </div>
              </div>

              <div className="relative" ref={dropdownRefs.current.contact}>
                <a
                  href="#aacis"
                  className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center font-bold"
                  onClick={() => toggleDropdown('aacis')}
                >
                  AACIS
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.contact ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`z-[1] absolute left-0 ${isDropdownOpen.aacis ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 w-[150px]`}>
                  <a href="/aacis/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">AACIS</a>
                  <a href="/aacis/about" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">About Us</a>
                  <a href="/aacis/gallery" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Gallery</a>
                  <a href="/aacis/register" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Register</a>
                  {/* <a href="/contact-us" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Contact Us</a> */}
                </div>
              </div>
              {/* <a href="#aacis" className="text-[#171717] px-4 font-[600]">AACIS</a> */}
            </nav>
          </div>

          <button
            className="md:hidden text-lg focus:outline-none"
            onClick={toggleMenu}
            ref={menuButtonRef}
          >
            {isMenuOpen ?
              <span className="block w-6 h-1 text-[#171717] mb-1">X</span> : (
                <>
                  <span className="block w-6 h-1 bg-black mb-1"></span>
                  <span className="block w-6 h-1 bg-black mb-1"></span>
                  <span className="block w-6 h-1 bg-black"></span>
                </>
              )}
          </button>
        </header>

        {isMenuOpen && (
          <nav className="md:hidden bg-white p-4 space-y-4 text-sm">
            <a href="https://aquarianconsult.com/about-us/" className="hover:text-red-600 block">About Us</a>
            <hr />

            <div className="relative" ref={dropdownRefs.current.services}>
              <a
                href="#services"
                className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center"
                onClick={() => toggleDropdown('services')}
              >
                What We Do
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.services ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`z-[1] absolute left-0 ${isDropdownOpen.services ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10`}>
                <a href="https://aquarianconsult.com/what-we-do#organizationalefficiency" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Organisation Efficency Through Team Effectiveness</a>
                <a href="https://aquarianconsult.com/what-we-do#businessprocess" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Business Process Re-Engineering</a>
                <a href="https://aquarianconsult.com/what-we-do#executiveplacement" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Executive Placement</a>
                <a href="https://aquarianconsult.com/what-we-do#manpowermanagement" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Manpower Management</a>
                <a href="https://aquarianconsult.com/what-we-do#talentacquisition" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Talent Acquisition</a>
                <a href="https://aquarianconsult.com/what-we-do#businessdevelopment" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Business Development Services</a>
                <a href="https://aquarianconsult.com/what-we-do#skillenhancement" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Skills Enhancement Programme</a>
              </div>
            </div>
            <hr />
            <a href="https://aquarianconsult.com/standard-portfolio/" className="hover:text-red-600 block">Gallery</a>
            <hr />
            <div className="relative" ref={dropdownRefs.current.upskilling}>
              <a
                href="#upskilling"
                className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center"
                onClick={() => toggleDropdown('upskilling')}
              >
                Upskilling Centre
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.upskilling ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`z-[1] absolute left-0 ${isDropdownOpen.upskilling ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10`}>
                <a href="https://aquarianconsult.com/upskill-photography/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Photography</a>
                <a href="https://aquarianconsult.com/entrepreneurship_program/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Business</a>
              </div>
            </div>
            <hr />
            <div className="relative" ref={dropdownRefs.current.contact}>
              <a
                href="#contact"
                className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center"
                onClick={() => toggleDropdown('contact')}
              >
                Contact Us
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.contact ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`z-[1] absolute left-0 ${isDropdownOpen.contact ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                <a href="https://aquarianconsult.com/our-location/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Our Location</a>
              </div>
            </div>
            <hr />
            <div className="relative" ref={dropdownRefs.current.contact}>
              <a
                href="#aacis"
                className="hover:text-[#00159E] cursor-pointer hover:font-bold px-auto xl:px-4 flex items-center font-bold"
                onClick={() => toggleDropdown('aacis')}
              >
                AACIS
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.aacis ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`z-[1]  absolute left-0 ${isDropdownOpen.aacis ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                <a href="/aacis/" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">AACIS</a>
                <a href="/aacis/about" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">About Us</a>
                <a href="/aacis/gallery" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Gallery</a>
                <a href="/aacis/register" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Register</a>
                {/* <a href="/contact-us" className="cursor-pointer block px-4 py-2 text-[#171717] hover:bg-[#00159E] hover:text-white">Contact Us</a> */}
              </div>
            </div>
            {/* <a href="#aacis" className="text-red-600 font-bold block">AACIS</a> */}

          </nav>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 bg-white">
        <header className=" py-4 px-6 flex justify-between items-center">
          <div className="pr-12">
            <img src={logo} alt="" className='md:h-[36px]' />
          </div>

          <div className="w-[80%] flex justify-between">
            <nav className="hidden md:flex space-x-4 text-[16px] font-[400] font-montserrat text-base leading-[19.5px] text-black">
              <a href="https://aquarianconsult.com/about-us/" className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4">About Us</a>

              <div className="relative" ref={dropdownRefs.current.services}>
                <a
                  href="#services"
                  className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center"
                  onClick={() => toggleDropdown('services')}
                >
                  What We Do
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.services ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`absolute left-0 ${isDropdownOpen.services ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10 md:w-[300px]`}>
                  <a href="https://aquarianconsult.com/what-we-do#organizationalefficiency" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Organisation Efficency Through Team Effectiveness</a>
                  <a href="https://aquarianconsult.com/what-we-do#businessprocess" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Business Process Re-Engineering</a>
                  <a href="https://aquarianconsult.com/what-we-do#executiveplacement" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Executive Placement</a>
                  <a href="https://aquarianconsult.com/what-we-do#manpowermanagement" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Manpower Management</a>
                  <a href="https://aquarianconsult.com/what-we-do#talentacquisition" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Talent Acquisition</a>
                  <a href="https://aquarianconsult.com/what-we-do#businessdevelopment" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Business Development Services</a>
                  <a href="https://aquarianconsult.com/what-we-do#skillenhancement" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Skills Enhancement Programme</a>
                </div>
              </div>

              <a href="https://aquarianconsult.com/standard-portfolio/" className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4">Gallery</a>

              <div className="relative" ref={dropdownRefs.current.upskilling}>
                <a
                  href="#upskilling"
                  className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center"
                  onClick={() => toggleDropdown('upskilling')}
                >
                  Upskilling Centre
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.upskilling ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`absolute left-0 ${isDropdownOpen.upskilling ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                  <a href="https://aquarianconsult.com/upskill-photography/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Photography</a>
                  <a href="https://aquarianconsult.com/entrepreneurship_program/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Business</a>
                </div>
              </div>

              <div className="relative" ref={dropdownRefs.current.contact}>
                <a
                  href="#contact"
                  className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center"
                  onClick={() => toggleDropdown('contact')}
                >
                  Contact Us
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.contact ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`absolute left-0 ${isDropdownOpen.contact ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                  <a href="https://aquarianconsult.com/our-location/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Our Location</a>
                </div>
              </div>

              <div className="relative" ref={dropdownRefs.current.contact}>
                <a
                  href="#aacis"
                  className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center font-bold"
                  onClick={() => toggleDropdown('aacis')}
                >
                  AACIS
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.contact ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
                {/* Dropdown menu */}
                <div className={`absolute left-0 ${isDropdownOpen.aacis ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 w-[150px]`}>
                  <a href="/aacis/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">AACIS</a>
                  <a href="/aacis/about" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">About Us</a>
                  <a href="/aacis/register" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Register</a>
                  {/* <a href="/contact-us" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Contact Us</a> */}
                </div>
              </div>
              {/* <a href="#aacis" className="text-[#171717] px-4 font-[600]">AACIS</a> */}
            </nav>
          </div>

          <button
            className="md:hidden text-lg focus:outline-none"
            onClick={toggleMenu}
            ref={menuButtonRef}
          >
            {isMenuOpen ?
              <span className="block w-6 h-1 text-[#171717] mb-1">X</span> : (
                <>
                  <span className="block w-6 h-1 bg-black mb-1"></span>
                  <span className="block w-6 h-1 bg-black mb-1"></span>
                  <span className="block w-6 h-1 bg-black"></span>
                </>
              )}
          </button>
        </header>

        {isMenuOpen && (
          <nav className="md:hidden bg-white p-4 space-y-4 text-sm">
            <a href="https://aquarianconsult.com/about-us/" className="hover:text-red-600 block">About Us</a>
            <hr />

            <div className="relative" ref={dropdownRefs.current.services}>
              <a
                href="#services"
                className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center"
                onClick={() => toggleDropdown('services')}
              >
                What We Do
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.services ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`absolute left-0 ${isDropdownOpen.services ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10`}>
                <a href="https://aquarianconsult.com/what-we-do#organizationalefficiency" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Organisation Efficency Through Team Effectiveness</a>
                <a href="https://aquarianconsult.com/what-we-do#businessprocess" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Business Process Re-Engineering</a>
                <a href="https://aquarianconsult.com/what-we-do#executiveplacement" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Executive Placement</a>
                <a href="https://aquarianconsult.com/what-we-do#manpowermanagement" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Manpower Management</a>
                <a href="https://aquarianconsult.com/what-we-do#talentacquisition" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Talent Acquisition</a>
                <a href="https://aquarianconsult.com/what-we-do#businessdevelopment" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Business Development Services</a>
                <a href="https://aquarianconsult.com/what-we-do#skillenhancement" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Skills Enhancement Programme</a>
              </div>
            </div>
            <hr />
            <a href="https://aquarianconsult.com/standard-portfolio/" className="hover:text-red-600 block">Gallery</a>
            <hr />
            <div className="relative" ref={dropdownRefs.current.upskilling}>
              <a
                href="#upskilling"
                className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center"
                onClick={() => toggleDropdown('upskilling')}
              >
                Upskilling Centre
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.upskilling ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`absolute left-0 ${isDropdownOpen.upskilling ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10`}>
                <a href="https://aquarianconsult.com/upskill-photography/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Photography</a>
                <a href="https://aquarianconsult.com/entrepreneurship_program/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Business</a>
              </div>
            </div>
            <hr />
            <div className="relative" ref={dropdownRefs.current.contact}>
              <a
                href="#contact"
                className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center"
                onClick={() => toggleDropdown('contact')}
              >
                Contact Us
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.contact ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`absolute left-0 ${isDropdownOpen.contact ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                <a href="https://aquarianconsult.com/our-location/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Our Location</a>
              </div>
            </div>
            <hr />
            <div className="relative" ref={dropdownRefs.current.contact}>
              <a
                href="#aacis"
                className="hover:text-[#00159E] hover:font-bold px-auto xl:px-4 flex items-center font-bold"
                onClick={() => toggleDropdown('aacis')}
              >
                AACIS
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen.aacis ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              {/* Dropdown menu */}
              <div className={`absolute left-0 ${isDropdownOpen.aacis ? 'block' : 'hidden'} bg-white shadow-lg border border-gray-200 rounded-lg mt-2`}>
                <a href="/aacis/" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">AACIS</a>
                <a href="/aacis/about" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">About Us</a>
                <a href="/aacis/register" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Register</a>
                {/* <a href="/contact-us" className="block px-4 py-2 text-black hover:bg-[#00159E] hover:text-white">Contact Us</a> */}
              </div>
            </div>
            {/* <a href="#aacis" className="text-red-600 font-bold block">AACIS</a> */}

          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
