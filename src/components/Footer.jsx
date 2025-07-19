import React from 'react';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer_bg.svg';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 bg-[url(/src/assets/theme_down.png)] bg-contain bg-no-repeat bg-bottom xl:pb-24 2xl:bg-[url(/src/assets/theme_up.png)]">
      <div className="md:container mx-auto md:px-4 px-8 font-montserratAlt">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h4 className="text-[#00159E] leading-[19.5px] text-[16px] font-[500] mb-4">Company</h4>
            <ul className="space-y-2 text-[#787D82] md:text-[16px] text-[14px]  md:leading-[19.5px] leading-[17.07px]">
              <li><a href="https://aquarianconsult.com/about-us" className="cursor-pointer hover:underline font-montserratAlt font-[400]">About</a></li>
              <li><a href="https://aquarianconsult.com/what-we-do" className="cursor-pointer hover:underline font-montserratAlt font-[400]">What we do</a></li>
              <li><a href="https://aquarianconsult.com/standard-portfolio" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Gallery</a></li>
              <li><a href="https://aquarianconsult.com/upskill-photography" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Upskill</a></li>
            </ul>
          </div>

          {/* AACIS Section */}
          <div>
            <h4 className="text-[#00159E] leading-[19.5px] text-[16px] font-[500] mb-4">AACIS</h4>
            <ul className="space-y-2 text-[#787D82] md:text-[16px] text-[14px] md:leading-[19.5px] leading-[17.07px]">
              <li><a href="/aacis/" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Home</a></li>
              <li><a href="/aacis/about" className="cursor-pointer hover:underline font-montserratAlt font-[400]">About</a></li>
              <li><a href="/aacis/register" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Register</a></li>
              {/* <li><a href="https://aquarianconsult.com/contact-us" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Contact</a></li> */}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h4 className="text-[#00159E] leading-[19.5px] text-[16px] font-[500] mb-4">Socials</h4>
            <ul className="space-y-2 text-[#787D82] md:text-[16px] text-[14px] md:leading-[19.5px] leading-[17.07px]">
              <li><a href="https://www.instagram.com/aquarian_consult/" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Instagram</a></li>
              <li><a href="https://www.youtube.com/@TheAquarianConsult" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Youtube</a></li>
              {/* <li><a href="https://www.x.com/AquarianConsult" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Twitter</a></li> */}
              <li><a href="https://www.facebook.com/AquarianConsult" className="cursor-pointer hover:underline font-montserratAlt font-[400]">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/aquarian-consult" className="cursor-pointer hover:underline font-montserratAlt font-[400]">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-[#00159E] leading-[19.5px] text-[16px] font-[500] mb-4">Contact</h4>
            <ul className="space-y-2 text-[#787D82] md:text-[16px] text-[14px] md:leading-[19.5px] leading-[17.07px]">
              <li className=''>
                <a href="mailto:aacis@aquarianconsult.com" className="cursor-pointer hover:underline font-montserratAlt font-[400]">
                  aacis@aquarianconsult.com
                </a>
              </li>
              <li>90, Yakubu Gowon Crescent, Asokoro, Abuja.</li>
              <li>+234 809-966-6613</li>
            </ul>
          </div>
        </div>

        <div class="my-10">
          <hr />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <img src={logo} alt="" className='w-[134px] md:h-[36px]' />
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.youtube.com/@TheAquarianConsult" className="text-[#787D82] text-[16px] leading-[19.5px] hover:text-blue-800">
              <i className="cursor-pointer fab h-[24px] w-[24px] fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/AquarianConsult" className="text-[#787D82] text-[16px] leading-[19.5px] hover:text-blue-800">
              <i className="cursor-pointer fab h-[24px] w-[24px] fa-facebook"></i>
            </a>
            {/* <a href="https://www.x.com/AquarianConsult" className="text-[#787D82] text-[16px] leading-[19.5px] hover:text-blue-800">
              <i className="cursor-pointer fab h-[24px] w-[24px] fa-twitter"></i>
            </a> */}
            <a href="https://www.instagram.com/aquarian_consult/" className="text-[#787D82] text-[16px] leading-[19.5px] hover:text-blue-800">
              <i className="cursor-pointer fab h-[24px] w-[24px] fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/aquarian-consult/" className="text-[#787D82] text-[16px] leading-[19.5px] hover:text-blue-800">
              <i className="cursor-pointer fab h-[24px] w-[24px] fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@TheAquarianConsult" className="text-[#787D82] text-[16px] leading-[19.5px] hover:text-blue-800">
              <i className="fab h-[24px] w-[24px] fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
