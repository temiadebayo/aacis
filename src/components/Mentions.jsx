import React, { useState, useEffect } from "react";

import business_day from "../assets/mentions/business_day.png";
import the_guardian from "../assets/mentions/the_guardian.png";
import this_day from "../assets/mentions/this_day.jpeg";
import arise_news from "../assets/mentions/arise_news.png";
import daily_trust from "../assets/mentions/daily_trust.png";
import nan_news from "../assets/mentions/nan_news.jpg";
import channels_news from "../assets/mentions/channels_news.png";
import sentinel_news from "../assets/mentions/sentinel_news.jpg";
import inquirer_news from "../assets/mentions/inquirer_news.jpg";
import af24_news from "../assets/mentions/af24_news.png";
import nta_news from "../assets/mentions/nta_news.png";
import daily_dispatch from "../assets/mentions/daily_dispatch.png";
import news_diary from "../assets/mentions/news_diary.png";
import news_express from "../assets/mentions/news_express.webp";

import ScrollAnimation from "react-animate-on-scroll";


function Mentions() {

	return (
			<section className="py-12 md:py-16 md:px-24 px-10 bg-white font-gruppo">
				<div className="grid lg:grid-cols-3 gap-10 mt-10">

					<div className="xl:max-w-[380px] bg-white flex flex-col justify-center items-center">
						<p className="xl:text-5xl text-3xl font-700 text-center text-[#00159E]  truncate">A A C I S ' 2 5</p>
						<p className="xl:text-4xl text-2xl font-700 text-center text-[#f0790c] truncate">
							M E D I A
						</p>
						<p className="xl:text-4xl text-2xl font-700 text-center text-[#f0790c] truncate">
							M E N T I O N S
						</p>
					</div>

					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={business_day} className="w-[200px]" />
							<p className="text-xs">
								Aquarian Consult, St. Kitts Govt.
								set to host maiden Afri-Caribbean
								Investment Summit...targets trans-
								regional trade in agriculture, real estate, others.</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">19 FEBRUARY 2025</p>
							</div>

						</div>
					</div>
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={the_guardian} className="w-[200px]" />
							<p className="text-xs">
								Aquarian Consult to Connect Nigerian
								Businesses with Investors and Industry
								Leaders at Afri-Caribbean Investment
								Summit.</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">12 FEBRUARY 2025</p>
								<a
									href="https://guardian.ng/specials/aquarian-consult-to-connect-nigerian-businesses-with-investors-industry-leaders-at-afri-caribbean-investment-summit/"
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Read Here</a>
							</div>
						</div>
					</div>
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={this_day} className="w-[200px]" />
							<p className="text-xs">
								Transforming Cross-Regional Trade
								Through the Afri-Caribbean
								Investment Summit.
							</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">17 FEBRUARY 2025</p>
								<a
									href="https://www.thisdaylive.com/index.php/2025/02/17/transforming-cross-regional-trade-through-the-afri-caribbean-investment-summit/"
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Read Here</a>
							</div>
						</div>
					</div>
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={arise_news} className="h-[50px]" />
							<p className="text-xs">
								Nigeria, Caribbean Nations to
								Deepen Trade Ties at Upcoming
								Summit.
							</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">18 FEBRUARY 2025</p>
								<a
									href="https://www.arise.tv/nigeria-caribbean-nations-to-deepen-trade-ties-at-upcoming-summit/"
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Read Here</a>
							</div>
						</div>
					</div>
					{/* <div className="xl:max-w-[380px] bg-white p-5 flex flex-col justify-center items-center">
						<p className="xl:text-5xl text-3xl font-700 text-center text-[#00159E]">A A C I S ' 2 5</p>
						<p className="xl:text-4xl text-2xl font-700 text-center text-[#f0790c]">
							M E D I A
						</p>
						<p className="xl:text-4xl text-2xl font-700 text-center text-[#f0790c]">
							M E N T I O N S
						</p>
					</div> */}
					
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={daily_trust} className="w-[200px]" />
							<p className="text-xs">
								African-Caribbean Summit to
								Foster Bilateral Trade, Boost
								Growth.
							</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">13 FEBRUARY 2025</p>
								<a
									href="https://dailytrust.com/nigeria-caribbean-summit-to-foster-bilateral-trade/#:~:text=%E2%80%9CThis%20summit%20marks%20a%20pivotal,,%20investors,%20and%20business%20leaders."
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Read Here</a>
							</div>
						</div>
					</div>
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={nan_news} className="h-[50px]" />
							<p className="text-xs">
								Nigeria to host maiden African-
								Caribbean Investment Summit
							</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">12 FEBRUARY 2025</p>
								<a
									href="https://nannews.ng/2025/02/12/nigeria-to-host-maiden-african-caribbean-investment-summit/#:~:text=Nigeria%20to%20host%20maiden%20African-Caribbean%20Investment%20Summit,-follow%20and%20like&text=The"
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Read Here</a>
							</div>
						</div>
					</div>
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={channels_news} className="h-[50px]" />
							<p className="text-xs">
								Aquarian Consult to Host Afro-
								Caribbean Investment Summit.
							</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">12 FEBRUARY 2025</p>
								<a
									href="https://www.youtube.com/watch?v=5G1-x8V-KC4"
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Watch Here</a>
							</div>
						</div>
					</div>
					<div className="xl:max-w-[380px] p-2 flex justify-center items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
						<div className="xl:h-[200px] h-full w-full bg-white p-5 border grid grid-flow-col grid-rows-3 gap-5">
							<img src={sentinel_news} className="h-[50px]" />
							<p className="text-xs">
								Nigeria, St. Kitts to deepen trade
								ties at Afri-Caribbean Summit.
							</p>
							<div>
								<p className="pb-1 text-base font-500 text-left">18 FEBRUARY 2025</p>
								<a
									href="https://globalsentinelng.com/nigeria-st-kitts-and-nevis-to-deepen-trade-ties-at-afri-caribbean-summit/"
									className="cursor-pointer text-xs font-300 underline"
									target="_blank" rel="noreferrer">Read Here</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-5 p-2 flex items-center bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain">
					<div className="w-full bg-white p-5 border">
						<p className="text-xs mb-5 text-center">
							NIGERIA, CARIBBEAN NATIONS TO DEEPEN TRADE TIES AT UPCOMING SUMMIT. - 19 FEBRUARY 2025
						</p>
						<div className="min:xl:h-[200px] w-full flex flex-wrap justify-center items-center gap-5">
							<img src={inquirer_news} className="h-[50px]" />
							<img src={af24_news} className="h-[50px]" />
							<img src={nta_news} className="h-[50px]" />
							<img src={daily_dispatch} className="h-[50px]" />
							<img src={news_diary} className="w-[200px]" />
							<img src={news_express} className="h-[50px]" />
						</div>
					</div>
				</div>
			</section>
	);
}

export default Mentions;
