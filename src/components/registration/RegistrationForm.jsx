import { useEffect, useRef, useState, React } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../inputs/textinput";
import SelectInput from "../inputs/selectInput";

import RadioInput from "../inputs/CheckButton";
import AgreementCheckbox from "../inputs/Agreement";
import supabase from "../../../supabase";

import PaystackPop from "@paystack/inline-js";


import theme_up from "../../assets/theme_up.png";
import Uln from "../../assets/theme_underline.png";
import RegistrationModal from './RegistrationModal';


const dietaryPreferences = [
	{ label: "None", value: "none" },
	{ label: "Vegetarian", value: "vegetarian" },
	{ label: "Dietary Preferences", value: "dietary" },
	{ label: "Vegan", value: "vegan" },
	{ label: "Halal", value: "halal" },
	{ label: "Kosher", value: "kosher" },
	{ label: "Others", value: "others" },
];
const howyouHeardAboutUs = [
	{ label: "Email", value: "email" },
	{ label: "Social Media", value: "socialmedia" },
	{ label: "Website", value: "website" },
	{ label: "Referral", value: "referral" },
	{ label: "Others", value: "others" },
];
const priceOption = [
	{ label: "Nigeria", title: "₦500,000", value: "500000", currency: "NGN" },
	{ label: "Diaspora", value: "300", title: "$300", currency: "USD" },
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
	dietary_preference: z.string().optional(),
	how_you_heard_about_us: z.string().optional(),
	price_option: z.string().optional(),
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

	const { control, handleSubmit, formState, watch } = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			guest_names: [{ name: "" }],
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

	const paystack = new PaystackPop();
	const [discountDetails, setDiscountDetails] = useState(null);

	const [fileName, setFileName] = useState("");
	// const [discountError, setDiscountError] = useState("");

	const handleProfilePicChange = (e) => {
		setProfilePic(e.target.files[0]);
		const file = e.target.files[0];
		setFileName(file.name);
	};

	
	const discountInput = (watch("discount_code") || "").trim();
	const selectedPriceValue = watch("price_option");
	const originalPrice = selectedPriceValue ? Number(selectedPriceValue) : null;
	

	const sendRegistrationEmail = async (data, profilePicUrl, computedFinalPrice, currency) => {
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
			  dietary_preference: data.dietary_preference,
			  how_you_heard_about_us: data.how_you_heard_about_us,
			  guest_names: data.guest_names,
			  agreement: data.agreement,
			  paystack_reference: data.paystack_reference,
			  profile_picture: profilePicUrl,
			  price_option: computedFinalPrice.toString(),
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

	
	// Fetch discount details from Supabase when discountInput changes
	useEffect(() => {
		async function fetchDiscountDetails() {
		if (discountInput) {
			const { data: discountData, error } = await supabase
			.from("discount_codes")
			.select("*")
			.eq("code", discountInput)
			.maybeSingle();
			// Only consider the discount valid if usage is under the limit
			if (!error && discountData && discountData.usage_count < discountData.max_usage) {
			setDiscountDetails(discountData);
			} else {
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
			const computedFinalPrice = discountDetails ? 0 : finalPrice ;
			setFinalConputedPrice(computedFinalPrice);
	
		}, [originalPrice])
		
		// const displayPrice = finalPrice === 0 ? "Free" : `${currencySymbol}${finalPrice.toLocaleString()}`;
		const displayPrice = finalPrice === 0  || finalPrice === null ? "Free" : `${currencySymbol}${finalPrice}`;

		

	const onSubmit = async (data) => {
		console.log(data);
		setIsLoading(true)

		try {
			// Check if the email already exists in Supabase
			const { data: existingUser, error: fetchError } = await supabase
				.from("aacis")
				.select("email")
				.eq("email", data.email.trim().toLowerCase())
				.maybeSingle();

			
			if (fetchError) {
				console.error("Error checking existing email:", fetchError.message);
				alert("An error occurred while checking for duplicate registration. Please try again.");
				return;
			}

			if (existingUser) {
				alert("This email is already registered. Please use a different email.");
				return; // Stop execution to prevent duplicate registration
			}


			let profilePicUrl = "";
			if (profilePic) {
				const formData = new FormData();
				formData.append("file", profilePic);

				try {
					const url = import.meta.env.VITE_IMAGE_UPLOAD_URL;
					const response = await fetch(url, {
						method: "POST",
						body: formData,
					});
					const result = await response.json();
					if (result.status === "success") {
						profilePicUrl = result.file_path;
						console.log("Profile picture uploaded:", profilePicUrl);
					} else {
						alert("Profile picture upload failed: " + result.message);
						return;
					}
				} catch (error) {
					console.error("Error uploading profile picture:", error);
					alert("Error uploading profile picture");
					return;
				}
			}


			// const currency = data.price_option === "300" ? "USD" : "NGN";
			
			// Determine the original price based on selected option
			const selectedOption = priceOption.find((opt) => opt.value === data.price_option);
			// const origPrice = selectedOption ? Number(selectedOption.value) : 0;
			const origPrice = selectedOption ? Number(selectedOption.value) : null;
			const currency = selectedOption ? selectedOption.currency : "NGN";
			let discountPct = 0;
			const discountCodeInput = (data.discount_code || "").trim();

			// If a discount code is provided, verify it in Supabase (case sensitive)
			if (discountCodeInput) {
				const { data: discountData, error: discountError } = await supabase
				.from("discount_codes")
				.select("*")
				.eq("code", discountCodeInput)
				.maybeSingle();
				if (discountError || !discountData) {
				alert("Invalid discount code");
				return;
				}
				if (discountData.usage_count >= discountData.max_usage) {
				alert("Discount code usage limit reached");
				return;
				}

				discountPct = discountData.discount_percentage;
				// Update the discount code usage count
				const { error: updateError } = await supabase
				.from("discount_codes")
				.update({ usage_count: discountData.usage_count + 1 })
				.eq("code", discountCodeInput);
				if (updateError) {
				alert("Error updating discount code usage");
				return;
				}
			}
			
			// NOTE: ALL DISCOUNT CODE ARE ASSUMED TO BE 100% OFF 
			const computedFinalPrice = discountDetails ? 0 : origPrice ;
			// const computedFinalPrice = origPrice !== null ? origPrice - (origPrice * discountPct) / 100 : null;
			
			setFinalConputedPrice(computedFinalPrice);
			setSelectedCurrency(currency)

			// If the final price is 0, bypass payment
			if (computedFinalPrice === 0 || currency === "USD") {
				const { error } = await supabase.from("aacis").insert([
				{
					full_name: data.full_name,
					email: data.email.trim().toLowerCase(),
					contact_number: data.contact_number,
					job_title: data.job_title,
					company_name: data.company_name,
					website: data.website,
					country: data.country,
					is_accomodation_needed: data.is_accomodation_needed ? data.is_accomodation_needed : false,
					is_guest_coming: data.is_guest_coming ? data.is_guest_coming : false,
					dietary_preference: data.dietary_preference,
					how_you_heard_about_us: data.how_you_heard_about_us,
					price_option: computedFinalPrice === null ? 0 : computedFinalPrice.toString(),
					discount_percentage: discountPct, 
					guest_names: data.guest_names,
					discount_code: data.discount_code,
					agreement: data.agreement,
					profile_picture: profilePicUrl,
					currency: currency,
					payment_status: currency === 'USD' ? 'pending' : 'success',
				},
				]);
				if (error) {
				console.error("Error inserting data:", error.message);
				return;
				}

				
				await sendRegistrationEmail(data, profilePicUrl, computedFinalPrice, currency);
				if (currency === "USD") {
					// alert(
					//   "Thank you for your registration! Please email your payment receipt, as well as your full name as it appears on your registration form to aacis@aquarianconsult.com to receive a registration confirmation."
					// );
					await sendUserRegistrationEmail(data, computedFinalPrice, currency);
					// openModal()
					window.location.href = `/aacis/payment-successful?type=registration&amount=${computedFinalPrice}`;
				} else {
					window.location.href = "/aacis/payment-successful?type=payment";
				}
				return;
				// window.location.href = "/aacis/payment-successful";
				// console.log("Registration successful with discount code:", data.discount_code);
				// return;
				
			}

			try {
				paystack.newTransaction({
					key: import.meta.env.VITE_APP_PAYSTACK_KEY,
					amount: computedFinalPrice * 100,
					currency,
					email: data.email,
					fullName: data.full_name,
					// lastName: data.full_name.split(" ")[1],
					async onSuccess(transaction) {
						const { error } = await supabase
							.from("aacis") // Replace with your table name
							.insert([
								{
									full_name: data.full_name,
									email: data.email.trim().toLowerCase(),
									contact_number: data.contact_number,
									job_title: data.job_title,
									company_name: data.company_name,
									website: data.website,
									country: data.country,
									is_accomodation_needed:
										data.is_accomodation_needed ? data.is_accomodation_needed : false,
									is_guest_coming: data.is_guest_coming ? data.is_guest_coming : false,
									dietary_preference: data.dietary_preference,
									how_you_heard_about_us:
										data.how_you_heard_about_us,
									// price_option: data.price_option,
									guest_names: data.guest_names,
									agreement: data.agreement,
									paystack_reference: transaction.reference,
									profile_picture: profilePicUrl,
									price_option: computedFinalPrice.toString(),
									discount_percentage: discountPct,
									discount_code: data.discount_code,
									currency: currency,
									payment_status: 'success',
								},
							]);

						if (error) throw error;

						// Send email to adminx
						await sendRegistrationEmail(data, profilePicUrl, computedFinalPrice, currency);

						window.location.href = "/aacis/payment-successful";

						console.log("Data inserted successfully:", data);
					},
					onCancel() {
						alert("Canceled");
					},
				});
				// initializePayment(onSuccess, onClose)
			} catch (error) {
				console.error("Error inserting data:", error.message);
			}
		} catch (error) {
			console.error("Registration Error:", error);
		}finally {
			setIsLoading(false)
		}

	};

	
	

	return (
		<main className="bg-[url(/src/assets/theme_down.png)] bg-no-repeat bg-top bg-contain  bg-white">
			<div className="md:m-10 max-w-screen-xl w-full px-5 grid md:gap-10 gap-4 font-montserrat ">
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
										Meal Preferences
									</p>
									<p className="md:text-[20px] text-[12px] text-gray-700">
										Any Dietary Preferences?
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-4">
								{dietaryPreferences.map((preference) => (
									<RadioInput
										key={preference.value}
										label={preference.label}
										name="dietary_preference"
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
									/>
								))}
							</div>
							{selectedPriceOption?.currency === "USD" && (
							<div className="grid md:grid-cols-2 gap-4">
								<div className="w-full bg-[#E8F0FE] p-4 px-8 rounded-lg border-2">
									<h2 className="font-bold mb-2 font-montserrat text-xl">NOTICE!</h2>
									<p className="font-montserrat">Please note that the registration confirmation process is manual. After submitting your registration and payment, you will need to email your payment receipt along with your full name (as it appears on your registration form) to <span className="text-blue-500">aacis@aquarianconsult.com</span> to receive a confirmation.</p>
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
								: (selectedPriceOption?.currency === "USD" || finalConputedPrice === 0 || finalConputedPrice === null || displayPrice === 'Free')
								? "Register"
								: `Pay ${displayPrice}`}
						</button>
					</form>
				</div>
			</div>
			<img src={theme_up} />


			<RegistrationModal isOpen={isModalOpen} closeModal={closeModal} currency={selectedCurrency} amount={finalConputedPrice} />
		</main>
	);
}

export default RegistrationForm;
