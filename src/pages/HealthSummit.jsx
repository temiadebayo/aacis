import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import partner from "../assets/partner2.png";
import Herobg from "../assets/abthero2.png";
import health_summit_video from "../assets/health_summit_video.mp4";
import Little1 from "../assets/little1.png";
import Little2 from "../assets/little2.png";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";
import CountdownTimer from "../components/CountdownTimer";
import Uln from "../assets/theme_underline.png";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from 'react-countup';
import Partners from "../components/Partners";
import Mentions from "../components/Mentions";
import theme_down from "../assets/theme_down.png";
import theme_up from "../assets/theme_up.png";

function HealthSummit() {
	return (
		<div className="bg-white">
			<Header />
			<div className="container mx-auto px-4 lg:px-8 md:py-8 bg-[url(/src/assets/circle_shaped_theme.png)] bg-no-repeat bg-top">
				<div className="flex justify-center">
					<div className="md:flex items-center mb-4 rounded-[16px] w-fit px-[20px] py-[10px] bg-white">
						<b className="font-montserrat text-[16px] md:leading-[19.5px] font-[500] text-[#171717]">
							In Partnership with the  
						</b>
						<div className="flex justify-center">
							<img src={partner} alt="" />
						</div>	
					</div>
				</div>

				{/* Hero Section */}
				<div className="text-center">
					<h2 className="animate-[fadeInUp_1s_ease-in-out] text-2xl font-gruppo font-[400] md:text-[72px] md:leading-[80px] mb-2 text-[#032642]">
						<span className="text-[#00159E] font-michroma md:text-[48px]">
							AACIS '26
						</span>
						{" "}
						<br />
						Health Summit<br />
						Advancing Healthcare<br />
						Across Continents
					</h2>
					<p className="animate-[fadeInUp_1s_ease-in-out] text-sm font-montserrat font-[400] md:text-[24px] leading-[24px] my-4 md:leading-[36px] text-[#606060] md:px-40">
						Join us for the premier healthcare investment summit, 
						uniting Africa and the Caribbean to revolutionize 
						healthcare delivery and medical innovation.
					</p>
					<div className="animate-[fadeInUp_1s_ease-in-out] mt-6 flex items-center justify-center">
						<video src={health_summit_video} autoPlay muted loop />
					</div>
				</div>

				{/* Stats Section */}
				<div className="animate-[fadeInUp_1s_ease-in-out] xl:absolute xl:bottom-[-300px] 2xl:static 2xl:flex 2xl:justify-center md:static md:flex md:justify-center right-0">
					<div className="grid grid-cols-4 lg:grid-cols-3 text-center mb-12 md:w-[888px] 2xl:w-full lg:h-[140px]">
						<div className="bg-[#a30907] text-white py-10">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={500} />+
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Healthcare Leaders
							</p>
						</div>
						<div className="bg-[#a30907] text-white py-10 col-span-2 md:col-span-1">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={50} />+
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Medical Institutions
							</p>
						</div>
						<div className="bg-[#a30907] text-white py-10">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={100} />M+
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Investment Potential
							</p>
						</div>
					</div>
				</div>

				{/* Summit Overview */}
				<div className="mt-20 mb-16">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-5xl font-gruppo font-[400] text-[#032642] mb-4">
							Summit Overview
						</h3>
						<div className="flex justify-center">
							<img src={Uln} alt="" className="w-32 md:w-48" />
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h4 className="text-2xl md:text-3xl font-montserrat font-[700] text-[#032642] mb-4">
								Revolutionizing Healthcare Investment
							</h4>
							<p className="text-[#606060] font-montserrat text-base md:text-lg leading-relaxed mb-6">
								The AACIS Health Summit brings together healthcare professionals, 
								investors, and policymakers from Africa and the Caribbean to 
								explore innovative healthcare solutions and investment opportunities.
							</p>
							<ul className="space-y-3 text-[#606060] font-montserrat">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#a30907] rounded-full mr-3"></span>
									Healthcare Infrastructure Development
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#a30907] rounded-full mr-3"></span>
									Medical Technology Innovation
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#a30907] rounded-full mr-3"></span>
									Pharmaceutical Partnerships
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#a30907] rounded-full mr-3"></span>
									Digital Health Solutions
								</li>
							</ul>
						</div>
						<div className="relative">
							<img src={Herobg} alt="Healthcare Innovation" className="w-full rounded-lg" />
							<p className="text-white text-2xl font-montserrat font-[700] absolute bottom-0 left-0 right-0 text-center">Hon. Philip Telesford</p>
							<div className="absolute inset-0 bg-gradient-to-t from-[#00159E]/20 to-transparent rounded-lg"></div>
						</div>
					</div>
				</div>

				{/* Key Focus Areas */}
				<div className="mb-16">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-5xl font-gruppo font-[400] text-[#032642] mb-4">
							Key Focus Areas
						</h3>
						<div className="flex justify-center">
							<img src={Uln} alt="" className="w-32 md:w-48" />
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-gradient-to-br from-[#a30907]/10 to-[#a30907]/20 p-6 rounded-lg border border-[#a30907]/20">
							<div className="w-16 h-16 bg-[#a30907] rounded-full flex items-center justify-center mb-4 mx-auto">
								<span className="text-white text-2xl">🏥</span>
							</div>
							<h4 className="text-xl font-montserrat font-[700] text-[#032642] mb-3 text-center">
								Infrastructure
							</h4>
							<p className="text-[#606060] font-montserrat text-center">
								Building modern healthcare facilities and medical centers
							</p>
						</div>

						<div className="bg-gradient-to-br from-[#a30907]/10 to-[#a30907]/20 p-6 rounded-lg border border-[#a30907]/20">
							<div className="w-16 h-16 bg-[#a30907] rounded-full flex items-center justify-center mb-4 mx-auto">
								<span className="text-white text-2xl">💊</span>
							</div>
							<h4 className="text-xl font-montserrat font-[700] text-[#032642] mb-3 text-center">
								Pharmaceuticals
							</h4>
							<p className="text-[#606060] font-montserrat text-center">
								Drug manufacturing and distribution partnerships
							</p>
						</div>

						<div className="bg-gradient-to-br from-[#a30907]/10 to-[#a30907]/20 p-6 rounded-lg border border-[#a30907]/20">
							<div className="w-16 h-16 bg-[#a30907] rounded-full flex items-center justify-center mb-4 mx-auto">
								<span className="text-white text-2xl">🔬</span>
							</div>
							<h4 className="text-xl font-montserrat font-[700] text-[#032642] mb-3 text-center">
								Research & Development
							</h4>
							<p className="text-[#606060] font-montserrat text-center">
								Medical research collaboration and innovation
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mb-16">
					<div className="bg-gradient-to-r from-[#a30907] to-[#a30907] p-8 md:p-12 rounded-lg text-white">
						<h3 className="text-2xl md:text-4xl font-gruppo font-[400] mb-4">
							Join the Healthcare Revolution
						</h3>
						<p className="text-lg md:text-xl font-montserrat mb-6 opacity-90">
							Be part of the transformation in healthcare delivery across Africa and the Caribbean
						</p>
						<a
							href="/aacis/register"
							className="inline-block bg-white text-[#a30907] font-montserrat font-[600] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
						>
							Register Now
						</a>
					</div>
				</div>

				{/* Partners Section */}
				<Partners />
				
				{/* Mentions Section
				<Mentions /> */}
			</div>
			<Footer />
		</div>
	);
}

export default HealthSummit;
