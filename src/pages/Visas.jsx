import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import partner from "../assets/partner.png";
import Uln from "../assets/theme_underline.png";
import theme_down from "../assets/theme_down.png";
import theme_up from "../assets/theme_up.png";
import ScrollAnimation from "react-animate-on-scroll";

function Visas() {
	return (
		<div className="bg-white">
			<Header />
			<div className="container mx-auto px-4 lg:px-8 md:py-8 bg-[url(/src/assets/circle_shaped_theme.png)] bg-no-repeat bg-top">

				{/* Hero Section */}
				<div className="text-center mb-16 pt-8">
					<ScrollAnimation animateIn="fadeInUp" initiallyVisible={true}>
						<h2 className="text-3xl font-gruppo font-[400] md:text-[72px] md:leading-[80px] mb-6 text-[#032642]">
							<span className="text-[#00159E] font-michroma md:text-[48px]">
								VISA
							</span>
							<br />
							Requirements
						</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInUp" initiallyVisible={true}>
						<p className="text-base font-montserrat font-[400] md:text-[24px] leading-[28px] my-6 md:leading-[36px] text-[#606060] md:px-40 max-w-4xl mx-auto">
							Are you ready to join us at the Aquarian Consult Limited Afri-Caribbean Investment Summit? 
							The first step is to understand your visa requirements.
						</p>
					</ScrollAnimation>
				</div>

				{/* Visa-Exempt Countries Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Visa-Exempt Countries
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717] mb-6">
							Delegates from the following Economic Community of West African States (ECOWAS) member countries do not require a visa to enter Nigeria for stays of up to 90 days:
						</p>
					</ScrollAnimation>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
						{[
							"Benin", "Burkina Faso", "Cape Verde", "Côte d'Ivoire",
							"The Gambia", "Ghana", "Guinea", "Guinea-Bissau",
							"Liberia", "Mali", "Niger", "Senegal",
							"Sierra Leone", "Togo"
						].map((country, index) => (
							<ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100}>
								<div className="bg-white p-4 md:p-5 rounded-lg shadow-sm border border-[#03675F]/20 hover:shadow-md transition-shadow">
									<p className="font-montserrat text-[#032642] font-[500] text-center text-sm md:text-base">{country}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>

					<ScrollAnimation animateIn="fadeInUp">
						<div className="bg-white p-6 rounded-lg shadow-sm border border-[#03675F]/20 mb-6">
							<h4 className="font-montserrat text-[#032642] font-[600] text-[18px] mb-3">Additional Visa-Exempt Countries</h4>
							<p className="text-[14px] font-montserrat font-[400] md:text-[16px] leading-[24px] md:leading-[28px] text-[#171717] mb-4">
								Citizens of Cameroon and Chad whose governments have Visa Abolition Agreements with Nigeria. They can travel to Nigeria for a maximum of 90 days (not for employment or business) without obtaining a visa based on bilateral agreement.
							</p>
							<p className="text-[14px] font-montserrat font-[400] md:text-[16px] leading-[24px] md:leading-[28px] text-[#171717]">
								Diplomatic and/or Official passport from selected countries based on bilateral/multilateral agreement are Visa exempt: Brazil, China, Cuba, Kenya, Namibia, Mauritius, Rwanda, South Africa, Singapore, Sudan, Tanzania, Turkey and Venezuela.
							</p>
						</div>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-8" />

				{/* Countries Requiring eVisa Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Countries Requiring an eVisa in Advance
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717]">
							If your country is not listed in the Visa-Exempt sections, you are required to obtain an eVisa before you travel to Nigeria for the summit.
						</p>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-8" />

				{/* Applying for eVisa Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Applying for an eVisa
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat font-[400] md:text-[20px] leading-[28px] md:leading-[40px] text-[#171717] mb-8">
							The Nigerian eVisa is an electronic visa that allows eligible travellers to apply for entry authorization to Nigeria online.
						</p>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeInUp">
						<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] mb-6">eVisa Application Process</h4>
					</ScrollAnimation>

					<div className="space-y-6">
						{[
							{
								step: "1",
								title: "Create an account",
								description: "on the official Nigerian eVisa portal.",
								link: "https://visa.immigration.gov.ng/",
								linkText: "Apply Here"
							},
							{
								step: "2",
								title: "Complete the online application form",
								description: "with your personal information, travel details, and visa category."
							},
							{
								step: "3",
								title: "Upload all required documents",
								description: "including a scanned copy of your passport information page and a recent passport-sized photograph."
							},
							{
								step: "4",
								title: "Pay the applicable visa fees",
								description: "securely via the available online payment options."
							},
							{
								step: "5",
								title: "Submit your application",
								description: "for processing."
							}
						].map((item, index) => (
							<ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100}>
								<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20 hover:shadow-md transition-shadow">
									<div className="flex items-start gap-4">
										<div className="bg-[#03675F] text-white rounded-full w-10 h-10 flex items-center justify-center font-montserrat font-[600] text-base flex-shrink-0">
											{item.step}
										</div>
										<div className="flex-1">
											<h5 className="font-montserrat text-[#032642] font-[600] text-[18px] md:text-[20px] mb-3">{item.title}</h5>
											<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">{item.description}</p>
											{item.link && (
												<a 
													href={item.link} 
													target="_blank" 
													rel="noopener noreferrer"
													className="inline-block mt-4 bg-[#03675F] text-white px-6 py-3 rounded-lg font-montserrat font-[500] text-sm md:text-base hover:bg-[#03675F]/90 transition-colors shadow-sm"
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

						<ScrollAnimation animateIn="fadeInUp">
							<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717] mt-8 bg-white p-6 rounded-lg shadow-sm border border-[#03675F]/20">
								After submission, you will receive a confirmation and an application reference number to track your visa status.
							</p>
						</ScrollAnimation>
					</div>
					<img src={theme_down} className="mb-8" />

				{/* Required Documents Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Required Documents for Nigerian eVisa
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat font-[400] md:text-[16px] leading-[24px] md:leading-[28px] text-[#171717] mb-6">
							To successfully complete your eVisa application, you must provide the following:
						</p>
					</ScrollAnimation>

					<div className="space-y-4">
						{[
							"A valid international passport with at least six (6) months validity beyond your intended stay.",
							"A recent passport-sized photograph meeting the official specifications (clear, with a plain background).",
							"Proof of travel arrangements, such as confirmed flight bookings or itinerary.",
							"If applying for a business visa, include an invitation letter from the Nigerian company or organization.",
							"Proof of payment of visa fees (usually automatically confirmed online).",
							"Additional documents may be requested based on individual application circumstances."
						].map((document, index) => (
							<ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100}>
											<div className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-[#A90000]/20 flex items-start gap-4 hover:shadow-md transition-shadow">
												<div className="bg-[#A90000] text-white rounded-full w-7 h-7 flex items-center justify-center font-montserrat font-[600] text-sm flex-shrink-0 mt-0.5">
													✓
												</div>
												<p className="text-[15px] font-montserrat font-[400] text-[#171717] leading-[26px] md:leading-[28px]">{document}</p>
											</div>
											</ScrollAnimation>
										))}
									</div>
								</div>
							<img src={theme_down} className="mb-8" />

				{/* Processing Time Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Processing Time and Status Tracking
							</h3>
						</ScrollAnimation>
					</div>
					
					<div className="space-y-6">
						<ScrollAnimation animateIn="fadeInUp">
											<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20 hover:shadow-md transition-shadow">
												<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px] mb-4">Processing Time</h4>
												<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717]">
													The processing time for Nigerian eVisa applications typically ranges from 3 to 7 business days, though it may vary based on demand and applicant details.
												</p>
											</div>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInUp">
											<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20 hover:shadow-md transition-shadow">
												<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px] mb-4">Status Tracking</h4>
												<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717]">
													Once your application is submitted, you can track its progress online using your unique application number. You will be notified via email of any updates, including approval, additional requirements, or rejection.
												</p>
											</div>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInUp">
											<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20 hover:shadow-md transition-shadow">
												<h4 className="font-montserrat text-[#032642] font-[600] text-[20px] md:text-[22px] mb-4">Important Note</h4>
												<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717]">
													If additional documents or clarifications are needed, respond promptly to avoid delays.
												</p>
											</div>
						</ScrollAnimation>
					</div>
				</div>
				<img src={theme_down} className="mb-6" />

				{/* Receiving eVisa Section */}
				<img src={theme_up} className="mt-6" />
				<div className="bg-[#A90000]/10 p-8 rounded-[12px] mb-6">
					<div className="mb-10 flex items-center gap-3">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[24px] font-montserrat md:text-[48px] font-[400] leading-[34px] md:leading-[68.25px] text-[#032642]">
								Receiving Your eVisa
							</h3>
						</ScrollAnimation>
					</div>
					
					<div className="space-y-6">
						<ScrollAnimation animateIn="fadeInUp">
							<div className="bg-white p-6 rounded-lg shadow-sm border border-[#A90000]/20">
								<p className="text-[14px] font-montserrat font-[400] md:text-[16px] leading-[24px] md:leading-[28px] text-[#171717] mb-4">
									Once approved, your Nigerian eVisa will be sent electronically to your registered email address as a downloadable PDF document. Please print a clear, legible copy of your eVisa to carry with you during your travel.
								</p>
								<p className="text-[14px] font-montserrat font-[400] md:text-[16px] leading-[24px] md:leading-[28px] text-[#171717]">
									The eVisa specifies your allowed entry dates and duration of stay, which you must adhere to strictly to avoid any legal or immigration issues.
								</p>
							</div>
						</ScrollAnimation>
					</div>
				</div>
				<img src={theme_down} className="mb-6" />

				{/* Entry Requirements Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Entry Requirements and On-Arrival Procedures
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<p className="text-[14px] font-montserrat font-[400] md:text-[16px] leading-[24px] md:leading-[28px] text-[#171717] mb-6">
							Upon arrival in Nigeria, travelers must present the following to immigration officials:
						</p>
					</ScrollAnimation>

					<div className="space-y-4">
						{[
							"Printed copy of the eVisa approval notice.",
							"A valid passport used for the eVisa application.",
							"Evidence of onward or return travel.",
							"Proof of sufficient funds for your stay.",
							"Compliance with any health-related requirements (e.g., COVID-19 vaccination or testing as may be in effect)."
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

									<ScrollAnimation animateIn="fadeInUp">
										<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717] mt-8 bg-white p-6 rounded-lg shadow-sm border border-[#03675F]/20">
											Make sure to keep all documents handy for inspection to facilitate smooth clearance.
										</p>
									</ScrollAnimation>
								</div>
							<img src={theme_down} className="mb-8" />

				{/* Important Notice Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#A90000]/10 p-8 md:p-12 rounded-[12px] mb-8">
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
					
					<ScrollAnimation animateIn="fadeInUp">
											<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#A90000]/20 hover:shadow-md transition-shadow">
												<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717] mb-4">
													Please be advised that each traveller is personally responsible for ensuring they meet all applicable visa requirements for entry into Nigeria. The guidance provided below serves as a general reference to support you in securing your visa documentation as smoothly as possible.
												</p>
												<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717]">
													Should you require assistance with a Visa Facilitation Letter for your Nigeria travel, please direct your request to{" "}
													<a href="mailto:aacis@aquarianconsult.com" className="text-[#A90000] font-[600] hover:underline">
														aacis@aquarianconsult.com
													</a>
												</p>
											</div>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-6" />

				{/* Nigerian Consulates Section */}
				<img src={theme_up} className="mt-8" />
				<div className="bg-[#03675F]/10 p-8 md:p-12 rounded-[12px] mb-8">
					<div className="mb-12 flex items-center gap-4">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-10" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[28px] font-montserrat md:text-[48px] font-[500] leading-[36px] md:leading-[68.25px] text-[#032642]">
								Nigerian Consulates/Embassies
							</h3>
						</ScrollAnimation>
					</div>
					
					<ScrollAnimation animateIn="fadeInUp">
						<div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-[#03675F]/20 hover:shadow-md transition-shadow">
							<p className="text-[15px] font-montserrat font-[400] md:text-[16px] leading-[26px] md:leading-[28px] text-[#171717] mb-6">
								Delegates are encouraged to visit the nearest Nigerian Embassy or Consulate for further inquiries regarding the visa application process. For your convenience, a comprehensive list of Embassies, Consulates, and High Commissions are available at the following link:
							</p>
							<a 
								href="https://foreignaffairs.gov.ng/diplomatic-missions/#embassies" 
								target="_blank" 
								rel="noopener noreferrer"
								className="inline-block bg-[#03675F] text-white px-8 py-4 rounded-lg font-montserrat font-[500] text-sm md:text-base hover:bg-[#03675F]/90 transition-colors shadow-sm hover:shadow-md"
							>
								Find Nigerian Embassy Near You
							</a>
						</div>
					</ScrollAnimation>
				</div>
				<img src={theme_down} className="mb-8" />

			</div>
			<Footer />
		</div>
	);
}

export default Visas;
