import { useState, useEffect } from "react";
import counterBg from "/images/counterbg.png";

const RegistrationHero = () => {
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
		// <div className="md:mt-3 mt-1 flex items-center justify-center text-white md:h-[490px] h-[250px] md:text-left bg-[url(/images/counterbg.png)] bg-cover">
		<div className=" flex items-center justify-center text-white md:h-[490px] h-[250px] md:text-left bg-transparent">

			<div className="relative text-center space-y-6">
				{/* Early Bird Registration Text */}
				<div className="mb-4">
					<div className="md:text-4xl text-2xl font-bold text-white mb-2">
						Early Bird Registration
					</div>
					<div className="md:text-base text-sm text-white/80">
						**valid until 31st December, 2025, T's and C's apply.
					</div>
				</div>
				<button className="md:text-2xl text-[16px] font-[700] md:py-3 md:px-4 py-2 px-2 rounded-xl bg-white/20 font-montserrat">
					Register now
				</button>
				{/* Countdown Timer */}
				<div className="flex justify-center md:gap-1 text-[34px] md:text-[64px] mb-6 font-digital">
					<div>
						<span className="font-digital">{timeLeft.days || "00"}</span>
						<div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">
							Days
						</div>
					</div>
					<span className="font-digital px-1 md:px-3">:</span>
					<div>
						<span className="font-digital">{timeLeft.hours || "00"}</span>
						<div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">
							Hours
						</div>
					</div>
					<span className="font-digital px-1 md:px-3">:</span>
					<div>
						<span className="font-digital">{timeLeft.minutes || "00"}</span>
						<div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">
							Min
						</div>
					</div>
					<span className="font-digital px-1 md:px-3">:</span>
					<div>
						<span className="font-digital">{timeLeft.seconds || "00"}</span>
						<div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">
							Sec
						</div>
					</div>
				</div>

				{/* Title */}
				{/* <h2 className="text-2xl md:text-[64px] md:mb-6 font-michroma md:leading-[91px]">
					Register to Attend
				</h2> */}
			</div>
		</div>
	);
};

export default RegistrationHero;
