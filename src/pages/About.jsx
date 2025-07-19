import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import partner from "../assets/partner.png";
import Herobg from "../assets/abthero.png";
import business_video from "../assets/business_video.mp4";
import Little1 from "../assets/little1.png";
import Little2 from "../assets/little2.png";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";
import ConciergeLogistics from "../components/ConciergeLogistics";
import CountdownTimer from "../components/CountdownTimer";
import Uln from "../assets/theme_underline.png";

import ScrollAnimation from "react-animate-on-scroll";

import CountUp from 'react-countup';
import Partners from "../components/Partners";
import Mentions from "../components/Mentions";
import theme_down from "../assets/theme_down.png";
import theme_up from "../assets/theme_up.png";

function About() {
	return (
		<div className="bg-white">
			<Header />
			<div className="container mx-auto px-4 lg:px-8 md:py-8 bg-[url(/src/assets/circle_shaped_theme.png)] bg-no-repeat bg-top">
				<div className="flex justify-center">
					<div className="md:flex items-center mb-4rounded-[16px] w-fit px-[20px] py-[10px] bg-white">
						<b className=" font-montserrat text-[16px] md:leading-[19.5px] font-[500] text-[#171717]">
							In Partnership with St. Kitts and Nevis
						</b>
						<div className="flex justify-center">
							<img
								src={partner}
								alt=""
							// className="h-[27px]"
							/>
						</div>
					</div>
				</div>
				{/* Hero Section */}
				<div className="text-center ">
					<h2 className="animate-[fadeInUp_1s_ease-in-out] text-2xl font-gruppo font-[400] md:text-[72px] md:leading-[80px] mb-2 text-[#032642]">
						<span className="text-[#00159E] font-michroma md:text-[48px]">
							AACIS '26
						</span>
						{" "}
						<br />
						Bridging Continents:<br />
						Africa and The Caribbean.<br />
						A Partnership for Prosperity.

						{/* This is little but, <br /> Insightful About */}

					</h2>
					<p className="animate-[fadeInUp_1s_ease-in-out] text-sm font-montserrat font-[400] md:text-[24px] leading-[24px] my-4 md:leading-[36px] text-[#606060] md:px-40">
						Welcome to the ACL'S Afri-Caribbean Investment
						Summit (AACIS), the premier platform for uniting
						Africa and the Caribbean through trade, investment,
						and collaboration.
					</p>
					<div className="animate-[fadeInUp_1s_ease-in-out] mt-6 flex items-center justify-center">
						{/* <img src={Herobg} alt="" /> */}
						<video src={business_video} autoPlay muted loop />
					</div>
				</div>

				{/* Stats Section */}
				<div className="animate-[fadeInUp_1s_ease-in-out] xl:absolute xl:bottom-[-300px] 2xl:static 2xl:flex 2xl:justify-center md:static md:flex md:justify-center right-0 ">
					<div className="grid grid-cols-4 lg:grid-cols-3 text-center mb-12 md:w-[888px] 2xl:w-full lg:h-[140px]">
						<div className="bg-[#00159E] text-white  py-10">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								{/* 35,000+ */}
								<CountUp end={35000} />+
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Viewers
							</p>
						</div>
						<div className="bg-[#00159E] text-white  py-10 col-span-2 md:col-span-1">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={3000} />+
								{/* 3,000+ */}
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Attendees
							</p>
						</div>
						<div className="bg-[#00159E] text-white  py-10">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={14} />+
								{/* 14+ */}
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Awards
							</p>
						</div>
					</div>
				</div>

				{/* Mission and Vision Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
					<div>
						<div className="mb-10 flex items-center gap-3">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[24px] font-montserrat md:text-[48px] font-[400] leading-[34px] md:leading-[68.25px] text-[#032642]">
									Mission
								</h3>
							</ScrollAnimation>
						</div>
						<ScrollAnimation animateIn="fadeInUp">
							<p className="text-[14px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717]">
								To bridge the investment gap between Africa and
								the Caribbean by fostering cross-regional
								partnerships, encouraging sustainable economic
								development, and creating long-term value for
								investors through knowledge-sharing and
								collaborative ventures.
							</p>
						</ScrollAnimation>
					</div>
					<div>
						<div className="mb-10 flex items-center gap-3">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[24px] font-montserrat md:text-[48px] font-[400] leading-[34px] md:leading-[68.25px] text-[#032642]">
									Vision
								</h3>
							</ScrollAnimation>
						</div>
						<ScrollAnimation animateIn="fadeInUp">
							<p className="text-[14px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717]">
								To become the leading platform for
								African-Caribbean economic collaboration,
								driving growth, innovation, and prosperity for
								both regions.
							</p>
						</ScrollAnimation>
					</div>
				</div>

				{/* About Abuja Section */}
				<img src={theme_up} className="mt-6" />
				<div className="bg-[#03675F]/10 p-8 rounded-[12px]">
					<div className="md:flex justify-between items-center mb-6">
						<div className="">
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-xl w-[70%] md:w-[100%] md:leading-[70px] md:text-[48px] font-[400] font-michroma mb-6 md:mb-12 text-[#00159E]">
									Little About Abuja, Nigeria
								</h3>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<img
									src={Little1}
									alt="Abuja, Nigeria"
									className="rounded-lg mb-4 md:hidden"
								/>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<div className="flex">
									<img
										src={ArrowDown}
										alt=""
										className="h-[50px] w-[50px]"
									/>
									<img
										src={ArrowUp}
										alt=""
										className="h-[50px] w-[50px]"
									/>
								</div>
							</ScrollAnimation>
						</div>
						<ScrollAnimation animateIn="fadeInUp">
							<img
								src={Little1}
								alt="Abuja, Nigeria"
								className="rounded-lg mb-4 hidden md:block"
							/>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat text-[#000000] md:text-[20px] leading-[28px] md:leading-[36px]">
							The ACL'S Afri-Caribbean Investment Summit 2026
							(AACIS'26) is set to be a groundbreaking event,
							designed to unlock the vast potential of economic
							cooperation between Africa and the Caribbean. Under
							the theme "Harnessing Opportunities in a Global
							South Partnership," this summit will bring together
							policymakers, business leaders, investors, and
							innovators from both regions to explore new avenues
							for collaboration, investment, and sustainable
							growth.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat text-[#000000] md:text-[20px] leading-[28px] md:leading-[36px] mt-6">
							The ACL'S Afri-Caribbean Investment Summit 2026
							(AACIS'26) is set to be a groundbreaking event,
							designed to unlock the vast potential of economic
							cooperation between Africa and the Caribbean. Under
							the theme "Harnessing Opportunities in a Global
							South Partnership," this summit will bring together
							policymakers, business leaders, investors, and
							innovators from both regions to explore new avenues
							for collaboration, investment, and sustainable
							growth. challenges and embrace the future with
							confidence.
						</p>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-6" />


				{/* ABOUT ST KITTS  */}
				<img src={theme_up} className="mt-6" />
				<div className="bg-[#A90000]/10 p-8 rounded-[12px] ">
					<div className="md:flex justify-between items-center mb-6 gap-16">
						<ScrollAnimation animateIn="fadeInUp">
							<img
								src={Little2}
								alt="St Kitts and Nevis"
								className="rounded-lg mb-4 hidden md:block"
							/>
						</ScrollAnimation>
						<div className="">
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-xl md:leading-[70px] md:text-[48px] font-[400] font-michroma mb-6 md:mb-12 text-[#00159E]">
									Little About St. Kitts & Nevis
								</h3>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<img
									src={Little2}
									alt="Abuja, Nigeria"
									className="rounded-lg mb-4 md:hidden"
								/>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<div className="flex">
									<img
										src={ArrowDown}
										alt=""
										className="h-[50px] w-[50px]"
									/>
									<img
										src={ArrowUp}
										alt=""
										className="h-[50px] w-[50px]"
									/>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat text-[#000000] md:text-[20px] leading-[28px] md:leading-[36px]">
							The ACL'S Afri-Caribbean Investment Summit 2026
							(AACIS'26) is set to be a groundbreaking event,
							designed to unlock the vast potential of economic
							cooperation between Africa and the Caribbean. Under
							the theme "Harnessing Opportunities in a Global
							South Partnership," this summit will bring together
							policymakers, business leaders, investors, and
							innovators from both regions to explore new avenues
							for collaboration, investment, and sustainable
							growth.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat text-[#000000] md:text-[20px] leading-[28px] md:leading-[36px] mt-6">
							The ACL'S Afri-Caribbean Investment Summit 2026
							(AACIS'26) is set to be a groundbreaking event,
							designed to unlock the vast potential of economic
							cooperation between Africa and the Caribbean. Under
							the theme "Harnessing Opportunities in a Global
							South Partnership," this summit will bring together
							policymakers, business leaders, investors, and
							innovators from both regions to explore new avenues
							for collaboration, investment, and sustainable
							growth. challenges and embrace the future with
							confidence.
						</p>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-6" />

			</div>

			<ConciergeLogistics />
			<Mentions />
			<Partners />

			<CountdownTimer />
			<Footer />
		</div>
	);
}

export default About;
