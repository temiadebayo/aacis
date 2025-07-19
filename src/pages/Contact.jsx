import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import partner from "../assets/partner.png";
import Herobg from "../assets/map.png";
import Little1 from "../assets/little1.png";
import Little2 from "../assets/little2.png";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";
import ConciergeLogistics from "../components/ConciergeLogistics";
import CountdownTimer from "../components/CountdownTimer";

import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
	return (
		<div className="bg-white">
			<Header />
			<div className="container mx-auto px-4 lg:px-8 md:py-8">
				{/* Hero Section */}
				<div className="text-center mb-4">
					<ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
						<h2 className="text-2xl font-gruppo font-[400] md:text-[72px] md:leading-[80px] mb-2 text-[#032642]">
							We’re Sitting Right In The <br />
							<span className="text-[#00159E] font-michroma md:text-[48px]">
								Heart
							</span>{" "}
							Of The{" "}
							<span className="text-[#00159E] font-michroma md:text-[48px]">
								Country
							</span>
						</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
						<p className="text-sm font-montserrat font-[400] md:text-[24px] leading-[24px] my-4 md:leading-[36px] text-[#606060] md:px-40">
							Visit us at Our Physical office. No <br />
							{/* 90, Yakubu Gowon Crescent, Asokoro, Abuja. */}
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
						<div className="my-6">
							<img src={Herobg} alt="" />
						</div>
					</ScrollAnimation>
				</div>
			</div>

			<div className="bg-[#FAFAFA]">
				<div className="container flex flex-col md:flex-row justify-between items-start gap-12 p-6 md:p-[80px]">
					<div className="bg-white shadow-lg p-6 w-full md:w-1/2 rounded-[16px] md:px-[113px]  md:py-[66px] border-[1.5px] border-[#D9D9D9]">
						<ScrollAnimation animateIn="fadeIn">
							<h2 className="text-lg font-montserrat font-[600] md:text-[20px] md:leading-[28px] mb-8">
								Write Us a Message
							</h2>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<form className="space-y-4">
								<div>
									<input
										type="text"
										placeholder="Name"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Email"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<textarea
										placeholder="Message"
										rows="4"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									></textarea>
								</div>
								<button
									type="submit"
									className="mt-6 px-16 py-3 bg-blue-600 text-white font-[700] rounded-[100px] hover:bg-blue-800 bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] w-full"
								>
									Send
								</button>
							</form>
						</ScrollAnimation>
					</div>

					{/* Right Side: Contact Info */}
					<div className="w-full md:w-1/2 space-y-6 md:pt-20">
						<ScrollAnimation animateIn="fadeIn">
							<div className="">
								<h3 className="text-lg text-[#00159E] font-montserrat font-[500] md:text-[28px] md:leading-[34.13px]">
									Send Us an Email
								</h3>
								<p className="font-montserrat text-[#171717] font-[400] md:text-[20px] md:leading-[24.38px]">
									aacis@aquarianconsult.com
								</p>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<div>
								<h3 className="text-lg text-[#00159E] font-montserrat font-[500] md:text-[28px] md:leading-[34.13px]">
									Give Us a Call
								</h3>
								<p className="font-montserrat text-[#171717] font-[400] md:text-[20px] md:leading-[24.38px]">
									+234 809-966-6613
								</p>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<div>
								<h3 className="text-lg text-[#00159E] font-montserrat font-[500] md:text-[28px] md:leading-[34.13px]">
									Our Office
								</h3>
								<p className="font-montserrat text-[#171717] font-[400] md:text-[20px] md:leading-[24.38px]">
									90, Yakubu Gowon Crescent, Asokoro, Abuja.
								</p>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<div>
								<h3 className="text-lg text-[#00159E] font-montserrat font-[500] md:text-[28px] md:leading-[34.13px] mb-2">
									Our Socials
								</h3>
								<div className="flex space-x-4">
									{/* Replace with proper icons */}
									<a
										href="https://www.facebook.com/AquarianConsult"
										className="text-[#171717]"
									>
										<i className="fab fa-facebook"></i>
									</a>
									{/* <a
										href="https://www.x.com/AquarianConsult"
										className="text-[#171717]"
									>
										<i className="fab fa-twitter"></i>
									</a> */}
									<a
										href="https://www.instagram.com/aquarian_consult/"
										className="text-[#171717]"
									>
										<i className="fab fa-instagram"></i>
									</a>
									<a
										href="https://www.linkedin.com/company/aquarian-consult"
										className="text-[#171717]"
									>
										<i className="fab fa-linkedin"></i>
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>

			<ConciergeLogistics />
			<Footer />
		</div>
	);
}

export default Contact;
