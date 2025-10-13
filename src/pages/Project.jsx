import { useState } from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Playlix",
      subtitle: "Web",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759838297/playlix_vdqqhr.png",
      desc1: "Playlix is a website built using React + Vite and Flask (Python), developed in less than two weeks as part of a Mid-Semester Exam project on Web-Based Frameworks during the fourth semester. The frontend utilizes React, React Router, TailwindCSS, Axios, and Lucide React, while the backend employs Flask for data management.",
      desc2: "Playlix simplifies users ability to manage YouTube playlists, organize videos by genre, filter content, and quickly mark favorites. Many users struggle to organize videos due to unstructured and hard-to-search playlists; Playlix offers a solution that simplifies searching, managing, and enjoying videos efficiently and enjoyably.",
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
          label: "Web Deploy",
          url: "https://playlix-web.vercel.app",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
        }
      ]
    },
    {
      title: "URCV",
      subtitle: "Web",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759905064/3_bagcmv.png",
      desc1: "URCV is a website built using React + Vite and Flask (Python) developed in the Web-Based Frameworks course during the 4th semester to fulfill the final exam assignment, completed in less than a month. The frontend uses React, React Router, TailwindCSS, and Axios for an interactive user experience, while the backend employs Flask with SQLAlchemy, JWT, Bcrypt, Jinja2 for CV templates, and WeasyPrint for converting CVs to PDF.",
      desc2: "URCV offers various attractive templates, career tips articles, user authentication, photo upload, and CV management via CRUD operations. Many people struggle to create professional CVs and spend a lot of time on it, so URCV serves as a solution that allows users to fill out forms, review, edit, and download CVs quickly, efficiently, and practically.",
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
      title: "Gestura",
      subtitle: "Web",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759904949/5_yusigo.png",
      desc1: "Gestura is a website built using React for the frontend and Lumen for the backend, utilizing TailwindCSS, Redux Toolkit, React Router, and Axios. Developed as a final exam project for the Web Programming course in the 3rd semester, this platform provides learning materials on sign language through videos and interactive quizzes.",
      desc2: "Many people struggle to understand sign language movements due to the lack of access to interactive materials, so Gestura serves as a solution to make it easier for users to learn sign language movements, improve communication skills, and build confidence in interacting with the deaf community.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lumen/lumen-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      ],
      links: [
        { 
          type: "github", 
          label: "Repository",
          url: "https://github.com/maylinmonica/gestura-web",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        }
      ]
    },
    {
      title: "Artasena",
      subtitle: "Mobile",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759904950/4_encmzz.png",
      desc1: "ARTHASENA Mobile is a Flutter-based application developed in the 4th semester as part of a Mobile Programming assignment, utilizing Dart as the primary programming language and Supabase for data storage and authentication.",
      desc2: "Many wayang museums in Indonesia are not evenly distributed and are rarely visited, making it difficult for young people to access wayang culture. ARTHASENA Mobile introduces an interactive Digital Wayang Museum featuring a collection of wayang characters, stories, audio narratives, and digital books. Equipped with puzzles and silhouette guessing games, the app makes it easy for users to learn about the history, stories, and cultural values of wayang in an enjoyable and memorable way.",
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
    {
      title: "Arsana",
      subtitle: "Mobile",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759908767/6_wf0afj.png",
      desc1: "Arsana (Arsip Rupiah Nasional) is a mobile application that is still in the design and prototype stage, designed using Flutter for display and interaction, and Firebase for data management and authentication. This application features search, scanning, and 3D AR functions, allowing scanned money to be displayed interactively along with its historical information.",
      desc2: "Many people struggle to access information about old currency due to limited and rarely visited museums, so Arsana serves as a solution to help users learn, remember, and appreciate the journey of Indonesian currency in an educational and interactive way.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      ],
      links: [
        { 
          type: "figma", 
          label: "Prototype",
          url: "https://www.figma.com/proto/a0GaSlg1X2FwfxUuNWbfuF/ARSANA?page-id=0%3A1&node-id=1-2&p=f&viewport=305%2C306%2C0.09&t=98TLJrtltliJPQtb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        }
      ]
    },
    {
      title: "Petopia",
      subtitle: "Mobile",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1759909290/7_elp8f9.png",
      desc1: "Petopia is an app for animal lovers that combines various needs into one platform. Developed as a final project for the Software Engineering Design course in the 2nd semester, this app enables online/offline veterinary consultations, vaccine bookings, sharing pet moments, and purchasing pet supplies.",
      desc2: "Many pet owners face expensive offline consultations and difficulty accessing centralized information, so Petopia serves as a solution by integrating healthcare services, a marketplace, and pet social media. Currently, the UI is still in prototype form on Figma.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      ],
      links: [
        { 
          type: "figma", 
          label: "Prototype",
          url: "https://www.figma.com/proto/fgCylhXdYe9KKmirACwnz2/Petshop?page-id=0%3A1&node-id=1-386&t=11bVyQbV8fXqjZh8-1",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        }
      ]
    },
    {
      title: "Ruang Edu",
      subtitle: "Mobile",
      img: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760164966/edu_hxquvm.png",
      desc1: "Ruang Edu is a fun learning app for elementary school children that makes the learning process feel light and enjoyable. Through engaging animated videos, exciting quizzes, easy-to-understand discussions, and an entertaining educational game, children can learn while playing with a friendly and cheerful AI learning companion.",
      desc2: "Developed as a UI/UX Design project, Ruang Edu combines learning and play through a daily mission system and streak feature to keep children motivated to learn every day. With a user-friendly and colorful interface, the app aims to foster curiosity and positive learning habits from an early age.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      ],
      links: [
        { 
          type: "figma", 
          label: "Prototype",
          url: "https://www.figma.com/proto/hPkNP3aVfEYKx8cWa0D93v/Edu?page-id=0%3A1&node-id=280-2176&p=f&viewport=-429%2C534%2C0.08&t=y83BPpMe68G5hXYC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=61%3A347",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff]">
      {/* Hero Section with Grid Background */}
      <section className="min-h-screen flex items-center justify-center px-6 py-28 md:py-20 relative overflow-hidden -mt-10">
        <div className="max-w-7xl w-full relative z-10">
          
          {/* Main Content Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:h-[500px] h-auto pb-20 md:pb-0">
            
            {/* Background Grid Frame */}
            <div className="absolute inset-0 w-full h-full opacity-30">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Left Side - Decorative Assets */}
            <div className="flex justify-center md:justify-start relative order-1 md:order-1 z-20">
              <div className="relative w-full max-w-sm sm:max-w-md h-[400px] sm:h-[500px] md:h-[600px]">

                {/* Pink Laptop (top left) */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760185278/4_clcpbu.png"
                  alt="Pink Laptop"
                  className="absolute top-[6%] left-[4%] w-16 sm:w-24 md:w-64 h-auto object-contain drop-shadow-lg transform rotate-[-15deg] z-10"
                />

                {/* Pink Headphones (bottom left) */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760185280/5_cq3ywk.png"
                  alt="Pink Headphones"
                  className="absolute bottom-[30%] left-[4%] w-12 sm:w-16 md:w-40 h-auto object-contain drop-shadow-lg z-10"
                />

                {/* Main Illustration - Person */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760185281/6_kpmbgb.png"
                  alt="Maylin Character"
                  className="absolute bottom-[40%] left-[40%] w-[80%] sm:w-[75%] md:w-[90%] h-auto object-contain drop-shadow-2xl z-20"
                />

                {/* Glittery Heart (bottom right) */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760185285/7_u1dhkv.png"
                  alt="Glittery Heart"
                  className="absolute bottom-[20%] left-[55%] w-20 sm:w-28 md:w-64 h-auto object-contain drop-shadow-lg transform rotate-[5deg] z-30"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-2 relative z-40 transform md:-translate-y-6 lg:-translate-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Pacifico] text-[#130000] leading-tight">
                Hi! Let's see my <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#b71c1c]">projects portfolio</span>
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-full md:max-w-lg mx-auto md:mx-0">
                Explore my journey through web and mobile development projects that I've built during my studies and personal exploration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* All Projects - Zigzag Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-20 -mt-10">
        <div className="animate-fadeIn">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="mb-20 md:mb-28"
            >
              {/* Title */}
              <h3
                className={`text-4xl md:text-5xl font-[Pacifico] text-[#130000] italic drop-shadow-sm leading-tight tracking-tight mb-6 md:mb-8 text-center ${
                  index % 2 === 0
                    ? "lg:text-left lg:pl-[2%]" 
                    : "lg:text-right lg:pr-[6%]" 
                }`}
              >
                {project.title}{" "}
                <span className="inline text-[#b71c1c]">{project.subtitle}</span>
              </h3>

              {/* Image + Description */}
              <div
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-10 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-[95%] sm:w-[85%] rounded-xl object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                {/* Description */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                  <p
                    className={`text-base md:text-lg text-[#66667c] leading-relaxed text-justify px-2 md:px-0 ${
                      index % 2 !== 0 ? "lg:pl-[4%]" : ""
                    }`}
                  >
                    {project.desc1}
                  </p>
                  <p
                    className={`text-base md:text-lg text-[#66667c] leading-relaxed text-justify px-2 md:px-0 ${
                      index % 2 !== 0 ? "lg:pl-[4%]" : ""
                    }`}
                  >
                    {project.desc2}
                  </p>

                  {/* Tech Stack & Repository Links */}
                  <div
                    className={`flex flex-col md:flex-row md:items-center md:justify-between mt-6 px-2 md:px-0 gap-4 md:gap-0 ${
                      index % 2 !== 0 ? "lg:pl-[4%]" : ""
                    }`}
                  >
                    {/* Tech Stack */}
                    <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center md:justify-start">
                      {project.tech.map((icon, i) => (
                        <img key={i} src={icon} alt="Tech" className="w-8 h-8 md:w-10 md:h-10" />
                      ))}
                    </div>

                    {/* Repository Links */}
                    {project.links && (
                      <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 flex-wrap justify-center md:justify-start">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                            title={link.label}
                          >
                            <span className="text-sm md:text-base text-[#66667c] font-medium whitespace-nowrap">
                              {link.label}
                            </span>
                            <img 
                              src={link.icon} 
                              alt={link.type} 
                              className="w-6 h-6 md:w-8 md:h-8"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
          
            </div>
          ))}

          {/* Back Button */}
          <div className="text-center pb-12">
            <button
              onClick={() => (window.location.href = '/')}
              className="relative inline-block text-lg font-[Pacifico] text-[#130000] transition-all duration-300 cursor-pointer
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                      after:bg-[#b71c1c] after:transition-all after:duration-300
                      hover:after:w-full"
            >
              ← Back to Home
            </button>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}