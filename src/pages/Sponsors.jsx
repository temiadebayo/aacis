import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import counterBg from "/images/counterbg.png";
import business_video from "../assets/business_video.mp4";

function SponsorsHero() {
  const targetDate = new Date("2026-03-25T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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
    <div className="relative flex items-center justify-center text-white md:h-[490px] h-[250px] md:text-left overflow-hidden">
      <video
        src={business_video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-0 w-full text-center space-y-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-gruppo font-[200] mb-2">Become a Sponsor at AACIS 2026</h1>
        <p className="text-base md:text-2xl font-montserrat mb-4">Showcase your brand to a global audience of investors, policymakers, and business leaders.</p>
        <div className="flex justify-center md:gap-1 text-[34px] md:text-[64px] mb-6 font-digital">
          <div>
            <span className="font-digital">{timeLeft.days || "00"}</span>
            <div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">Days</div>
          </div>
          <span className="font-digital px-1 md:px-3">:</span>
          <div>
            <span className="font-digital">{timeLeft.hours || "00"}</span>
            <div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">Hours</div>
          </div>
          <span className="font-digital px-1 md:px-3">:</span>
          <div>
            <span className="font-digital">{timeLeft.minutes || "00"}</span>
            <div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">Min</div>
          </div>
          <span className="font-digital px-1 md:px-3">:</span>
          <div>
            <span className="font-digital">{timeLeft.seconds || "00"}</span>
            <div className="md:mt-4 text-center font-[500] text-[16px] leading-[21.94px] font-michroma">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="mt-20">
        <SponsorsHero />
      </div>
      <main className="flex-1 mt-4">
        <section className="bg-white bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain xl:p-10 p-2">
          <div className="md:py-16 py-8 bg-gradient-to-b from-[#fff] via-[#ff]/100 to-[#fff] max-w-4xl mx-auto p-8 md:p-16 border border-[#00159E]/10 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-gruppo font-[200] text-[#00159E] mb-6 text-center">Sponsorship Opportunities</h1>
            <p className="text-lg text-[#032642] mb-6 text-center font-montserrat">Partner with AACIS 2026 as a sponsor and position your brand at the forefront of Afri-Caribbean economic collaboration. Our summit attracts top-tier delegates, policymakers, investors, and business leaders from across Africa, the Caribbean, and beyond.</p>
            <div className="mb-8">
              <h2 className="text-2xl font-gruppo font-[200] text-[#00159E] mb-2">Why Sponsor?</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base space-y-2 font-montserrat">
                <li>Unparalleled brand visibility before, during, and after the summit</li>
                <li>Direct access to decision-makers, investors, and government officials</li>
                <li>Opportunities to host sessions, exhibit, or present your solutions</li>
                <li>Media coverage and recognition in summit communications</li>
                <li>Customizable packages to suit your marketing goals</li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-gruppo font-[200] text-[#00159E] mb-2">Sponsorship Packages</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base space-y-2 font-montserrat">
                <li><b>Platinum Sponsor:</b> Headline branding, keynote speaking slot, exhibition booth, media features, and more.</li>
                <li><b>Gold Sponsor:</b> Branding, session hosting, exhibition space, and media mentions.</li>
                <li><b>Silver Sponsor:</b> Branding, exhibition space, and select media features.</li>
                <li><b>Custom Packages:</b> Tailored to your organization’s needs and objectives.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-gruppo font-[200] text-[#00159E] mb-2">Ready to Sponsor?</h2>
              <p className="mb-4">Contact our sponsorship team to discuss opportunities, request a sponsorship brochure, or design a custom package that aligns with your goals.</p>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="mailto:aacis@aquarianconsult.com?subject=AACIS%20Sponsorship%20Inquiry"
                  className="px-8 py-3 bg-gradient-to-r from-[#032642] to-[#00159E] text-white font-semibold rounded-lg shadow hover:scale-105 hover:opacity-90 transition text-center"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-[#00159E] text-[#00159E] font-semibold rounded-lg hover:bg-[#00159E] hover:text-white transition text-center"
                >
                  Download Sponsorship Brochure
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 