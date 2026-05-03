import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Writings = () => {
  const articles = [
    {
      title: "Di Antara 'Hype' AI dan Krisis Kepercayaan: Mengapa Professionalisme IT Kini Lebih Penting dari Sekadar Jago Ngoding",
      platform: "Kompasiana",
      date: "November 2025",
      link: "https://www.kompasiana.com/thariqfadhlurrahman2995174/690c5ca634777c25c84c1472/di-antara-hype-ai-dan-krisis-kepercayaan-mengapa-professionalisme-it-kini-lebih-penting-dari-sekadar-jago-ngoding"
    },
  ];

  return (
    <section id="writings" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
          Writings & Thoughts
        </h2>
        <div className="h-1 w-20 bg-secondary/30 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.a 
            href={article.link}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all"
          >
            <p className="text-sm font-medium text-secondary mb-3">
              {article.platform} • {article.date}
            </p>
            <h3 className="text-xl font-semibold text-primary mb-6 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center text-sm font-medium text-primary">
              Baca artikel <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Writings;