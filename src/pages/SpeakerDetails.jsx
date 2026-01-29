import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConciergeLogistics from "../components/ConciergeLogistics";
import CountdownTimer from "../components/CountdownTimer";
import Speaker from "../assets/speaker.png";
import ScrollAnimation from "react-animate-on-scroll";

import theme_up from "../assets/theme_up.png";
import theme_down from "../assets/theme_down.png";

// Import speaker images
import samal from "../assets/speakers/samal.jpeg";
import philp from "../assets/speakers/philp.jpeg";
import kyari from "../assets/speakers/kyari.jpeg";
import speaker1 from "../assets/speakers/speaker1.png";

// Speaker data
const speakersData = {
	"terrance-drew": {
		id: "terrance-drew",
		name: "Dr. Terrance Michael Drew",
		title: "Prime Minister, St. Kitts and Nevis",
		image: Speaker,
		bio: `Dr. Terrance Michael Drew currently serves as the SKNLP Labour Party Political Leader and Caretaker for Constituency No. 8, the largest and most diverse constituency in the Federation. He is a caring community activist who grew up in Upper Monkey Hill, St. Peter's of that constituency where he currently resides. Dr. Drew is the son of Ras Cereal Pet Mills and Michael "Mic Stokes" Heyliger.

At the SKNLP Electoral Conference held in November 2021, Dr. Drew was chosen as the National Political Leader. In July 2013, he was selected as the new St. Kitts-Nevis Labour Party candidate for St. Christopher Eight and has participated in the past two general elections, touching the lives of many people who continue to admire his genuine interest and connection for the betterment of the nation.

In May 2016 at the Party's annual National Convention, Dr. Drew was elected as the Deputy Chairperson of the St. Kitts-Nevis Labour Party following which, at the 2018 Convention, he was successfully chosen as Party Chairman.

He is a caring and committed individual who has provided years of dedicated service as a medical practitioner specialized in the field of Internal Medicine. A community activist and philanthropist by nature, Dr. Drew has been actively involved across his constituency providing dependable leadership on various community initiatives. The empowerment of youth and marginalized groups such as the disabled and elderly are especially his passion.`
	},
	"samal-duggins": {
		id: "samal-duggins",
		name: "Hon. Samal Mojah Duggins",
		title: "Minister of Agriculture, Fisheries, Marine Resources, Small Business, Entrepreneurship, Cooperatives, Sports, and the Creative Economy of St. Kitts and Nevis",
		image: samal,
		bio: `Honourable Samal Mojah Duggins is a distinguished leader and Minister of Agriculture, Fisheries, Marine Resources, Small Business, Entrepreneurship, Cooperatives, Sports, and the Creative Economy of St. Kitts and Nevis. With a deep commitment to advancing food security and sustainable agriculture, Samal brings over a decade of experience as a farmer, entrepreneur, academic, and community advocate to his role at Aquarian Consult's Agriculture and Food Security Summit.

As a visionary policy-maker, Samal is committed to modernizing agriculture under the Sustainable Island State agenda, emphasizing climate-smart agricultural practices and the 25 by 25 food security strategy in St. Kitts and Nevis. His passion for sustainable farming led him to establish Montraville Farms in 2017, an award-winning initiative that incorporates innovative agro-technology such as hydroponics to grow fresh produce sustainably.

Honorable Samal Duggins expertise extends to fostering collaborative partnerships across the Caribbean and Africa, promoting food sovereignty and economic diversification. He has also been recognized as a 'food hero' and a leading change agent in his community.

As co-chair of the Aquarian Consult Agriculture and Food Security Summit, Samal Duggins provides invaluable insight and leadership, driving bold initiatives that address critical food security challenges while advancing sustainable development pathways across Africa and the Caribbean.`
	},
	"philip-telesford": {
		id: "philip-telesford",
		name: "Hon. Philip Telesford",
		title: "Minister for Social and Community Development, Housing and Gender Affairs with responsibility for Community Development and Housing",
		image: philp,
		bio: `Hon. Philip Telesford serves as Minister for Social and Community Development, Housing and Gender Affairs with responsibility for Community Development and Housing in St. Kitts and Nevis. He is dedicated to improving the quality of life for all citizens through comprehensive social development programs.

Minister Telesford's portfolio focuses on creating sustainable communities, ensuring adequate housing for all citizens, and promoting gender equality and social inclusion. He has been a strong advocate for affordable housing initiatives and community development programs that empower local residents.

His work encompasses developing policies that address social challenges, supporting vulnerable populations, and creating opportunities for community engagement and development. Minister Telesford believes in the power of community-driven development and has implemented several programs that encourage local participation in decision-making processes.

Under his leadership, the ministry has launched various initiatives aimed at improving housing conditions, supporting community organizations, and promoting social cohesion across the Federation.`
	},
	"abubakar-kyari": {
		id: "abubakar-kyari",
		name: "Sen. Abubakar Kyari, CON",
		title: "Minister of Agriculture and Food Security, Federal Republic of Nigeria",
		image: kyari,
		bio: `Senator Abubakar Kyari, CON, currently serves as Nigeria’s Minister of Agriculture and Food Security, a position he assumed in August 2023. With a distinguished political career spanning over two decades, including legislative and executive roles at both state and national levels, Sen. Kyari has become a transformative figure in Nigeria’s agricultural sector.
Since taking office, Sen. Kyari has spearheaded comprehensive reforms aimed at elevating Nigeria’s food security and agricultural productivity. His tenure has been marked by innovative programs such as the National Agricultural Growth Support Scheme (NAGS-AP), which has provided subsidized seeds and fertilizers to over half a million smallholder farmers nationwide through transparent digital payment mechanisms. He has championed mechanization by facilitating the import and strategic distribution of around 2,000 tractors, modernizing farming practices across Nigeria.
Under his leadership, Nigeria has seen remarkable progress in expanding arable land and cultivation, including a highly successful dry-season wheat, rice, maize, and cassava production drive covering hundreds of thousands of hectares, even in formerly insecure regions like Borno and Katsina states. Efforts to reduce post-harvest losses through investments in cold storage and logistics reflect his commitment to improving the entire agricultural value chain.
Sen. Kyari’s agenda also emphasizes empowering youth and women in agriculture, fostering climate-smart farming techniques, and encouraging private sector investment to sustain long-term growth. His leadership has attracted significant international cooperation, including partnerships for advancing agricultural technology suited to Nigeria’s diverse climates.
He is widely regarded as data-driven and reformist, quickly implementing policies that have stabilized input distribution and food prices, while pushing Nigeria toward greater self-sufficiency and a resilient food system. His role as co-chair of the Aquarian Consult Agriculture and Food Security Summit brings to the platform a wealth of experience and a vision for regional collaboration that aligns with ambitions to transform agriculture into a cornerstone of economic development in Africa.`
	}
};

