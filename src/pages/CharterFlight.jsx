	import React from "react";
	import Header from "../components/Header";
	import Footer from "../components/Footer";
	import Uln from "../assets/theme_underline.png";
	import theme_down from "../assets/theme_down.png";
	import theme_up from "../assets/theme_up.png";
	import ScrollAnimation from "react-animate-on-scroll";
	import CountdownTimer from "../components/CountdownTimer";

	function CharterFlight() {
		return (
			<div className="bg-white">
				<Header />
				<div className="container mx-auto px-4 lg:px-8 md:py-8 bg-[url(/src/assets/circle_shaped_theme.png)] bg-no-repeat bg-top">

					{/* Hero Section */}
					<div className="text-center mb-16 pt-8">
						<ScrollAnimation animateIn="fadeInUp" initiallyVisible={true}>
							<h2 className="text-3xl font-gruppo font-[400] md:text-[72px] md:leading-[80px] mb-6 text-[#032642]">
								<span className="text-[#00159E] font-michroma md:text-[48px]">
									CHARTER FLIGHT
								</span>
								<br />
								Booking
							</h2>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp" initiallyVisible={true}>
							<p className="text-base font-montserrat font-[400] md:text-[24px] leading-[28px] my-6 md:leading-[36px] text-[#606060] md:px-40 max-w-4xl mx-auto">
								Secure your seat below. AQUARIAN CONSULT LIMITED and BLUEHORN AVIATION proudly offer direct charter flights from the Caribbean to Abuja, Nigeria.
							</p>
						</ScrollAnimation>
					</div>

					{/* Introduction Section */}
					<img src={theme_up} className="mt-8" />
					<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
						<ScrollAnimation animateIn="fadeInUp">
							<p className="text-[15px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717]">
								AQUARIAN CONSULT LIMITED, in collaboration with BLUEHORN AVIATION, proudly presents exclusive direct charter flights from the Caribbean to Abuja, Nigeria, for the 2026 Aquarian Consult Afri-Caribbean Investment Summit (AACIS'26).
							</p>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<p className="text-[15px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717] mt-6">
								To ensure a seamless and comfortable journey for our distinguished delegates, a dedicated round-trip charter service has been arranged specifically for AACIS participants traveling from the Caribbean region.
							</p>
						</ScrollAnimation>
					</div>
					<img src={theme_down} className="mb-8" />

					{/* Why Choose This Charter Flight Section */}
					<img src={theme_up} className="mt-8" />
					<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
						<div className="mb-12 flex items-center gap-4">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
									Why Choose This Charter Flight?
								</h3>
							</ScrollAnimation>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									icon: "✈️",
									title: "Direct Route",
									description: "Non-stop travel from the Caribbean to Abuja—no transit visa required."
								},
								{
									icon: "⚡",
									title: "Convenience",
									description: "Hassle-free travel experience with simplified check-in and priority boarding."
								},
								{
									icon: "⏱️",
									title: "Time Saving",
									description: "Reduced travel hours and no long layovers compared to commercial routes."
								},							
								{
									icon: "🚗",
									title: "Assistance on Arrival",
									description: "Coordinated airport transfers and concierge support in Abuja."
								}
							].map((benefit, index) => (
								<ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100}>
									<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#A90000]/20 hover:shadow-md transition-shadow">
										<div className="text-4xl mb-3">{benefit.icon}</div>
										<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] md:text-[20px] mb-3">
											{benefit.title}
										</h4>
										<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">
											{benefit.description}
										</p>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
					<img src={theme_down} className="mb-8" />

					{/* Flight Schedule Section */}
					<img src={theme_up} className="mt-8" />
					<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
						<div className="mb-12 flex items-center gap-4">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
									Flight Schedule
								</h3>
							</ScrollAnimation>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ScrollAnimation animateIn="fadeInUp">
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20">
									<div className="flex items-center mb-4">
										<div className="bg-[#03675F] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl mr-4">
											🛫
										</div>
										<div>
											<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px]">
												Departure
											</h4>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717]">
												Caribbean to Abuja
											</p>
										</div>
									</div>
									<p className="text-[14px] text-[#606060] font-montserrat">
										Date: To be confirmed
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInUp">
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20">
									<div className="flex items-center mb-4">
										<div className="bg-[#03675F] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl mr-4">
											🛬
										</div>
										<div>
											<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px]">
												Arrival
											</h4>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717]">
												Nnamdi Azikiwe International Airport
											</p>
										</div>
									</div>
									<p className="text-[14px] text-[#606060] font-montserrat">
										Abuja, Nigeria
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInUp">
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20 md:col-span-2">
									<div className="flex items-center mb-4">
										<div className="bg-[#03675F] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl mr-4">
											🔄
										</div>
										<div>
											<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px]">
												Return Flight
											</h4>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717]">
												Abuja to Caribbean
											</p>
										</div>
									</div>
									<p className="text-[14px] text-[#606060] font-montserrat">
										Date: March 29, 2026
									</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<img src={theme_down} className="mb-8" />

					{/* Booking & Requirements Section */}
					<img src={theme_up} className="mt-8" />
					<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
						<div className="mb-12 flex items-center gap-4">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
									Booking & Requirements
								</h3>
							</ScrollAnimation>
						</div>
						
						<ScrollAnimation animateIn="fadeInUp">
							<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717] mb-6">
								To confirm your seat, please follow these steps:
							</p>
						</ScrollAnimation>

						<div className="space-y-4">
							{[
								{
									step: "1",
									title: "Complete the flight reservation form",
									description: "Fill out all required details in the booking form below."
								},
								{
									step: "2",
									title: "Ensure your AACIS'26 registration is completed",
									description: "You must be a registered summit delegate to book this charter flight.",
									link: "/aacis/register",
									linkText: "Register for AACIS'26"
								},
								{
									step: "3",
									title: "Submit required documents",
									description: "Provide a copy of your valid travel document and proof of registration."
								},
								{
									step: "4",
									title: "Finalize payment and ticket details",
									description: "A representative from Bluehorn Aviation will contact you to complete your booking."
								}
							].map((item, index) => (
								<ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100}>
									<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#A90000]/20 hover:shadow-md transition-shadow">
										<div className="flex items-start gap-4">
											<div className="bg-[#A90000] text-white rounded-full w-10 h-10 flex items-center justify-center font-montserrat font-[600] text-base flex-shrink-0">
												{item.step}
											</div>
											<div className="flex-1">
												<h5 className="font-montserrat text-[#032642] font-[600] text-[18px] md:text-[20px] mb-3">{item.title}</h5>
												<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">{item.description}</p>
												{item.link && (
													<a 
														href={item.link} 
														className="inline-block mt-4 bg-[#A90000] text-white px-6 py-3 rounded-lg font-montserrat font-[500] text-sm md:text-base hover:bg-[#A90000]/90 transition-colors shadow-sm hover:shadow-md"
													>
														{item.linkText}
													</a>
												)}
											</div>
										</div>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
					<img src={theme_down} className="mb-8" />

					{/* Important Notice Section */}
					<img src={theme_up} className="mt-8" />
					<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
						<div className="mb-12 flex items-center gap-4">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
									Important Notice
								</h3>
							</ScrollAnimation>
						</div>
						
						<div className="space-y-6">
							<ScrollAnimation animateIn="fadeInUp">
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20">
									<div className="flex items-start gap-4">
										<div className="text-3xl">⚠️</div>
										<div>
											<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] mb-3">Limited Availability</h4>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">
												Seats are limited and available on a first-come, first-served basis.
											</p>
										</div>
									</div>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInUp">
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20">
									<div className="flex items-start gap-4">
										<div className="text-3xl">📅</div>
										<div>
											<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] mb-3">Reservation Deadline</h4>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">
												Booking closes: <strong>March 20, 2026</strong>
											</p>
										</div>
									</div>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInUp">
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20">
									<div className="flex items-start gap-4">
										<div className="text-3xl">✅</div>
										<div>
											<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] mb-3">Eligibility</h4>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">
												Only verified AACIS'26 registered delegates are eligible for this charter service.
											</p>
										</div>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<img src={theme_down} className="mb-8" />

					{/* Contact Information Section */}
					<img src={theme_up} className="mt-8" />
					<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
						<div className="mb-12 flex items-center gap-4">
							<ScrollAnimation animateIn="fadeInUp">
								<img src={Uln} className="w-[50px] h-10" />
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp">
								<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
									For Inquiries
								</h3>
							</ScrollAnimation>
						</div>
						
						<ScrollAnimation animateIn="fadeInUp">
							<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#A90000]/20">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] mb-3">
											Aquarian Consult Limited
										</h4>
										<a 
											href="mailto:aacis@aquarianconsult.com" 
											className="text-[#A90000] font-montserrat font-[500] text-[16px] hover:underline"
										>
											aacis@aquarianconsult.com
										</a>
									</div>
									<div>z
										<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] mb-3">
											Bluehorn Aviation
										</h4>
										<a 
											href="mailto:concierge@bluehornaviation.com" 
											className="text-[#A90000] font-montserrat font-[500] text-[16px] hover:underline"
										>
											concierge@bluehornaviation.com
										</a>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>
					<img src={theme_down} className="mb-8" />

					{/* Call to Action */}
					<ScrollAnimation animateIn="fadeInUp">
						<div className="bg-gradient-to-r from-[#00159E] to-[#032642] p-8 md:p-12 rounded-lg text-center mb-8">
							<h3 className="text-white text-2xl md:text-3xl font-bold mb-4 font-montserrat">
								Ready to Book Your Charter Flight?
							</h3>
							<p className="text-white/90 text-lg mb-6 font-montserrat max-w-2xl mx-auto">
								Ensure your AACIS'26 registration is complete before proceeding with your flight booking.
							</p>
							<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
								<a 
									href="/aacis/register" 
									className="bg-white text-[#00159E] font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 text-base shadow-lg font-montserrat"
								>
									Complete Summit Registration
								</a>
								<a 
									href="mailto:concierge@bluehornaviation.com?subject=Charter Flight Booking - AACIS'26" 
									className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#00159E] transition-all duration-300 font-montserrat"
								>
									Contact for Flight Booking
								</a>
							</div>
						</div>
					</ScrollAnimation>

				</div>
				<CountdownTimer />
				<Footer />
			</div>
		);
	}

	export default CharterFlight;
