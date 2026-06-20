import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  ArrowRight, 
  FileText, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  Users, 
  ShoppingBag, 
  X,
  MessageSquare,
  Home
} from 'lucide-react';
import { ActiveView } from '../types';

interface FaqPageProps {
  onNavigateToPage: (view: ActiveView) => void;
  onRequestCallback: () => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

interface FaqCategory {
  title: string;
  icon: React.ComponentType<any>;
  items: FaqItem[];
}

export default function FaqPage({ onNavigateToPage, onRequestCallback }: FaqPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'moq-1': true, // Keep first open by default
  });

  const categories: FaqCategory[] = [
    {
      title: "Orders & Minimum Order Quantity (MOQ)",
      icon: ShoppingBag,
      items: [
        {
          id: 'moq-1',
          question: "What is the minimum order quantity (MOQ) at Yukon India?",
          answer: "We accept low minimum order quantities across most products, including glassware, plasticware, and consumables. We work with startups, small labs, and distributors placing trial orders, as well as large institutions placing bulk or tender orders. Share your required product and quantity with our team for a direct answer.",
          keywords: ["moq", "minimum order", "small labs", "trial", "bulk", "quantity"]
        },
        {
          id: 'moq-2',
          question: "Can I request product samples before placing a bulk order?",
          answer: "Yes. Because we manufacture in-house and support low minimum order quantities, you can typically request a smaller trial or sample batch before committing to a full bulk or tender order.",
          keywords: ["sample", "trial batch", "bulk order", "request samples"]
        }
      ]
    },
    {
      title: "Bulk, Tender & Private Label Orders",
      icon: Users,
      items: [
        {
          id: 'bulk-1',
          question: "Does Yukon India offer bulk and tender order supply?",
          answer: "Yes. We regularly supply bulk orders and government/institutional tender contracts for universities, research institutes, and pharmaceutical companies. Our manufacturing capacity supports large-volume orders alongside smaller trial orders from the same facility.",
          keywords: ["tender", "bulk supply", "institutions", "universities", "manufacturing capacity"]
        },
        {
          id: 'bulk-2',
          question: "Does Yukon India provide custom branding or private label manufacturing?",
          answer: "Yes. We offer custom branding and private label manufacturing for distributors, resellers, and institutions that want their own brand name, logo, or packaging on laboratory glassware, plasticware, and consumables. Contact our team to discuss specifications and minimum quantities for private label orders.",
          keywords: ["private label", "custom branding", "logo", "packaging", "distributor", "reseller"]
        }
      ]
    },
    {
      title: "Quality & Certification",
      icon: ShieldCheck,
      items: [
        {
          id: 'quality-1',
          question: "Are Yukon India's products ISO certified?",
          answer: "Yes. We manufacture under ISO 9001 certified quality standards, ensuring consistent specifications, durability, and accuracy across every product batch — important for buyers who need certification documentation for audits or tenders.",
          keywords: ["iso", "certification", "audit", "standard", "quality", "duration"]
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      items: [
        {
          id: 'shipping-1',
          question: "Which areas does Yukon India ship to?",
          answer: "We ship pan-India from our manufacturing facility in Ghaziabad, Uttar Pradesh (NCR). Delhi NCR orders typically arrive within 1-2 working days, while other regions across India typically receive orders within 3-6 working days depending on destination and order volume.",
          keywords: ["ship", "delivery", "ghaziabad", "ncr", "delhi", "pan-india", "working days"]
        }
      ]
    },
    {
      title: "Payment",
      icon: CreditCard,
      items: [
        {
          id: 'payment-1',
          question: "What payment terms does Yukon India offer?",
          answer: "Payment terms vary by order type and buyer category — for example, standard advance payment for first-time or small orders, and negotiated terms for established institutional buyers and recurring bulk contracts. Contact our team directly to confirm terms for your specific order.",
          keywords: ["payment", "payment terms", "advance payment", "recurring contracts", "institutional buyers"]
        }
      ]
    },
    {
      title: "Company & Products",
      icon: FileText,
      items: [
        {
          id: 'company-1',
          question: "What products does Yukon India manufacture and supply?",
          answer: "We manufacture and supply laboratory glassware (beakers, test tubes, measuring cylinders, conical flasks, pipettes, reagent bottles), laboratory plasticware (sample containers, centrifuge tubes, wash bottles, storage bottles, petri dishes, pipette tips), laboratory consumables, and educational laboratory supplies.",
          keywords: ["products", "glassware", "plasticware", "measuring cylinders", "test tubes", "conical flasks", "petri dishes"]
        },
        {
          id: 'company-2',
          question: "How long has Yukon India been in business?",
          answer: "Yukon India Corporation was established in 1993 and has over 30 years of experience manufacturing and supplying laboratory products to universities, research institutions, pharmaceutical companies, and industrial facilities across India.",
          keywords: ["established", "1993", "business", "30 years", "history", "experience"]
        },
        {
          id: 'company-3',
          question: "How do I get a quote from Yukon India?",
          answer: "Call +91 84475 12326 or email yukonindia45@gmail.com with your required product, specifications, and quantity. Our team typically responds the same day with pricing and availability.",
          keywords: ["quote", "pricing", "email", "phone", "contact", "pricing and availability"]
        }
      ]
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const lowerQuery = searchQuery.toLowerCase();
    return categories.map(cat => {
      const matchedItems = cat.items.filter(item => 
        item.question.toLowerCase().includes(lowerQuery) || 
        item.answer.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
      );
      return { ...cat, items: matchedItems };
    }).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  // Construct JSON-LD Schema to ensure search engines index the FAQ markup
  const faqSchema = useMemo(() => {
    const allItems = categories.flatMap(cat => cat.items);
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD Schema Ingress */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Header Area */}
      <div className="bg-gradient-to-br from-[#14361E] to-[#1E4D2B] text-white py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-[1000px] mx-auto relative z-10">
          
          {/* Visible Schema Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-300 font-medium whitespace-nowrap overflow-x-auto pb-1" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center shrink-0">
                <button 
                  onClick={() => onNavigateToPage('home')} 
                  className="hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                  itemProp="item"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span itemProp="name">Home</span>
                </button>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400 font-bold select-none text-[10px]">&rsaquo;</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center shrink-0 text-white font-extrabold">
                <span itemProp="name">FAQ</span>
                <link itemProp="item" href="https://yukonindia.com/faq" />
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <span className="inline-block bg-amber-400 text-slate-950 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-md">
            Customer Support Center
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-gray-200 font-sans max-w-3xl leading-relaxed">
            Answers to the questions we hear most often from laboratories, institutions, distributors, and businesses sourcing glassware, plasticware, and scientific consumables from Yukon India Corporation.
          </p>

          {/* Interactive B2B Search Box */}
          <div className="mt-8 max-w-xl">
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-1 flex items-center relative gap-1">
              <div className="pl-3 text-slate-400 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs e.g. MOQ, ISO, Certification, samples..." 
                className="w-full h-11 text-slate-800 text-sm md:text-base focus:outline-none px-2 font-sans placeholder-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1 px-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button 
                className="bg-[#FC913A] hover:bg-orange-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest px-5 h-11 rounded-md transition-colors"
                type="button"
              >
                Find
              </button>
            </div>
            {searchQuery && (
              <p className="text-xs text-gray-200 mt-2 font-medium">
                Filtering by: &ldquo;<span className="text-amber-300 font-semibold">{searchQuery}</span>&rdquo; &bull; Shown {filteredCategories.reduce((acc, current) => acc + current.items.length, 0)} results
              </p>
            )}
          </div>

        </div>
      </div>

      {/* Main FAQ Content Section inside Schema.org FAQPage */}
      <section className="max-w-[1000px] mx-auto px-4 md:px-6 py-12" itemScope itemType="https://schema.org/FAQPage">
        
        {filteredCategories.length === 0 ? (
          <div className="bg-white border border-slate-200 p-12 text-center rounded-xl shadow-md max-w-lg mx-auto">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No matching questions found</h3>
            <p className="text-slate-500 text-sm mb-6">
              We couldn&lsquo;t find any answers matching &ldquo;{searchQuery}&rdquo;. Try using terms like &ldquo;MOQ&rdquo;, &ldquo;pricing&rdquo;, or &ldquo;shipping&rdquo;.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="bg-[#1E4D2B] hover:bg-[#14361E] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column Sidebar: Category Jump List (Desktop only) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-36">
              <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm">
                <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">FAQ Catalog Index</h3>
                <nav className="space-y-1">
                  {filteredCategories.map((cat, index) => {
                    const CatIcon = cat.icon;
                    return (
                      <a 
                        key={index}
                        href={`#cat-${index}`}
                        className="flex items-center gap-2.5 text-slate-600 hover:text-[#1E4D2B] hover:bg-slate-50 px-2.5 py-2 rounded text-xs font-bold transition-all border-l-2 border-transparent hover:border-[#1E4D2B]"
                      >
                        <CatIcon className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">{cat.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Column: Accordion Lists */}
            <div className="lg:col-span-9 space-y-10">
              {filteredCategories.map((cat, catIndex) => {
                const CatIcon = cat.icon;
                return (
                  <div key={catIndex} id={`cat-${catIndex}`} className="scroll-mt-36">
                    <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-200">
                      <div className="bg-green-50 p-1.5 rounded text-[#1E4D2B]">
                        <CatIcon className="w-5 h-5 shrink-0" />
                      </div>
                      <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
                        {cat.title}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {cat.items.map((item) => {
                        const isOpen = openIds[item.id] || false;
                        return (
                          <div 
                            key={item.id}
                            itemScope 
                            itemProp="mainEntity" 
                            itemType="https://schema.org/Question"
                            className={`bg-white border rounded-xl overflow-hidden shadow-xs transition-all ${
                              isOpen ? 'border-green-600 ring-1 ring-green-600/10' : 'border-slate-200 hover:border-slate-350'
                            }`}
                          >
                            <h3 itemProp="name">
                              <button
                                onClick={() => toggleAccordion(item.id)}
                                className="w-full text-left px-5 py-4 font-sans text-sm md:text-base font-extrabold text-[#1A2B4A] hover:text-[#1E4D2B] flex items-center justify-between gap-4 cursor-pointer bg-transparent border-none transition-colors"
                                type="button"
                                aria-expanded={isOpen}
                              >
                                <span>{item.question}</span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-green-700' : ''}`} />
                              </button>
                            </h3>
                            
                            {/* Collapse/Expand Panel */}
                            <div 
                              className={`transition-all duration-200 ease-in-out ${
                                isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                              } overflow-hidden`}
                            >
                              <div 
                                className="px-5 py-4 text-xs md:text-sm text-slate-600 leading-relaxed font-sans"
                                itemScope 
                                itemProp="acceptedAnswer" 
                                itemType="https://schema.org/Answer"
                              >
                                <div itemProp="text">
                                  {item.answer}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Call to Action Container Card */}
        <div className="mt-16 bg-gradient-to-br from-[#1E4D2B] to-[#0D2313] text-white rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-white/[0.04] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-xl md:text-2xl font-black text-white mb-2 font-heading tracking-tight">
              Still Have Questions?
            </h3>
            <p className="text-xs md:text-sm text-gray-300 mb-6 leading-relaxed">
              Our technical procurement support units represent over 30 years of scientific delivery expertise across standard educational glassware, specialized clinical plasticware, auto-pipettes, and academic wholesale contracts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <a 
                href="tel:+918447512326"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 px-4 py-3 rounded-lg border border-white/10 transition-colors text-white"
              >
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">Call Helpline</p>
                  <p className="text-xs md:text-sm font-black">+91 84475 12326</p>
                </div>
              </a>

              <a 
                href="mailto:yukonindia45@gmail.com"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 px-4 py-3 rounded-lg border border-white/10 transition-colors text-white"
              >
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">Email Support</p>
                  <p className="text-xs md:text-sm font-black truncate">yukonindia45@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => {
                  onNavigateToPage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-1.5 bg-[#FC913A] hover:bg-orange-600 text-white text-xs md:text-sm font-black uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer"
              >
                <span>View our full product range</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button 
                onClick={onRequestCallback}
                className="inline-flex items-center justify-center gap-1.5 bg-transparent hover:bg-white/10 text-white text-xs md:text-sm font-black uppercase tracking-wider px-6 py-3 rounded-lg border border-white/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Request B2B Callback</span>
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
