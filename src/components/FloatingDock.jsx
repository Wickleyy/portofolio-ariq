import React from 'react';
import { motion } from 'framer-motion';
import { Home, FolderGit2, BookOpen, Mail } from 'lucide-react';

const FloatingDock = () => {
  const navItems = [
    { id: 'home', icon: <Home size={24} strokeWidth={1.5} />, label: 'Home' },
    { id: 'projects', icon: <FolderGit2 size={24} strokeWidth={1.5} />, label: 'Projects' },
    { id: 'writings', icon: <BookOpen size={24} strokeWidth={1.5} />, label: 'Writings' },
    { id: 'contact', icon: <Mail size={24} strokeWidth={1.5} />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"> 
      <motion.div 
        className="flex items-center gap-2 md:gap-4 px-6 py-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group p-3 rounded-full hover:bg-slate-200/50 transition-colors text-secondary hover:text-primary cursor-pointer"
          >
            {item.icon}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-primary text-background text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              {item.label}
              <svg className="absolute text-primary h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
              </svg>
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingDock;