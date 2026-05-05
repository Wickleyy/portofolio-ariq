import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Supabase"]
    },
    {
      title: "Web Development",
      skills: ["Laravel", "Tailwind CSS", "Native PHP", "MySQL", "React", "Node.js", "JavaScript", "Golang"]
    },
    {
      title: "Data Science & Tools",
      skills: ["Python", "Data Mining", "Statistical Methods", "Machine Learning"]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
              Tentang Saya
            </h2>
            <div className="h-1 w-20 bg-slate-400 rounded-full"></div>
          </div>
          
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-justify">
            <p>
              Sebagai mahasiswa Informatika di Universitas Muhammadiyah Malang, saya memiliki minat besar dalam membangun perangkat lunak fungsional dan menganalisis data untuk menyelesaikan masalah nyata. Perjalanan saya mencakup pengalaman langsung dalam <b>Mobile Development (Flutter)</b> dan <b>Web Development (Laravel & PHP)</b>.
            </p>
            <p>
              Selain pengembangan aplikasi, saya juga sangat tertarik dengan bidang <b>Data Science</b>. Saya terbiasa menerapkan metode statistik menggunakan Python untuk menganalisis dataset dan membangun <b>model machine learning</b>.
            </p>
            <p>
              Saat ini saya terbuka untuk peluang magang di mana saya dapat berkontribusi menggunakan keahlian saya di bidang rekayasa perangkat lunak maupun analisis data.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-slate-200/60">
            <h3 className="font-sans text-xl font-semibold text-slate-800 mb-6">
              Tech Stack & Keahlian
            </h3>
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <p className="text-sm font-medium tracking-wider text-slate-500 uppercase mb-3">
                    {category.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-400 text-slate-700 text-sm font-medium rounded-xl transition-colors cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;