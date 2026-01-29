import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import theme_up from '../assets/theme_up.png';
import theme_down from '../assets/theme_down.png';

const Concierge = () => {
    const hotels = [
        {
            name: 'Belanova Apartments and Suites',
            description: 'Luxury apartments with modern amenities and exceptional service',
            rooms: [
                { type: 'One Bedroom Deluxe', rate: '₦270,000' },
                { type: 'Bedroom Executive', rate: '₦305,000' },
                { type: 'Two Bedroom Executive', rate: '₦390,000' },
                { type: 'Bedroom Royale', rate: '₦460,000' }
            ],
            featured: true
        },
        {
            name: 'PROSBEL HOTEL',
            description: 'Contemporary hotel offering comfort and convenience',
            rooms: [
                { type: 'Deluxe Rooms', rate: '₦105,000' },
                { type: 'Executive Rooms', rate: '₦120,000' },
                { type: 'Grand Suite', rate: '₦180,000' },
                { type: 'Luxury Suite', rate: '₦200,000' }
            ],
            featured: true
        },
        {
            name: 'WELLS CARLTON HOTEL',
            description: 'Premium accommodation with world-class facilities',
            rooms: [
                { type: 'Standard Room', rate: 'Contact for rates' },
                { type: 'Deluxe Room', rate: 'Contact for rates' },
                { type: 'Apartment Room', rate: 'Contact for rates' },
                { type: 'Junior Suite', rate: 'Contact for rates' },
                { type: 'Executive Suite', rate: 'Contact for rates' }
            ],
            featured: false
        },
        {
            name: 'FOUR PALMS RESIDENCE',
            description: 'Elegant residence with diverse accommodation options',
            rooms: [
                { type: 'Four Palms Apartment', rate: 'Contact for rates' },
                { type: 'V-Luxury Suites', rate: 'Contact for rates' },
                { type: 'Bamboo Suites', rate: 'Contact for rates' },
                { type: 'Ankara Room', rate: 'Contact for rates' },
                { type: 'Premium Room', rate: 'Contact for rates' },
                { type: 'Deluxe Room', rate: 'Contact for rates' }
            ],
            featured: false
        },
        {
            name: 'Knightbridge Hotel',
            description: 'Classic hotel with exceptional hospitality',
            rooms: [
                { type: 'Standard Room', rate: 'Contact for rates' },
                { type: 'Deluxe Room', rate: 'Contact for rates' },
                { type: 'Suites Room', rate: 'Contact for rates' }
            ],
            featured: false
        }
    ];

    const bookingUrl = 'https://www.bluehornconcierge.com/';
    const contactEmail = 'concierge@bluehornconcierge.com';

    return (
        <div className="bg-white min-h-screen font-montserrat">
            <Header />
            
            {/* Hero Section */}
            <div 
                className="relative bg-cover bg-center py-20 md:py-32"
                style={{
                    backgroundImage: `url(${theme_down})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#032642] mb-6 font-michroma">
                        Concierge Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
                        ACL's Afri-Caribbean Investment Summit 2026
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our selection of premium hotels with exclusive rates for summit participants
                    </p>
                </div>
            </div>

            {/* Important Notice */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-blue-50 border-l-4 border-[#00159E] p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-[#00159E]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm md:text-base text-[#032642] font-semibold mb-2">
                                Important Information
                            </p>
                            <p className="text-sm md:text-base text-gray-700">
                                Please note that it is the responsibility of each guest to cover the cost of their accommodation.
                            </p>
                            <p className="text-sm md:text-base text-gray-700 mt-2">
                                For all reservations, contact: <a href={`mailto:${contactEmail}`} className="text-[#00159E] font-semibold hover:underline">{contactEmail}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotels Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotels.map((hotel, index) => (
                        <div 
                            key={index} 
                            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                                hotel.featured ? 'border-[#00159E]' : 'border-gray-200'
                            }`}
                        >
                            {/* Hotel Header */}
                            <div className={`p-6 ${hotel.featured ? 'bg-gradient-to-r from-[#032642] to-[#00159E]' : 'bg-gray-100'}`}>
                                {hotel.featured && (
                                    <span className="inline-block bg-yellow-400 text-[#032642] text-xs font-bold px-3 py-1 rounded-full mb-3">
                                        FEATURED
                                    </span>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${hotel.featured ? 'text-white' : 'text-[#032642]'}`}>
                                    {hotel.name}
                                </h3>
                                <p className={`text-sm ${hotel.featured ? 'text-gray-200' : 'text-gray-600'}`}>
                                    {hotel.description}
                                </p>
                            </div>

                            {/* Room Options */}
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-[#032642] mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#00159E]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    Room Categories
                                </h4>
                                <ul className="space-y-3 mb-6">
                                    {hotel.rooms.map((room, roomIndex) => (
                                        <li key={roomIndex} className="flex justify-between items-center py-2 border-b border-gray-200">
                                            <span className="text-sm text-gray-700 font-medium">{room.type}</span>
                                            <span className={`text-sm font-bold ${room.rate.includes('₦') ? 'text-[#00159E]' : 'text-gray-500'}`}>
                                                {room.rate}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Book Now Button */}
                                <a
                                    href={bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-gradient-to-r from-[#032642] to-[#00159E] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div 
                className="relative bg-gray-50 py-16"
                style={{
                    backgroundImage: `url(${theme_up})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom'
                }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#032642] mb-6">
                        Need Assistance?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Our concierge team is here to help you with your accommodation needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={`mailto:${contactEmail}`}
                            className="inline-flex items-center px-6 py-3 bg-white text-[#032642] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#00159E]"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email Concierge
                        </a>
                        <a
                            href={bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#032642] to-[#00159E] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            Visit Concierge Site
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Concierge;

