import React, { useState, useEffect } from "react";

import Partner1 from "../assets/partners/partner1.svg";
import Partner2 from "../assets/partners/partner2.svg";
import Partner3 from "../assets/partners/partner3.svg";
import Partner4 from "../assets/partners/partner4.svg";
import Partner5 from "../assets/partners/partner5.svg";


import ScrollAnimation from "react-animate-on-scroll";


import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";



function Partners() {

	return (
		<div className="bg-[url(/src/assets/theme_down.png)] bg-no-repeat bg-right-center bg-contain bg-white lg:pt-10 pt-4 flex flex-col items-center ">
			<div className="container">
				<div className="w-full">
					<div className="text-center font-gruppo">
						<h2 className="text-[18px] pt-2 lg:text-[28px] text-[#032642]">
							Sponsors
						</h2>
					</div>

					{/* <div className="lg:gap-10 gap-5 lg:mt-6 px-10 font-gruppo overflow-hidden w-full"> */}
					<div className="lg:gap-10 gap-5 lg:mt-6 px-10 font-gruppo overflow-hidden flex justify-center">
						<CarouselProvider
							className="xl:w-[400px] w-full"
							naturalSlideHeight={45}
							naturalSlideWidth={100}
							// naturalSlideHeight={25}
							totalSlides={2}
							isPlaying={false}
							visibleSlides={2}
							interval={2000}
						>
							<Slider>

								{/* <Slide index={1}>
										<div className="flex items-center justify-center ">
											<img
												src={Partner2}
												className="xl:h-[85px] h-[30px]"
												alt=""
											/>
										</div>
									</Slide> */}
								<Slide index={2}>
									<div className="flex items-center justify-center ">
										<img
											src={Partner4}
											className="xl:h-[85px] h-[30px]"
											alt=""
										/>
									</div>
								</Slide>
								<Slide index={3}>
									<div className="flex items-center justify-center ">
										<img
											src={Partner5}
											className="xl:h-[85px] h-[30px]"
											alt=""
										/>
									</div>
								</Slide>
							</Slider>
						</CarouselProvider>
					</div>
				</div>

				<div className="w-full xl:mt-10">
					<div className="text-center font-gruppo">
						<h2 className="text-[18px] pt-2 lg:text-[28px] text-[#032642]">
							Endorsers
						</h2>
					</div>

					<div className="lg:gap-10 gap-5 lg:mt-6 px-10 font-gruppo overflow-hidden flex justify-center">
						<CarouselProvider
							className="xl:w-[400px] w-full"
							naturalSlideHeight={45}
							naturalSlideWidth={100}
							// naturalSlideHeight={20}
							totalSlides={2}
							isPlaying={false}
							visibleSlides={2}
							playDirection={"backward"}
							interval={2000}
						>
							<Slider>
								<Slide index={0}>
									<div className="flex items-center justify-center">
										<img
											src={Partner1}
											className="xl:h-[85px] h-[30px]"
											alt=""
										/>
									</div>
								</Slide>
								<Slide index={0}>
									<div className="flex items-center justify-center">
										<img
											src={Partner3}
											className="xl:h-[85px] h-[30px]"
											alt=""
										/>
									</div>
								</Slide>
							</Slider>
						</CarouselProvider>
					</div>
				</div>
			</div>
			<div className="bg-[url(/src/assets/theme_up.png)] bg-no-repeat bg-right-center bg-contain h-20 w-full lg:mb-[-4px] md:mb-[-40px] mb-[-55px]"></div>
		</div>
	);
}

export default Partners;
