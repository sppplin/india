import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

export default function FixedBottomBar() {
  
  const handleWhatsAppClick = () => {
    const rawMessage = `Hello Yukon India, I am interested in inquiring about bulk laboratory glassware, plasticware, and diagnostic tools. Please share your wholesale price catalog and specification documents.`;
    const encoded = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/918447512326?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_-10px_30px_rgba(0,0,0,0.08)] border-t border-slate-200 px-4 py-2.5 md:py-3 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Side Info (visible on tablet/desktop) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
            <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
          </div>
          <div className="text-left font-sans">
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest leading-none">Established 1993</p>
            <h4 className="text-xs font-black text-slate-850 mt-1 uppercase tracking-wide">
              Yukon India Corp B2B Hotlines
            </h4>
          </div>
        </div>

        {/* Call Now and WhatsApp Now Buttons */}
        <div className="w-full sm:w-auto flex items-center gap-2 md:gap-3.5">
          
          {/* Call Now Button */}
          <a
            href="tel:+918447512326"
            className="flex-1 sm:flex-initial h-[42px] sm:h-[44px] px-4 sm:px-6 bg-[#1E4D2B] hover:bg-[#14361E] text-white rounded-lg font-sans text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-[0.98] transition-all border border-transparent select-none whitespace-nowrap"
          >
            <Phone className="w-4.5 h-4.5 text-green-300 animate-bounce" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Now Button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex-1 sm:flex-initial h-[42px] sm:h-[44px] px-4 sm:px-6 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-lg font-sans text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-[0.98] transition-all border border-transparent select-none cursor-pointer whitespace-nowrap"
          >
            {/* Real WhatsApp brand icon SVG */}
            <svg 
              className="w-4.5 h-4.5 fill-current text-white shrink-0" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.003 21c-1.74 0-3.41-.45-4.89-1.24l-.35-.2-3.64.95.97-3.55-.22-.35A8.96 8.96 0 013.003 12c0-4.96 4.04-9 9-9 4.96 0 9 4.04 9 9 0 4.96-4.04 9-9 9zm0-19c-6.07 0-11 4.93-11 11 0 1.95.51 3.79 1.41 5.39L1.003 23l4.75-1.25A10.97 10.97 0 0012.003 23c6.07 0 11-4.93 11-11s-4.93-11-11-11zm5.35 12.87c-.23-.11-1.39-.68-1.61-.76-.22-.08-.38-.11-.53.11-.15.23-.61.76-.75.91-.14.15-.28.17-.5.06a7.3 7.3 0 01-2.07-1.28c-.54-.48-.91-1.07-1.02-1.25-.11-.23-.01-.35.1-.46.1-.1.22-.26.33-.38.11-.12.15-.21.23-.35.08-.14.04-.26-.02-.38-.06-.11-.53-1.28-.73-1.76-.2-.47-.4-.41-.53-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.86 2.33.98 2.49c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.36.51.57.18 1.09.16 1.5.09.46-.07 1.39-.57 1.58-1.12.2-.55.2-1.02.14-1.12-.06-.11-.21-.17-.44-.28z"/>
            </svg>
            <span>WhatsApp Now</span>
          </button>

        </div>

      </div>
    </div>
  );
}
