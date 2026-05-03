import React from 'react';
import { motion } from 'framer-motion';
import FloatingDock from './components/FloatingDock';
import Projects from './sections/Projects';
import About from './sections/About';
import Writings from './sections/Writings';
import Contact from './sections/Contact';
// import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col font-sans selection:bg-slate-200">

      <main id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto w-full"
        >
          
          <div className="shrink-0 relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-blue-400 to-slate-300 shadow-lg">
              <img
                src="src/assets/profile.png" 
                alt="Profile Thariq"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="absolute bottom-2 right-0 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-2">
               <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-xs font-semibold text-slate-700">Available</span>
            </div>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
              Hi, saya <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">Thariq Fadhlurrahman.</span>
            </h1>
            <p className="font-sans text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
              Informatics Student at UMM | Flutter & Web Developer | Data Analysis Enthusiast
            </p>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              Membangun aplikasi web dan mobile yang fungsional dan skalabel, serta menganalisis data untuk memecahkan masalah di dunia nyata.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
               <a href="#projects" className="px-6 py-2.5 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all shadow-lg shadow-slate-800/20 active:scale-95">
                 Lihat Karya
               </a>
               <a href="#contact" className="px-6 py-2.5 bg-white/50 text-slate-800 border border-white rounded-full font-medium hover:bg-white transition-all shadow-sm active:scale-95">
                 Hubungi Saya
               </a>
            </div>
          </div>
          
        </motion.div>
      </main>

      <About />
      <Projects />
      <Writings />
      <Contact />

      <div className="h-24"></div>
      <FloatingDock />
      
    </div>
  );
}

export default App;