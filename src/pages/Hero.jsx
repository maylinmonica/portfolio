import React from 'react';
import { Linkedin, Github, Instagram } from "lucide-react";

import ProjectsSection from './Project';
import TechStackSection from './techstack';
import CertificationsSection from './Certification';


const Portfolio = () => {
  /* Removed unused 'educationData' variable since the 'About Me' section 
  uses hardcoded timeline data, not this array.
  */

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-28 md:py-20 relative overflow-hidden"> 
        <div className="max-w-7xl w-full relative z-10">
          
         {/* Main Content Grid */}
          <div
            className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center 
            md:h-[450px] h-auto pb-20 md:pb-0 -translate-y-0 md:-translate-y-20"
          >
            {/* Background Frame sebagai elemen <img> dengan Z-Index = 10 */}
            <img
              src="https://res.cloudinary.com/dcypivjgg/image/upload/v1759828664/bggggg_ugjnj2.png"
              alt="Decorative Background Frame"
              className="absolute inset-0 w-full h-full object-cover object-[90%_top] md:object-[90%_-60px] z-10"
            />
            
            {/* Left Side - Foto Maylin */}
           <div 
             className="flex justify-center md:justify-start relative md:pl-24 pt-10 md:pt-0 order-1 md:order-1"
           >
              {/* Foto Maylin dengan Z-Index = 20 (Di atas Frame Background) */}
              <img
                src="https://res.cloudinary.com/dcypivjgg/image/upload/v1759824938/photo_whnbju.png"
                alt="Maylin Portrait"
                className="absolute top-[15px] md:top-[-10px] left-[50%] md:left-[55%] transform -translate-x-1/2 w-36 md:w-64 h-auto object-contain z-20 opacity-100" 
              />

            {/* CD Case dengan Z-Index = 30 (Menimpa semuanya) */}
            <img 
              src="https://res.cloudinary.com/dcypivjgg/image/upload/v1759823149/cddd-2_ygvbrk.png" 
              alt="Portfolio CD Case" 
              // REVISI: translate-y-0 diubah ke translate-y-10 untuk mobile
              className="relative w-full max-w-[200px] md:max-w-md h-auto object-contain drop-shadow-2xl translate-y-20 md:translate-y-32 z-30"
            />

            </div>

            {/* Right Side - Text & Buttons */}
          <div 
            className="space-y-4 md:space-y-5 text-center md:text-left order-2 md:order-2 relative z-40"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Pacifico] text-gray-900 leading-tight">
              Hello, I'm <br />
              <span className="relative inline-block highlight-text text-[#000000]">
                Maylin Monica
                <span className="highlight-bar"></span>
              </span>
            </h1>

            {/* Heading tambahan yang lebih kecil dari Hello */}
            <h3 className="text-base md:text-2xl font-medium text-gray-700 max-w-full md:max-w-md mx-auto md:mx-0">
              A creative Information Technology student passionate about design,
              illustration, and digital innovation.
            </h3>

            {/* Tombol + Ikon Sosial Media */}
            <div className="flex items-center justify-center md:justify-start space-x-5 pt-3">
              {/* Tombol CV */}
            <button
              onClick={() =>
                window.open('https://drive.google.com/your-cv-link-here', '_blank')
              }
              className="bg-[#b71c1c] text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 hover:bg-[#8a1313] transition-all flex items-center gap-2"
            >
              <span>See My CV</span>
            </button>

              {/* Ikon Sosial Media */}
              <div className="flex space-x-4 text-gray-700">
                <a
                  href="https://www.linkedin.com/in/maylinmonica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-transform transform hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/maylinmonica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-transform transform hover:-translate-y-1"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/meylin.monica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-transform transform hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Animasi highlight */}
            <style jsx>{`
              @keyframes highlight {
                0% { width: 0; opacity: 1; }
                40% { width: 100%; opacity: 1; }
                100% { width: 100%; opacity: 0; }
              }
              .highlight-text { position: relative; z-index: 10; }
              .highlight-bar {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 0.9em;
                width: 0;
                background-color: rgba(255, 77, 77, 0.6);
                z-index: -1;
                border-radius: 4px;
                animation: highlight 8s ease-in-out infinite;
              }
            `}</style>
            </div>
          </div>


          </div>
        </section>

   {/* Moving Text Banner (About Me Animation) - Full Width Banner */}
      {/* ⭐️ Diubah: py-0 dikembalikan ke py-3. Ditambahkan transform -translate-y untuk mengangkatnya. */}
      <section className="bg-[#b71c1c] overflow-hidden py-3 relative z-20 transform -translate-y-16 md:-translate-y-32"> 
        <div className="flex whitespace-nowrap animate-scroll text-white leading-tight italic font-extrabold text-xl md:text-3xl tracking-wide">
          <span className="mx-6">
            ✨ READY TO GET TO KNOW ME? ✨ READY TO GET TO KNOW ME? ✨ READY TO GET TO KNOW ME? ✨ READY TO GET TO KNOW ME? ✨
          </span>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* About Me Section - Jarak Vertikal Dibuat Lebih Rapat */}
      <section
        id="about"
        className="bg-[#ffffff] overflow-visible relative z-10 py-10 md:py-16" // py-12/py-24 -> py-10/py-16
        style={{ overflow: "visible" }}
      >
        {/* Konten Utama: items-start untuk memindahkan konten ke atas (vertical top) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start px-6 relative overflow-visible"> 
          
          {/* Left Section - Dipastikan rata kiri (text-left) */}
          <div className="relative z-10 overflow-visible order-2 lg:order-1 text-left"> 
            <h2
              className="text-5xl md:text-6xl font-[Pacifico] text-[#130000] italic drop-shadow-sm leading-tight mb-6"
              style={{
                overflow: "visible",
                lineHeight: "1.15em",
                paddingBottom: "0.2em",
                display: "inline-block",
              }}
            >
              About Me
            </h2>

            <p className="text-base md:text-lg text-[#66667c] leading-relaxed text-justify max-w-full lg:max-w-lg mx-0">
              I am an <span className="font-semibold text-gray-900">Information Systems student </span> 
              who actively participates in academic activities, maintains an excellent GPA, 
              and engages in various informal education programs, student organizations, 
              and faculty as well as department committees to further develop knowledge, 
              skills, and leadership abilities.
            </p>

            <div className="mt-8 space-y-4 max-w-md mx-0">
              <div className="pl-4 border-l-4 border-[#b71c1c] space-y-4">
                <div>
                  <p className="text-[#b71c1c] font-semibold">2023 – Present</p>
                  <p className="font-medium text-gray-800">Universitas Pendidikan Ganesha</p>
                  <p className="text-[#66667c] text-sm">
                    Bachelor's Degree in Information Systems
                  </p>
                </div>

                <div>
                  <p className="text-[#b71c1c] font-semibold">2020 – 2023</p>
                  <p className="font-medium text-gray-800">SMA Negeri 11 Medan</p>
                  <p className="text-[#66667c] text-sm">Science Major</p>
                </div>
              </div>
            </div>
          </div>

       {/* Right Section - Ilustrasi Gameboy DINAIRKKAN dengan Negative Margin yang Lebih Besar */}
          <div className="relative flex justify-center mt-10 lg:-mt-20 overflow-visible order-1 lg:order-2"> {/* lg:-mt-12 -> lg:-mt-20 */}
            <img
              src="https://res.cloudinary.com/dcypivjgg/image/upload/v1759831583/item_fgdln8.png"
              alt="Gameboy Frame"
              className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[370px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 translate-x-0"
            />
          </div>
        </div>
      </section>

     {/* Organization Experience Section - Jarak Vertikal Dibuat Lebih Rapat */}
    <section className="bg-[#ffffff] py-10 md:py-16"> {/* py-12/py-24 -> py-10/py-16 */}
      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-start px-6">
        
        {/* Right Section - Title & Timeline */}
        {/* ⭐️ PERUBAHAN: Menambahkan lg:pr-16 untuk memberikan padding kanan di layar besar */}
        <div className="relative z-10 lg:pl-16 lg:pr-16 order-1 lg:order-2">
          {/* Centered Title */}
          <h2
            className="text-5xl md:text-5xl font-[Pacifico] text-[#130000] italic drop-shadow-sm leading-tight mb-8 text-center"
            style={{
              overflow: "visible",
              lineHeight: "1.2em",
              display: "block",
            }}
          >
            Organization Experience
          </h2>

          {/* Timeline for Mobile and Desktop */}
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical central line (Hidden on Mobile) */}
            <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[3px] bg-[#b71c1c]" />
            {/* Vertical line for Mobile (Left side) */}
            <div className="md:hidden absolute left-3 top-0 h-full w-[3px] bg-[#b71c1c]" />

            {/* Items */}
            <div className="space-y-10">
              {[
                {
                  org: "Staff of Personalia Division",
                  role: "Badan Eksekutif Mahasiswa Fakultas Teknik dan Kejuruan",
                  period: "April 2024 - April 2025",
                  desc: "Handled member recruitment, HR management, and staff development within the faculty student organization.",
                },
                {
                  org: "Staff of Social Media",
                  role: "Information Media for the Information Systems Study Program",
                  period: "2024",
                  desc: "Responsible for organizing and managing social media content for the information systems study program.",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex items-start min-h-[120px]">
                  {/* Dot for Mobile (Left side) */}
                  <div className="md:hidden absolute left-3 top-0 transform -translate-x-1/2 z-20">
                    <div className="w-5 h-5 bg-[#b71c1c] rounded-full border-4 border-white shadow" />
                  </div>
                  {/* Dot for Desktop (Center) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-5 h-5 bg-[#b71c1c] rounded-full border-4 border-white shadow" />
                  </div>

                  {/* Content for Mobile (full width, left-aligned) */}
                  <div className="md:hidden pl-10 pt-1">
                        <h3 className="text-lg font-bold text-[#130000]">{item.role}</h3>
                        <p className="text-[#b71c1c] italic text-sm">{item.org}</p>
                        <p className="text-xs text-gray-600 mb-1">{item.period}</p>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                  </div>

                  {/* Content for Desktop (alternating left/right) */}
                  <div className="hidden md:flex w-full">
                      {index % 2 === 0 ? (
                      /* LEFT item */
                      <>
                          <div className="w-1/2 pr-24 relative text-right">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 border-t-[3px] border-[#b71c1c] z-10" />
                          <h3 className="text-lg font-bold text-[#130000]">{item.role}</h3>
                          <p className="text-[#b71c1c] italic text-sm">{item.org}</p>
                          <p className="text-xs text-gray-600 mb-1">{item.period}</p>
                          <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                          </div>
                          <div className="w-1/2" />
                      </>
                      ) : (
                      /* RIGHT item */
                      <>
                          <div className="w-1/2" />
                          <div className="w-1/2 pl-24 relative text-left">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 border-t-[3px] border-[#b71c1c] z-10" />
                          <h3 className="text-lg font-bold text-[#130000]">{item.role}</h3>
                          <p className="text-[#b71c1c] italic text-sm">{item.org}</p>
                          <p className="text-xs text-gray-600 mb-1">{item.period}</p>
                          <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                          </div>
                      </>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Section - Polaroid Frame (Positioned Slightly Lower) */}
        {/* ⭐️ PERUBAHAN: pt-10 lg:pt-16 -> pt-16 lg:pt-24 untuk mendorongnya lebih ke tengah */}
        <div className="relative flex flex-col justify-center items-center pt-16 lg:pt-24 order-2 lg:order-1 w-full"> 
          <div className="rotate-[-3deg] hover:rotate-0 transition-transform duration-500 max-w-xs sm:max-w-sm lg:max-w-lg">
            <img
              src="https://res.cloudinary.com/dcypivjgg/image/upload/v1759917318/polaroid_je5zd4.png"
              alt="Maylin Monica"
              className="object-cover w-full h-auto drop-shadow-2xl"
            />
          </div>
          
         {/* See Gallery Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => (window.location.href = '/memories')}
              className="relative font-[Pacifico] text-[1.4rem] text-[#130000]
                        cursor-pointer transition-all duration-500 hover:text-[#b71c1c]
                        hover:scale-105"
            >
              {"See My Gallery Organization Memories".split("").map((char, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.12}s` }}
                  className="inline-block animate-[wave_2.5s_ease-in-out_infinite]"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </button>

            <style>{`
              @keyframes wave {
                0%, 100% {
                  transform: translateY(0);
                }
                25% {
                  transform: translateY(-3px) rotate(-2deg);
                }
                50% {
                  transform: translateY(2px) rotate(2deg);
                }
                75% {
                  transform: translateY(-2px) rotate(-1deg);
                }
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>

      <div>
        {/* Asumsi TechStackSection juga disesuaikan paddingnya di file komponennya */}
        <TechStackSection /> 
      </div>

      {/* Certifications Section - Jarak Vertikal Dibuat Lebih Rapat */}
      <div> 
        <CertificationsSection />
      </div>

      {/* Moving Tech Logos Section - Full Width Banner */}
        {/* <section className="bg-transparent overflow-hidden py-10 relative z-10 w-full mt-0">
          <div className="flex whitespace-nowrap animate-scroll-tech items-center">
            <TechLogos />
          </div>
        </section>
        */}

      {/* My Projects Section */}
      <section id="projects" className="py-12 px-6 max-w-7xl mx-auto bg-white">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-[Pacifico] text-[#130000] leading-tight italic drop-shadow-sm mb-6">
            Latest Projects
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Playlix",
              subtitle: "Web",
              img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759838297/playlix_vdqqhr.png",
              desc1: "Playlix is a website built using React + Vite and Flask (Python), developed in less than two weeks as part of a Mid-Semester Exam project on Web-Based Frameworks during the fourth semester.",
              tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              ],
              links: [
                { 
                  type: "github", 
                  label: "Repository",
                  url: "https://github.com/maylinmonica/playlix-web",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                },
                { 
                  type: "vercel", 
                  label: "Live Demo",
                  url: "https://playlix-web.vercel.app",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                }
              ]
            },
            {
              title: "URCV",
              subtitle: "Web",
              img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759905064/3_bagcmv.png",
              desc1: "URCV is a website built using React + Vite and Flask (Python) developed in the Web-Based Frameworks course during the 4th semester to fulfill the final exam assignment.",
              tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              ],
              links: [
                { 
                  type: "github", 
                  label: "Repository",
                  url: "https://github.com/maylinmonica/web-urcv",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                }
              ]
            },
            {
              title: "Arthasena",
              subtitle: "Mobile",
              img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759904950/4_encmzz.png",
              desc1: "ARTHASENA Mobile is a Flutter-based application developed in the 4th semester as part of a Mobile Programming assignment, utilizing Dart as the primary programming language and Supabase for data storage and authentication.",
              tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
              ],
              links: [
                { 
                  type: "github", 
                  label: "Repository",
                  url: "https://github.com/maylinmonica/arthasena-mobile-android",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                }
              ]
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="h-56 overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-[Pacifico] text-[#130000] italic mb-2">
                  {project.title}
                  <span className="ml-2 text-[#b71c1c]">{project.subtitle}</span>
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#66667c] mb-4 line-clamp-3">
                  {project.desc1}
                </p>

                {/* Tech Stack Icons & Links */}
                <div className="flex items-center justify-between pt-2">
                  {/* Tech Stack */}
                  <div className="flex items-center gap-3">
                    {project.tech.map((icon, i) => (
                      <img key={i} src={icon} alt="Tech" className="w-7 h-7" />
                    ))}
                  </div>

                  {/* Repository Links */}
                  <div className="flex items-center gap-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110"
                        title={link.label}
                      >
                        <img 
                          src={link.icon} 
                          alt={link.type} 
                          className="w-6 h-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See Detail Button */}
<div className="text-center mt-10">
  <button
    onClick={() => (window.location.href = '/projects')}
    className="relative font-[Pacifico] text-[1.3rem] text-[#130000]
               transition-all duration-500 cursor-pointer group"
  >
    {"See All Project".split("").map((char, i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.15}s` }}
        className="inline-block animate-[colorwave_4s_ease-in-out_infinite]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}

    {/* Garis bawah muncul saat hover */}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#b71c1c] rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_#b71c1c]"></span>
  </button>

  <style>{`
    @keyframes colorwave {
      0% {
        transform: translateY(0);
        color: #130000;
      }
      25% {
        transform: translateY(-2px);
        color: #b71c1c;
      }
      50% {
        transform: translateY(1px);
        color: #ff6b6b;
      }
      75% {
        transform: translateY(-1px);
        color: #7a1c1c;
      }
      100% {
        transform: translateY(0);
        color: #130000;
      }
    }
  `}</style>
</div>


        <style jsx>{`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

  {/* Contact Section */}
      <section id="contact" className="relative min-h-screen bg-white py-20 px-6 overflow-hidden">
        {/* Background Animation - Full Frame */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/dcypivjgg/video/upload/v1759923314/Animasi_Foto_Jadi_Video_Ekspresi_Bahagia_zr573h.mp4"
            alt="Contact Background Animation"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Optional overlay untuk membuat text lebih readable */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Konten Utama dengan max-width dan padding horizontal */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center relative z-10">
          {/* Left Side - Text */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-[Pacifico] text-white leading-tight drop-shadow-lg">
              Got a project?<br />
              Let's talk.
            </h2>
            
            <p className="text-base md:text-lg text-white leading-relaxed max-w-full lg:max-w-lg drop-shadow-md mx-auto lg:mx-0">
              I'm always excited to collaborate on new and challenging projects. 
              Whether you have an idea, a problem to solve, or just want to say hello, 
              feel free to reach out.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:pl-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 drop-shadow-lg text-center lg:text-left">
              Get in touch!<br />
              Let me know each other.
            </h3>

            <form className="space-y-6 md:space-y-8 max-w-lg mx-auto lg:mx-0">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2 drop-shadow">
                  What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-3 px-1 outline-none transition-colors text-sm"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2 drop-shadow">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-3 px-1 outline-none transition-colors text-sm"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2 drop-shadow">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Share your ideas..."
                  className="w-full bg-transparent border-b-2 border-white/50 focus:border-white text-white placeholder-white/60 py-3 px-1 outline-none transition-colors resize-none text-sm"
                ></textarea>
              </div>

             {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-white text-black font-semibold py-3 px-8 md:py-4 md:px-12 rounded-lg hover:bg-[#b71c1c] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};



export default Portfolio;