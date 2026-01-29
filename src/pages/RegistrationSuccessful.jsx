import React, { useState, useEffect } from "react";
import payment_success from "../assets/payment_success.svg";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function RegistrationSuccessful() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/aacis/');
	};

	const [searchParams] = useSearchParams();
	const type = searchParams.get('type') || 'payment';
	const amount = searchParams.get('amount') || 0;
	
	const successfulPayment =()=>(
		<>
		{/* Icon Section */}
		<div className="mb-6">
				<div className="relative">
					<div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-0 left-8"></div>
					<div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-20 right-4"></div>
					<img
						src={payment_success}
						className="hidden md:block"
						alt=""
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-24 h-24 text-green-500 md:hidden"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M9 16.172L4.414 11.586 3 13l6 6 12-12-1.414-1.414z"></path>
					</svg>
				</div>
			</div>

			{/* Title */}
			<h1 className="md:text-[48px] text-[30px] font-bold text-center text-[#171717] mb-4 font-michroma">
				Registration Successful!
			</h1>

			{/* Description */}
			<p className="text-center text-gray-500 mb-8">
				Thank you for the registration. <br />
				Your slot has been secured successfully. <br />
				You can choose to plan your trip with us, <br />
				or go to the homepage.
			</p>

			{/* Buttons */}
			<div className="flex space-x-4">
				<button className="mt-6 md:px-[40px] md:py-[20px] px-[25px] py-[10px] md:text-[28px] md:leading-[24px] text-[16px] bg-blue-600 text-white font-[700] rounded-[100px] hover:bg-blue-800 bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)] ">
					Plan trip
				</button>
				<a
					href="/aacis/"
					className="cursor-pointer  border border-blue-600 mt-6 md:px-[40px] md:py-[20px] px-[25px] py-[10px] md:text-[28px] md:leading-[24px] text-[16px] bg-white text-blue-800 font-[700] rounded-[100px] hover:bg-gray-400"
				>
					Home
				</a>
			</div>
		</>
	)
	
	  const manualRegistrationSuccess = () =>{
		return (
			// <div className="min-h-screen flex justify-center items-center bg-gray-100 font-montserrat">
			<div className="bg-white bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain xl:p-4 p-2 rounded-lg shadow-lg">
			<div className="bg-white p-6 max-w-md w-full">
			  <h2 className="text-2xl font-bold text-center mb-4">Registration Confirmation</h2>
			  <p className="text-lg text-center mb-6">
				Thank you for your registration! Please email your payment receipt, as well as your full name as it appears on your registration form to{' '}
				<span className="text-blue-500">aacis@aquarianconsult.com</span> to receive a registration confirmation.
			  </p>
	
			  {amount !== 0 && (
				<>
				  <p className="text-sm mb-6 text-center">
					<strong>Amount:</strong>
					<br />
					${amount}
				  </p>
				  <p className="text-sm mb-6 text-center">
					<strong>Bank Details:</strong>
					<br />
					<strong>Bank:</strong> Providus Bank <br />
					<strong>Account Number:</strong> 1306906733 <br />
					<strong>Bank Name:</strong> Aquarian Consult Limited
				  </p>
				</>
			  )}
			  
				<div className="text-center">
					<button
						onClick={handleGoHome}
						className="bg-[#a30907] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#8a0806]"
					>
						Go to Homepage
					</button>
				</div>
			</div>
			
		  </div>
		)
	  }

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white font-gruppo md:text-[36px] text-[16px]">
			{type === 'payment' ? successfulPayment() : manualRegistrationSuccess()}
		</div>
	);
};

export default RegistrationSuccessful;
