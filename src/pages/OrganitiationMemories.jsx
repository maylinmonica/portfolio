import { useState } from 'react';

export default function OrganizationGallery() {
  const [selectedMemory, setSelectedMemory] = useState({});

  const memories = [
     {
      id: 1,
      title: "Raksaka Festival Music - Team Hospitality",
      date: "March 2025",
      images: [
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760176318/WhatsApp_Image_2025-10-11_at_17.51.34_mcprnw.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760176317/WhatsApp_Image_2025-10-11_at_17.51.05_w3vyot.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760176748/WhatsApp_Image_2025-10-11_at_17.58.51_cfdxnr.jpg"
      ],
      story: "A memorable experience at Raksaka Festival Music as part of the Hospitality Team! This year’s festival celebrated the anniversary of the Faculty of Engineering and Vocational Studies at Universitas Pendidikan Ganesha, and I had the privilege of managing and assisting our amazing guest stars, Bernadya and HiVi! From coordinating schedules to ensuring every need was met, it was an intense yet incredibly rewarding day. Seeing the performers shine and the audience enjoy every moment made all the effort worthwhile, and it was amazing to be part of a team that made this celebration run smoothly and successfully."
    },
    {
      id: 2,
      title: "IT Educare - Team Teaching Volunteer",
      date: "December 2024",
      images: [
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760177280/WhatsApp_Image_2025-10-08_at_16.02.43_ypm7h1.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760177764/WhatsApp_Image_2025-10-08_at_16.02.41_tmhknd.jpg"
      ],
      story: "A memorable experience at IT Educare as part of the volunteer teaching team! Organized by HMJ Teknik Informatika, this session took place at an orphanage where I had the privilege of introducing children to various software for learning and self-expression. Seeing their excitement and curiosity made the day incredibly rewarding, while also honing my communication skills in presenting IT concepts clearly and engagingly."
    },
    {
      id: 3,
      title: "Utech - Public Relation Team",
      date: "September 2024",
      images: [
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178337/WhatsApp_Image_2025-10-11_at_18.23.30_ydp8tq.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178337/WhatsApp_Image_2025-10-11_at_18.23.31_vs3eab.jpg"
    
      ],
      story: "A memorable experience at UTech as part of the Public Relations Team! In this role, I helped manage communications, coordinated with participants, and ensured that the event ran smoothly from a publicity perspective. It was exciting to connect with various stakeholders, share updates, and see our efforts contribute to a successful and engaging event. This experience also strengthened my teamwork and communication skills, making me more confident in handling public-facing responsibilities.!"
    },
    {
      id: 4,
      title: "Faculty Activity Orientation - Team Mentor",
      date: "August 2024",
      images: [
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760179001/WhatsApp_Image_2025-10-11_at_18.32.17_scy90f.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178784/WhatsApp_Image_2025-10-11_at_18.32.38_vnrywo.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178419/WhatsApp_Image_2025-10-08_at_16.02.23_1_b2rcdl.jpg"

      ],
      story: "A memorable experience during Faculty Orientation as a mentor for the Arduino group! I guided and coordinated new students to help them navigate the orientation smoothly. It was incredibly rewarding to see them adapt and grow, while also strengthening my leadership, coordination, and communication skills. This experience allowed me to build connections with younger students and understand the importance of teamwork in creating a positive and supportive environment."
    },
    {
      id: 5,
      title: "Team Content Social Media FTK",
      date: "June 2024",
      images: [
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760179406/WhatsApp_Image_2025-10-11_at_18.41.01_xgj04u.jpg"
      ],
      story: "A rewarding experience as part of the Social Media Content Team at FTK! I created engaging content aimed at attracting the community to consider studying at Universitas Pendidikan Ganesha, focusing on building the faculty’s brand and appeal. Crafting posts that captured attention and showcased the university’s strengths was both creative and challenging, and it sharpened my skills in content strategy, audience engagement, and digital storytelling. Seeing the positive response from the community made all the effort worthwhile"
    },
     {
      id: 5,
      title: "Integer#5 - Team Marketing and Promotion",
      date: "October 2023",
      images: [
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760179705/WhatsApp_Image_2025-10-11_at_18.47.04_ythwqd.jpg",
        "https://res.cloudinary.com/dcypivjgg/image/upload/v1760179704/WhatsApp_Image_2025-10-11_at_18.47.04_1_bxmp2b.jpg"
      ],
      story: "A memorable experience at Integer#5, the anniversary celebration of the Teknik Informatika Department at Universitas Pendidikan Ganesha! As a new student, I joined the Marketing and Promotion division and also acted as a talent promoting the event on social media platforms like TikTok. This experience taught me valuable skills in digital promotion, communication, and teamwork, while allowing me to connect with other students and organizers. It was exciting, rewarding, and a great opportunity to grow both personally and professionally."
    }
    
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff]">
      {/* Hero Section with Grid Background */}
      <section className="min-h-screen flex items-center justify-center px-6 py-28 md:py-20 relative overflow-hidden -mt-10">
        <div className="max-w-7xl w-full relative z-10">
          
          {/* Main Content Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:h-[500px] h-auto pb-20 md:pb-0" mt>
            
            {/* Background Grid Frame (sesuai referensi portfolio) */}
            <div className="absolute inset-0 w-full h-full z-1- opacity-30">
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
              {/* === MOBILE ADJUSTMENTS: w/h on mobile reduced for better fit === */}
              <div className="relative w-full max-w-sm sm:max-w-md h-[400px] sm:h-[500px] md:h-[600px]">

                {/* Camera 1 (top left, hanging) */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760172506/2_lwfuiv.png"
                  alt="Camera Decoration 1"
                  // === MOBILE ADJUSTMENTS: Reduced w on mobile ===
                  className="absolute top-[6%] left-[4%] w-16 sm:w-24 md:w-64 h-auto object-contain drop-shadow-lg transform rotate-[-15deg] z-10"
                />

                {/* Smiley Flower (bottom left) */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760172986/8_yujidb.png"
                  alt="Smiley Flower"
                  // === MOBILE ADJUSTMENTS: Reduced w on mobile ===
                  className="absolute bottom-[30%] left-[4%] w-12 sm:w-16 md:w-40 h-auto object-contain drop-shadow-lg z-10"
                />

                {/* Main Illustration - Person */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760172506/3_fsobqv.png"
                  alt="Maylin Illustration"
                  // === MOBILE ADJUSTMENTS: Adjusted position and w on mobile ===
                  className="absolute bottom-[40%] left-[40%] w-[80%] sm:w-[75%] md:w-[90%] h-auto object-contain drop-shadow-2xl z-20"
                />

                {/* Camera 2 (bottom right) */}
                <img
                  src="https://res.cloudinary.com/dcypivjgg/image/upload/v1760172579/7_w2s2pe.png"
                  alt="Camera Decoration 2"
                  // === MOBILE ADJUSTMENTS: Reduced w on mobile ===
                  className="absolute bottom-[20%] left-[55%] w-20 sm:w-28 md:w-64 h-auto object-contain drop-shadow-lg transform rotate-[5deg] z-30"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-2 relative z-40 transform md:-translate-y-6 lg:-translate-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Pacifico] text-[#130000] leading-tight">
                Hi! Let's see my <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#b71c1c]">memories organization</span>
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-full md:max-w-lg mx-auto md:mx-0">
                Click on each polaroid below to reveal the photo and discover the stories behind my journey in various organizations and activities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Zigzag Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-20 -mt-10">
        {/* === MOBILE ADJUSTMENTS: Reduced space between items on mobile === */}
        <div className="space-y-20 md:space-y-32">
          {memories.map((memory, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={memory.id}
                // === MOBILE ADJUSTMENTS: Ensure items stack on mobile regardless of index (md:flex-row/md:flex-row-reverse handles desktop) ===
                className={`flex flex-col ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 md:gap-16 items-center`}
              >
                {/* Polaroid(s) */}
                <div className="flex-shrink-0 w-full md:w-auto">
                  {memory.images.length === 1 ? (
                    // Single Polaroid
                    <div
                      onClick={() => setSelectedMemory(prev => ({
                        ...prev,
                        [`${memory.id}-0`]: !prev[`${memory.id}-0`]
                      }))}
                      // === MOBILE ADJUSTMENTS: w on mobile is full-width but constrained by max-w-sm, rotation is removed on mobile ===
                      className={`w-full max-w-sm mx-auto transition-all duration-700 cursor-pointer ${
                        isLeft ? 'md:rotate-[-3deg]' : 'md:rotate-[3deg]'
                      } ${
                        selectedMemory[`${memory.id}-0`] ? 'scale-110 rotate-0 z-10' : 'hover:scale-105 hover:rotate-0'
                      }`}
                    >
                      <div className="bg-white p-5 pb-16 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                        <div className="relative overflow-hidden bg-gray-200 aspect-square">
                          <img
                            src={memory.images[0]}
                            alt={memory.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              selectedMemory[`${memory.id}-0`] ? 'opacity-100 scale-100' : 'opacity-30 scale-95 blur-sm'
                            }`}
                          />
                          {!selectedMemory[`${memory.id}-0`] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                              <div className="text-center">
                                <span className="text-white text-lg font-semibold drop-shadow-lg tracking-wide">
                                  CLICK TO REVEAL
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Multiple Polaroids - Side by Side (or stacked/wrapped on mobile)
                    <div 
                      // === MOBILE ADJUSTMENTS: Use flex-wrap to stack/wrap on mobile, justify-center for alignment ===
                      className={`flex gap-4 transition-all duration-700 justify-center ${
                        memory.images.length === 2 ? 'flex-row' : 'flex-wrap max-w-[800px] mx-auto'
                      }`}
                    >
                      {memory.images.map((img, idx) => {
                        const rotations = memory.images.length === 2 
                          ? ['-4deg', '4deg'] 
                          : ['-3deg', '0deg', '3deg'];
                        const photoKey = `${memory.id}-${idx}`;
                        const isRevealed = selectedMemory[photoKey];
                        
                        // === MOBILE ADJUSTMENTS: Set smaller width for polaroids on mobile for 3-photo layouts ===
                        const baseWidth = memory.images.length === 3 ? 'w-[45%] sm:w-[240px]' : 'w-[48%] sm:w-[280px]';
                        
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedMemory(prev => ({
                              ...prev,
                              [photoKey]: !prev[photoKey]
                            }))}
                            className={`transition-all duration-700 cursor-pointer ${baseWidth} ${
                              isRevealed ? 'scale-105 rotate-0' : 'hover:scale-105'
                            }`}
                            // === MOBILE ADJUSTMENTS: Only apply rotations on screens >= sm (or md, depending on preference) to keep them straight on smallest screens ===
                            style={{
                              transform: isRevealed ? 'rotate(0deg)' : `rotate(${rotations[idx]})`,
                            }}
                          >
                            <div className="bg-white p-4 pb-12 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                              <div className="relative overflow-hidden bg-gray-200 aspect-square">
                                <img
                                  src={img}
                                  alt={`${memory.title} ${idx + 1}`}
                                  className={`w-full h-full object-cover transition-all duration-700 ${
                                    isRevealed ? 'opacity-100 scale-100' : 'opacity-30 scale-95 blur-sm'
                                  }`}
                                />
                                {!isRevealed && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                                    <div className="text-center">
                                      {/* === MOBILE ADJUSTMENTS: Text size smaller for smaller polaroids on mobile === */}
                                      <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg tracking-wide">
                                        CLICK TO REVEAL
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Story Section - Clean text only */}
                {/* === MOBILE ADJUSTMENTS: Text is centered on mobile for better balance === */}
                <div className="flex-1 transition-all duration-700 text-center md:text-left">
                  {/* Date Badge */}
                  <div className="inline-block bg-[#b71c1c] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    {memory.date}
                  </div>
                  
                  {/* Story Title */}
                  <h3 className="text-3xl font-bold text-[#130000] mb-5">
                    {memory.title}
                  </h3>
                  
                  {/* Story Text */}
                  {/* === MOBILE ADJUSTMENTS: Ensure text remains readable and justified on mobile (with reduced max-width) === */}
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify max-w-full md:max-w-none mx-auto mb-8">
                    {memory.story}
                  </p>

                  {/* Decorative Line */}
                  {/* === MOBILE ADJUSTMENTS: Center the line on mobile === */}
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <div className="h-1 w-16 bg-[#b71c1c] rounded"></div>
                    <div className="h-1 w-8 bg-[#b71c1c] rounded opacity-50"></div>
                    <div className="h-1 w-4 bg-[#b71c1c] rounded opacity-25"></div>
                  </div>

                  {/* Photos Counter */}
                  {memory.images.length > 1 && (
                    <div className="mt-6 text-gray-600 text-sm">
                      {Object.keys(selectedMemory).filter(key => 
                        key.startsWith(`${memory.id}-`) && selectedMemory[key]
                      ).length} of {memory.images.length} photos revealed
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

       {/* Other Events Section - Horizontal Scroll */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-[Pacifico] text-[#130000] mb-4">
              Other Events
            </h2>
          </div>

          {/* First Row - Infinite Loop */}
          <div className="mb-8 overflow-hidden">
            <div className="flex gap-6 animate-scroll-infinite">
              {/* Original Images */}
              {[
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178337/WhatsApp_Image_2025-10-11_at_18.24.30_fn3yor.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760177136/WhatsApp_Image_2025-10-11_at_18.02.20_ugupho.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178418/WhatsApp_Image_2025-10-08_at_16.02.23_bqqvsb.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180990/WhatsApp_Image_2025-10-11_at_19.06.45_fbzmjg.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180999/WhatsApp_Image_2025-10-11_at_19.09.03_wdtow0.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180999/WhatsApp_Image_2025-10-11_at_19.06.56_azx3jj.jpg",
                }
              ].concat([
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178337/WhatsApp_Image_2025-10-11_at_18.24.30_fn3yor.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760177136/WhatsApp_Image_2025-10-11_at_18.02.20_ugupho.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760178418/WhatsApp_Image_2025-10-08_at_16.02.23_bqqvsb.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180990/WhatsApp_Image_2025-10-11_at_19.06.45_fbzmjg.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180999/WhatsApp_Image_2025-10-11_at_19.09.03_wdtow0.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180999/WhatsApp_Image_2025-10-11_at_19.06.56_azx3jj.jpg",
                }
              ]).map((event, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[280px] md:w-[320px]"
                >
                  <div className="bg-white p-5 pb-12 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:rotate-0 rotate-[-2deg]">
                    <div className="relative overflow-hidden bg-gray-200 aspect-square">
                      <img
                        src={event.image}
                        alt="Event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Infinite Loop (Reverse) */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-infinite-reverse">
              {[
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180992/WhatsApp_Image_2025-10-11_at_19.06.49_klqrga.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180998/WhatsApp_Image_2025-10-11_at_19.06.55_1_umhxim.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180997/WhatsApp_Image_2025-10-11_at_19.06.51_iwkmxv.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180990/WhatsApp_Image_2025-10-11_at_19.06.39_yxpho4.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760181167/WhatsApp_Image_2025-10-11_at_19.06.39_1_epik03.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180992/WhatsApp_Image_2025-10-11_at_19.06.48_bcd8ul.jpg",
                }
              ].concat([
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180992/WhatsApp_Image_2025-10-11_at_19.06.49_klqrga.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180998/WhatsApp_Image_2025-10-11_at_19.06.55_1_umhxim.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180997/WhatsApp_Image_2025-10-11_at_19.06.51_iwkmxv.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180990/WhatsApp_Image_2025-10-11_at_19.06.39_yxpho4.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760181167/WhatsApp_Image_2025-10-11_at_19.06.39_1_epik03.jpg",
                },
                {
                  image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760180992/WhatsApp_Image_2025-10-11_at_19.06.48_bcd8ul.jpg",
                }
              ]).map((event, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[280px] md:w-[320px]"
                >
                  <div className="bg-white p-5 pb-12 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:rotate-0 rotate-[2deg]">
                    <div className="relative overflow-hidden bg-gray-200 aspect-square">
                      <img
                        src={event.image}
                        alt="Event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-infinite-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-infinite {
            animation: scroll-infinite 30s linear infinite;
          }

          .animate-scroll-infinite-reverse {
            animation: scroll-infinite-reverse 30s linear infinite;
          }

          .animate-scroll-infinite:hover,
          .animate-scroll-infinite-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

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
  );
}