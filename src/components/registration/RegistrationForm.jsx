import { useEffect, useRef, useState, React } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../inputs/textinput";
import SelectInput from "../inputs/selectInput";

import RadioInput from "../inputs/CheckButton";
import AgreementCheckbox from "../inputs/Agreement";
// API base URL for PHP backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
console.log('API_BASE_URL loaded:', API_BASE_URL); // Debug log

import theme_up from "../../assets/theme_up.png";
import Uln from "../../assets/theme_underline.png";
import RegistrationModal from './RegistrationModal';
import FlutterwavePayment from './FlutterwavePayment';
import EmailCapture from './EmailCapture';


const summitAttendance = [
	{ label: "Yes", value: "Yes" },
	{ label: "No", value: "No" },
	
];
const conciergeServices = [
	{ label: "Yes", value: "Yes" },
	{ label: "No", value: "No" },
];
const howyouHeardAboutUs = [
	{ label: "Email", value: "email" },
	{ label: "Social Media", value: "socialmedia" },
	{ label: "Website", value: "website" },
	{ label: "Referral", value: "referral" },
	{ label: "Others", value: "others" },
];
const priceOption = [
	{ 
		label: "Nigeria", 
		title: "₦500,000", 
		value: "500000", 
		currency: "NGN",
		earlyBirdPrice: "₦500,000",
		installmentPlans: {
			"plan1": {
				name: "NGN Plan I",
				installments: [
					{ amount: 300000, label: "₦300,000" },
					{ amount: 200000, label: "₦200,000" }
				]
			},
			"plan2": {
				name: "NGN Plan II", 
				installments: [
					{ amount: 300000, label: "₦300,000" },
					{ amount: 200000, label: "₦200,000" },
					{ amount: 100000, label: "₦100,000" }
				]
			}
		}
	},
	{ 
		label: "Diaspora", 
		value: "300", 
		title: "$300", 
		currency: "USD",
		earlyBirdPrice: "$300",
		installmentPlans: {
			"plan1": {
				name: "USD Plan I",
				installments: [
					{ amount: 200, label: "$200" },
					{ amount: 150, label: "$150" }
				]
			},
			"plan2": {
				name: "USD Plan II",
				installments: [
					{ amount: 150, label: "$150" },
					{ amount: 100, label: "$100" },
					{ amount: 100, label: "$100" }
				]
			}
		}
	},
];

const schema = z.object({
	full_name: z.string().min(1, "Full name is required"),
	email: z
		.string()
		.email("Invalid email address")
		.min(1, "Email is required"),
	contact_number: z.string().min(1, "Contact number is required"),
	job_title: z.string().min(1, "Job title is required"),
	company_name: z.string().min(1, "Company/Organization name is required"),
	website: z.string().optional(),
	// country: z.string().min(1, "Country is required"),
	is_accomodation_needed: z.union([z.boolean(), z.string()]).optional(),
	is_guest_coming: z.union([z.boolean(), z.string()]).optional(),
	summit_attendance: z.string().optional(),
	concierge_services: z.string().optional(),
	how_you_heard_about_us: z.string().optional(),
	price_option: z.string().optional(),
	payment_type: z.string().optional(),
	installment_plan: z.string().optional(),
	installment_number: z.number().optional(),
	guest_names: z
		.array(
			z.object({
				name: z.string(),
			})
		)
		.optional(),
	discount_code: z.string().optional(),
	agreement: z.boolean().refine((val) => val === true, {
		message: "You must accept the terms and conditions",
	}),
});

