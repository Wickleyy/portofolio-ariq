import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
          Mari Berkolaborasi
        </h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Tertarik untuk mendiskusikan proyek teknologi, eksplorasi data, atau sekadar bertukar pikiran? Silakan isi form di bawah ini.
        </p>
      </motion.div>

      <motion.form 
        action="https://formspree.io/f/ID_FORM_KAMU_DISINI" 
        method="POST"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-sm text-left space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nama</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Nama"
            className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="email@example.com"
            className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
          <textarea 
            name="message" 
            required 
            rows="4"
            placeholder="Halo, saya ingin mengajak kerja sama..."
            className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 group"
        >
          Kirim Pesan
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </motion.form>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col items-center gap-6"
      >
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
          Temukan saya di
        </p>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/thariq-fadhlurrahman-955048285/" target="_blank" rel="noreferrer" className="p-3 bg-white/60 backdrop-blur-sm border border-white rounded-full text-slate-600 hover:text-blue-600 hover:scale-110 hover:shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com/Wickleyy" target="_blank" rel="noreferrer" className="p-3 bg-white/60 backdrop-blur-sm border border-white rounded-full text-slate-600 hover:text-slate-900 hover:scale-110 hover:shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a href="https://instagram.com/thariqfadhlurrahman" target="_blank" rel="noreferrer" className="p-3 bg-white/60 backdrop-blur-sm border border-white rounded-full text-slate-600 hover:text-pink-600 hover:scale-110 hover:shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;