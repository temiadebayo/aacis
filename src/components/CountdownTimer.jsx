import React, { useState, useEffect } from "react";
import counterBg from "../assets/counterbg.png";

import ScrollAnimation from "react-animate-on-scroll";

const CountdownTimer = () => {
	const targetDate = new Date("2026-03-25T00:00:00").getTime();
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// Function to pad numbers to always have two digits
	const padZero = (num) => num.toString().padStart(2, "0");

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance <= 0) {
				clearInterval(interval);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({
				days: padZero(days),
				hours: padZero(hours),
				minutes: padZero(minutes),
				seconds: padZero(seconds),
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);

	return (
		<ScrollAnimation animateIn="fadeIn">
			{/* <div className="bg-[url(/src/assets/theme_bg.svg)] bg-no-repeat p-10"> */}
			<div className="">
				<div
					// className="relative bg-cover bg-center md:h-[584px] flex items-center justify-center text-white py-10 border-4 bg-[#39663a]"
					className="relative bg-cover bg-center md:h-[584px] flex items-center justify-center text-white py-10 bg-[#00159E]"
					style={{
						// backgroundImage: `url(${counterBg})`,
					}}
				>
					<div className="absolute inset-0 bg-blue-opacity-70 w-full h-full"></div>

					<div className="relative text-center">
						{/* Countdown Timer */}
						<div className="flex justify-center md:gap-1 text-4xl md:text-7xl mb-6 font-gruppo">
							<div>
								<span className="font-gruppo md:text-[52px] text-[20px]">
									{timeLeft.days || "00"}
								</span>
								<div className="font-montserrat mt-4 text-center font-[500] text-[16px] leading-[21.94px]">
									Days
								</div>
							</div>
							<span className="font-gruppo md:text-[52px] text-[20px] p-1 md:p-3">
								:
							</span>
							<div>
								<span className="font-gruppo md:text-[52px] text-[20px]">
									{timeLeft.hours || "00"}
								</span>
								<div className="font-montserrat mt-4 text-center font-[500] text-[16px] leading-[21.94px]">
									Hrs
								</div>
							</div>
							<span className="font-gruppo md:text-[52px] text-[20px] p-1 md:p-3">
								:
							</span>
							<div>
								<span className="font-gruppo md:text-[52px] text-[20px]">
									{timeLeft.minutes || "00"}
								</span>
								<div className="font-montserrat mt-4 text-center font-[500] text-[16px] leading-[21.94px]">
									Mins
								</div>
							</div>
							<span className="font-gruppo md:text-[52px] text-[20px] p-1 md:p-3">
								:
							</span>
							<div>
								<span className="font-gruppo md:text-[52px] text-[20px]">
									{timeLeft.seconds || "00"}
								</span>
								<div className="font-montserrat mt-4 text-center font-[500] text-[16px] leading-[21.94px]">
									Secs
								</div>
							</div>
						</div>

						{/* Title */}
						<ScrollAnimation animateIn="fadeIn">
							<h2 className="text-2xl md:text-[64px] md:mb-6 font-michroma md:leading-[91px]">
								Save A Seat
							</h2>
						</ScrollAnimation>
						<div className="mt-6 md:mt-20">
							<ScrollAnimation animateIn="fadeIn">
								<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
									<a
										href="/aacis/register"
										className="cursor-pointer md:px-[40px] px-[20px] md:py-[20px] py-[12px] bg-[linear-gradient(360deg,_#fff_23.7%,_#fff_100%)] text-blue-900 font-[600] font-montserrat md:text-[20px] text-[14px] transition-transform transform hover:scale-105 hover:opacity-90 rounded-lg"
									>
										Register Now
									</a>
									<a
										href="/aacis/volunteers"
										className="cursor-pointer md:px-[40px] px-[20px] md:py-[20px] py-[12px] border-2 border-white text-white font-[600] font-montserrat md:text-[20px] text-[14px] transition-transform transform hover:scale-105 hover:bg-white hover:text-[#00159E] rounded-lg"
									>
										Volunteer
									</a>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default CountdownTimer;
