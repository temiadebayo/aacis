import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Uln from "../assets/theme_underline.png";
import theme_down from "../assets/theme_down.png";
import theme_up from "../assets/theme_up.png";
import ScrollAnimation from "react-animate-on-scroll";
import CountdownTimer from "../components/CountdownTimer";

function Volunteers() {
	return (
		<div className="bg-white">
			<Header />
			<div className="container mx-auto px-4 lg:px-8 md:py-8 bg-[url(/src/assets/circle_shaped_theme.png)] bg-no-repeat bg-top">

				{/* Hero Section */}
				<div className="text-center mb-16 pt-8">
					<ScrollAnimation animateIn="fadeInUp" initiallyVisible={true}>
						<h2 className="text-3xl font-gruppo font-[400] md:text-[72px] md:leading-[80px] mb-6 text-[#032642]">
							Join Us as a <br />
							<span className="text-[#00159E] font-michroma md:text-[48px]">
								VOLUNTEER
							</span>
						</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInUp" initiallyVisible={true}>
						<p className="text-base font-montserrat font-[400] md:text-[24px] leading-[28px] my-6 md:leading-[36px] text-[#606060] md:px-40 max-w-4xl mx-auto">
							At the Aquarian Consult Afri-Caribbean Investment Summit (AACIS)
						</p>
					</ScrollAnimation>
				</div>

				{/* Introduction Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[15px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717]">
							Be part of a groundbreaking event that bridges investment opportunities between Africa and the Caribbean. We are seeking enthusiastic and dedicated volunteers to support the success of the Afri-Caribbean Investment Summit.
						</p>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-8" />

				{/* Why Volunteer Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Why Volunteer?
							</h3>
						</ScrollAnimation>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								icon: "🎯",
								title: "First-Hand Experience",
								description: "Gain first-hand experience in international trade and investment summits"
							},
							{
								icon: "🤝",
								title: "Network with Leaders",
								description: "Network with industry leaders, entrepreneurs, and government officials"
							},
							{
								icon: "📈",
								title: "Develop Valuable Skills",
								description: "Develop valuable skills in event management, coordination, and professional communication"
							},
							{
								icon: "🌍",
								title: "Promote Partnerships",
								description: "Contribute to promoting sustainable economic partnerships between Africa and the Caribbean"
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

				{/* Who Can Volunteer Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Who Can Volunteer?
							</h3>
						</ScrollAnimation>
					</div>
					
					<div className="space-y-4">
						{[
							"Passionate individuals aged 18 and above",
							"Strong communication and interpersonal skills",
							"Ability to work in a dynamic, multicultural environment",
							"Commitment to teamwork and professionalism"
						].map((requirement, index) => (
							<ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100}>
								<div className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-[#03675F]/20 flex items-start gap-4 hover:shadow-md transition-shadow">
									<div className="bg-[#03675F] text-white rounded-full w-7 h-7 flex items-center justify-center font-montserrat font-[600] text-sm flex-shrink-0 mt-0.5">
										✓
									</div>
									<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">{requirement}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
				<img src={theme_down} className="mb-8" />

				{/* How to Apply Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								How to Apply
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#A90000]/20 hover:shadow-md transition-shadow">
							<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px] mb-4">
								Send Your Application
							</h4>
							<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px] mb-6">
								Send your name, contact information, and a brief statement of interest to:
							</p>
							<div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
								<div className="flex items-center gap-2">
									<span className="text-2xl">📧</span>
									<a 
										href="mailto:support@aquarianconsult.com?subject=Volunteer - AACIS'26" 
										className="text-[#A90000] font-montserrat font-[600] text-[18px] hover:underline"
									>
										support@aquarianconsult.com
									</a>
								</div>
							</div>
							<div className="bg-[#A90000]/10 p-4 rounded-lg">
								<p className="text-[14px] font-montserrat font-[600] text-[#032642]">
									📌 Email Subject Line: <span className="text-[#A90000]">"Volunteer"</span>
								</p>
							</div>
							<div className="mt-6">
								<a 
									href="mailto:support@aquarianconsult.com?subject=Volunteer" 
									className="inline-block bg-gradient-to-r from-[#032642] to-[#00159E] text-white px-8 py-4 rounded-lg font-montserrat font-[600] text-base hover:scale-105 transition-transform shadow-lg"
								>
									Apply Now
								</a>
							</div>
						</div>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-8" />

				{/* Call to Action */}
				<ScrollAnimation animateIn="fadeInUp">
					<div className="bg-gradient-to-r from-[#00159E] to-[#032642] p-8 md:p-12 rounded-lg text-center mb-8">
						<h3 className="text-white text-2xl md:text-3xl font-bold mb-4 font-montserrat">
							Ready to Make a Difference?
						</h3>
						<p className="text-white/90 text-lg mb-6 font-montserrat max-w-2xl mx-auto">
							Join our team of volunteers and be part of creating lasting connections between Africa and the Caribbean.
						</p>
						<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
							<a 
								href="mailto:support@aquarianconsult.com?subject=Volunteer" 
								className="bg-white text-[#00159E] font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 text-base shadow-lg font-montserrat"
							>
								Apply to Volunteer
							</a>
							<a 
								href="/aacis/register" 
								className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#00159E] transition-all duration-300 font-montserrat"
							>
								Register as Delegate
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

export default Volunteers;
