import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Where is YUKON INDIA located and which cities do you deliver to?",
      a: "YUKON INDIA is headquartered at 264, Gali No-5, Raghunathpuri, Baghu, Ghaziabad, Uttar Pradesh — 201001, conveniently serving Noida and Delhi NCR. We deliver laboratory glassware, plasticware, scientific instruments, chemicals, and consumables across PAN India, including Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, and all major cities."
    },
    {
      q: "Are you an ISO certified laboratory equipment supplier?",
      a: "Yes, YUKON INDIA is ISO 9001 certified. Our manufacturing and supply processes comply with global quality standards, ensuring every product — from borosilicate glassware to analytical instruments — meets stringent precision, reliability, and consistency benchmarks."
    },
    {
      q: "What types of laboratory glassware do you supply?",
      a: "We supply a comprehensive range of laboratory glassware including beakers, test tubes, measuring cylinders, conical flasks (Erlenmeyer), Buchner flasks, round bottom flasks, pipettes, burettes, reagent bottles (clear and amber), petri dishes, and more. All available in borosilicate and soda-lime glass, compliant with ISO and BIS standards."
    },
    {
      q: "Do you supply laboratory equipment to universities and research institutions?",
      a: "Absolutely. YUKON INDIA is a trusted partner to leading academic and research institutions including Delhi University, JNU, and many state universities, research labs, and engineering colleges across India. We offer institutional pricing, bulk orders, and dedicated account support."
    },
    {
      q: "Can I place bulk orders for laboratory plasticware and consumables?",
      a: "Yes. We welcome bulk and wholesale orders for all categories — laboratory plasticware (PP, HDPE, LDPE), consumables, chemicals, and instruments. Contact our sales team at +91 8447512326 or yukonindia45@gmail.com for volume pricing and customised quotes."
    },
    {
      q: "Do you supply laboratory chemicals and reagents?",
      a: "Yes. We supply AR grade (Analytical Reagent), LR grade (Laboratory Reagent), and pharma-grade chemicals including stains, indicators, solvents, and salts. All chemicals are sourced from reputed manufacturers and comply with USP, BP, and Indian Pharmacopoeia standards where applicable."
    },
    {
      q: "How long has YUKON INDIA been in business?",
      a: "YUKON INDIA was established in 1993 — giving us over 30 years of experience in the laboratory equipment supply industry. Our long-standing relationships with institutions like Dabur, Patanjali, DU, and JNU are a testament to our consistency and reliability."
    },
    {
      q: "Do you supply laboratory equipment to pharmaceutical companies in Mumbai and Chennai?",
      a: "Yes. We regularly supply pharmaceutical-grade laboratory glassware, plasticware, analytical instruments, and consumables to pharma companies in Mumbai, Navi Mumbai, Thane, Chennai, Coimbatore, and across Maharashtra and Tamil Nadu. Call us for pharma-specific catalogues and pricing."
    },
    {
      q: "What is your minimum order quantity (MOQ) for laboratory glassware?",
      a: "MOQ varies by product. For standard borosilicate glassware (beakers, flasks, test tubes), MOQ starts from 1 dozen per size. For bulk institutional or wholesale orders, we offer preferential pricing with no upper limit. Contact us to discuss your specific requirements."
    },
    {
      q: "How do I place an order or get a quote from YUKON INDIA?",
      a: "You can reach us via phone at +91 8447512326, email at yukonindia45@gmail.com, or fill out the enquiry form on our Contact Us page. Our team responds within 24 business hours with a detailed quote and product availability information."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-custom">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E4D2B]">Answers & Explanations</span>
        <h2 className="font-heading font-extrabold text-xl md:text-2xl text-gray-900 mt-1">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Comprehensive, keyword-rich answers reflecting our 30-year legacy of scientific manufacturing supply services.
        </p>
      </div>

      <div className="space-y-3 font-sans">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`rounded-lg border transition-all duration-200 ${
                isOpen ? 'border-[#1E4D2B] bg-emerald-50/10' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-gray-900 select-none focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3 pr-4">
                  <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#1E4D2B]' : 'text-gray-400'}`} />
                  <span className="text-xs md:text-sm font-heading tracking-wide">{faq.q}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-[300px] border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="p-4 text-xs md:text-sm text-slate-700 leading-relaxed font-light">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
