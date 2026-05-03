import React from 'react';

const LanguageToggle = () => {
  const changeLanguage = (lang) => {
    const select = document.querySelector('.goog-te-combo');
    
    if (select) {
      select.value = lang;
      const event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, true);
      select.dispatchEvent(event);
    } else {
      console.log("Widget Google Translate belum selesai dimuat.");
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] hover:shadow-md transition-all cursor-pointer">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        
        <select 
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-transparent border-none outline-none text-slate-700 font-sans font-medium text-sm cursor-pointer"
        >
          <option value="id">ID</option>
          <option value="en">EN</option>
        </select>
      </div>

      <div className="fixed -top-[9999px] -left-[9999px] opacity-0 pointer-events-none">
        <div id="google_translate_element"></div>
      </div>

    </div>
  );
};

export default LanguageToggle;