import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import themeDown from "../assets/theme_down.png";
import themeUp from "../assets/theme_up.png";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Hafsat Babagana",
    title: `Project Monitoring Officer,
            Aso Savings and Loans Plc`,
    quote:
      " Additionally, the collaboration between Saint Kitts and Nevis and the African continent is truly a game changer. This partnership holds so much promise for sustainable  economic growth and cross-cultural unity. Witnessing such dedication to mutual development and investment was incredibly motivating.",
  },
  {
    id: 2,
    name: "Naomi Timson",
    title: "Media Manager, Gem Hub Initiative",
    quote:
      "The summit was a remarkable platform for high-level discourse, investment exploration, and strategic networking. The keynote sessions and sector-focused discussions were particularly enlightening and highlighted the vast potential for collaboration across finance, agriculture, technology, and sustainable development.",  
    },
  {
    id: 3,
    name: "Lawrence Adeniji",
    title: "CEO, Justina Lawrenzo Foundation",
    quote:
      ` The summit provided a valuable platform for exploring investment opportunities in St Kitts and Nevis.
        I am convinced that now is the perfect time for Nigeria to leverage this opportunity and foster meaningful investments in these Caribbean countries.
        I would like to extend my heartfelt gratitude to the management and staff of Aquarian  Consult for organizing this enlightening event. Their efforts have enabled us to gain a  deeper understanding of the Caribbean nations and their investment potential.
      `,
  },
];

export default function Testimonials() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Top background accent */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-no-repeat bg-right-center bg-contain "
        style={{ backgroundImage: `url(${themeUp})` }}
      />

      <div className="container mx-auto py-20 pt-[150px] px-4 text-center">
        {/* <h2 className="text-3xl md:text-4xl font-gruppo text-[#032642] mb-8">
          What Our Attendees Say
        </h2> */}
        <h2 className="font-gruppo text-[24px] md:text-[54px] leading-[35px]  md:leading-[65px] xl:leading-[85px] font-[200] text-[#39663a] md:pb-4">
            What Our Attendees Say
        </h2>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={testimonials.length}
          visibleSlides={1}
          isIntrinsicHeight
          infinite
          interval={5000}
          isPlaying
        >
          <Slider>
            {testimonials.map((t, idx) => (
              <Slide index={idx} key={t.id}>
                <div className=" p-8   mx-4 md:mx-0 font-montserrat">
                  <p className="text-[#00159E] text-[70px] leading-[20px] text-left">“</p>
                  <p className="text-gray-700 mb-6 text-lg">{t.quote}</p>
                    <div className="text-center">
                      <p className="font-semibold text-[#00159E] text-md">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-500">{t.title}</p>
                    </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}
