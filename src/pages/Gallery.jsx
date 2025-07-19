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
import youtube from "../assets/youtube.jpg";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { images, videos } from "../services/galleryData";

function Gallery() {
	return (
		<div className="bg-white">
			<Header />
			<div className="container mx-auto px-4 lg:px-8 md:py-8 bg-[url(/src/assets/circle_shaped_theme.png)] bg-no-repeat bg-top">
				<div className="flex justify-center">
					<div className="md:flex items-center mb-4rounded-[16px] w-fit px-[20px] py-[10px] bg-white">
						<b className=" font-montserrat text-[16px] md:leading-[19.5px] font-[500] text-[#171717]">
							Country focus: St. Kitts and Nevis
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
						AACIS '25 Gallery
					</h2>
					<p className="animate-[fadeInUp_1s_ease-in-out] text-sm font-montserrat font-[400] md:text-[24px] leading-[24px] my-4 md:leading-[36px] text-[#606060] md:px-40">
						The AACIS '25 may have come and gone, but the memories shared will forever tell the tale of trade, investment, and collaboration.
					</p>
				</div>

				<div className="animate-[fadeInUp_1s_ease-in-out] my-6 ">
					<img src={theme_up} />
					<div>
						<iframe className="lg:h-[560px] h-[280px] w-full" src="https://www.youtube.com/embed/Bh_Zemi_M5M?si=4oDmXE09ZMlTndaW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<img src={theme_down} />
				</div>


				<div className="my-12">
					<div className="mb-5 flex items-center gap-3">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-1" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[24px] font-montserrat font-[400] leading-[34px] md:leading-[68.25px] text-[#032642]">
								Keynote Addresses
							</h3>
						</ScrollAnimation>
					</div>

					<div className="flex flex-col lg:flex-row items-start justify-between gap-8">
						<div className="flex-1 flex-col justify-center">
							<iframe className="w-full h-[200px]" src="https://www.youtube.com/embed/M7XVRKVqtlA?si=RJdoZcKciDU6kBBb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<ScrollAnimation animateIn="fadeInUp">
								<p className="text-[14px] font-montserrat leading-[28px] text-[#171717]">
									Keynote 1: Prof. Benedict Oramah, President, African
									Export Import Bank (Afreximbank), ably represented by Mr. Alain Thierry
									Mbongue, RCOO &amp; Head of Mission, Anglophone West Africa, Afreximbank.
								</p>
							</ScrollAnimation>
						</div>
						<div className="flex-1 flex-col justify-center">
							<iframe className="w-full h-[200px]" src="https://www.youtube.com/embed/v7so4OMphCc?si=syVrgseSQneiCDky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<ScrollAnimation animateIn="fadeInUp">
								<p className="text-[14px] font-montserrat leading-[28px] text-[#171717]">
									Keynote 2: H.E. Dr. Ameenah Gurib-Fakim, Former President
									of The Republic of Mauritius.
								</p>
							</ScrollAnimation>
						</div>
						<div className="flex-1 flex-col justify-center">
							<iframe className="w-full h-[200px]" src="https://www.youtube.com/embed/v7so4OMphCc?si=syVrgseSQneiCDky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<ScrollAnimation animateIn="fadeInUp">
								<p className="text-[14px] font-montserrat leading-[28px] text-[#171717]">
									Keynote 3: Declaration of Summit Opening - Hon. Dr.
									Terrance Drew, Prime Minister, St. Kitts and Nevis.
								</p>
							</ScrollAnimation>
						</div>
					</div>
				</div>


				<div className="my-12">
					<div className="mb-5 flex items-center gap-3">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-1" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[24px] font-montserrat font-[400] leading-[34px] md:leading-[68.25px] text-[#032642]">
								Key Photo Moments
							</h3>
						</ScrollAnimation>
					</div>
					<div >
						<img src={theme_up} className="mt-6" />
						<PhotoProvider>
							<div className="flex justify-center items-center flex-wrap">
								{
									images.map((image, index) => (
										<PhotoView key={index} src={image}>
											<img
												src={image}
												alt="AACIS 2025 photos"
												className="lg:w-[200px] w-[120px] object-cover aspect-square cursor-pointer"
												/>
										</PhotoView>
									))
								}
							</div>
						</PhotoProvider>
						<img src={theme_down} />
					</div>
				</div>

				<div className="my-12">
					<div className="mb-5 flex items-center gap-3">
						<ScrollAnimation animateIn="fadeInUp">
							<img src={Uln} className="w-[50px] h-1" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp">
							<h3 className="text-[24px] font-montserrat font-[400] leading-[34px] md:leading-[68.25px] text-[#032642]">
								Video Moments
							</h3>
						</ScrollAnimation>
					</div>
					<div >
						<div className="flex flex-col justify-center items-center gap-1">
							{
								videos.map(({ title, speakers, moderator, link }, index) => (
									<a key={index} href={link} target="_blank" rel="nofollow noreferrer" className="flex items-center space-x-2 py-2 md:py-6 md:px-5 px-3 border border-[#d7d3d3] rounded-lg cursor-pointer hover:bg-gray-50 w-full min-h-[100px]">
										<img src={youtube} className="w-[65px]" />
										<div className="items-start flex flex-col gap-2">
											<a href={link} target="_blank" rel="nofollow noreferrer" className="cursor-pointer text-gray-800 md:text-[20px] text-[16px] leading-[24.38px]">
												{title}
											</a>
											<span className="text-black md:text-[16px] text-[12px]">
												Speakers: {speakers}
											</span>
											{moderator && (
												<span className="text-black md:text-[16px] text-[12px]">
													Moderator: {moderator}
												</span>
											)}
										</div>
									</a>
								))
							}
						</div>
					</div>
				</div>

			</div>

			{/* <Mentions /> */}
			<Partners />

			<CountdownTimer />
			<Footer />
		</div>
	);
}

export default Gallery;
