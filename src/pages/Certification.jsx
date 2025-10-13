import React, { useState, useEffect } from 'react';

// Fungsi untuk mengaktifkan/menonaktifkan class di body
const toggleBodyClass = (add) => {
  if (add) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
};

export default function CertificationsSection() {
  const [openModalId, setOpenModalId] = useState(null);

  useEffect(() => {
    toggleBodyClass(openModalId !== null);
    
    return () => {
      toggleBodyClass(false);
    };
  }, [openModalId]);

  const certificates = [
    {
      id: 1,
      title: "Professional Project Management",
      issuer: "Oracle Academy",
      date: "May 2025",
      image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760004009/7_ivgymi.png",
      description: "Professional certification in project management fundamentals covering project lifecycle, planning, execution, and monitoring.",
      skills: ["Project Planning", "Risk Management", "Agile Methodology"],
    },
    {
      id: 2,
      title: "Java Fundamentals",
      issuer: "Oracle Academy",
      date: "December 2024",
      image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760004008/8_n4lv3q.png",
      description: "Comprehensive course completion on Java programming fundamentals including OOP concepts and application development.",
      skills: ["Java Programming", "OOP", "Problem Solving"],
    },
    {
      id: 3,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "June 2024",
      image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760004074/10_qmx4zl.png",
      description: "Certification in SQL (Basic) demonstrating fundamental skills in querying databases, using SELECT statements, filtering data, and applying basic SQL functions to manage and analyze datasets.",
      skills: ["SQL", "Database Querying", "Data Analysis"],
    },
    {
      id: 4,
      title: "Data Science Introduction",
      issuer: "MySkill",
      date: "October 2024",
      image: "https://res.cloudinary.com/dcypivjgg/image/upload/v1760005712/11_ybeucc.png",
      description: "Fundamental certification in Data Analysis Bootcamp focusing on data exploration, cleaning, and visualization using MySQL, MongoDB, and other basic analytical tools. Completed several mini tasks and practical exercises to build a strong foundation in data analysis.",
      skills: ["MySQL", "MongoDB", "Data Visualization"],
    },
  ];

  const handleOpenModal = (id) => {
    setOpenModalId(id);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };
  
  const handleBackdropClick = (e) => {
    if (e.target.id === `modal-backdrop-${openModalId}`) {
      handleCloseModal();
    }
  };

  return (
    <section className="bg-[#ffffff] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-[Pacifico] text-[#130000] italic drop-shadow-sm leading-tight mb-12 text-center">
          Certifications
        </h2>

        {/* Kontainer Grid Vertikal */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group cursor-pointer transition-transform duration-300 flex flex-col items-center p-4 bg-gray-50/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03]"
            onClick={() => handleOpenModal(cert.id)}
          >
            {/* Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className={`w-full ${cert.id === 4 ? 'max-h-[250px]' : 'max-h-[220px]'} object-contain transition-transform duration-500 mb-4`}
            />
            {/* Info Singkat */}
            <div className="text-center w-full flex flex-col justify-between pt-1"> 
              
              {/* 🎉 PERBAIKAN FINAL: Judul sejajar atas (top-aligned) karena tidak ada pembungkus tinggi tetap di sekitarnya. */}
              <h3 className="text-lg font-bold text-[#130000] group-hover:text-[#b71c1c] leading-snug line-clamp-2 mb-2">
                  {cert.title}
              </h3>
              
              {/* Issuer dan Date */}
              <div className="leading-none mt-auto"> 
                  <p className="text-sm text-gray-600 italic leading-snug">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* MODAL GLOBAL (Render di luar loop, dikontrol oleh state) */}
      {openModalId !== null && (() => {
        const cert = certificates.find(c => c.id === openModalId);
        if (!cert) return null;

        return (
          <div
            id={`modal-backdrop-${cert.id}`}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-auto my-auto p-0">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 sm:px-8 sm:py-6 flex items-center justify-between z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#130000]">
                  Certificate Details
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-[#b71c1c] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-8">
                {/* Certificate Image */}
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-[250px] sm:max-h-[350px] md:max-h-[450px] max-w-full w-auto object-contain rounded-lg sm:rounded-2xl"
                  />
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Title & Date */}
                  <div>
                    <h4 className="text-xl sm:text-3xl font-bold text-[#130000] mb-2 sm:mb-3">
                      {cert.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 text-base sm:text-lg">
                      <span className="text-[#b71c1c] font-semibold">
                        {cert.issuer}
                      </span>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <span className="text-gray-600">{cert.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h5 className="text-lg font-semibold text-[#130000] mb-2">
                      Description
                    </h5>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-lg font-semibold text-[#130000] mb-3">
                      Skills Acquired
                    </h5>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#b71c1c]/10 text-[#b71c1c] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      <style global jsx>{`
        body.modal-open {
          overflow: hidden !important;
          padding-right: 15px;
        }
      `}</style>
    </section>
  );
}