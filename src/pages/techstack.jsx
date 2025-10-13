import React from 'react';

export default function TechStackSection() {
  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  ];

  const animationDuration = '60s'; 
  const intervalPerLogo = 60 / techStack.length;
  
  const animationDelays = techStack.map((_, index) => 
    `-${(index * intervalPerLogo).toFixed(0)}s`
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Text & Tech Logos */}
          {/* ⭐️ Diubah: Hapus flex-col dan items-center agar konten berpusat secara alami dengan mx-auto */}
          <div className="order-2 lg:order-1">
            
            {/* Judul: Ditambahkan mx-auto dan text-center (sudah ada) */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Pacifico] text-gray-900 leading-tight mb-6 text-center mx-auto">
              Tech Stack
            </h2>

            {/* Paragraf: Ditambahkan mx-auto agar berpusat */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center mb-10 max-w-lg mx-auto">
              These are the technologies and tools I use to bring ideas to life. 
              From frontend frameworks to design tools, I'm always learning and exploring new ways 
              to create better digital experiences.
            </p>
       
            {/* Tech Logos Animation Container: Pastikan di tengah */}
            <div className="relative w-full h-[350px] flex items-center justify-center"> 
              <div className="relative w-[500px] h-[280px] sm:w-[550px] sm:h-[320px] lg:w-[600px] lg:h-[350px]"> 
                {techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="absolute tech-item"
                    style={{
                      animationDelay: animationDelays[index],
                      animationDuration: animationDuration,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-1"
                      />
                      <p className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          {/* ⭐️ Diubah: max-w diperkecil sedikit agar tidak terlalu besar dan pt- disesuaikan */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 pt-10 md:pt-16 lg:pt-16"> 
            <img
              src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760345098/9_jazvdg.png"
              alt="Tech Stack Illustration"
              className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[450px] object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        .tech-item {
          animation-name: keliling;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.1)); 
        }

        @keyframes keliling {
          0% { 
            transform: translate(0px, 0px); 
          }
          25% { 
            transform: translate(500px, 0px); 
          }
          50% { 
            transform: translate(500px, 280px); 
          }
          75% { 
            transform: translate(0px, 280px); 
          }
          100% { 
            transform: translate(0px, 0px); 
          }
        }

        /* Penyesuaian responsif untuk jalur animasi */
        @media (max-width: 639px) {
            @keyframes keliling {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(300px, 0px); }
                50% { transform: translate(300px, 200px); }
                75% { transform: translate(0px, 200px); }
                100% { transform: translate(0px, 0px); }
            }
            .relative.w-full > div:not(.tech-item) {
                width: 350px !important; 
                height: 250px !important;
            }
        }

      `}</style>
    </section>
  );
}