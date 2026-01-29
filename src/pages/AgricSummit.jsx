import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import partner from "../assets/partner.png";
import Herobg from "../assets/abthero.png";
import agric_summit_video from "../assets/agric_summit_video.mp4";
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

function AgricSummit() {
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
						Agric Summit<br />
						Sustainable Agriculture<br />
						Food Security Solutions
					</h2>
					<p className="animate-[fadeInUp_1s_ease-in-out] text-sm font-montserrat font-[400] md:text-[24px] leading-[24px] my-4 md:leading-[36px] text-[#606060] md:px-40">
						Join us for the premier agriculture investment summit, 
						uniting Africa and the Caribbean to revolutionize 
						food production and agricultural sustainability.
					</p>
					<div className="animate-[fadeInUp_1s_ease-in-out] mt-6 flex items-center justify-center">
						<video src={agric_summit_video} autoPlay muted loop />
					</div>
				</div>

				{/* Stats Section */}
				<div className="animate-[fadeInUp_1s_ease-in-out] xl:absolute xl:bottom-[-300px] 2xl:static 2xl:flex 2xl:justify-center md:static md:flex md:justify-center right-0">
					<div className="grid grid-cols-4 lg:grid-cols-3 text-center mb-12 md:w-[888px] 2xl:w-full lg:h-[140px]">
						<div className="bg-[#39663a] text-white py-10">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={1000} />+
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Farmers & Agribusiness
							</p>
						</div>
						<div className="bg-[#39663a] text-white py-10 col-span-2 md:col-span-1">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={200} />+
							</h3>
							<p className="font-montserrat text-sm md:text-[18px] md:leading-[21.94px] font-[500]">
								Agricultural Projects
							</p>
						</div>
						<div className="bg-[#39663a] text-white py-10">
							<h3 className="text-2xl font-michroma md:text-[36px] md:leading-[51.19px] font-[400]">
								<CountUp end={500} />M+
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
								Transforming Agricultural Investment
							</h4>
							<p className="text-[#606060] font-montserrat text-base md:text-lg leading-relaxed mb-6">
								The AACIS Agric Summit brings together farmers, agribusiness leaders, 
								investors, and policymakers from Africa and the Caribbean to 
								explore sustainable agriculture solutions and investment opportunities.
							</p>
							<ul className="space-y-3 text-[#606060] font-montserrat">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#00159E] rounded-full mr-3"></span>
									Sustainable Farming Practices
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#00159E] rounded-full mr-3"></span>
									Agricultural Technology Innovation
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#00159E] rounded-full mr-3"></span>
									Food Processing & Distribution
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-[#00159E] rounded-full mr-3"></span>
									Climate-Smart Agriculture
								</li>
							</ul>
						</div>
						<div className="relative">
							<img src={Herobg} alt="Agricultural Innovation" className="w-full rounded-lg" />
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
						<div className="bg-gradient-to-br from-[#0097fe]/10 to-[#00159E]/20 p-6 rounded-lg border border-[#0097fe]/20">
							<div className="w-16 h-16 bg-[#00159E] rounded-full flex items-center justify-center mb-4 mx-auto">
								<span className="text-white text-2xl">🌾</span>
							</div>
							<h4 className="text-xl font-montserrat font-[700] text-[#032642] mb-3 text-center">
								Crop Production
							</h4>
							<p className="text-[#606060] font-montserrat text-center">
								Advanced farming techniques and crop diversification
							</p>
						</div>

						<div className="bg-gradient-to-br from-[#0097fe]/10 to-[#00159E]/20 p-6 rounded-lg border border-[#0097fe]/20">
							<div className="w-16 h-16 bg-[#00159E] rounded-full flex items-center justify-center mb-4 mx-auto">
								<span className="text-white text-2xl">🚜</span>
							</div>
							<h4 className="text-xl font-montserrat font-[700] text-[#032642] mb-3 text-center">
								Agricultural Technology
							</h4>
							<p className="text-[#606060] font-montserrat text-center">
								Smart farming equipment and precision agriculture
							</p>
						</div>

						<div className="bg-gradient-to-br from-[#0097fe]/10 to-[#00159E]/20 p-6 rounded-lg border border-[#0097fe]/20">
							<div className="w-16 h-16 bg-[#00159E] rounded-full flex items-center justify-center mb-4 mx-auto">
								<span className="text-white text-2xl">🌱</span>
							</div>
							<h4 className="text-xl font-montserrat font-[700] text-[#032642] mb-3 text-center">
								Sustainability
							</h4>
							<p className="text-[#606060] font-montserrat text-center">
								Environmental conservation and resource management
							</p>
						</div>
					</div>
				</div>

				{/* Investment Opportunities */}
				<div className="mb-16">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-5xl font-gruppo font-[400] text-[#032642] mb-4">
							Investment Opportunities
						</h3>
						<div className="flex justify-center">
							<img src={Uln} alt="" className="w-32 md:w-48" />
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
							<div className="w-12 h-12 bg-[#39663a] rounded-lg flex items-center justify-center mb-4">
								<span className="text-white text-xl">💰</span>
							</div>
							<h4 className="text-lg font-montserrat font-[700] text-[#032642] mb-2">
								Farm Financing
							</h4>
							<p className="text-[#606060] font-montserrat text-sm">
								Access to capital for agricultural expansion
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
							<div className="w-12 h-12 bg-[#39663a] rounded-lg flex items-center justify-center mb-4">
								<span className="text-white text-xl">🏭</span>
							</div>
							<h4 className="text-lg font-montserrat font-[700] text-[#032642] mb-2">
								Processing Plants
							</h4>
							<p className="text-[#606060] font-montserrat text-sm">
								Food processing and value addition facilities
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
							<div className="w-12 h-12 bg-[#39663a] rounded-lg flex items-center justify-center mb-4">
								<span className="text-white text-xl">🚚</span>
							</div>
							<h4 className="text-lg font-montserrat font-[700] text-[#032642] mb-2">
								Logistics
							</h4>
							<p className="text-[#606060] font-montserrat text-sm">
								Transportation and cold chain infrastructure
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
							<div className="w-12 h-12 bg-[#39663a] rounded-lg flex items-center justify-center mb-4">
								<span className="text-white text-xl">🔬</span>
							</div>
							<h4 className="text-lg font-montserrat font-[700] text-[#032642] mb-2">
								R&D
							</h4>
							<p className="text-[#606060] font-montserrat text-sm">
								Agricultural research and development
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mb-16">
					<div className="bg-gradient-to-r from-[#39663a] to-[#4a7c59] p-8 md:p-12 rounded-lg text-white">
						<h3 className="text-2xl md:text-4xl font-gruppo font-[400] mb-4">
							Join the Agricultural Revolution
						</h3>
						<p className="text-lg md:text-xl font-montserrat mb-6 opacity-90">
							Be part of the transformation in sustainable agriculture across Africa and the Caribbean
						</p>
						<a
							href="/aacis/register"
							className="inline-block bg-white text-[#39663a] font-montserrat font-[600] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
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

export default AgricSummit;
