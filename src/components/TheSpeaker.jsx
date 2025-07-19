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
import aisha from "../assets/speakers/aisha.png";
import micheal from "../assets/speakers/micheal.png";
import olori from "../assets/speakers/olori.png";
import abba from "../assets/speakers/abba.jpg";
import abub from "../assets/speakers/abub.jpg";
import larr from "../assets/speakers/larr.png";
import calv from "../assets/speakers/calv.jpg";
import denz from "../assets/speakers/denz.jpg";
import naee from "../assets/speakers/naee.jpg";
import omob from "../assets/speakers/omob.jpeg";
import bene from "../assets/speakers/bene.jpg";
import sama from "../assets/speakers/sama.jpg";
import robe from "../assets/speakers/robe.jpg";
import wale from "../assets/speakers/wale.jpg";
import wayn from "../assets/speakers/wayn.jpg";

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
								<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
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
                  totalSlides={16}
                  isPlaying={true}
                  visibleSlides={visibleSlides}
                >
                  <Slider>
                    <Slide index={0}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={speaker1} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Dr. Ameenah Gurib-Fakim</p>
								<p className="text-white text-xs">Her Excellency, Former President of Mauritius</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={1}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={bene} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Professor Benedict Oramah</p>
								<p className="text-white text-xs">President, African Export Import Bank</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={2}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={aisha} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Ms. Aisha Rimi</p>
								<p className="text-white text-xs">Executive Secretary, Nigerian Investment Promotion Commission (NIPC)</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={3}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={micheal} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Mr. Michael Ogbalu</p> 
								 <p className="text-white text-xs">Chief Executive Officer, Pan-African Payment and Settlement System (PAPSS)</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={4}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={olori} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Olori Atuwatse III</p>
								<p className="text-white text-xs">Olori of Warri</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={5}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={omob} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Mr. Omoboyede Olusanya, CEO</p>
								<p className="text-white text-xs">Flour Mills, Nigeria</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={6}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={abba} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Mr. Abba Bello</p>
								<p className="text-white text-xs">Managing Director, Nigeria Export Import Bank</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={7}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={calv} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">H.E Calvin St. Juste</p>
								<p className="text-white text-xs">Chairman, Citizenship by Investment, St. Kitts & Nevis</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={8}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={abub} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Mr. Abubakar Kyari</p>
								<p className="text-white text-xs">Honourable Minister of Agriculture and Food Security, Nigeria</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={9}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={sama} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Hon. Samal Duggins</p>
								<p className="text-white text-xs">Minister of Agriculture, St. Kitts & Nevis</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={10}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={denz} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">The Right Hon. Dr. Denzil Douglas</p>
								<p className="text-white text-xs">Minister of Investment, St. Kitts & Nevis</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={11}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={wayn} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Dr. Wayne Archibald</p>
								<p className="text-white text-xs">St. Kitts & Nevis</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={12}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={wale} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Mr. Wale Adebayo Edun</p>
								<p className="text-white text-xs">Honourable Minister of Finance</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={13}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={robe} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Miss Robertine Webbe</p>
								<p className="text-white text-xs">SKN Creative Economy</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={14}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={larr} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">H.E. Amb. Larry Vaughan</p>
								<p className="text-white text-xs">Head, Regional Integration and Diaspora Unit, St. Kitts & Nevis</p>
							</div>
						</div>
                    </Slide>
                    <Slide index={15}>
						<div className="md:w-[400px] w-full h-[240px] bg-[#2c2c2c] flex justify-center rounded-[16px] relative bg-gradient-to-t from-[#000]/50 via-[#0097fe]/10 to-[#0097fe]/70">
							<img src={naee} className="" />
							<div className="absolute bottom-1 left-0 right-0 rounded-b-[16px] px-5 py-2 bg-[#000]/70">
								<p className="text-white text-xl font-500 text-left">Ms. Naeemah Hazelle</p>
								<p className="text-white text-xs">Permanent Secretary to the Prime Minister’s Office, St. Kitts & Nevis</p>
							</div>
						</div>
                    </Slide>

				  </Slider>
				</CarouselProvider>


				</div>
				{/* <p className="text-[#00159E] text-lg font-semibold text-center pt-5 pb-10">**Final list to be confirmed.</p> */}
			</div>

		</>
	);
};

export default KeynoteSpeaker;