function SpeakerDetails() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const speakerId = searchParams.get('speaker');
    
    // If a specific speaker is requested, show that speaker
    if (speakerId && speakersData[speakerId]) {
        const speaker = speakersData[speakerId];
    return (
        <div className="bg-white">
            <Header />
            <main className="">
                <div className="container mx-auto px-4 lg:px-8 py-8">
                        {/* Back Button */}
                    <div className="mb-8">
                            <button 
                                className="py-[10px] px-[20px] bg-gradient-to-r from-[#032642] to-[#00159E] rounded-[4px] font-montserrat font-[500] text-[16px] leading-[19.5px] text-white flex justify-center items-center gap-2 hover:from-[#00159E] hover:to-[#032642] transition-all duration-300" 
                                onClick={() => navigate('/speaker-detail')}
                            >
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="white" />
                                </svg>
                                Back to All Speakers
                        </button>
                    </div>
                        
                    <img src={theme_up} />
                        <div className="shadow-lg w-full xl:h-[550px] h-[350px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <img 
                                src={speaker.image} 
                                alt={speaker.name}
                                className="max-w-full max-h-full object-contain object-center"
                            />
                        </div>
                    <img src={theme_down} />

                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="font-gruppo mt-20">
                            <h2 className="text-[24px] md:text-[48px] leading-[28px] md:leading-[50px] text-[#032642]">
                                    Meet Our <br />{" "}
                                <span className="text-[#00159E] font-michroma">
                                    Speaker
                                </span>{" "}
                            </h2>
                        </div>
                    </ScrollAnimation>
                        
                    <ScrollAnimation animateIn="fadeInUp">
                        <h3 className="md:mt-10 mt-5 text-[20px] md:text-[28px] font-montserrat leading-[35px] font-[700] text-[#032642]">
                                {speaker.name}
                        </h3>
                    </ScrollAnimation>
                        
                    <ScrollAnimation animateIn="fadeInUp">
                        <p className="md:text-[18px] text-[14px] font-montserrat italic text-[#171717]">
                                {speaker.title}
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="mt-6 px-2 text-gray-700 space-y-6 leading-relaxed text-justify mb-3">
                                {speaker.bio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </ScrollAnimation>

                        {/* Additional Speaker Information Sections */}
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Professional Background */}
                                <div className="bg-[#00159E]/5 p-6 rounded-lg border border-[#00159E]/20">
                                    <h4 className="text-[#032642] text-xl font-semibold mb-4 font-montserrat">
                                        Professional Background
                                    </h4>
                                    <p className="text-[#171717] text-[15px] leading-[26px] font-montserrat">
                                        {speaker.id === "terrance-drew" && 
                                            "Dr. Drew is a medical practitioner specialized in Internal Medicine, with extensive experience in community activism and political leadership. He has served as a District Medical Officer and completed specialty training in Texas."
                                        }
                                        {speaker.id === "samal-duggins" && 
                                            "Minister Duggins brings over a decade of experience as a farmer, entrepreneur, academic, and community advocate. He established Montraville Farms in 2017, an award-winning initiative that incorporates innovative agro-technology such as hydroponics. He has been recognized as a 'food hero' and leading change agent in his community."
                                        }
                                        {speaker.id === "philip-telesford" && 
                                            "Minister Telesford is dedicated to improving the quality of life for all citizens through comprehensive social development programs. He focuses on creating sustainable communities and ensuring adequate housing."
                                        }
                                        {speaker.id === "abubakar-kyari" && 
                                            "Senator Kyari brings decades of experience in agricultural policy and rural development. He oversees Nigeria's agricultural sector, which is crucial to the nation's economy and food security."
                                        }
                                    </p>
                                </div>

                                {/* Key Achievements */}
                                <div className="bg-[#032642]/5 p-6 rounded-lg border border-[#032642]/20">
                                    <h4 className="text-[#032642] text-xl font-semibold mb-4 font-montserrat">
                                        Key Achievements
                                    </h4>
                                    <ul className="text-[#171717] text-[15px] leading-[26px] font-montserrat space-y-2">
                                        {speaker.id === "terrance-drew" && (
                                            <>
                                                <li>• Elected as National Political Leader in November 2021</li>
                                                <li>• Successfully chosen as Party Chairman in 2018</li>
                                                <li>• Diplomate of the American Board of Internal Medicine</li>
                                                <li>• Established The C.A.R.E. Foundation in February 2021</li>
                                            </>
                                        )}
                                        {speaker.id === "samal-duggins" && (
                                            <>
                                                <li>• Established Montraville Farms in 2017 with innovative hydroponics</li>
                                                <li>• Recognized as a 'food hero' and leading change agent</li>
                                                <li>• Committed to Sustainable Island State agenda and 25 by 25 food security strategy</li>
                                                <li>• Co-chair of Aquarian Consult Agriculture and Food Security Summit</li>
                                            </>
                                        )}
                                        {speaker.id === "philip-telesford" && (
                                            <>
                                                <li>• Developed comprehensive social development programs</li>
                                                <li>• Implemented affordable housing initiatives</li>
                                                <li>• Promoted gender equality and social inclusion</li>
                                                <li>• Created community engagement opportunities</li>
                                            </>
                                        )}
                                        {speaker.id === "abubakar-kyari" && (
                                            <>
                                                <li>• Modernized Nigeria's agricultural sector</li>
                                                <li>• Implemented policies for increased productivity</li>
                                                <li>• Supported smallholder farmers nationwide</li>
                                                <li>• Improved rural infrastructure and access to credit</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Vision and Goals */}
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="mt-8 bg-gradient-to-r from-[#00159E]/5 to-[#032642]/5 p-8 rounded-lg border border-[#00159E]/20">
                                <h4 className="text-[#032642] text-xl font-semibold mb-4 font-montserrat">
                                    Vision & Goals
                                </h4>
                                <p className="text-[#171717] text-[15px] leading-[26px] font-montserrat">
                                    {speaker.id === "terrance-drew" && 
                                        "Dr. Drew's vision centers on the empowerment of youth and marginalized groups, with a commitment to service and the well-being of the people. His political aspirations are rooted in the motto 'For The Good That We Can Do'."
                                    }
                                    {speaker.id === "samal-duggins" && 
                                        "Minister Duggins envisions modernizing agriculture under the Sustainable Island State agenda, emphasizing climate-smart agricultural practices and the 25 by 25 food security strategy. His vision includes fostering collaborative partnerships across the Caribbean and Africa, promoting food sovereignty and economic diversification through innovative agro-technology."
                                    }
                                    {speaker.id === "philip-telesford" && 
                                        "Minister Telesford believes in the power of community-driven development and aims to create opportunities for community engagement and development that encourage local participation in decision-making processes."
                                    }
                                    {speaker.id === "abubakar-kyari" && 
                                        "Senator Kyari's vision includes making Nigeria self-sufficient in food production while creating employment opportunities in the agricultural sector through sustainable practices that protect the environment."
                                    }
                                </p>
                        </div>
                    </ScrollAnimation>
                </div>
                </main>

                <img src={theme_up} className="mb-[1px]" />
                <CountdownTimer />
                <Footer />
            </div>
        );
    }

    // Show all speakers in individual containers
    return (
        <div className="bg-white">
            <Header />
            <main className="">
                <div className="container mx-auto px-4 lg:px-8 py-8">
                    
                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="font-gruppo text-center mb-12">
                            <h2 className="text-[24px] md:text-[48px] leading-[28px] md:leading-[50px] text-[#032642]">
                                Meet Our <br />{" "}
                                <span className="text-[#00159E] font-michroma">
                                    Speakers
                                </span>{" "}
                            </h2>
                            <p className="text-[#606060] font-montserrat text-[16px] md:text-[18px] mt-4">
                                Distinguished leaders and experts shaping the future of Afri-Caribbean collaboration
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Keynote Speaker - Special Highlight */}
                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="mb-12">
                            <div className="text-center mb-8">
                                <div className="inline-block bg-gradient-to-r from-[#00159E] to-[#032642] text-white px-6 py-2 rounded-full font-montserrat font-[600] text-sm mb-4">
                                    KEYNOTE SPEAKER
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-[#00159E]/5 to-[#032642]/5 rounded-2xl p-8 border-2 border-[#00159E]/20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="relative">
                                        <img 
                                            src={speakersData["terrance-drew"].image} 
                                            alt={speakersData["terrance-drew"].name}
                                            className="w-full h-80 object-contain object-center rounded-xl shadow-lg bg-gray-100"
                                        />
                                        <div className="absolute top-4 right-4 bg-[#00159E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            KEYNOTE
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[#032642] text-2xl md:text-3xl font-bold mb-3 font-montserrat">
                                            {speakersData["terrance-drew"].name}
                                        </h3>
                                        <p className="text-[#00159E] text-lg font-semibold mb-4 font-montserrat">
                                            {speakersData["terrance-drew"].title}
                                        </p>
                                        <p className="text-[#171717] text-[15px] leading-[26px] mb-6 font-montserrat">
                                            {speakersData["terrance-drew"].bio}
                                        </p>
                                        <a 
                                            href={`/aacis/speaker-detail?speaker=terrance-drew`}
                                            className="inline-block bg-gradient-to-r from-[#00159E] to-[#032642] text-white px-8 py-3 rounded-lg font-montserrat font-[600] text-base hover:scale-105 transition-transform shadow-lg"
                                        >
                                            Read Full Biography →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Other Speakers */}
                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="text-center mb-8">
                            <h3 className="text-[#032642] text-xl md:text-2xl font-montserrat font-[600] mb-2">
                                Distinguished Speakers
                            </h3>
                            <p className="text-[#606060] font-montserrat text-[14px] md:text-[16px]">
                                Additional speakers contributing to the summit's success
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Speakers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {Object.values(speakersData).filter(speaker => speaker.id !== "terrance-drew").sort((a, b) => {
                            // Put Nigerian Agriculture Minister first
                            if (a.id === "abubakar-kyari") return -1;
                            if (b.id === "abubakar-kyari") return 1;
                            return 0;
                        }).map((speaker, index) => (
                            <ScrollAnimation key={speaker.id} animateIn="fadeInUp" delay={index * 200}>
                                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative">
                                        <img 
                                            src={speaker.image} 
                                            alt={speaker.name}
                                            className="w-full h-64 object-contain object-center bg-gray-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-white text-xl font-semibold mb-2">{speaker.name}</h3>
                                            <p className="text-white/90 text-sm mb-4">{speaker.title}</p>
                                            <a 
                                                href={`/aacis/speaker-detail?speaker=${speaker.id}`}
                                                className="inline-block bg-[#00159E] text-white px-6 py-2 rounded-lg font-montserrat font-[500] text-sm hover:bg-[#00159E]/90 transition-colors"
                                            >
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                        
                        {/* Blank Filler Card */}
                        <ScrollAnimation animateIn="fadeInUp" delay={600}>
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl text-gray-300 mb-4">🎤</div>
                                            <p className="text-gray-400 font-montserrat text-lg">
                                                More speakers to be confirmed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </main>

            <img src={theme_up} className="mb-[1px]" />
            <CountdownTimer />
            <Footer />
        </div>
    );
}

export default SpeakerDetails;
