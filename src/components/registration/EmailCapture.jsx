import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../inputs/textinput";
import Uln from "../../assets/theme_underline.png";

// API base URL for PHP backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const emailSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.email("Invalid email address"),
});

function EmailCapture({ onEmailSubmitted }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { control, handleSubmit, formState } = useForm({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: "",
		},
	});

	// Function to capture email and send welcome email
	const captureEmail = async (email) => {
		try {
			const response = await fetch(`${API_BASE_URL}/capture-email.php`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email.trim().toLowerCase(),
					source: 'registration_start'
				}),
			});

			if (response.ok) {
				const result = await response.json();
				console.log('Email captured successfully:', result);
				return true;
			} else {
				console.error('Failed to capture email');
				return false;
			}
		} catch (error) {
			console.error('Error capturing email:', error);
			// If backend is not available, continue with registration anyway
			console.log('Backend not available, continuing with registration...');
			return true; // Allow registration to continue
		}
	};

	// Function to send welcome email
	const sendWelcomeEmail = async (email) => {
		try {
			const response = await fetch(`${API_BASE_URL}/send-welcome-email.php`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email.trim().toLowerCase(),
					type: 'welcome_registration'
				}),
			});

			if (response.ok) {
				const result = await response.json();
				console.log('Welcome email sent successfully:', result);
				return true;
			} else {
				console.error('Failed to send welcome email');
				return false;
			}
		} catch (error) {
			console.error('Error sending welcome email:', error);
			// If backend is not available, continue anyway
			console.log('Backend not available for email, continuing...');
			return false;
		}
	};

	const onSubmit = async (data) => {
		setIsLoading(true);
		
		try {
			// Capture email in database
			const emailCaptured = await captureEmail(data.email);
			
			if (emailCaptured) {
				// Send welcome email
				const emailSent = await sendWelcomeEmail(data.email);
				
				if (emailSent) {
					setIsSubmitted(true);
					// Call parent component callback with email
					onEmailSubmitted(data.email);
				} else {
					// Email capture succeeded but welcome email failed
					setIsSubmitted(true);
					console.log('Welcome email failed, but continuing with registration');
					onEmailSubmitted(data.email);
				}
			} else {
				// This shouldn't happen now since we return true on backend errors
				console.log('Email capture failed, but continuing with registration');
				setIsSubmitted(true);
				onEmailSubmitted(data.email);
			}
		} catch (error) {
			console.error('Error in email submission:', error);
			// Even if there's an error, allow registration to continue
			console.log('Error occurred, but allowing registration to continue');
			setIsSubmitted(true);
			onEmailSubmitted(data.email);
		} finally {
			setIsLoading(false);
		}
	};

	if (isSubmitted) {
		return (
			<div className="w-full">
				<div className="text-center py-6">
					<div className="bg-green-50 border border-green-200 rounded-lg p-6">
						<div className="text-5xl mb-4">📧</div>
						<h2 className="text-xl font-bold text-green-800 mb-3">
							Welcome Email Sent!
						</h2>
						<p className="text-green-700 mb-4 text-sm">
							We've sent a welcome email to your inbox with instructions to complete your registration.
						</p>
						<p className="text-xs text-green-600">
							Please check your email and follow the instructions to continue.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full">
			<div className="mb-10 flex items-start gap-3 md:pb-6 pb-3">
				<img src={Uln} className="w-[50px] h-5 mt-1" />
				<div className="space-y-2">
					<h2 className="md:text-[24px] text-[16px] leading-[19.5px] font-[600] md:leading-[29.26px] text-[#032642]">
						Get Started
					</h2>
					<p className="md:text-[20px] text-[12px] text-gray-700">
						Enter your email address to begin your registration process
					</p>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<div>
					<TextInput
						name="email"
						label="Email Address"
						placeholder="Enter your email address"
						control={control}
						type="email"
						required
					/>
				</div>

				<button
					type="submit"
					disabled={isLoading}
					className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
						isLoading
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-gradient-to-r from-[#032642] to-[#00159E] hover:from-[#00159E] hover:to-[#032642] text-white'
					}`}
				>
					{isLoading ? 'Sending...' : 'Continue Registration'}
				</button>

				<div className="text-center">
					<p className="text-sm text-[#606060]">
						By continuing, you agree to receive important updates about the summit
					</p>
				</div>
			</form>
		</div>
	);
}

export default EmailCapture;
