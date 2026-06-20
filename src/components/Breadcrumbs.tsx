import React from 'react';
import { ActiveView } from '../types';

interface BreadcrumbsProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export default function Breadcrumbs({ activeView, setActiveView }: BreadcrumbsProps) {
  
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav aria-label="breadcrumb" className="sr-only" aria-hidden="true">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <ol className="list-none flex items-center gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="flex items-center text-xs md:text-sm font-medium text-gray-500" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a 
              itemProp="item" 
              href="/" 
              onClick={handleHomeClick}
              className="text-[#2563EB] hover:underline font-heading font-semibold"
            >
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          
          {activeView === 'products' && (
            <>
              <li className="text-[#CBD5E1] text-[10px] font-bold">›</li>
              <li className="flex items-center text-xs md:text-sm font-bold text-[#1A2B4A]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="font-heading font-extrabold text-[#1A2B4A]">Our Products</span>
                <meta itemProp="item" content="https://yukonindia.com/products.html" />
                <meta itemProp="position" content="2" />
              </li>
            </>
          )}

          {activeView === 'contact' && (
            <>
              <li className="text-[#CBD5E1] text-[10px] font-bold">›</li>
              <li className="flex items-center text-xs md:text-sm font-bold text-[#1A2B4A]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="font-heading font-extrabold text-[#1A2B4A]">Contact Us</span>
                <meta itemProp="item" content="https://yukonindia.com/contact.html" />
                <meta itemProp="position" content="2" />
              </li>
            </>
          )}

          {activeView === 'faq' && (
            <>
              <li className="text-[#CBD5E1] text-[10px] font-bold">›</li>
              <li className="flex items-center text-xs md:text-sm font-bold text-[#1A2B4A]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="font-heading font-extrabold text-[#1A2B4A]">FAQ</span>
                <meta itemProp="item" content="https://yukonindia.com/faq.html" />
                <meta itemProp="position" content="2" />
              </li>
            </>
          )}
        </ol>
      </div>
    </nav>
  );
}
