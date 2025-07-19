import React from "react";
import C1 from "../assets/c1.png";
import C2 from "../assets/c3.png";
import C3 from "../assets/c2.png";
import C4 from "../assets/c4.png";
import PlanTrip from "../assets/plantrip.svg";
import ThemeBorderLine from "../assets/theme_border_line.svg";

import ScrollAnimation from "react-animate-on-scroll";

const ConciergeLogistics = () => {
	return (

		<div className="bg-white  bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain xl:p-10 p-2">
			<section className="py-12 md:py-16 md:px-24 px-10 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-baseline">
						<ScrollAnimation animateIn="fadeIn">
							<div className="font-gruppo font-[200]">
								<h2 className="text-[24px] md:text-[48px] leading-[28px] md:leading-[50px] text-[#39663a]">
									Concierge <br />
									and Logistics
								</h2>
							</div>
						</ScrollAnimation>
						<div className="flex self-start">
							<ScrollAnimation animateIn="fadeIn">
								<button
									className="cursor-pointer md:block xl:mt-6 p-[10px] bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] text-white font-[600] font-montserrat md:text-[20px] text-[14px]  transition-transform transform hover:scale-105 hover:opacity-90 leading-24.38px]"
								>
									Plan Trip{" "}
									<span className="animate-bounce">&#8702;</span>
								</button>
							</ScrollAnimation>
						</div>
					</div>
					{/* <div className="grid md:grid-cols-[40%,60%]  gap-10"> */}
					{/* Left Section */}

					{/* Right Section */}
					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10">
						{/* Getting to Abuja */}
						<div className="overflow-hidden">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={C1} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<div className="mt-3 md:mt-7">
									<h3 className="leading-[29.26px] xl:font-[300] font-[400] text-[16px] md:text-[24px] text-black mb-2 font-montserrat">
										Getting to Abuja
									</h3>
									<p className="text-[14px] font-montserrat text-[#1E1E1E] leading-[24px]">
										Discover the best ways to travel to
										Nigeria’s vibrant capital city,
										Abuja, with helpful tips on flights,
										visas, and everything you need to
										ensure a smooth journey to the heart
										of Africa.
									</p>
								</div>
							</ScrollAnimation>
						</div>

						{/* Accommodation */}
						<div className="overflow-hidden">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={C2} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<div className="mt-3 md:mt-7">
									<h3 className="leading-[29.26px] xl:font-[300] font-[400] text-[16px] md:text-[24px] text-black mb-2 font-montserrat">
										Accommodation
									</h3>
									<p className="text-[14px] font-montserrat text-[#1E1E1E] leading-[24px]">
										Find your home away from home with
										our curated list of top-rated
										hotels, including exclusive deals
										and recommendations for a
										comfortable stay near the summit
										venue.
									</p>
								</div>
							</ScrollAnimation>
						</div>

						{/* Transport */}
						<div className="overflow-hidden">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={C3} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<div className="mt-3 md:mt-7">
									<h3 className="leading-[29.26px] xl:font-[300] font-[400] text-[16px] md:text-[24px] text-black mb-2 font-montserrat">
										Transport
									</h3>
									<p className="text-[14px] font-montserrat text-[#1E1E1E] leading-[24px]">
										Navigate Abuja with ease! Explore
										reliable options for airport
										transfers, city transport, and
										convenient ways to get to and from
										the summit venue.
									</p>
								</div>
							</ScrollAnimation>
						</div>

						{/* Tours */}
						<div className="overflow-hidden">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={C4} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<div className="mt-3 md:mt-7">
									<h3 className="leading-[29.26px] xl:font-[300] font-[400] text-[16px] md:text-[24px] text-black mb-2 font-montserrat">
										Tours
									</h3>
									<p className="text-[14px] font-montserrat text-[#1E1E1E] leading-[24px]">
										Experience the beauty of Abuja –
										from cultural landmarks to hidden
										gems, discover a tour that showcases
										the city’s rich heritage and vibrant
										atmosphere.
									</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					{/* <div className="flex justify-center">
							<ScrollAnimation animateIn="fadeIn">
								<a
									href="#"
									className="cursor-pointer md:hidden md:px-[40px] px-[20px] md:py-[20px]  py-[10px] bg-blue-600 text-white rounded-[100px] hover:bg-blue-800 bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] text-[16px] leading-[24px] md:text-[28px] font-montserratAlt font-[700]"
								>
									Plan Trip
								</a>
							</ScrollAnimation>
						</div> */}
					{/* </div> */}
				</div>
			</section>
		</div>

	);
};

export default ConciergeLogistics;
