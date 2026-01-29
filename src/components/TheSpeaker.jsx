import React, { useEffect, useState } from "react";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Cut3 from "../assets/cut3.png";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";
import ArrowUpSm from "../assets/arrow-up-sm.svg";
import ArrowDownSm from "../assets/arrow-down-sm.svg";
import Readmore from "../assets/readmore.svg";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import speaker1 from "../assets/speakers/speaker1.png";
import samal from "../assets/speakers/samal.jpeg";
import philp from "../assets/speakers/philp.jpeg";
import kyari from "../assets/speakers/kyari.jpeg";

import ScrollAnimation from "react-animate-on-scroll";

const speakers = [
	{
	  img: speaker1,
	  name: "Dr. Ameenah Gurib-Fakim",
	  title: "Her Excellency, Former President of Mauritius",
	},
	// Add more speakers here...
  ];

const KeynoteSpeaker = () => {
	const [visibleSlides, setVisibleSlides] = useState(3);
  
	useEffect(() => {
	  const handleResize = () => {
		if (window.innerWidth <= 768) {
		  setVisibleSlides(1);
		} else {
		  setVisibleSlides(3);
		}
	  };
  
	  handleResize();
  
	  window.addEventListener('resize', handleResize);
  
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []);
  
	return (
		<>
			<div className="bg-gradient-to-l from-[#0097fe]/5 via-[#0097fe]/10 to-[#0097fe]/70">
				{/* <img src={Cut3} className="hone-ank3 h-[150px] md:h-[300px]" /> */}
				{/* <div className="container mx-auto flex justify-between flex-col lg:flex-row items-center gap-8 md:pt-20 pt-10 pb-10"> */}
				<div className="container xl:px-24 px-0 mx-auto flex justify-between flex-col lg:flex-row items-center gap-8 relative">
					{/* Text Section */}
					<div className="xl:flex-1">
						<div className="xl:absolute xl:bottom-1 pt-20 gap-5">
							{/* <div className="flex relative mb-10">
							<img
								src={ArrowDown}
								className="hidden md:block"
								alt=""
							/>
							<img
								src={ArrowDownSm}
								className="md:hidden"
								alt=""
							/>
							<img
								src={ArrowUp}
								className="hidden md:block"
								alt=""
							/>
							<img src={ArrowUpSm} className="md:hidden" alt="" />
						</div> */}

							{/* className="text-[24px] md:text-[54px] xl:text-[96px] leading-[35px]  md:leading-[65px] xl:leading-[85px] font-[200] text-[#39663a] md:pb-4" */}

							<div className="font-gruppo">
								<h2 className="text-[48px] md:text-[48px] leading-[48px] md:leading-[50px] text-[#39663a] font-[200]">
									Keynote <br /> Speaker
								</h2>
							</div>
							<h3 className="md:mt-10 mt-5 text-[20px] md:text-[28px] font-montserrat leading-[35px] font-[700] text-[#032642]">
								Hon. Dr. Terrance Michael Drew
							</h3>
							<p className="md:text-[18px] text-[14px] font-montserrat italic text-[#171717]">
								Prime Minister, St. Kitts and Nevis
							</p>

							<a
								href="/aacis/speaker-detail"
								className="inline-block animate-bounce md:my-10 mt-5  cursor-pointer p-[20px] bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] text-white font-[600] font-montserrat md:text-[20px] text-[14px]  transition-transform transform hover:scale-105 hover:opacity-90 leading-24.38px]"
							>
								Read More{" "}
								<span className="animate-bounce">&#8702;</span>
							</a>
							{/* <ScrollAnimation animateIn="fadeIn">
							<div className="md:hidden flex items-center">
								<img src={Img4} />
							</div>
						</ScrollAnimation> */}
						</div>
					</div>

					<ScrollAnimation animateIn="fadeIn">
						{/* <div className="flex items-center hidden md:block"> */}
						<div className="flex items-center lg:mt-[80px] xl:mt-[150px]">
							<img src={Img4} />
						</div>
					</ScrollAnimation>
				</div>

						{/* <div className="container flex flex-wrap justify-center gap-5 py-10 font-gruppo">
							<div className="w-[400px] h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
								<img src={speaker1} className="" />
								<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bExecutive Secretary, Nigerian Investment Promotion Commissiong-[#000]/70">
									<p className="text-white text-xl font-500 text-left">Dr. Ameenah Gurib-Fakim</p>
									<p className="text-white text-xs">Her Excellency, Former President of Mauritius</p>
								</div>
							</div>
							<div className="w-[400px] h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
								<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								</div>
							</div>
							<div className="w-[400px] h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
								<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								</div>
							</div>
						</div> */}

				<div className="container flex flex-wrap justify-center gap-5 pt-10 font-gruppo">
					
                <CarouselProvider
                  className="w-full h-full"
                  naturalSlideWidth={100}
                  naturalSlideHeight={80}
                  totalSlides={3}
                  isPlaying={true}
                  visibleSlides={visibleSlides}
                >
                  <Slider>
                    <Slide index={0}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={samal} className="w-full h-full object-contain object-center" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Hon. Samal Mojah Duggins</p>
								<p className="text-white text-xs">Minister of Agriculture, Fisheries, Marine Resources and Cooperatives, Small Business and Entrepreneurship, Sports and The Creative Economy and Entertainment and The Arts.</p>
								<a 
									href="/aacis/speaker-detail?speaker=samal-duggins" 
									className="inline-block mt-2 text-[#0097fe] text-sm font-semibold hover:text-white transition-colors"
								>
									Read More →
								</a>
							</div>
						</div>
                    </Slide>
                    <Slide index={1}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={philp} className="w-full h-full object-contain object-center" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Hon. Philip Telesford</p>
								<p className="text-white text-xs">Minister for Social and Community Development, Housing and Gender Affairs with responsibility for  Community Development and Housing</p>
								<a 
									href="/aacis/speaker-detail?speaker=philip-telesford" 
									className="inline-block mt-2 text-[#0097fe] text-sm font-semibold hover:text-white transition-colors"
								>
									Read More →
								</a>
							</div>
						</div>
                    </Slide>
                    <Slide index={2}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={kyari} className="w-full h-full object-contain object-center" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Sen. Abubakar Kyari, CON</p>
								<p className="text-white text-xs">Minister of Agriculture and food security Federal Republic of Nigeria</p>
								<a 
									href="/aacis/speaker-detail?speaker=abubakar-kyari" 
									className="inline-block mt-2 text-[#0097fe] text-sm font-semibold hover:text-white transition-colors"
								>
									Read More →
								</a>
							</div>
						</div>
						<p className="text-[#00159E] text-lg font-semibold text-right pt-5 pb-10">To be confirmed.</p>
                    </Slide>
					
                    
				  </Slider>
				</CarouselProvider>


				</div>
				
			</div>

		</>
	);
};

export default KeynoteSpeaker;