function RegistrationForm() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showFlutterwavePayment, setShowFlutterwavePayment] = useState(false);
	const [paymentData, setPaymentData] = useState(null);
	const [paymentType, setPaymentType] = useState('full'); // 'full' or 'installment'
	const [selectedInstallmentPlan, setSelectedInstallmentPlan] = useState('plan1'); // 'plan1' or 'plan2'
	const [selectedInstallment, setSelectedInstallment] = useState(0);
	const [showEmailCapture, setShowEmailCapture] = useState(false);
	const [capturedEmail, setCapturedEmail] = useState('');
	const [hasScrolled, setHasScrolled] = useState(false);

	// Handle email capture completion
	const handleEmailCaptured = (email) => {
		setCapturedEmail(email);
		setShowEmailCapture(false);
		// Pre-fill the email field
		setValue('email', email);
	};

	// Scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			// Show email capture after scrolling 300px
			if (scrollTop > 300 && !hasScrolled && !capturedEmail) {
				setHasScrolled(true);
				setShowEmailCapture(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [hasScrolled, capturedEmail]);

	const { control, handleSubmit, formState, watch, setValue } = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			guest_names: [{ name: "" }],
			email: capturedEmail || "",
		},
	});

	
	const openModal = () => {
		setIsModalOpen(true);
	};
	
	const closeModal = () => {
	setIsModalOpen(false);
	};

	const { fields, append, remove } = useFieldArray({
		control,
		name: "guest_names",
	});

	const [guestRef, setGuestRef] = useState('');
	const [profilePic, setProfilePic] = useState(null);
	const [finalConputedPrice, setFinalConputedPrice] = useState();
	const [selectedCurrency, setSelectedCurrency] = useState();

	const [discountDetails, setDiscountDetails] = useState(null);

	const [fileName, setFileName] = useState("");
	// const [discountError, setDiscountError] = useState("");

	// Function to capture lead when email is entered
	const captureLead = async (email, source = 'email_entry') => {
		try {
			// Basic email validation
			if (!email || !email.includes('@') || email.length < 5) {
				return; // Don't capture invalid emails
			}
			
			const formData = new FormData();
			formData.append('email', email);
			formData.append('source', source);
			
			const response = await fetch(`${API_BASE_URL}/leads`, {
				method: 'POST',
				body: formData
			});
			
			if (response.ok) {
				console.log('Lead captured successfully for email:', email);
			} else {
				console.error('Failed to capture lead');
			}
		} catch (error) {
			console.error('Error capturing lead:', error);
		}
	};

	// Function to capture lead when form is submitted (before payment)
	const captureFormSubmission = async (data) => {
		try {
			const formData = new FormData();
			formData.append('full_name', data.full_name);
			formData.append('email', data.email.trim().toLowerCase());
			formData.append('contact_number', data.contact_number);
			formData.append('job_title', data.job_title);
			formData.append('company_name', data.company_name);
			formData.append('website', data.website || '');
			formData.append('country', data.country || '');
			formData.append('is_accomodation_needed', data.is_accomodation_needed ? 'true' : 'false');
			formData.append('is_guest_coming', data.is_guest_coming ? 'true' : 'false');
			formData.append('concierge_services', data.concierge_services || '');
			formData.append('payment_type', paymentType);
			formData.append('installment_plan', selectedInstallmentPlan);
			formData.append('installment_number', selectedInstallment);
			formData.append('summit_attendance', data.summit_attendance || '');
			formData.append('how_you_heard_about_us', data.how_you_heard_about_us || '');
			formData.append('price_option', data.price_option || '');
			formData.append('discount_code', data.discount_code || '');
			// Validate and clean guest names before sending
			const cleanGuestNames = (data.guest_names || []).filter(guest => 
				guest && guest.name && guest.name.trim().length > 0
			);
			formData.append('guest_names', JSON.stringify(cleanGuestNames));
			formData.append('agreement', data.agreement ? 'true' : 'false');
			formData.append('currency', selectedCurrency || 'NGN');
			formData.append('source', 'form_submission');
			
			// Add profile picture if exists
			if (profilePic) {
				// Validate file type and size
				if (profilePic.size > 5 * 1024 * 1024) { // 5MB limit
					console.error('Profile picture too large');
					return;
				}
				if (!profilePic.type.startsWith('image/')) {
					console.error('Invalid file type');
					return;
				}
				formData.append('profile_picture', profilePic);
			}

			const response = await fetch(`${API_BASE_URL}/leads`, {
				method: 'POST',
				body: formData
			});
			
			if (response.ok) {
				console.log('Form submission captured as lead');
			} else {
				console.error('Failed to capture form submission as lead');
			}
		} catch (error) {
			console.error('Error capturing form submission:', error);
		}
	};

	const handleProfilePicChange = (e) => {
		const file = e.target.files[0];
		console.log('File selected:', file); // Debug log
		setProfilePic(file);
		setFileName(file.name);
	};

	
	const discountInput = (watch("discount_code") || "").trim();
	const selectedPriceValue = watch("price_option");
	const originalPrice = selectedPriceValue ? Number(selectedPriceValue) : null;
	

	const sendRegistrationEmail = async (data, profilePicUrl, computedFinalPrice, currency, paymentResponse = null) => {
		try {
		  const backendUrl = import.meta.env.VITE_BACKEND_URL;
		  const response = await fetch(`${backendUrl}/send-email`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			  email: data.email,
			  full_name: data.full_name,
			  contact_number: data.contact_number,
			  job_title: data.job_title,
			  company_name: data.company_name,
			  website: data.website,
			  country: data.country,
			  is_accomodation_needed: data.is_accomodation_needed,
			  is_guest_coming: data.is_guest_coming,
			  summit_attendance: data.summit_attendance,
			  concierge_services: data.concierge_services,
			  how_you_heard_about_us: data.how_you_heard_about_us,
			  guest_names: data.guest_names,
			  agreement: data.agreement,
			  paystack_reference: paymentResponse ? (paymentResponse.transaction_id || paymentResponse.tx_ref) : '',
			  profile_picture: profilePicUrl,
			  price_option: computedFinalPrice.toString(),
			  payment_type: data.payment_type,
			  installment_plan: data.installment_plan,
			  installment_number: data.installment_number,
			  discount_code: data.discount_code,
			  currency: currency
			}),
		  });
		  const responseData = await response.json();
		  console.log("Email Response:", responseData);
	  
		  if (response.ok) {
			console.log("Email sent successfully.");
		  } else {
			console.error("Failed to send email");
		  }
		} catch (error) {
		  console.error("Error sending email:", error);
		}
	  }


	  const sendUserRegistrationEmail = async (data, computedFinalPrice, currency) => {
		try {
		  const backendUrl = import.meta.env.VITE_BACKEND_URL;
		  const response = await fetch(`${backendUrl}/send-user-email`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			  email: data.email,
			  full_name: data.full_name,
			  price_option: computedFinalPrice.toString(),
			  currency: currency
			}),
		  });
		  const responseData = await response.json();
		  console.log("Email Response:", responseData);
	  
		  if (response.ok) {
			console.log("Email sent successfully.");
		  } else {
			console.error("Failed to send email");
		  }
		} catch (error) {
		  console.error("Error sending email:", error);
		}
	  }

	
	// Fetch discount details from PHP API when discountInput changes
	useEffect(() => {
		async function fetchDiscountDetails() {
		if (discountInput) {
			try {
				const response = await fetch(`${API_BASE_URL}/discounts/${discountInput}`);
				if (response.ok) {
					const discountData = await response.json();
					// Only consider the discount valid if usage is under the limit
					if (discountData && discountData.usage_count < discountData.max_usage) {
						setDiscountDetails(discountData);
					} else {
						setDiscountDetails(null);
					}
				} else {
					setDiscountDetails(null);
				}
			} catch (error) {
				console.error('Error fetching discount:', error);
				setDiscountDetails(null);
			}
		} else {
			setDiscountDetails(null);
		}
		}
		fetchDiscountDetails();
	}, [discountInput]);

	  // Compute discount percentage (from DB if available) and final price
	  const discountPercentage = discountDetails ? discountDetails?.discount_percentage : 0;
	//   const finalPrice = originalPrice ? originalPrice - (originalPrice * discountPercentage) / 100 : null;
	  const finalPrice = discountInput ? 0 : originalPrice ;
	  const selectedPriceOption = priceOption.find((opt) => opt.value === selectedPriceValue);
	  const currencySymbol = selectedPriceOption
		? selectedPriceOption.currency === "NGN"
		  ? "₦"
		  : "$"
		: "";

		useEffect(() => {
			let computedFinalPrice = discountDetails ? 0 : finalPrice;
			
			// Handle installment payments
			if (paymentType === 'installment' && selectedPriceOption?.installmentPlans && selectedInstallmentPlan && selectedInstallment >= 0) {
				const currentPlan = selectedPriceOption.installmentPlans[selectedInstallmentPlan];
				const installmentAmount = currentPlan?.installments[selectedInstallment]?.amount;
				if (installmentAmount) {
					computedFinalPrice = discountDetails ? 0 : installmentAmount;
				}
			}
			
			setFinalConputedPrice(computedFinalPrice);
	
		}, [originalPrice, discountDetails, finalPrice, paymentType, selectedInstallmentPlan, selectedInstallment, selectedPriceOption])
		
		// Calculate display price based on payment type
		let displayPrice;
		if (finalPrice === 0 || finalPrice === null) {
			displayPrice = "Free";
		} else if (paymentType === 'installment' && selectedPriceOption?.installmentPlans && selectedInstallmentPlan && selectedInstallment >= 0) {
			const currentPlan = selectedPriceOption.installmentPlans[selectedInstallmentPlan];
			const installmentAmount = currentPlan?.installments[selectedInstallment]?.amount;
			displayPrice = installmentAmount ? `${currencySymbol}${installmentAmount.toLocaleString()}` : `${currencySymbol}${finalPrice}`;
		} else {
			displayPrice = `${currencySymbol}${finalPrice}`;
		}

	// Flutterwave payment handlers
	const handlePaymentSuccess = async (response) => {
		try {
			const data = paymentData;
			const computedFinalPrice = finalConputedPrice;
			const currency = selectedCurrency;
			
			// Convert lead to registration instead of creating new one
			const formData = new FormData();
			formData.append('action', 'convert');
			formData.append('email', data.email.trim().toLowerCase());
			formData.append('price_option', computedFinalPrice.toString());
			formData.append('discount_percentage', discountDetails ? 100 : 0);
			formData.append('flutterwave_reference', response.transaction_id || response.tx_ref);
			formData.append('currency', currency);

			const convertResponse = await fetch(`${API_BASE_URL}/leads`, {
				method: 'POST',
				body: formData
			});

			if (convertResponse.ok) {
				// Send email to admin
				await sendRegistrationEmail(data, '', computedFinalPrice, currency, response);
				window.location.href = "/aacis/payment-successful";
				console.log("Lead converted to registration successfully:", data);
			} else {
				const errorData = await convertResponse.json();
				alert(errorData.error || 'Registration failed');
			}
		} catch (error) {
			console.error('Registration error:', error);
			alert('Registration failed. Please try again.');
		}
	};

	const handlePaymentError = (error) => {
		console.error('Payment error:', error);
		alert('Payment failed. Please try again.');
		setShowFlutterwavePayment(false);
		setIsLoading(false);
	};

	const handlePaymentClose = () => {
		setShowFlutterwavePayment(false);
		setIsLoading(false);
	};

	const onSubmit = async (data) => {
		console.log(data);
		setIsLoading(true)

		try {
			// Capture form submission as lead immediately
			try {
				await captureFormSubmission(data);
			} catch (leadError) {
				console.error('Lead capture failed, but continuing with registration:', leadError);
				// Continue with registration even if lead capture fails
			}

			// Check if the email already exists in PHP API
			const checkResponse = await fetch(`${API_BASE_URL}/registrations`);
			if (checkResponse.ok) {
				const existingRegistrations = await checkResponse.json();
				const existingUser = existingRegistrations.find(
					reg => reg.email === data.email.trim().toLowerCase()
				);

				if (existingUser) {
					alert("This email is already registered. Please use a different email.");
					setIsLoading(false);
					return; // Stop execution to prevent duplicate registration
				}
			}


			// Profile picture will be handled by PHP API directly
			// No need for separate upload - it will be included in the form submission


			// Determine the original price based on selected option
			const selectedOption = priceOption.find((opt) => opt.value === data.price_option);
			const origPrice = selectedOption ? Number(selectedOption.value) : null;
			const currency = selectedOption ? selectedOption.currency : "NGN";
			const discountCodeInput = (data.discount_code || "").trim();

			// Discount code validation will be handled by PHP API
			// No need to validate here - the API will handle it
			
			// Calculate final price based on payment type
			let computedFinalPrice = discountDetails ? 0 : origPrice;
			if (paymentType === 'installment' && selectedOption?.installmentPlans && selectedInstallmentPlan && selectedInstallment >= 0) {
				const currentPlan = selectedOption.installmentPlans[selectedInstallmentPlan];
				const installmentAmount = currentPlan?.installments[selectedInstallment]?.amount;
				if (installmentAmount) {
					computedFinalPrice = discountDetails ? 0 : installmentAmount;
				}
			}
			
			setFinalConputedPrice(computedFinalPrice);
			setSelectedCurrency(currency)

			// If the final price is 0, bypass payment
			if (computedFinalPrice === 0) {
				// Convert lead to registration for free registrations
				const formData = new FormData();
				formData.append('action', 'convert');
				formData.append('email', data.email.trim().toLowerCase());
				formData.append('price_option', computedFinalPrice === null ? 0 : computedFinalPrice.toString());
				formData.append('discount_percentage', 100);
				formData.append('currency', currency);

				try {
					const convertResponse = await fetch(`${API_BASE_URL}/leads`, {
						method: 'POST',
						body: formData
					});

					if (convertResponse.ok) {
						const result = await convertResponse.json();
						console.log('Free registration successful:', result);
						
						await sendRegistrationEmail(data, '', computedFinalPrice, currency, null);
						window.location.href = "/aacis/payment-successful?type=payment";
					} else {
						const errorData = await convertResponse.json();
						alert(errorData.error || 'Registration failed');
					}
				} catch (error) {
					console.error('Registration error:', error);
					alert('Registration failed. Please try again.');
				}
				return;
			}

			// Set payment data and show Flutterwave payment modal
			setPaymentData(data);
			setShowFlutterwavePayment(true);
		} catch (error) {
			console.error("Registration Error:", error);
		}finally {
			setIsLoading(false)
		}

	};

	
	


	return (
		<main className="bg-[url(/src/assets/theme_down.png)] bg-no-repeat bg-top bg-contain  bg-white">
			{/* Email Capture Popup */}
			{showEmailCapture && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-all duration-300">
					<div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-4">
						<EmailCapture onEmailSubmitted={handleEmailCaptured} />
					</div>
				</div>
			)}
			
			<div className={`md:m-10 max-w-screen-xl w-full px-5 grid md:gap-10 gap-4 font-montserrat transition-all duration-300 ${showEmailCapture ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
				<div>
					<form onSubmit={handleSubmit(onSubmit)} className="">

						<div className="space-y-4 md:mt-12 mt-10">
							<div className="mb-10 flex items-center gap-3 md:pb-6 pb-3">
								<img src={Uln} className="w-[50px] h-5" />
								<p className="md:text-[24px] text-[16px] leading-[19.5px] font-[600] md:leading-[29.26px] ">
									Personal Information
								</p>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<TextInput
									label="Full Name"
									name="full_name"
									control={control}
								// placeholder="Enter your name"
								/>
								<TextInput
									label="Email Address"
									name="email"
									control={control}
									onChange={(e) => {
										const email = e.target.value.trim();
										if (email && email.includes('@')) {
											// Capture lead when email is entered
											captureLead(email, 'email_entry');
										}
									}}
								// placeholder="Enter your email address"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<TextInput
									label="Contact Number"
									name="contact_number"
									control={control}
								// placeholder="Enter your name"
								/>
								<TextInput
									label="Job Title"
									name="job_title"
									control={control}
								// placeholder="Enter your name"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<TextInput
									label="Company/Organization Name"
									name="company_name"
									control={control}
								// placeholder="Enter your name"
								/>
								<TextInput
									label="Company Website(if Applicable)"
									name="website"
									control={control}
								// placeholder="Enter your name"
								/>
							</div>

							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div className="flex-1">
									<p className="md:text-[20px] text-[18px] text-gray-700">
									Upload your Passport photo
									</p>
									<div className="relative w-full">
										<div className="items-center justify-center">
										<label
											htmlFor="input"
											className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
											id="drop"
										>
											<span className="flex items-center space-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 text-gray-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
												/>
											</svg>
											<span className="font-medium text-gray-600">
												Drop files to Attach, or
												<span className="text-blue-600 underline ml-[4px]"> browse</span>
												
												{fileName && (
													<p className="mt-2 text-sm text-gray-600 text-center">
													Uploaded file: <span className="font-semibold">{fileName}</span>
													</p>
												)}
											</span>
											</span>
											
											<input
											type="file"
											name="file_upload"
											accept="image/png, image/jpeg"
											id="input"
											className="hidden"
											onChange={handleProfilePicChange}
											/>
										</label>
										</div>
									</div>
								</div>
							</div>



							{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div className="mb-6">
									<label className="block text-lg font-medium mb-2">Picture</label>
									<label className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
									Upload Picture
									<input
										type="file"
										accept="image/*"
										onChange={handleProfilePicChange}
										className="hidden"
									/>
									</label>
								</div>
								</div> */}

							
						</div>
						
						<div className="space-y-4 md:mt-12 mt-10">
							<div className="mb-10 flex items-start gap-3 md:pb-6 pb-3">
								<img src={Uln} className="w-[50px] h-5" />
								<div className="space-y-2">
									<p className="md:text-[24px] text-[16px] leading-[19.5px] font-[600]">
										Agric Summit Attendance
									</p>
									<p className="md:text-[20px] text-[12px] text-gray-700">
										R.S.V.P. for the Agric Summit
										<br>
										</br>(limited slots available)
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-4">
								{summitAttendance.map((preference) => (
									<RadioInput
										key={preference.value}
										label={preference.label}
										name="summit_attendance"
										control={control}
										value={preference.value}
									/>
								))}
							</div>
						</div>
						
						<div className="space-y-4 md:mt-12 mt-10">
							<div className="mb-10 flex items-start gap-3 md:pb-6 pb-3">
								<img src={Uln} className="w-[50px] h-5" />
								<div className="space-y-2">
									<p className="md:text-[24px] text-[16px] leading-[19.5px] font-[600]">
										Concierge Services
									</p>
									<p className="md:text-[20px] text-[12px] text-gray-700">
										Would you like assistance with travel, accommodation, and local arrangements?
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-4">
								{conciergeServices.map((preference) => (
									<RadioInput
										key={preference.value}
										label={preference.label}
										name="concierge_services"
										control={control}
										value={preference.value}
									/>
								))}
							</div>
						</div>
						
						<div className="space-y-4 md:mt-12 mt-10">
							<div className="mb-10 flex items-start gap-3 md:pb-6 pb-3">
								<img src={Uln} className="w-[50px] h-5" />
								<div className="space-y-2">
									<p className="md:text-[24px] text-[16px] leading-[19.5px] font-[600]">
										Additional Information
									</p>
									<p className="md:text-[20px] text-[12px] text-gray-700">
										How did you hear about us?
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-4">
								{howyouHeardAboutUs.map((preference) => (
									<RadioInput
										key={preference.value}
										label={preference.label}
										name="how_you_heard_about_us"
										control={control}
										value={preference.value}
									/>
								))}
							</div>
						</div>
						<div className="space-y-4 md:mt-12 mt-10">
							<div className="mb-10 flex items-start gap-3 md:pb-6 pb-3">
								<img src={Uln} className="w-[50px] h-5" />
								<div className="space-y-2">
									<p className="md:text-[24px] text-[16px] leading-[19.5px] font-[600]">
										Price Options
									</p>
									<p className="md:text-[20px] text-[12px] text-gray-700">
										Select your preferred location to make
										payment.
									</p>
									<p className="md:text-[18px] text-[12px] text-blue-700">
										If you require a discount, please call +2347074786618. <br /> (Terms and conditions apply.)
									</p>
								</div>
							</div>




							<div className="grid md:grid-cols-4 gap-4">
								{priceOption.map((price) => (
									<RadioInput
										key={price.value}
										label={price.label}
										title={price.title}
										name="price_option"
										control={control}
										value={price.value}
										earlyBirdPrice={price.earlyBirdPrice}
									/>
								))}
							</div>

							{/* Payment Type Selection */}
							{selectedPriceValue && (
								<div className="mt-8">
									<div className="mb-6">
										<h3 className="text-[20px] font-montserrat font-[600] text-[#032642] mb-4">
											Payment Options
										</h3>
										<p className="text-[16px] text-[#606060] mb-4">
											Choose how you'd like to pay for your registration
										</p>
									</div>
									
									<div className="grid md:grid-cols-2 gap-6">
										{/* Full Payment Option */}
										<div 
											className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
												paymentType === 'full' 
													? 'border-[#00159E] bg-[#00159E]/5' 
													: 'border-gray-200 hover:border-[#00159E]/50'
											}`}
											onClick={() => {
												setPaymentType('full');
												setSelectedInstallment(0);
											}}
										>
											<div className="flex items-center mb-3">
												<input 
													type="radio" 
													name="payment_type" 
													value="full"
													checked={paymentType === 'full'}
													onChange={() => setPaymentType('full')}
													className="mr-3"
												/>
												<h4 className="text-[18px] font-montserrat font-[600] text-[#032642]">
													Pay in Full
												</h4>
											</div>
											<p className="text-[24px] font-bold text-[#00159E] mb-2">
												{selectedPriceOption?.currency === 'NGN' ? '₦' : '$'}{selectedPriceOption?.value}
											</p>
											<p className="text-[14px] text-[#606060]">
												Complete your registration with a single payment
											</p>
										</div>

										{/* Installment Payment Option */}
										<div 
											className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
												paymentType === 'installment' 
													? 'border-[#00159E] bg-[#00159E]/5' 
													: 'border-gray-200 hover:border-[#00159E]/50'
											}`}
											onClick={() => setPaymentType('installment')}
										>
											<div className="flex items-center mb-3">
												<input 
													type="radio" 
													name="payment_type" 
													value="installment"
													checked={paymentType === 'installment'}
													onChange={() => setPaymentType('installment')}
													className="mr-3"
												/>
												<h4 className="text-[18px] font-montserrat font-[600] text-[#032642]">
													Pay in Installments (Pay Small Small)
												</h4>
											</div>
											<p className="text-[16px] font-semibold text-[#00159E] mb-2">
												2 Installment Plans Available
											</p>
											<p className="text-[14px] text-[#606060]">
												Spread your payment across 3 convenient installments
											</p>
										</div>
									</div>

									{/* Installment Details */}
									{paymentType === 'installment' && selectedPriceOption?.installmentPlans && (
										<div className="mt-6 space-y-6">
											{/* Installment Plan Selection */}
											<div className="p-6 bg-[#F8F9FA] rounded-lg">
												<h4 className="text-[18px] font-montserrat font-[600] text-[#032642] mb-4">
													Choose Your Installment Plan
												</h4>
												<div className="grid md:grid-cols-2 gap-4">
													{Object.entries(selectedPriceOption.installmentPlans).map(([planKey, plan]) => (
														<div 
															key={planKey}
															className={`p-4 rounded-lg border cursor-pointer transition-all ${
																selectedInstallmentPlan === planKey 
																	? 'border-[#00159E] bg-white shadow-md' 
																	: 'border-gray-200 bg-white hover:border-[#00159E]/50'
															}`}
															onClick={() => {
																setSelectedInstallmentPlan(planKey);
																setSelectedInstallment(0);
															}}
														>
															<div className="flex items-center mb-3">
																<input 
																	type="radio" 
																	name="installment_plan" 
																	value={planKey}
																	checked={selectedInstallmentPlan === planKey}
																	onChange={() => {
																		setSelectedInstallmentPlan(planKey);
																		setSelectedInstallment(0);
																	}}
																	className="mr-3"
																/>
																<span className="text-[16px] font-semibold text-[#032642]">
																	{plan.name}
																</span>
															</div>
															<div className="text-sm text-[#606060]">
																{plan.installments.length} payment{plan.installments.length > 1 ? 's' : ''}
															</div>
														</div>
													))}
												</div>
											</div>

											{/* Installment Selection */}
											{selectedInstallmentPlan && (
												<div className="p-6 bg-[#F8F9FA] rounded-lg">
													<h4 className="text-[18px] font-montserrat font-[600] text-[#032642] mb-4">
														Select Payment Installment
													</h4>
													<div className="grid gap-4">
														{selectedPriceOption.installmentPlans[selectedInstallmentPlan]?.installments.map((installment, index) => (
															<div 
																key={index}
																className={`p-4 rounded-lg border cursor-pointer transition-all ${
																	selectedInstallment === index 
																		? 'border-[#00159E] bg-white shadow-md' 
																		: 'border-gray-200 bg-white hover:border-[#00159E]/50'
																}`}
																onClick={() => setSelectedInstallment(index)}
															>
																<div className="flex items-center justify-between">
																	<div className="flex items-center">
																		<input 
																			type="radio" 
																			name="installment_number" 
																			value={index}
																			checked={selectedInstallment === index}
																			onChange={() => setSelectedInstallment(index)}
																			className="mr-3"
																		/>
																		<span className="text-[16px] font-semibold text-[#032642]">
																			Installment {index + 1}
																		</span>
																	</div>
																	<p className="text-[20px] font-bold text-[#00159E]">
																		{installment.label}
																	</p>
																</div>
															</div>
														))}
													</div>
													<div className="mt-4 p-4 bg-[#00159E]/10 rounded-lg">
														<p className="text-[14px] text-[#032642] font-semibold">
															Terms: Registration is complete upon full payment
														</p>
														<p className="text-[12px] text-[#606060] mt-1">
															You can make additional payments at any time to complete your registration
														</p>
													</div>
												</div>
											)}
										</div>
									)}
								</div>
							)}
							{selectedPriceOption?.currency === "USD" && (
							<div className="grid md:grid-cols-2 gap-4">
								<div className="w-full bg-[#E8F0FE] p-4 px-8 rounded-lg border-2">
									<h2 className="font-bold mb-2 font-montserrat text-xl">PAYMENT SUPPORT</h2>
									<p className="font-montserrat">If you encounter any issues with your payment or need assistance with the payment process, please email us at <span className="text-blue-500">aacis@aquarianconsult.com</span> with your payment receipt and full name (as it appears on your registration form) attached. Our team will assist you promptly.</p>
								</div>
							</div>
							)}
							<div className="grid md:grid-cols-4 gap-4 pt-8">
								<div className="">
									<TextInput
										label="Discount Code (optional)"
										name="discount_code"
										control={control}
									/>
								</div>
							</div>
						</div>
						<div className="md:mt-20 mt-12">
							<p className="md:text-[24px] text-[16px] leading-[19.5px] font-[600] md:leading-[29.26px] ">
								Terms and Conditions
							</p>
							<AgreementCheckbox control={control} />
						</div>

						<button className={`flex self-center md:mt-20 mt-10 md:px-[40px] px-[20px] md:py-[20px] py-[12px] ${finalConputedPrice === null || isLoading ? 'bg-gray-400' : 'bg-blue-600  hover:bg-blue-800 bg-[linear-gradient(360deg,_#032642_23.7%,_#00159E_100%)]'} text-white font-[700] rounded-[100px] md:text-[28px] text-[16px] leading-[24px]`} disabled={finalConputedPrice === null || isLoading}>
							{formState?.isSubmitting
								? "Submitting"
								: (finalConputedPrice === 0 || finalConputedPrice === null || displayPrice === 'Free')
								? "Register"
								: paymentType === 'installment' 
									? `Pay ${displayPrice} (Installment ${selectedInstallment + 1})`
									: `Pay ${displayPrice}`}
						</button>
					</form>
				</div>
			</div>
			<img src={theme_up} />


			<RegistrationModal isOpen={isModalOpen} closeModal={closeModal} currency={selectedCurrency} amount={finalConputedPrice} />
			
			{/* Flutterwave Payment Modal */}
			{showFlutterwavePayment && paymentData && (
				<FlutterwavePayment
					amount={finalConputedPrice}
					email={paymentData.email}
					phone={paymentData.contact_number}
					name={paymentData.full_name}
					reference={`AACIS_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`}
					currency={selectedCurrency}
					onSuccess={handlePaymentSuccess}
					onClose={handlePaymentClose}
					onError={handlePaymentError}
				/>
			)}
		</main>
	);
}

export default RegistrationForm;
