import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	console.log('Header component rendering, location:', location.pathname);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
	};

	// Check if current page is AACIS related
	// Since basename is set to /aacis, all routes are already AACIS pages
	const isAACISPage = true; // Always show on AACIS pages since basename is set

	// If not on AACIS page, don't render the header
	if (!isAACISPage) {
		return null;
	}

	return (
		<>
			<header className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 bg-white shadow-md`}>
				<div className="w-full px-4 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link to="/" className="flex items-center" onClick={closeDropdown}>
							<img 
								src={logo} 
								alt="AACIS Logo" 
								className="h-8 w-auto md:h-10 lg:h-12 object-contain" 
							/>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center space-x-2">
							<Link 
								to="/" 
								className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Home
							</Link>
							<Link 
								to="/speaker-detail" 
								className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Speakers
							</Link>
							<Link 
								to="/agric-summit" 
								className="text-[#39663a] hover:text-[#39663a] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#39663a]/10 hover:scale-105 cursor-custom-navbar border border-[#39663a]/20"
								onClick={closeDropdown}
							>
								Agric Summit
							</Link>
							<Link 
								to="/health-summit" 
								className="text-[#a30907] hover:text-[#a30907] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#a30907]/10 hover:scale-105 cursor-custom-navbar border border-[#a30907]/20"
								onClick={closeDropdown}
							>
								Health Summit
							</Link>
							<Link 
								to="/visas" 
								className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Visa
							</Link>
							<Link 
								to="/register" 
								className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Registration
							</Link>
							<Link 
								to="/charter-flight" 
								className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Charter Flight
							</Link>
						<Link 
							to="/concierge" 
							className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
							onClick={closeDropdown}
						>
							Concierge
						</Link>
							<Link 
								to="/sponsors" 
								className="text-[#032642] hover:text-[#00159E] font-medium transition-all duration-300 text-sm whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#00159E]/5 hover:scale-105 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Sponsorship
							</Link>
							
							
							{/* CTA Button - Far Right */}
							<div className="ml-6">
								<Link 
									to="/register" 
									className="bg-gradient-to-r from-[#032642] to-[#00159E] text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 hover:opacity-90 transition-all duration-300 text-sm whitespace-nowrap cursor-custom-pointer shadow-lg"
									onClick={closeDropdown}
								>
									REGISTER NOW
								</Link>
							</div>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={toggleDropdown}
							className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
							aria-label="Toggle menu"
						>
							<svg
								className={`w-6 h-6 text-[#032642] transition-transform duration-200 ${
									isDropdownOpen ? 'rotate-90' : ''
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{isDropdownOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>

					{/* Mobile Dropdown Menu */}
					{isDropdownOpen && (
						<div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
							<div className="py-4 space-y-2">
								<Link 
									to="/" 
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Home
								</Link>
								<Link 
									to="/speaker-detail" 
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Speakers
								</Link>
								<Link 
									to="/agric-summit" 
									className="block px-4 py-3 text-[#39663a] hover:text-[#39663a] hover:bg-[#39663a]/10 font-medium transition-all duration-300 cursor-custom-navbar border-l-4 border-[#39663a]/20 pl-3"
									onClick={closeDropdown}
								>
									Agric Summit
								</Link>
								<Link 
									to="/health-summit" 
									className="block px-4 py-3 text-[#a30907] hover:text-[#a30907] hover:bg-[#a30907]/10 font-medium transition-all duration-300 cursor-custom-navbar border-l-4 border-[#a30907]/20 pl-3"
									onClick={closeDropdown}
								>
									Health Summit
								</Link>
								<Link 
									to="/visas" 
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Visa
								</Link>
								<Link 
									to="/register" 
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Registration
								</Link>
								<Link 
									to="/charter-flight" 
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Charter Flight
								</Link>
							<Link 
								to="/concierge" 
								className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
								onClick={closeDropdown}
							>
								Concierge
							</Link>
								<Link 
									to="/sponsors" 
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Sponsorship
								</Link>
								<a 
									href="/AACIS26_brochure.pdf" 
									target="_blank" 
									rel="noopener noreferrer"
									className="block px-4 py-3 text-[#032642] hover:text-[#00159E] hover:bg-[#00159E]/5 font-medium transition-all duration-300 cursor-custom-navbar"
									onClick={closeDropdown}
								>
									Brochure
								</a>
							</div>
						</div>
					)}
				</div>
			</header>

			{/* Spacer to prevent content from being hidden behind fixed header */}
			<div className="h-20 w-full" />
		</>
	);
}

export default Header;
