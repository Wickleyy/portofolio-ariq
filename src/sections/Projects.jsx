import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "89secondStuff (Mobile E-Commerce)",
      category: "Mobile Application Developer",
      description: "Aplikasi e-commerce mobile khusus untuk kemitraan thrift store lokal yang dibangun menggunakan Flutter. Dilengkapi fitur live chat real-time antara pengguna dan admin (Supabase), serta caching data lokal yang efisien (Hive).",
      techStack: ["Flutter", "Dart", "Supabase", "Hive"],
      image: "src/assets/89secondstuff.jpg", 
      link: "#",
      github: "https://github.com/Wickleyy/89Secondstuff_App.git"
    },
    {
      id: 2,
      title: "LocalLook",
      category: "E-Commerce Web Developer",
      description: "Platform marketplace full-stack yang didedikasikan untuk brand fashion lokal. Proyek ini mengintegrasikan payment gateway Midtrans untuk transaksi digital yang aman, dan dilengkapi dengan dashboard admin komprehensif bagi merchant untuk mengelola inventaris.",
      techStack: ["Laravel", "Tailwind CSS", "Midtrans", "MySQL"],
      image: "src/assets/locallook.png", 
      link: "#",
      github: "https://github.com/Wickleyy/locallook"
    },
    {
      id: 3,
      title: "Village Digital Profile & Custom CMS",
      category: "Web Developer (PMM)",
      description: "Memimpin tim PMM dalam mendigitalisasi desa melalui pengembangan website profil perusahaan menggunakan Native PHP. Sistem ini memiliki CMS khusus yang memungkinkan perangkat desa memperbarui berita dan direktori UMKM tanpa perlu pengetahuan coding.",
      techStack: ["Native PHP", "MySQL", "Custom CMS"],
      image: "/village.jpg", 
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
          Featured Work
        </h2>
        <div className="h-1 w-20 bg-slate-400 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="space-y-24">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-video rounded-3xl shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden relative group bg-slate-50">
                {project.image.includes('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${project.image}`}>
                    <span className="text-slate-500 font-medium tracking-widest text-sm uppercase group-hover:scale-110 transition-transform duration-500">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-5">
                <div>
                  <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 shadow-sm text-slate-700 text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={project.github} className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 transition-all shadow-sm">
                    <Code size={18} strokeWidth={2} />
                  </a>
                  <a href={project.link} className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 transition-all shadow-sm">
                    <ExternalLink size={18} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;