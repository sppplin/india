import React from 'react';
import { Phone, FileText, ArrowRight, CheckCircle2, Building, Layers, HelpCircle, ArrowLeftRight, Check } from 'lucide-react';

interface SEOPageTemplateProps {
  slug: string;
  onRequestQuote: () => void;
  onRequestCallback: () => void;
  onNavigateToPage: (view: any) => void;
}

export default function SEOPageTemplate({ slug, onRequestQuote, onRequestCallback, onNavigateToPage }: SEOPageTemplateProps) {
  
  // Custom structure matching each page requested by the user
  const getPageData = () => {
    switch (slug) {
      case 'petri-dish':
        return {
          title: "Petri Dishes — Precision-Made for Accurate Lab Results",
          h1: "Premium Petri Dishes for Microbiology, Chemistry & Research Labs",
          intro: "YUKON INDIA manufactures and supplies high-quality petri dishes in both glass and plastic, designed for accurate, contamination-free results across microbiology, chemistry, and biology applications. Whether you need disposable plasticware for high-volume testing or reusable borosilicate glass for long-term lab use, our petri dish range is built to ISO 9001 quality standards.",
          image: "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/test-tube.png",
          actionLabel: "Get Petri Dish Quote",
          sections: [
            {
              title: "Glass Petri Dishes",
              desc: "Reusable, autoclave-safe borosilicate glass petri dishes, ideal for chemistry and biology labs that need long-term, sterilizable equipment. Available in standard diameters for culture work, sample observation, and chemical reactions."
            },
            {
              title: "Plastic Petri Dishes",
              desc: "Lightweight, disposable, and cost-effective — our plastic petri dishes are the preferred choice for microbiology labs, hospitals, and educational institutions running high-volume sample testing."
            },
            {
              title: "Petri Dish Sets for Chemistry Labs",
              desc: "Bundled petri dish kits designed specifically for chemistry lab demonstrations and school science programs."
            }
          ],
          whyChoose: [
            "Precision Manufacturing — Consistent diameter and depth for reliable, repeatable results",
            "ISO 9001 Certified — Every batch meets global quality benchmarks",
            "Bulk Supply Ready — Wholesale pricing for institutions, hospitals, and distributors",
            "Glass & Plastic Options — Choose based on your lab's sterilization and budget needs",
            "Pan-India Delivery — Reliable, on-time dispatch to labs across the country"
          ],
          whoUses: [
            "Microbiology & biology research labs",
            "Hospitals & pathology testing centers",
            "School and college chemistry/biology departments",
            "Pharmaceutical quality-testing facilities",
            "Food safety & environmental testing labs"
          ],
          faqs: [
            {
              q: "What sizes of petri dishes do you supply?",
              a: "We supply petri dishes in standard laboratory diameters used across microbiology, chemistry, and biology labs. Contact us with your specific size requirement for a quote."
            },
            {
              q: "Do you supply petri dishes in bulk for institutions?",
              a: "Yes — bulk and wholesale orders are our specialty, with pricing that scales for large institutional and distributor orders."
            },
            {
              q: "Glass or plastic — which should I choose?",
              a: "Glass petri dishes are reusable and autoclave-safe, better suited for long-term lab use. Plastic petri dishes are disposable and ideal for high-volume, single-use testing environments like microbiology and hospital labs."
            }
          ],
          relatedLinks: [
            { label: "Laboratory Glassware", view: "laboratory-glassware" },
            { label: "Laboratory Plasticware", view: "laboratory-plasticware" }
          ]
        };

      case 'chemistry-lab-equipment':
        return {
          title: "Chemistry Lab Equipment — Complete Solutions for Every Lab",
          h1: "Trusted Chemistry Lab Equipment Supplier Since 1993",
          intro: "From basic glassware to precision instruments, YUKON INDIA supplies everything your chemistry lab needs — under one roof. As a leading chemistry lab equipment manufacturer and distributor, we serve schools, colleges, universities, research institutes, and pharmaceutical companies across India.",
          image: "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/beakers.png",
          actionLabel: "Get Complete Equipment List & Quote",
          sections: [
            {
              title: "High Precision Glassware",
              desc: "Beakers, test tubes, conical flasks, measuring cylinders, pipettes, and reagent bottles — all manufactured to precise tolerances for accurate chemical work."
            },
            {
              title: "Analytical Instruments",
              desc: "Digital and vernier calipers, magnetic stirrers, microscopes, and measuring tools designed for reliable chemistry lab measurements."
            },
            {
              title: "Laboratory Consumables",
              desc: "Filter paper, specimen jars, and other everyday chemistry lab consumables that keep your lab running smoothly."
            },
            {
              title: "Chemistry Lab Kits",
              desc: "Pre-bundled kits for schools and colleges, combining essential glassware and tools for classroom demonstrations and student experiments."
            }
          ],
          whyChoose: [
            "35+ Years of Experience in manufacturing and supplying scientific equipment",
            "ISO 9001 Certified Quality — consistent, reliable products batch after batch",
            "Trusted by Leading Institutions — including DU, JNU, Dabur, and Patanjali",
            "One-Stop Supplier — glassware, instruments, chemicals, and consumables together",
            "Competitive Bulk Pricing with on-time, pan-India delivery"
          ],
          whoUses: [
            "Schools and science high school programs",
            "University chemistry research facilities",
            "Industrial quality-testing units",
            "Clinical health diagnosis laboratories",
            "Government food and pesticide test desks"
          ],
          faqs: [
            {
              q: "Do you supply complete chemistry lab setups for new institutions?",
              a: "Yes, we work with schools, colleges, and universities to supply complete chemistry lab equipment packages, including glassware, instruments, and safety products."
            },
            {
              q: "Can I get a custom quote for a mixed glassware and instrument order?",
              a: "Absolutely — share your full requirement list with us and we'll prepare a combined, cost-effective quote."
            },
            {
              q: "Do you offer chemistry lab kits for schools?",
              a: "Yes, we supply ready-made chemistry lab kits designed specifically for school and college science programs."
            }
          ],
          relatedLinks: [
            { label: "Laboratory Glassware", view: "laboratory-glassware" },
            { label: "Scientific Instruments", view: "scientific-instruments" }
          ]
        };

      case 'laboratory-glassware':
        return {
          title: "Laboratory Glassware — Precision-Engineered for Every Application",
          h1: "Premium Borosilicate Laboratory Glassware",
          intro: "YUKON INDIA manufactures and supplies high-quality laboratory glassware built for heat resistance, chemical inertness, and long-term reliability. Our borosilicate glass products are trusted by chemistry labs, research institutions, and educational facilities across India for their precision and durability.",
          image: "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/beakers.png",
          actionLabel: "Get Glassware Catalog Price list",
          sections: [
            { title: "Glass Beakers", desc: "Precision-marked for accurate volume measurement, highly resistant to thermal strain." },
            { title: "Test Tubes", desc: "Standard and specialized sizes for chemical and biological work with high durability." },
            { title: "Measuring Cylinders", desc: "High-accuracy graduated cylinders for precise liquid volume measurement." },
            { title: "Conical (Erlenmeyer) Flasks", desc: "Ideal for secure mixing, heating, titrations, and crystallization." },
            { title: "Pipettes & Burettes", desc: "Precision liquid volumetric transfer tools with calibrated gradations." },
            { title: "Reagent Bottles", desc: "Safe, airtight acid-resistant storage for analytical chemicals and solutions." }
          ],
          whyChoose: [
            "35+ Years of Manufacturing Expertise in scientific glasses",
            "ISO 9001 Certified for consistent premium quality control across every batch",
            "Trusted by DU, JNU, Dabur, Patanjali and other leading institutions",
            "Bulk & Custom Orders Welcome — from single labs to large institutional supply contracts",
            "Reliable Pan-India Delivery with breakage-proof secure packing"
          ],
          whoUses: [
            "Academic research chemistry chambers",
            "Pharmaceutical quality testing labs",
            "Petroleum & oil diagnostic units",
            "Wine, beverage, and dairy test centers",
            "Biological culture diagnostic workstations"
          ],
          faqs: [
            {
              q: "What type of glass do you use for your glassware?",
              a: "We primarily manufacture and supply borosilicate glass 3.3 products, known for superior heat resistance and chemical durability compared to standard soda-lime glass."
            },
            {
              q: "Can you fulfill large institutional orders?",
              a: "Yes, bulk and wholesale orders for universities, research institutes, and distributors are a core part of our business."
            },
            {
              q: "Do you supply both glass and plastic alternatives?",
              a: "Yes — alongside our glassware range, we also manufacture durable laboratory plasticware for labs that prefer disposable or shatter-resistant options."
            }
          ],
          relatedLinks: [
            { label: "Laboratory Plasticware", view: "laboratory-plasticware" },
            { label: "Petri Dishes Range", view: "petri-dish" }
          ]
        };

      case 'scientific-instruments':
        return {
          title: "Scientific Instruments — Precision Tools for Accurate Research",
          h1: "Reliable Scientific Instruments for Labs Across India",
          intro: "YUKON INDIA supplies precision scientific instruments built for accuracy, durability, and dependable everyday performance. From measurement tools to observational instruments, our range supports research institutions, educational facilities, and industrial laboratories nationwide.",
          image: "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/pipette.png",
          actionLabel: "Request Instruments Bulk Offer",
          sections: [
            { title: "Digital & Vernier Calipers", desc: "Precise measurement tools for extreme dimensional accuracy in research labs." },
            { title: "Lab Microscopes & LCD Microscopes", desc: "Clear, reliable optical observation for biology and chemistry specimen analysis." },
            { title: "Magnifying Glasses", desc: "Standard and digital high-power options for detailed sample inspection." },
            { title: "Magnetic Stirrers", desc: "Consistent temperature and speed-controlled mixing for chemical solutions." },
            { title: "Physics Lab Instruments", desc: "Excellent tools supporting mechanics, optics, heat dissipation, and wave experiments." }
          ],
          whyChoose: [
            "35+ Years of Industry Experience in precision scientific tools",
            "ISO 9001 Certified Quality Standards for guaranteed tool calibration",
            "Trusted by Leading Indian Institutions including DU, JNU, Dabur, and Patanjali",
            "Wide Product Range — from basic educational kits to research-grade precision instruments",
            "Competitive Wholesale Pricing with reliable damage-safe pan-India logistics"
          ],
          whoUses: [
            "School and college physics laboratories",
            "Biotechnology research incubators",
            "Mechanical engineering research desks",
            "Metallurgical testing laboratories",
            "Defense and electronics sample test labs"
          ],
          faqs: [
            {
              q: "Do you supply scientific instruments for school labs as well as research institutions?",
              a: "Yes, our range covers both basic educational instruments and precision tools for advanced research environments."
            },
            {
              q: "Can I order a custom combination of instruments and glassware together?",
              a: "Yes — share your full lab equipment list and we'll prepare a single, consolidated quote."
            },
            {
              q: "Do you offer warranties or support on precision instruments?",
              a: "We stand behind the quality of every instrument we supply. Contact our technical team for specific warranty details."
            }
          ],
          relatedLinks: [
            { label: "Chemistry Lab Equipment", view: "chemistry-lab-equipment" },
            { label: "Laboratory Glassware", view: "laboratory-glassware" }
          ]
        };

      case 'laboratory-equipment-distributor':
        return {
          title: "Laboratory Equipment Distributor — Bulk Supply You Can Rely On",
          h1: "A Distributor Partnership Built for Long-Term Reliability",
          intro: "YUKON INDIA isn't just a supplier — we're a laboratory equipment distribution partner for institutions, resellers, and businesses that need consistent, large-scale supply without compromising on quality. With 35+ years of manufacturing and distribution experience, we support bulk orders across glassware, plasticware, instruments, and chemicals.",
          image: "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/beakers.png",
          actionLabel: "Become a Distributor Partner",
          sections: [
            { title: "Direct Manufacturer Pricing", desc: "Cut out unnecessary markup from multi-layer supply chains and get high margin options." },
            { title: "Consistent Bulk Capacity", desc: "Reliable production scheduling and massive stock availability for recurring large orders." },
            { title: "ISO 9001 Certified Quality", desc: "Rest assured that every shipment meets identical stringent international standards." },
            { title: "Custom Packaging & Brand Options", desc: "Offering robust custom packing options with safety specifications suited for transit." }
          ],
          whyChoose: [
            "Direct OEM pricing options maximizing margin returns",
            "35+ Years of Trade Relationships with central government departments, universities & corporate brands",
            "Robust breakage guarantee protection on bulk borosilicate glass dispatches",
            "Pan-India logistics reach covering tier-1, tier-2, and tier-3 cities with speed",
            "Flexible credit structure and customized contract periods for authorized dealer networks"
          ],
          whoUses: [
            "Scientific equipment regional traders and importers",
            "Tender-bidding contractors representing central universities",
            "Government supply chain agents",
            "Pharma brand raw accessory procurement agents",
            "Institutional buyers or central purchasing organizations"
          ],
          faqs: [
            {
              q: "Do you offer recurring supply contracts for distributors and resellers?",
              a: "Yes, we work with regional distributors and resellers on ongoing supply agreements with consistent bulk-tier pricing."
            },
            {
              q: "What is your minimum order quantity for distributor pricing?",
              a: "Minimum order quantities vary by product category. Contact our dealer development cell with your specific requirement list."
            },
            {
              q: "Can you supply a mixed inventory of glassware, instruments, and chemicals in one order?",
              a: "Yes, this is one of the most common requests we fulfill for reseller and institutional distribution clients."
            }
          ],
          relatedLinks: [
            { label: "Chemistry Lab Equipment", view: "chemistry-lab-equipment" },
            { label: "Laboratory Glassware", view: "laboratory-glassware" }
          ]
        };

      case 'laboratory-plasticware':
        return {
          title: "Laboratory Plasticware — Durable, Lightweight, Reliable",
          h1: "High-Quality Laboratory Plasticware for Every Application",
          intro: "YUKON INDIA manufactures and supplies durable laboratory plasticware for labs that need lightweight, shatter-resistant, and cost-effective alternatives to glass — without compromising on accuracy or safety. Trusted by microbiology labs, hospitals, schools, and industrial facilities across India.",
          image: "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/pipette.png",
          actionLabel: "Get Plasticware Bulk Catalog",
          sections: [
            { title: "Sample Containers", desc: "Secure, leak-proof screw-cap storage for samples and biological specimens." },
            { title: "Centrifuge Tubes", desc: "Precision-molded polypropylene tubes supporting high rotational forces." },
            { title: "Wash Bottles & Storage Bottles", desc: "Durable, chemical-resistant easy-dispense bottles for acids and buffers." },
            { title: "Plastic Petri Dishes", desc: "Sterile or non-sterile, disposable contamination-resistant culture dishes." },
            { title: "Pipette Tips & Micropipettes", desc: "Standard and filter-barrier liquid-handling tips with universal universal-fit alignment." }
          ],
          whyChoose: [
            "Shatterproof & Safe — Eliminates glass hazards in high-activity university or industrial labs",
            "Highly Cost-Effective — Unbeatable economic pricing for disposable, high-volume culture trials",
            "Lightweight & Flexible Handling — Superior stackability and lower transport weight",
            "Precise Moldings — Standard volume gradations crafted using modern high-precision micro-cavity molds"
          ],
          whoUses: [
            "Hospitals and diagnostic laboratory centers",
            "Microbiology, biology, and genetics laboratories",
            "Agricultural pesticide research setups",
            "Chemical processing quality-control desks",
            "School and college level demonstration biology tables"
          ],
          faqs: [
            {
              q: "Is plasticware as accurate as glassware for measurements?",
              a: "Yes, our luxury laboratory plasticware is precision-molded to maintain highly accurate, consistent measurements suitable for standard research operations."
            },
            {
              q: "Do you supply disposable plasticware in bulk for hospitals and testing labs?",
              a: "Yes, bulk supply of disposable plasticware is one of our most common order types for hospitals, diagnostic centers, and biological testing facilities."
            },
            {
              q: "Can I order a mix of plasticware and glassware together?",
              a: "Absolutely — most of our institutional clients choose a fine-tuned combination of both based on specific experiment parameters."
            }
          ],
          relatedLinks: [
            { label: "Petri Dishes Range", view: "petri-dish" },
            { label: "Laboratory Glassware", view: "laboratory-glassware" }
          ]
        };

      default:
        return null;
    }
  };

  const data = getPageData();
  if (!data) {
    return (
      <div className="py-20 text-center text-gray-500">
        Page slug '{slug}' not found.
      </div>
    );
  }

  return (
    <div className="py-8 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Back Link */}
        <button 
          onClick={() => onNavigateToPage('home')}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1E4D2B] hover:text-[#14361E] mb-6 transition-colors"
        >
          <span className="mr-1">&larr;</span> Back to Main Directory
        </button>

        {/* Hero Banner Grid */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 md:p-10 mb-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-block bg-emerald-50 text-[#1E4D2B] border border-emerald-150 rounded px-2.5 py-1 text-[10px] uppercase font-black tracking-widest">
              B2B Certified Product Range
            </div>
            
            {/* Page title & H1 */}
            <p className="text-sm font-semibold text-[#FC913A] uppercase tracking-wide leading-none">{data.title}</p>
            <h1 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] leading-tight tracking-tight">
              {data.h1}
            </h1>
            
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-3xl">
              {data.intro}
            </p>

            {/* Quick Action Elements */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button 
                onClick={onRequestQuote}
                className="bg-[#FC913A] hover:bg-orange-600 text-white font-extrabold uppercase tracking-wider text-xs px-5 py-3 rounded shadow hover:shadow-md transition-all flex items-center gap-1.5"
              >
                <span>{data.actionLabel} &rarr;</span>
              </button>

              <a 
                href="tel:+918447512326"
                className="bg-white hover:bg-gray-50 border border-gray-300 text-[#1A1A1A] font-bold uppercase tracking-wider text-xs px-5 py-3 rounded transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#1E4D2B]" />
                <span>Call +91 8447512326</span>
              </a>
            </div>
          </div>

          {/* Product Category Illustration Box */}
          <div className="lg:col-span-4 flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-150 h-56 relative overflow-hidden">
            <img 
              src={data.image} 
              alt={`${data.h1} - Premium Lab Supplies | Yukon India`} 
              className="max-h-[160px] object-contain block relative z-10 filter drop-shadow-md"
              loading="eager"
              width="400"
              height="250"
              referrerPolicy="no-referrer"
            />
            {/* Decorative background grid pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#1E4D2B_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        </div>

        {/* 2-Column Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Extensive Product range details */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* The catalog list details */}
            <div className="bg-white rounded-lg border border-gray-250 p-6 md:p-8 shadow-sm">
              <h2 className="font-heading font-black text-lg md:text-xl text-[#1A1A1A] mb-4 uppercase tracking-wide border-b border-gray-100 pb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#1E4D2B]" />
                Explore Our Specification Matrix
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.sections.map((sect, i) => (
                  <div key={i} className="border border-gray-150 hover:border-emerald-300 bg-gray-50/50 p-4 rounded hover:bg-white transition-all">
                    <h3 className="font-heading font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E4D2B]"></span>
                      {sect.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-[12.5px] leading-relaxed">
                      {sect.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Yukon India list */}
            <div className="bg-[#14361E] text-white rounded-lg p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="font-heading font-black text-base md:text-lg text-[#FCD34D] uppercase tracking-wide border-b border-white/10 pb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                Why Leading Labs Choose YUKON INDIA
              </h2>
              
              <ul className="space-y-3">
                {data.whyChoose.map((choice, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{choice}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Audiences checklist */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
              <h2 className="font-heading font-black text-base md:text-lg text-[#1A1A1A] uppercase tracking-wide border-b border-gray-100 pb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#FC913A]" />
                Sectors Supported & Active Channels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                {data.whoUses.map((user, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-100 rounded text-xs text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#FC913A] shrink-0"></span>
                    <span className="font-medium truncate">{user}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions Accordion Grid */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm space-y-4">
              <h2 className="font-heading font-black text-base md:text-lg text-[#1A1A1A] uppercase tracking-wide border-b border-gray-100 pb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1E4D2B]" />
                Technical FAQs & General Guidelines
              </h2>
              
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-bold text-gray-950 text-xs md:text-sm mb-1.5 flex items-start gap-1.5">
                      <span className="text-[#1E4D2B] font-extrabold shrink-0">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-gray-500 text-xs md:text-[12.5px] leading-relaxed pl-5">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Deep Internal Linking and Quick RFQ form widget */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Pricing Lead Form Card */}
            <div className="bg-white border-2 border-[#1E4D2B] rounded-lg p-5 shadow-md relative overflow-hidden space-y-4">
              <div className="space-y-1">
                <div className="text-[10px] text-[#1E4D2B] font-extrabold uppercase tracking-widest">Speed quotation</div>
                <h3 className="font-heading font-black text-sm md:text-base text-gray-900 uppercase tracking-tight">
                  Instant B2B Lead Form
                </h3>
                <p className="text-[11px] text-gray-400">Receive accurate dealer wholesale pricing straight to your desk.</p>
              </div>

              <div className="border-t border-gray-100 pt-3 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-700 font-semibold px-2 py-1.5 bg-green-50/50 rounded border border-green-100/50">
                  <Check className="w-3.5 h-3.5 text-[#1E4D2B] shrink-0" />
                  <span>Direct OEM Manufacturer Rates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-semibold px-2 py-1.5 bg-green-50/50 rounded border border-green-100/50">
                  <Check className="w-3.5 h-3.5 text-[#1E4D2B] shrink-0" />
                  <span>Standard 100% Transit Safe Packing</span>
                </div>
              </div>

              <button 
                type="button"
                onClick={onRequestQuote}
                className="w-full h-11 bg-[#1E4D2B] hover:bg-[#14361E] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-green-300" />
                <span>Submit RFP Inquiry</span>
              </button>
            </div>

            {/* Internal Related Links Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-4">
              <h3 className="font-heading font-black text-xs md:text-sm text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2.5 flex items-center gap-1.5">
                <ArrowLeftRight className="w-4 h-4 text-[#FC913A]" />
                Related B2B Classifications
              </h3>

              <div className="flex flex-col gap-2">
                {data.relatedLinks.map((link, idx) => (
                  <button 
                    key={idx}
                    onClick={() => onNavigateToPage(link.view)}
                    className="w-full flex items-center justify-between text-left px-3 py-2 text-xs font-semibold rounded bg-slate-50 border border-slate-200 hover:border-[#1E4D2B] hover:bg-emerald-50 text-gray-800 hover:text-[#1E4D2B] transition-all group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Contact Desk Details */}
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-5 space-y-3.5">
              <p className="text-[10px] uppercase tracking-widest text-[#1E4D2B] font-black">HEAD DESK HELPLINE</p>
              
              <div className="space-y-1">
                <p className="text-gray-950 font-black text-sm">sales unit direct line</p>
                <a href="tel:+918447512326" className="text-[#FC913A] font-extrabold text-base hover:underline block">
                  +91-8447512326
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-gray-950 font-black text-sm">official email corridor</p>
                <a href="mailto:yukonindia45@gmail.com" className="text-gray-400 text-xs font-medium hover:underline block">
                  yukonindia45@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
