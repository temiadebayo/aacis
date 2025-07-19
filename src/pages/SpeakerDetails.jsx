import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConciergeLogistics from "../components/ConciergeLogistics";
import CountdownTimer from "../components/CountdownTimer";
import Speaker from "../assets/speaker.png";
import ScrollAnimation from "react-animate-on-scroll";

import theme_up from "../assets/theme_up.png";
import theme_down from "../assets/theme_down.png";

function SpeakerDetails() {
    const navigate = useNavigate();
    return (
        <div className="bg-white">
            <Header />

            <main className="">

                <div className="container mx-auto px-4 lg:px-8 py-8">

                    {/* Speaker Section */}
                    <div className="mb-8">
                        <button className="py-[10px] px-[20px] bg-[#03264275] rounded-[4px] font-montserrat font-[400] text-[16px] leading-[19.5px] text-white flex justify-center items-center gap-2" onClick={() => navigate(-1)}>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="white" />
                            </svg>Back
                        </button>
                    </div>
                    <img src={theme_up} />
                    <div className="shadow-lg bg-blue-800 bg-[url(/src/assets/speaker.png)] bg-contain bg-no-repeat bg-center bg-blend-soft-light w-full xl:h-[550px] h-[350px]"></div>
                    <img src={theme_down} />


                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="font-gruppo mt-20">
                            {/* <h2 className="">Meet Our Keynote <br /> <span className="text-[#00159E] font-michroma">Speaker</span> </h2> */}
                            <h2 className="text-[24px] md:text-[48px] leading-[28px] md:leading-[50px] text-[#032642]">
                                Meet Our Keynote <br />{" "}
                                <span className="text-[#00159E] font-michroma">
                                    Speaker
                                </span>{" "}
                            </h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h3 className="md:mt-10 mt-5 text-[20px] md:text-[28px] font-montserrat leading-[35px] font-[700] text-[#032642]">
                            Dr. Terrance Michael Drew
                        </h3>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                        <p className="md:text-[18px] text-[14px] font-montserrat italic text-[#171717]">
                            Prime Minister, St. Kitts and Nevis
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="mt-6 px-2 text-gray-700 space-y-6 leading-relaxed text-justify mb-3">
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">
                                Dr. Terrance Michael Drew currently serves as the SKNLP Labour Party Political
                                Leader and Caretaker for Constituency No. 8, the largest and most diverse
                                constituency in the Federation. <br />He is a caring community activist who grew up in
                                Upper Monkey Hill, St. Peter's of that constituency where he currently resides. Dr.
                                Drew is the son of Ras Cereal Pet Mills and Michael "Mic Stokes" Heyliger.<br />
                                At the SKNLP Electoral Conference held in November 2021, Dr. Drew was chosen as
                                the National Political Leader. In July 2013, he was selected as the new St.
                                Kitts-Nevis Labour Party candidate for St. Christopher Eight and has participated
                                in the past two general elections, touching the lives of many people who continue
                                to admire his genuine interest and connection for the betterment of the nation.
                            </p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">
                                In May 2016 at the Party's annual National Convention, Dr. Drew was elected as the
                                Deputy Chairperson of the St. Kitts-Nevis Labour Party following which, at the
                                2018 Convention, he was successfully chosen as Party Chairman.
                            </p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">
                                He is a caring and committed individual who has provided years of dedicated
                                service as a medical practitioner specialized in the field of Internal Medicine. A
                                community activist and philanthropist by nature, Dr. Drew has been actively
                                involved across his constituency providing dependable leadership on various
                                community initiatives. The empowerment of youth and marginalized groups such as
                                the disabled and elderly are especially his passion.
                            </p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">He was educated at the Deane-Glasford Primary School and went on to Basseterre Junior High and Basseterre Senior High schools before graduating from the Clarence Fitzroy Bryant College in 1996.
                                At 19, Dr. Drew was a part-time teacher at the Basseterre High School where he taught Physics and Mathematics. In 1998, he went to Cuba to study Medicine where he graduated with first class Honors from Institute Superior De Ciencas Medicas in Santa Clara, Cuba. Dr. Drew returned to St Kitts and worked as a general practitioner at the Joseph N. France General Hospital and also from his private office.</p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">In 2010, Dr. Drew was awarded a full scholarship to pursue specialty study in Internal Medicine at the Paul Foster School of Medicine in Texas. He graduated in June 2013 as a member of the American College of Medicine and American Medical Association. He is now a Diplomate of the American Board of Internal Medicine (ABIM).</p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">From 2005 to 2006, Dr. Drew served as a medical intern at the Joseph N. France General Hospital and completed rotations in Internal Medicine, General surgery, Pediatrics, Obstetrics and Gynecology, Emergency Care and Community Medicine. He also worked as a House Officer from 2006 to 2007 and from 2007 to 2010 Dr. Drew was employed with the Ministry of Health as a District Medical Officer.</p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">Dr. Drew’s transition into politics is a natural extension of his commitment to service and the well-being of the people of Constituency #8. With a clear vision of advancement and enhancement. Dr. Drew will continue to seek new opportunities for the development of the people of his constituency and the Federation as a whole.</p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">A community activist and philanthropist by nature, Dr. Drew has been actively involved across his constituency providing dependable leadership on various community initiatives. He actively participates in the community sports arena helping young people in football and basketball keep active and healthily.</p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">The empowerment of youth and marginalized groups such as the disabled and elderly are especially his passion. Over the years Dr. Drew has worked diligently to build a personal relationship with the people in his community and to provide assistance wherever possible. He has taken the time to listen to their needs and concerns which led him to establish The C.A.R.E. Foundation in February 2021, a non-profit, non-partisan organization that aims to provide assistance to citizens nationally, across both islands of St. Kitts and Nevis.</p>
                            <p className="font-montserrat font-[400] text-[16px] leading-[32px] text-black">The motto of the St Kitts-Nevis Labour Party “For The Good That We Can Do” is at the core of his political aspirations.</p>
                        </div>
                    </ScrollAnimation>
                </div>

            </main>

            <img src={theme_up} className="mb-[1px]" />
            <ConciergeLogistics />
            <CountdownTimer />
            <Footer />
        </div>
    );
}

export default SpeakerDetails;
