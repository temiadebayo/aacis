import React, { useState, useEffect } from "react";
import st_kitts_coat from "../assets/st_kitts_coat.svg";
import st_kitts_coat_sm from "../assets/st_kitts_coat_sm.svg";
import No1 from "../assets/attendees/entrepreneur.jpg";
import No2 from "../assets/attendees/govt.jpg";
import No3 from "../assets/attendees/import.jpg";
import No4 from "../assets/attendees/finance.jpg";
import shieldIcon from "../assets/shieldIcon.svg";
import KeynoteSpeaker from "./TheSpeaker";
import ConciergeLogistics from "./ConciergeLogistics";
import CountdownTimer from "./CountdownTimer";
import hero2 from "../assets/hero23.png";
import theme_up from "../assets/theme_up.png";
import themed_video from "../assets/videos/themed_video_new.mp4";

import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";
import ArrowUpSm from "../assets/arrow-up-sm.svg";
import ArrowDownSm from "../assets/arrow-down-sm.svg";

import Partners from "./Partners";
import Mentions from "./Mentions";

import ScrollAnimation from "react-animate-on-scroll";

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Typewriter from "typewriter-effect/dist/core";
import Testimonials from "./Testimonials";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { images } from "../services/galleryData";


function Body() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	useEffect(() => {
		new Typewriter("#typewriter", {
			strings: [
				"ACL’S Afri-Caribbean Investment Summit (AACIS ‘26).",
				"In Partnership with the Government of St Kitts and Nevis.",
				"One Voice, One Vision: Advancing Afri-Caribbean Unity.",
				"2 Continents, 4 Days, 40 Speakers. Unlimited Opportunities.",
				"The Countdown has begun. Register Now.",
			],
			autoStart: true,
			loop: true,
		});
	});

	return (
		<main className="">
			<div className="text-center gap-10 bg-white ">
				<div className="flex flex-col py-5 xl:py-20 container z-[2px]">
					<div className="pt-5 pb-0 xl:flex">
						<div className="xl:w-[70%] w-full xl:min-h-[170px]">
							<h1
								id="typewriter"
								className="text-[30px] md:text-[52px] font-[700] md:leading-[58px] leading-[48.76px] bg-gradient-to-r from-[#00159E] to-[#032642] text-transparent bg-clip-text font-montserrat text-left"
							>
								{/* ACL’S AFRI-CARIBBEAN */}
							</h1>
							<div className="flex flex-col md:flex-row my-8">
								<div className="flex md:pr-6">
									<div className="mt-1  pr-2">
										<svg
											width="19"
											height="21"
											viewBox="0 0 19 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 20.5C1.95 20.5 1.47917 20.3042 1.0875 19.9125C0.695833 19.5208 0.5 19.05 0.5 18.5V4.5C0.5 3.95 0.695833 3.47917 1.0875 3.0875C1.47917 2.69583 1.95 2.5 2.5 2.5H3.5V0.5H5.5V2.5H13.5V0.5H15.5V2.5H16.5C17.05 2.5 17.5208 2.69583 17.9125 3.0875C18.3042 3.47917 18.5 3.95 18.5 4.5V18.5C18.5 19.05 18.3042 19.5208 17.9125 19.9125C17.5208 20.3042 17.05 20.5 16.5 20.5H2.5ZM2.5 18.5H16.5V8.5H2.5V18.5ZM2.5 6.5H16.5V4.5H2.5V6.5ZM9.5 12.5C9.21667 12.5 8.97917 12.4042 8.7875 12.2125C8.59583 12.0208 8.5 11.7833 8.5 11.5C8.5 11.2167 8.59583 10.9792 8.7875 10.7875C8.97917 10.5958 9.21667 10.5 9.5 10.5C9.78333 10.5 10.0208 10.5958 10.2125 10.7875C10.4042 10.9792 10.5 11.2167 10.5 11.5C10.5 11.7833 10.4042 12.0208 10.2125 12.2125C10.0208 12.4042 9.78333 12.5 9.5 12.5ZM5.5 12.5C5.21667 12.5 4.97917 12.4042 4.7875 12.2125C4.59583 12.0208 4.5 11.7833 4.5 11.5C4.5 11.2167 4.59583 10.9792 4.7875 10.7875C4.97917 10.5958 5.21667 10.5 5.5 10.5C5.78333 10.5 6.02083 10.5958 6.2125 10.7875C6.40417 10.9792 6.5 11.2167 6.5 11.5C6.5 11.7833 6.40417 12.0208 6.2125 12.2125C6.02083 12.4042 5.78333 12.5 5.5 12.5ZM13.5 12.5C13.2167 12.5 12.9792 12.4042 12.7875 12.2125C12.5958 12.0208 12.5 11.7833 12.5 11.5C12.5 11.2167 12.5958 10.9792 12.7875 10.7875C12.9792 10.5958 13.2167 10.5 13.5 10.5C13.7833 10.5 14.0208 10.5958 14.2125 10.7875C14.4042 10.9792 14.5 11.2167 14.5 11.5C14.5 11.7833 14.4042 12.0208 14.2125 12.2125C14.0208 12.4042 13.7833 12.5 13.5 12.5ZM9.5 16.5C9.21667 16.5 8.97917 16.4042 8.7875 16.2125C8.59583 16.0208 8.5 15.7833 8.5 15.5C8.5 15.2167 8.59583 14.9792 8.7875 14.7875C8.97917 14.5958 9.21667 14.5 9.5 14.5C9.78333 14.5 10.0208 14.5958 10.2125 14.7875C10.4042 14.9792 10.5 15.2167 10.5 15.5C10.5 15.7833 10.4042 16.0208 10.2125 16.2125C10.0208 16.4042 9.78333 16.5 9.5 16.5ZM5.5 16.5C5.21667 16.5 4.97917 16.4042 4.7875 16.2125C4.59583 16.0208 4.5 15.7833 4.5 15.5C4.5 15.2167 4.59583 14.9792 4.7875 14.7875C4.97917 14.5958 5.21667 14.5 5.5 14.5C5.78333 14.5 6.02083 14.5958 6.2125 14.7875C6.40417 14.9792 6.5 15.2167 6.5 15.5C6.5 15.7833 6.40417 16.0208 6.2125 16.2125C6.02083 16.4042 5.78333 16.5 5.5 16.5ZM13.5 16.5C13.2167 16.5 12.9792 16.4042 12.7875 16.2125C12.5958 16.0208 12.5 15.7833 12.5 15.5C12.5 15.2167 12.5958 14.9792 12.7875 14.7875C12.9792 14.5958 13.2167 14.5 13.5 14.5C13.7833 14.5 14.0208 14.5958 14.2125 14.7875C14.4042 14.9792 14.5 15.2167 14.5 15.5C14.5 15.7833 14.4042 16.0208 14.2125 16.2125C14.0208 16.4042 13.7833 16.5 13.5 16.5Z"
												fill="#00159E"
											/>
										</svg>
									</div>
									<b className="font-montserrat text-[16px] md:text-[20px] font-[300] text-black md:leading-[34.1px] leading-[19.41px]">
										March 25 - 28, 2026
									</b>
								</div>

								<div className="flex">
									<div className="mt-1 pr-2">
										<svg
											width="15"
											height="21"
											viewBox="0 0 15 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.5 20.5C5.73333 20.5 4.29167 20.2208 3.175 19.6625C2.05833 19.1042 1.5 18.3833 1.5 17.5C1.5 17.1 1.62083 16.7292 1.8625 16.3875C2.10417 16.0458 2.44167 15.75 2.875 15.5L4.45 16.975C4.3 17.0417 4.1375 17.1167 3.9625 17.2C3.7875 17.2833 3.65 17.3833 3.55 17.5C3.76667 17.7667 4.26667 18 5.05 18.2C5.83333 18.4 6.65 18.5 7.5 18.5C8.35 18.5 9.17083 18.4 9.9625 18.2C10.7542 18 11.2583 17.7667 11.475 17.5C11.3583 17.3667 11.2083 17.2583 11.025 17.175C10.8417 17.0917 10.6667 17.0167 10.5 16.95L12.05 15.45C12.5167 15.7167 12.875 16.0208 13.125 16.3625C13.375 16.7042 13.5 17.0833 13.5 17.5C13.5 18.3833 12.9417 19.1042 11.825 19.6625C10.7083 20.2208 9.26667 20.5 7.5 20.5ZM7.525 15C9.175 13.7833 10.4167 12.5625 11.25 11.3375C12.0833 10.1125 12.5 8.88333 12.5 7.65C12.5 5.95 11.9583 4.66667 10.875 3.8C9.79167 2.93333 8.66667 2.5 7.5 2.5C6.33333 2.5 5.20833 2.93333 4.125 3.8C3.04167 4.66667 2.5 5.95 2.5 7.65C2.5 8.76667 2.90833 9.92917 3.725 11.1375C4.54167 12.3458 5.80833 13.6333 7.525 15ZM7.5 17.5C5.15 15.7667 3.39583 14.0833 2.2375 12.45C1.07917 10.8167 0.5 9.21667 0.5 7.65C0.5 6.46667 0.7125 5.42917 1.1375 4.5375C1.5625 3.64583 2.10833 2.9 2.775 2.3C3.44167 1.7 4.19167 1.25 5.025 0.95C5.85833 0.65 6.68333 0.5 7.5 0.5C8.31667 0.5 9.14167 0.65 9.975 0.95C10.8083 1.25 11.5583 1.7 12.225 2.3C12.8917 2.9 13.4375 3.64583 13.8625 4.5375C14.2875 5.42917 14.5 6.46667 14.5 7.65C14.5 9.21667 13.9208 10.8167 12.7625 12.45C11.6042 14.0833 9.85 15.7667 7.5 17.5ZM7.5 9.5C8.05 9.5 8.52083 9.30417 8.9125 8.9125C9.30417 8.52083 9.5 8.05 9.5 7.5C9.5 6.95 9.30417 6.47917 8.9125 6.0875C8.52083 5.69583 8.05 5.5 7.5 5.5C6.95 5.5 6.47917 5.69583 6.0875 6.0875C5.69583 6.47917 5.5 6.95 5.5 7.5C5.5 8.05 5.69583 8.52083 6.0875 8.9125C6.47917 9.30417 6.95 9.5 7.5 9.5Z"
												fill="#00159E"
											/>
										</svg>
									</div>
									<b className="font-montserrat text-[16px] md:text-[20px] font-[300] text-black leading-[34.1px]">
										Abuja, Nigeria
									</b>
								</div>
							</div>
						</div>
						<div className="flex self-center gap-5">
							<a
								href="/aacis/register"
								className="relative cursor-pointer p-[10px] bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] text-white font-[600] font-montserrat md:text-[20px] text-[14px]  transition-transform transform hover:scale-105 hover:opacity-90 leading-24.38px] flex justify-center items-center"
							>
								<span class="cursor-pointer absolute right-[-2px] top-[-2px] h-[10px] w-[10px] animate-ping rounded-full bg-[#f0790c] "></span>
								<span className="cursor-pointer">REGISTER NOW</span>
							</a>

							<a
								href="/aacis/AACIS_25_brochure.pdf"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer p-[10px] border-4 border-[#00159E] text-[#00159E] font-[600] font-montserrat md:text-[20px] text-[14px]  transition-transform transform hover:scale-105 hover:opacity-90 leading-24.38px]"
							>
								DOWNLOAD BROCHURE
							</a>

							{/* <button
								onClick={() => setIsModalOpen(true)}
								className="cursor-pointer p-[10px] border-4 border-[#00159E] text-[#00159E] font-[600] font-montserrat md:text-[20px] text-[14px] transition-transform transform hover:scale-105 hover:opacity-90"
								>
								VIEW EVENT PICTURES
							</button> */}
						</div>
					</div>
					<div className="z-[-1px] rounded-b-2xl w-[100%] border-0">
						<img src={theme_up} />
						<video
							className="rounded-b-2xl border-0 "
							playsInline
							autoPlay
							loop
							muted
						>
							<source src={themed_video} type="video/mp4" />
						</video>
					</div>

					<ScrollAnimation
						animateIn="fadeInUp"
						className="flex items-center self-center w-fit gap-8 text-left mt-10"
					>
						{/* <div className="flex items-center self-center w-fit gap-8 text-left mt-10"> */}
						<div className="">
							
							<p className="font-montserrat font-semibold md:text-[18px] text-[11px] md:leading-[17.7px] text-[#032642]">
								In Partnership with the Government of
							</p>
							<p className="font-montserrat font-[600] md:text-[32px] text-[20px] md:leading-[48px]  leading-[24.36px] text-[#00159E]">
								St. Kitts and Nevis
							</p>
						</div>
						<div className="">
							<img
								src={st_kitts_coat}
								className="hidden md:block"
								alt=""
							/>
							<img
								src={st_kitts_coat_sm}
								className="md:hidden"
								alt=""
							/>
						</div>
						{/* </div> */}
					</ScrollAnimation>
				</div>
			</div>

			<div className="xl:px-20 px-3 xl:pb-20 pb-3 bg-gradient-to-b from-[#fff] via-[#0097fe]/30 to-[#fff]">
				<div className="container 2xl:bg-[url(/src/assets/4_theme.svg)] 2xl:bg-right-top md:bg-[url(/src/assets/4_theme_sm.svg)] md:bg-right-top bg-no-repeat">
					<div className="md:flex justify-between md:py-20 py-3">
						<div className="font-gruppo text-[24px] md:text-[54px] xl:text-[118px] leading-[35px] md:leading-[85px] xl:leading-[125px] text-[#39663a] text-center md:text-left">
							<ScrollAnimation animateIn="fadeIn">
								<h2 className="md:flex md:gap-5">
									<span className="md:indent-16 xl:indent-0 font-[300] xl:pl-8">4</span>{" "}
									<span className="font-[200]">Days</span>
								</h2>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn">
								<h2 className="md:flex md:gap-5">
									<span className="md:indent-12 xl:indent-0 font-[300] ">40</span>{" "}
									<span className="font-[200]">
										Speakers
									</span>
								</h2>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn">
								<h2 className="md:flex md:gap-5">
									<span className="font-[400] text-[14px] md:text-[21px] xl:text-[23px]">Unlimited</span>{" "}
									<span className="font-[200]">
										Opportunities
									</span>
								</h2>
							</ScrollAnimation>
						</div>
					</div>
					<ScrollAnimation animateIn="fadeIn">
						<div className=" rounded-xl relative">
							<div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bottom-1">
								<ScrollAnimation animateIn="fadeInUp" delay={1}>
									<div className="rounded-[16px]  xl:min-h-[250px]">
										<img
											src={shieldIcon}
											className="mb-2"
										/>
										<h3 className="md:text-[20px] text-[16px] font-[600] text-[#032642] font-montserrat">
											Plenary Sessions
										</h3>
										<div className="mt-2 font-montserrat md:text-[14px] text-[12px] text-black leading-[26px]">
											High-level discussions on critical
											topics such as: Overcoming Barriers
											to African-Caribbean Trade and
											Investment. Building Sustainable
											International Businesses and
											Partnerships. Finance and Access to
											Capital.
										</div>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp" delay={2}>
									<div className="rounded-[16px] xl:min-h-[250px]">
										<img
											src={shieldIcon}
											className="mb-2"
										/>
										<h3 className="md:text-[20px] text-[16px] font-[600] text-[#032642] font-montserrat">
											Networking Sessions
										</h3>
										<div className="mt-2 font-montserrat md:text-[14px] text-[12px] text-black leading-[26px]">
											Structured and informal networking
											opportunities to foster
											relationship-building and
											partnerships.
										</div>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp" delay={3}>
									<div className="rounded-[16px] xl:min-h-[250px]">
										<img
											src={shieldIcon}
											className="mb-2"
										/>
										<h3 className="md:text-[20px] text-[16px] font-[600] text-[#032642] font-montserrat">
											Breakout Sessions
										</h3>
										<div className="mt-2 font-montserrat md:text-[14px] text-[12px] text-black leading-[26px]">
											Smaller, focused discussions on
											specialized topics to promote deeper
											engagement and actionable insights.
										</div>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp" delay={2}>
									<div className="rounded-[16px] xl:min-h-[250px]">
										<img
											src={shieldIcon}
											className="mb-2"
										/>
										<h3 className="md:text-[20px] text-[16px] font-[600] text-[#032642] font-montserrat">
											Exhibition Floor
										</h3>
										<div className="mt-2 font-montserrat md:text-[14px] text-[12px] text-black leading-[26px]">
											A dedicated space where businesses
											across diverse sectors can showcase
											their products and services, opening
											themselves up to valuable growth
											opportunities.
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>

			{/* <Testimonials /> */}

			<div className="bg-white  bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain xl:p-10 p-2">
				{/* <div className="md:py-16 py-8   bg-gradient-to-b from-[#fff] via-[#f0790c]/40 to-[#fff]"> */}
				<div className="md:py-16 py-8  bg-gradient-to-b from-[#fff] via-[#f0790c]/100 to-[#fff]">
					<div className="container">
						<div className="font-gruppo flex flex-col text-[24px] md:text-[54px] xl:text-[96px] leading-[35px] md:leading-[65px] xl:leading-[85px] font-[200] text-[#39663a] text-center md:text-left">
							<ScrollAnimation animateIn="fadeInUp">
								<h2 className="">
									One Voice, One Vision:<br />
									Advancing Afri-Caribbean Unity.
								</h2>
							</ScrollAnimation>
						</div>

						<div className="mt-12 text-justify">
							<div className="pb-10">
								<ScrollAnimation animateIn="fadeInUp">
									<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
										The AACIS presents a unique opportunity to
										shape the future of African-Caribbean
										relations. With a firm commitment to
										fostering cross-regional economic growth,
										the summit will serve as a platform for
										offering strategic discussions, unparalleled
										opportunities for high-value investments,
										networking and partnership building, and
										cultural exchange between Africa and St.
										Kitts and Nevis. The summit is set to
										deliver exceptional value to all
										participants through a carefully curated
										agenda, top-tier speakers, and an exhibition
										floor dedicated to business promotion.
									</p>
								</ScrollAnimation>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-5 pb-10">
								<ScrollAnimation animateIn="fadeInUp">
									<div className="flex items-start space-x-4">
										<img src={shieldIcon} className="mt-0" />
										<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
											Discover untapped investment potential
											in the Caribbean and Africa, and learn
											about profitable industries such as
											tourism, real estate, technology,
											agriculture, and finance.
										</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp">
									<div className="flex items-start space-x-4">
										<img src={shieldIcon} className="mt-0" />
										<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
											Understand the strategic importance of
											St. Kitts and Nevis within the OECS, and
											its benefits as an investment
											destination. Learn how to leverage
											cross-continental partnerships to scale
											your business and enhance profitability.
										</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp">
									<div className="flex items-start space-x-4">
										<img src={shieldIcon} className="mt-0" />
										<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
											Gain valuable insights from sessions on
											topics like Overcoming Trade Barriers,
											Building Sustainable International
											Businesses, and Accessing Capital.
										</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp">
									<div className="flex items-start space-x-4">
										<img src={shieldIcon} className="mt-0" />
										<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
											Participate in the exhibition floor to
											showcase your products or services to a
											diverse audience, as well as explore
											partnerships and investment
											opportunities for your business.
										</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp">
									<div className="flex items-start space-x-4">
										<img src={shieldIcon} className="mt-0" />
										<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
											Experience a blend of knowledge-sharing
											and cultural enrichment, including a
											gala night showcasing African and
											Caribbean heritage. Take part in a
											guided tour of Abuja, exploring the
											city&apos;s culture and business
											environment.
										</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp">
									<div className="flex items-start space-x-4">
										<img src={shieldIcon} className="mt-0" />
										<p className="md:text-[16px] font-montserrat md:leading-[28px] font-[400] text-[14px] leading-[24px]">
											Be a part of shaping the future of
											Africa-Caribbean economic collaboration.
											Influence discussions and outcomes that
											could redefine global trade between the
											two regions.
										</p>
									</div>
								</ScrollAnimation>
							</div>
							<div className="flex self-center py-10">
								<ScrollAnimation animateIn="fadeInUp">
									<a
										href="/aacis/register"
										className="cursor-pointer p-[20px] bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] text-white font-[600] font-montserrat md:text-[20px] text-[14px]  transition-transform transform hover:scale-105 hover:opacity-90 leading-24.38px]"
									>
										REGISTER NOW
									</a>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[url(/src/assets/theme_down.png)] bg-no-repeat bg-right-center bg-contain pt-10 mt-[1px]">
				<div className="container 2xl:pt-[170px] 3xl:pt-[250px] lg:pt-24 md:pt-16 pt-5">
					<div className="flex flex-col items-center align-center text-center font-gruppo">
						<h2 className="text-[24px] md:text-[54px] xl:text-[96px] leading-[35px]  md:leading-[65px] xl:leading-[85px] font-[200] text-[#39663a] md:pb-4">
							Who Will Benefit From Attending?
						</h2>
						<p className="text-[#000000] md:text-[20px] text-[14px] md:leading-[24px] leading-[18px] md:w-[70%] lg:w-[50%] w-[100%] font-[200]">
							AACIS is designed for a diverse range of
							stakeholders who are passionate about driving
							economic collaboration and exploring new business
							opportunities.
						</p>
					</div>
					<div className="md:p-16 p-8 pb-20">
						<ScrollAnimation animateIn="fadeInUp">
							<div className="rounded-2xl relative">
								<CarouselProvider
									naturalSlideWidth={100}
									naturalSlideHeight={80}
									totalSlides={5}
								>
									<div className="">
										<ButtonBack>
											<img
												src={ArrowDown}
												className="hidden md:block cursor-pointer"
												alt=""
											/>
										</ButtonBack>
										<ButtonBack>
											<img
												src={ArrowDownSm}
												className="md:hidden cursor-pointer"
												alt=""
											/>
										</ButtonBack>
										<ButtonNext>
											<img
												src={ArrowUp}
												className="hidden md:block cursor-pointer"
												alt=""
											/>
										</ButtonNext>
										<ButtonNext>
											<img
												src={ArrowUpSm}
												className="md:hidden cursor-pointer"
												alt=""
											/>
										</ButtonNext>
									</div>

									<Slider>
										<Slide index={0}>
											<div className="w-full md:h-[320px] xl:h-[600px] h-[200px] overflow-clip rounded-2xl">
												<img
													src={No1}
													className="rounded-2xl relative"
												/>
											</div>
											<div className="flex flex-row justify-between py-5">
												<p className="text-[24px] md:text-[45px] lg:text-[82px] leading-[28px] md:leading-[35px] lg:leading-[60px] text-[#00159E] pb-4 font-gruppo xl:font-[500] font-[300]">
													01
												</p>
												<div className="text-right">
													<h2 className="text-[20px] md:text-[23px] lg:text-[32px] leading-[28px] md:leading-[30px] lg:leading-[35px] text-[#00159E] xl:pb-4 font-gruppo xl:font-[500] font-[300]">
														Investors and
														Entrepreneurs
													</h2>
													<ul className="mt-2 font-montserrat text-black text-[14px] md:text-[16px] lg:text-[18px] xl:leading-[30px] list-none pl-4 font-[200]">
														<li className="relative pr-1 after:content-['•'] before:text-md">
															African investors
															seeking to explore
															profitable ventures
															in St. Kitts and
															Nevis
														</li>
														<li className="relative pr-1 after:content-['•'] before:text-md">
															SKN investors
															interested in the
															rapidly growing
															African market
														</li>
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Entrepreneurs
															looking for
															cross-regional
															partnerships and
															joint ventures
														</li>
													</ul>
												</div>
											</div>
										</Slide>
										<Slide index={1}>
											<div className="w-full md:h-[320px] xl:h-[600px] h-[200px] overflow-clip rounded-2xl">
												<img
													src={hero2}
													className="rounded-2xl relative"
												/>
											</div>
											<div className="flex flex-row justify-between py-5">
												<p className="text-[24px] md:text-[45px] lg:text-[82px] leading-[28px] md:leading-[35px] lg:leading-[60px] text-[#00159E] pb-4 font-gruppo xl:font-[500] font-[300]">
													02
												</p>
												<div className="text-right">
													<h2 className="text-[20px] md:text-[23px] lg:text-[32px] leading-[28px] md:leading-[30px] lg:leading-[35px] text-[#00159E] xl:pb-4 font-gruppo xl:font-[500] font-[300]">
														Business Executives and
														Leaders
													</h2>
													<ul className="mt-2 font-montserrat text-black text-[14px] md:text-[16px] lg:text-[18px] xl:leading-[30px] list-none pl-4 font-[200]">
														<li className="relative pr-1 after:content-['•'] before:text-md">
															CEOs, COOs, and
															senior management
															exploring
															international
															expansion
														</li>
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Industry leaders in
															sectors like real
															estate, tourism,
															agriculture,
															technology, and
															finance
														</li>
													</ul>
												</div>
											</div>
										</Slide>
										<Slide index={2}>
											<div className="w-full md:h-[320px] xl:h-[600px] h-[200px] overflow-clip rounded-2xl">
												<img
													src={No2}
													className="rounded-2xl relative"
												/>
											</div>
											<div className="flex flex-row justify-between py-5">
												<p className="text-[24px] md:text-[45px] lg:text-[82px] leading-[28px] md:leading-[35px] lg:leading-[60px] text-[#00159E] pb-4 font-gruppo xl:font-[500] font-[300]">
													03
												</p>
												<div className="text-right">
													<h2 className="text-[20px] md:text-[23px] lg:text-[32px] leading-[28px] md:leading-[30px] lg:leading-[35px] text-[#00159E] xl:pb-4 font-gruppo xl:font-[500] font-[300]">
														Policymakers and
														Government Officials
													</h2>
													<ul className="mt-2 font-montserrat text-black text-[14px] md:text-[16px] lg:text-[18px] xl:leading-[30px] list-none pl-4 font-[200]">
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Ministers and
															decision-makers
															shaping trade and
															economic policies
														</li>
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Representatives of
															trade and investment
															commissions from
															Africa and the
															Caribbean
														</li>
													</ul>
												</div>
											</div>
										</Slide>
										<Slide index={3}>
											<div className="w-full md:h-[320px] xl:h-[600px] h-[200px] overflow-clip rounded-2xl">
												<img
													src={No3}
													className="rounded-2xl relative"
												/>
											</div>
											<div className="flex flex-row justify-between py-5">
												<p className="text-[24px] md:text-[45px] lg:text-[82px] leading-[28px] md:leading-[35px] lg:leading-[60px] text-[#00159E] pb-4 font-gruppo xl:font-[500] font-[300]">
													04
												</p>
												<div className="text-right">
													<h2 className="text-[20px] md:text-[23px] lg:text-[32px] leading-[28px] md:leading-[30px] lg:leading-[35px] text-[#00159E] xl:pb-4 font-gruppo xl:font-[500] font-[300]">
														Exporters and Importers
													</h2>
													<ul className="mt-2 font-montserrat text-black text-[14px] md:text-[16px] lg:text-[18px] xl:leading-[30px] list-none pl-4 font-[200]">
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Businesses looking
															to expand trade
															between Africa and
															the Caribbean
														</li>
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Companies exploring
															export and import
															opportunities in key
															sectors
														</li>
													</ul>
												</div>
											</div>
										</Slide>
										<Slide index={4}>
											<div className="w-full md:h-[320px] xl:h-[600px] h-[200px] overflow-clip rounded-2xl">
												<img
													src={No4}
													className="rounded-2xl relative"
												/>
											</div>
											<div className="flex flex-row justify-between py-5">
												<p className="text-[24px] md:text-[45px] lg:text-[82px] leading-[28px] md:leading-[35px] lg:leading-[60px] text-[#00159E] pb-4 font-gruppo xl:font-[500] font-[300]">
													05
												</p>
												<div className="text-right">
													<h2 className="text-[20px] md:text-[23px] lg:text-[32px] leading-[28px] md:leading-[30px] lg:leading-[35px] text-[#00159E] xl:pb-4 font-gruppo xl:font-[500] font-[300]">
														Financial Institutions
														and Development Partners
													</h2>
													<ul className="mt-2 font-montserrat text-black text-[14px] md:text-[16px] lg:text-[18px] xl:leading-[30px] list-none pl-4 font-[200]">
														<li className="relative pr-1 after:content-['•'] before:text-md">
															Banks, venture
															capitalists, and
															funding agencies
															focused on emerging
															markets
														</li>
														<li className="relative pr-1 after:content-['•'] before:text-md">
															International
															organizations
															driving sustainable
															development in
															Africa and the
															Caribbean
														</li>
													</ul>
												</div>
											</div>
										</Slide>
									</Slider>
								</CarouselProvider>
							</div>
						</ScrollAnimation>
						<div className="md:mb-20 mb-5 mt-10 text-center">
							<a
							href="/aacis/gallery"
								className="cursor-pointer p-[10px] border-4 border-[#00159E] text-[#00159E] font-[600] font-montserrat md:text-[20px] text-[14px] hover:scale-105 hover:opacity-90"
							>
								VIEW PHOTOS AND VIDEOS
							</a>
						</div>
					</div>
				</div>
				<div className="absolute md:h-[95px] xl:h-[175px] xl:my-[-100px] md:my-[-50px] my-[-20px] right-[0px] h-[40px] w-full bg-[url(/src/assets/aacis.png)] bg-no-repeat bg-bottom bg-contain "></div>
			</div>

			<KeynoteSpeaker />
			{/* Move summit sections here, before Who Will Benefit From Attending */}
			<div className="w-full flex flex-col gap-12 my-12">
				{/* Agriculture Summit */}
				<section className="relative w-full bg-gradient-to-br from-[#e0f2ff] via-[#f0f9ff] to-[#e6e6ff] shadow-lg rounded-2xl py-8 md:py-12 border border-[#00159E]/10 overflow-hidden animate-fadeInUp">
					<div className="absolute -top-8 -right-8 opacity-10 text-[10rem] pointer-events-none select-none">🌾</div>
					<div className="container mx-auto px-3 xl:px-20">
						<h2 className="text-3xl md:text-5xl font-extrabold text-[#00159E] mb-2 text-center drop-shadow-lg">Afri-Caribbean Agriculture Food Security Summit</h2>
						<p className="text-center text-lg text-[#032642] mb-4 font-semibold">23-24 March 2026</p>
						<div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
							<div className="flex flex-col items-center">
								<img src="https://via.placeholder.com/120x120?text=Abubakar+Kyari" alt="Hon. Sen. Abubakar Kyari" className="rounded-full w-28 h-28 object-cover border-4 border-[#00159E] shadow-md" />
								<span className="mt-2 font-bold text-[#00159E]">Hon. Sen. Abubakar Kyari</span>
								<span className="text-xs text-gray-600">Ministry of Agriculture & Food Security, Nigeria</span>
							</div>
							<div className="flex flex-col items-center">
								<img src="https://via.placeholder.com/120x120?text=Samal+Duggins" alt="Hon. Samal Duggins" className="rounded-full w-28 h-28 object-cover border-4 border-[#00159E] shadow-md" />
								<span className="mt-2 font-bold text-[#00159E]">Hon. Samal Duggins</span>
								<span className="text-xs text-gray-600">Ministry of Agriculture, St. Kitts & Nevis</span>
							</div>
						</div>
						<p className="mb-4 text-center text-gray-700 text-lg italic">Africa and the Caribbean share common challenges in agriculture, including climate vulnerability, food insecurity, and trade barriers. Yet, both regions possess untapped potential for collaboration in sustainable agri-food systems, technology transfer, and intra-regional trade.</p>
						<div className="grid md:grid-cols-3 gap-6 mb-6">
							<div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
								<span className="text-3xl mb-2">🤝</span>
								<b className="text-[#00159E]">Leverage Shared Priorities</b>
								<p className="text-sm mt-1">Align the African Union’s Agenda 2063 and CARICOM’s 25% Food Import Reduction Goal.</p>
							</div>
							<div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
								<span className="text-3xl mb-2">💡</span>
								<b className="text-[#00159E]">Catalyze Investment</b>
								<p className="text-sm mt-1">Showcase scalable innovations in climate-smart agriculture, agro-processing, and digital solutions.</p>
							</div>
							<div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
								<span className="text-3xl mb-2">📜</span>
								<b className="text-[#00159E]">Strengthen Policy Frameworks</b>
								<p className="text-sm mt-1">Harmonize standards for cross-regional trade, food security, and sovereignty.</p>
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-6 mb-6">
							<div className="bg-[#f0f9ff]/80 rounded-xl p-4 shadow">
								<h3 className="text-lg font-bold mb-2 text-[#00159E]">Objectives</h3>
								<ul className="list-disc pl-6 text-gray-700 text-sm">
									<li>Policy Dialogue: Address barriers to Afri-Caribbean agri-trade (e.g., tariffs, logistics, SPS measures).</li>
									<li>Public-Private Partnerships: Mobilize investments in joint ventures.</li>
									<li>Knowledge Exchange: Share best practices in climate resilience, youth agripreneurship, and circular agriculture.</li>
									<li>Joint Declaration: Adopt a Ministerial Action Plan with concrete commitments (e.g., AU-CARICOM Agri-Trade Task Force).</li>
								</ul>
							</div>
							<div className="bg-[#f0f9ff]/80 rounded-xl p-4 shadow">
								<h3 className="text-lg font-bold mb-2 text-[#00159E]">Key Components</h3>
								<ul className="list-disc pl-6 text-gray-700 text-sm">
									<li>Ministerial Roundtable: Closed-door session for actionable accords.</li>
									<li>Innovation Showcase: Pitch sessions for agri-tech startups and SMEs.</li>
									<li>B2B/B2G Meetings: Matchmaking for investors, exporters, and policymakers.</li>
								</ul>
							</div>
						</div>
						<div className="bg-[#e0f2ff]/60 rounded-xl p-4 shadow mb-2">
							<h3 className="text-lg font-bold mb-2 text-[#00159E]">Expected Outcomes</h3>
							<ul className="list-disc pl-6 text-gray-700 text-sm">
								<li>Policy: Signed MoUs on agri-trade facilitation and R&D collaboration.</li>
								<li>Investment: Pipeline of Afri-Caribbean agri-business deals.</li>
								<li>Media Impact: Global coverage highlighting cross-regional solidarity.</li>
							</ul>
						</div>
					</div>
				</section>
				{/* Health Summit */}
				<section className="relative w-full bg-gradient-to-br from-[#e0f2ff] via-[#fff0f6] to-[#e6e6ff] shadow-lg rounded-2xl py-8 md:py-12 border border-[#00159E]/10 overflow-hidden animate-fadeInUp">
					<div className="absolute -top-8 -right-8 opacity-10 text-[10rem] pointer-events-none select-none">🩺</div>
					<div className="container mx-auto px-3 xl:px-20">
						<h2 className="text-3xl md:text-5xl font-extrabold text-[#00159E] mb-2 text-center drop-shadow-lg">Afri-Caribbean Health Summit</h2>
						<p className="text-center text-lg text-[#032642] mb-4 font-semibold">26 March 2026</p>
						<p className="mb-4 text-center text-gray-700 text-lg italic">The Afri-Caribbean Health Summit, a strategic side event of AACIS 2026, is designed to address the converging health challenges facing Africa and the Caribbean such as climate-induced disease outbreaks, fragmented health systems, limited healthcare access, and low health financing. Despite these issues, both regions share immense untapped potential for collaborative health reforms, digital transformation, and joint pandemic preparedness.</p>
						<div className="grid md:grid-cols-3 gap-6 mb-6">
							<div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
								<span className="text-3xl mb-2">🎯</span>
								<b className="text-[#00159E]">Leverage Shared Priorities</b>
								<p className="text-sm mt-1">Align the African Union’s Agenda 2063 with CARICOM’s Health Security Goals to advance a unified health agenda.</p>
							</div>
							<div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
								<span className="text-3xl mb-2">💊</span>
								<b className="text-[#00159E]">Catalyze Investment</b>
								<p className="text-sm mt-1">Mobilize capital and partnerships to scale up health innovations, particularly in digital health, pharmaceuticals, and community healthcare.</p>
							</div>
							<div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
								<span className="text-3xl mb-2">⚖️</span>
								<b className="text-[#00159E]">Strengthen Policy Frameworks</b>
								<p className="text-sm mt-1">Harmonize cross-regional health trade regulations, establish coordinated crisis response systems, and explore frameworks for health workforce mobility.</p>
							</div>
						</div>
						<div className="bg-[#e0f2ff]/60 rounded-xl p-4 shadow mb-2">
							<h3 className="text-lg font-bold mb-2 text-[#00159E]">Core Focus Areas</h3>
							<ul className="list-disc pl-6 text-gray-700 text-sm">
								<li>Leverage Shared Priorities</li>
								<li>Catalyze Investment</li>
								<li>Strengthen Policy Frameworks</li>
							</ul>
						</div>
						<p className="mt-4 text-center text-gray-700">Framed under the overarching theme <b>"One Voice, One Vision: Advancing Afri-Caribbean Economic Unity"</b>, the summit brings together Heads of State, Ministers, private sector leaders, health innovators, and development partners to position health as a catalyst for economic stability, human capital development, and regional integration.</p>
					</div>
				</section>
			</div>
			<Mentions />
			<Testimonials />

			<CountdownTimer />
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
					onClick={() => setIsModalOpen(false)}
				>
					<div className="bg-white bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain xl:p-4 p-2 rounded-lg shadow-lg">

						<div
							className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
							onClick={e => e.stopPropagation()}
						>
							{/* Close icon */}
							<button
								className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
								onClick={() => setIsModalOpen(false)}
							>
								×
							</button>

							{/* Modal header + message */}
							<h2 className="text-xl font-semibold mb-4">Event Pictures</h2>
							<p className="mb-6">
								A download PIN will be sent to your email. Please check your inbox and use the PIN to download the pictures.
							</p>

							{/* Buttons */}
							<div className="flex space-x-3">
								<a
									href="https://momodumedia88.pixieset.com/aacis/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 text-center py-3 font-semibold rounded-lg bg-[#00159E] text-white hover:bg-[#032642] transition"
								>
									Continue
								</a>
								<button
									onClick={() => setIsModalOpen(false)}
									className="flex-1 text-center py-3 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

		</main>
	);
}

export default Body;
