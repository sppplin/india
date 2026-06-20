import React from 'react';
import { Star, MessageSquare, Phone, FileSpreadsheet, ArrowRight, Check } from 'lucide-react';

// Import real Yukon laboratory images
import glasswareImg from '../assets/images/yukon_glassware_1781842618995.jpg';
import plasticwareImg from '../assets/images/yukon_plasticware_1781842633957.jpg';
import labHeroImg from '../assets/images/yukon_lab_hero_1781842601969.jpg';
import facilityTourImg from '../assets/images/yukon_facility_tour_1781842648913.jpg';

interface ProductsSectionProps {
  onContactClick: () => void;
  onDownloadCosting: () => void;
  onNavigateToPage?: (view: any) => void;
  onProductEnquiry?: (name: string, category: string) => void;
  onReviewClick?: (productName: string, rating: number, reviewsCount: number) => void;
}

export default function ProductsSection({ onContactClick, onDownloadCosting, onNavigateToPage, onProductEnquiry, onReviewClick }: ProductsSectionProps) {
  // Collection of exactly 8 high-volume product items from ProductsPage
  const bestSellers = [
    {
      id: "beakers",
      item: "Beakers (Griffin, Low Form, Tall Form)",
      category: "Laboratory Glassware",
      catId: "glassware",
      image: glasswareImg,
      rating: 4.9,
      reviews: 58,
      label: "Borosilicate 3.3",
      moq: "150 Pieces",
      price: "Price on request",
      desc: "Heavy-walled low-form Griffin beakers with dual graduated scales and high thermal resistance limits.",
      specs: {
        "Min Order Qty": "150 Pieces",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Borosilicate 3.3",
        "Material": "Borosilicate 3.3 Glass",
        "Thermal Limit": "Up to 500°C",
        "Chemical Resistance": "High Acid & Alkali"
      }
    },
    {
      id: "conical-flasks",
      item: "Conical Flasks (Erlenmeyer, Ground Joint)",
      category: "Laboratory Glassware",
      catId: "glassware",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRyVbnaYactHv20JlkwSFJi0CsY2q2gDtFwgVoFX5YhOTEoDQ5T-ZAmr_7RlLtC4bBT-SFjtWwD2vF6724OL9iHS08Et5ojLQMrDptd--vJaYW5shc2UgYOpw",
      rating: 4.8,
      reviews: 37,
      label: "Borosilicate 3.3",
      moq: "150 Pieces",
      price: "Price on request",
      desc: "Classic Erlenmeyer titration flasks with reinforced narrow necks to resist heavy mechanical shaking.",
      specs: {
        "Min Order Qty": "150 Pieces",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Borosilicate 3.3",
        "Material": "Borosilicate 3.3 Glass",
        "Thermal Limit": "Up to 500°C",
        "Chemical Resistance": "High Acid & Alkali"
      }
    },
    {
      id: "measuring-cylinders",
      item: "Measuring Cylinders (Class A & B, Graduated)",
      category: "Laboratory Glassware",
      catId: "glassware",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_OKhNNBeZT08NsZ0DhIfdZ9koZv56kSmP-bL-ThAyI0RRZ4sgI122P84AHpwXL1OhQROsZDSKqd81vFxsg_HrUWgX_OR6lVds8X0nhNvIlFBceH88ZwpphQ",
      rating: 4.9,
      reviews: 43,
      label: "Borosilicate 3.3",
      moq: "150 Pieces",
      price: "Price on request",
      desc: "Highest accuracy graduated cylinders with protective hexagonal bases and bold blue ceramic volume readouts.",
      specs: {
        "Min Order Qty": "150 Pieces",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Borosilicate 3.3",
        "Material": "Borosilicate 3.3 Glass",
        "Thermal Limit": "Up to 500°C",
        "Chemical Resistance": "High Acid & Alkali"
      }
    },
    {
      id: "centrifuge-tubes",
      item: "Centrifuge Tubes (15ml & 50ml Conical)",
      category: "Laboratory Plasticware",
      catId: "plasticware",
      image: "https://ik.imagekit.io/z6mqjyyzz/media/public/buy-well-centrifuge-tubes-15ml-pack-of-100-pieces-07_04_2026-0843071a.webp?tr=w-800,q-65,f-avif",
      rating: 4.9,
      reviews: 120,
      label: "Autoclavable PP",
      moq: "1000 Pieces",
      price: "Price on request",
      desc: "High-speed rating conical bottom tubes with molded graduations and writable frosted label zones.",
      specs: {
        "Min Order Qty": "1000 Pieces",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Autoclavable PP",
        "Material": "Medical Grade PP",
        "Autoclavable": "Yes, at 121°C",
        "Safety Rating": "Shatterproof"
      }
    },
    {
      id: "containers",
      item: "Sample Containers (PP & HDPE, Wide-mouth)",
      category: "Laboratory Plasticware",
      catId: "plasticware",
      image: "https://m.media-amazon.com/images/I/61+8Zjv39qL.jpg",
      rating: 4.8,
      reviews: 84,
      label: "Autoclavable PP",
      moq: "500 Pieces",
      price: "Price on request",
      desc: "Durable, non-toxic wide-mouth specimen containers featuring leak-proof threaded seal caps.",
      specs: {
        "Min Order Qty": "500 Pieces",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Autoclavable PP",
        "Material": "Medical Grade PP",
        "Autoclavable": "Yes, at 121°C",
        "Safety Rating": "Shatterproof"
      }
    },
    {
      id: "microscopes",
      item: "Biological microscopes & Stereomicroscopes",
      category: "Laboratory Instruments",
      catId: "instruments",
      image: "https://www.magnusopto.com/pub/media/catalog/product/cache/21966314c9334a05efc66cdc051a208c/m/a/magnus-microscopes-msz.png",
      rating: 4.9,
      reviews: 52,
      label: "Digital Precision",
      moq: "1 Piece",
      price: "Price on request",
      desc: "High-definition optical microscopes with fully adjustable stage configurations and crisp magnification lenses.",
      specs: {
        "Min Order Qty": "1 Piece",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Digital Precision",
        "Operation": "Continuous Mode",
        "Power Source": "AC Standard 220V",
        "Display Type": "LCD Reading Panel"
      }
    },
    {
      id: "balances",
      item: "Analytical Balances & Precision Scales",
      category: "Laboratory Instruments",
      catId: "instruments",
      image: "https://m.media-amazon.com/images/I/61a9qduyfvL.jpg",
      rating: 4.9,
      reviews: 26,
      label: "Digital Precision",
      moq: "1 Piece",
      price: "Price on request",
      desc: "High sensitivity analytical balance scales featuring rapid stabilization and LCD backlights.",
      specs: {
        "Min Order Qty": "1 Piece",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Digital Precision",
        "Operation": "Continuous Mode",
        "Power Source": "AC Standard 220V",
        "Display Type": "LCD Reading Panel"
      }
    },
    {
      id: "gloves",
      item: "Disposable Gloves, Masks & Aprons",
      category: "Laboratory Consumables",
      catId: "consumables",
      image: "https://static1.industrybuying.com/products/safety/safety-gloves/disposable-gloves/SAF.DIS.520236272_1689154596834.webp",
      rating: 4.8,
      reviews: 194,
      label: "Bulk Ready",
      moq: "50 Packs",
      price: "Price on request",
      desc: "Hypoallergenic, nitrile material powder-free disposable protection gloves with micro-textured grip.",
      specs: {
        "Min Order Qty": "50 Packs",
        "Seller Origin": "Noida, UP",
        "Supply Standard": "Bulk Ready",
        "Product Type": "Disposable Accessory",
        "Material Grade": "Validated Clinical Safety"
      }
    }
  ];

  return (
    <section className="py-12 bg-[#F8F9F8] border-b border-gray-200 animate-fadeIn" id="our-products">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Section Title */}
        <div className="text-center md:text-left space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">eCommerce Spotlight</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Featured Best-Sellers (8 Popular Products)
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl font-light">
            Directly dispatched from our central Noida warehouse. Browse individual premium items styled with transparent trade details.
          </p>
          <div className="h-1 w-16 bg-[#1E4D2B] md:mx-0 mx-auto rounded mt-2"></div>
        </div>

        {/* Dynamic 2-Column Marketplace Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bestSellers.map((prod, idx) => {
            const waMessage = `Hi Yukon India, I would like to enquire details and request wholesale specification quotes for: ${prod.item}. Please confirm minimum delivery schedules inside Noida and Delhi NCR.`;
            const waLink = `https://wa.me/918447512326?text=${encodeURIComponent(waMessage)}`;

            return (
              <div 
                key={prod.id}
                className="bg-white rounded border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#1E4D2B] transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-5"
              >
                {/* Shaded Product Image Box with Real Asset */}
                <div className="w-full sm:w-44 lg:w-48 shrink-0 h-44 sm:h-auto bg-[#F7F9F8] relative flex flex-col items-center justify-center border border-gray-150 rounded overflow-hidden select-none group">
                  <img 
                    src={prod.image} 
                    alt={`${prod.item} - Best Sellers | Yukon India ISO Lab Equipment Supplier`} 
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-300 pointer-events-none ${
                      prod.image.includes('encrypted-tbn') || prod.image.includes('shopping') || prod.image.includes('vercel-storage.com') || prod.image.includes('pipette') || prod.image.includes('test-tube') || prod.image.includes('beakers') || prod.image.includes('imagekit') || prod.image.includes('amazon') || prod.image.includes('magnus') || prod.image.includes('industrybuying')
                        ? 'object-contain p-4.5 bg-white'
                        : 'object-cover'
                    }`}
                  />
                  
                  {/* Inner soft dark gradient overlay for text backdrop */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent h-14 z-[4]"></div>

                  {/* TrustSEAL ribbon resembling IndiaMART check badge */}
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-[#FDBA13] to-amber-500 text-gray-900 font-extrabold text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5 z-[5]">
                    <span className="text-[#E51B24] font-serif font-black text-[10px]">&#10004;</span> TrustSEAL
                  </div>

                  {/* SKU Text Upper Right */}
                  <div className="absolute top-2 right-2 text-[8px] font-mono font-bold text-gray-900 bg-white/75 backdrop-blur-3xs px-1 rounded z-[5]">
                    SKU-YI-H{idx}
                  </div>

                  {/* Bottom Authentic Strap */}
                  <div className="absolute bottom-2 left-0 right-0 text-center text-[7.5px] uppercase tracking-widest font-black text-white drop-shadow-sm z-[5]">
                    YUKON DIRECT OEM
                  </div>
                </div>

                {/* Middle Information Panel */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Path badge */}
                    <span className="text-[9px] font-bold text-[#1E4D2B] tracking-wider uppercase block mb-1">
                      {prod.category}
                    </span>

                    {/* Blue Clickable Hyperlink Title */}
                    <h4 
                      onClick={() => {
                        if (onProductEnquiry) {
                          onProductEnquiry(prod.item, prod.category);
                        } else {
                          onContactClick();
                        }
                      }}
                      className="font-heading font-black text-[#0D5BC6] hover:underline hover:text-blue-800 text-sm md:text-base uppercase tracking-wide leading-snug cursor-pointer transition-colors inline-block"
                    >
                      {prod.item}
                    </h4>

                    {/* Get Latest Price Placeholder Area */}
                    <div className="mt-1 flex items-baseline gap-1 bg-gray-50/80 px-2 py-0.5 rounded inline-flex border border-gray-100">
                      <span className="text-gray-950 font-black text-[11px] select-none uppercase tracking-wide">
                        {prod.price}
                      </span>
                      <span className="text-gray-400 font-bold text-[9px]">/ Piece</span>
                      <button 
                        onClick={() => {
                          if (onProductEnquiry) {
                            onProductEnquiry(prod.item, prod.category);
                          } else {
                            onContactClick();
                          }
                        }}
                        className="text-[9px] text-[#1E4D2B] hover:underline font-black uppercase tracking-wider ml-2"
                      >
                        Ask Wholesale Price
                      </button>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 py-2 mt-2 border-y border-gray-150 border-dashed text-[11px] text-slate-700">
                      <div>
                        <span className="text-gray-400 font-bold uppercase text-[7.5px] tracking-wider block">Min Order Qty</span>
                        <span className="text-gray-850 font-black text-[10px]">{prod.moq}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 font-bold uppercase text-[7.5px] tracking-wider block">Supply Standard</span>
                        <span className="text-gray-850 font-black text-[10px] truncate block">{prod.label}</span>
                      </div>
                      {Object.entries(prod.specs).slice(3, 5).map(([key, val]) => (
                        <div key={key}>
                          <span className="text-gray-400 font-bold uppercase text-[7.5px] tracking-wider block">{key}</span>
                          <span className="text-gray-850 font-black text-[10px] truncate block">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-gray-500 text-[11px] font-light mt-2 leading-relaxed">
                      {prod.desc} Direct door delivery inside Noida Sector 63, Delhi NCR and multi-city transport linkages.
                    </p>
                  </div>

                  {/* Star review ratings */}
                  <button 
                    type="button"
                    onClick={() => {
                      if (onReviewClick) {
                        onReviewClick(prod.item, prod.rating, prod.reviews);
                      }
                    }}
                    className="flex items-center gap-1.5 pt-2 mt-2 border-t border-gray-100 text-[10.5px] cursor-pointer text-left bg-transparent border-0 p-0 hover:opacity-85 active:scale-[0.98] transition-all group/rating"
                  >
                    <div className="flex items-center text-[#FC913A] gap-0.5 font-bold group-hover/rating:text-emerald-800 transition-colors">
                      <Star className="w-3 h-3 fill-current text-amber-500" />
                      <span>{prod.rating} ({prod.reviews} ratings)</span>
                    </div>
                    <span className="text-gray-400 font-semibold text-[9px] group-hover/rating:underline">• Verified Reviews</span>
                  </button>

                  {/* Multi-action B2B row direct response buttons */}
                  <div className="grid grid-cols-3 gap-1.5 mt-3 select-none shrink-0">
                    {/* Chat button */}
                    <button 
                      onClick={() => {
                        if (onProductEnquiry) {
                          onProductEnquiry(prod.item, prod.category);
                        } else {
                          onContactClick();
                        }
                      }}
                      className="bg-[#1E4D2B] hover:bg-[#14361E] text-white rounded font-black uppercase tracking-wider text-[8.5px] py-2 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3 shrink-0" />
                      <span>CHAT</span>
                    </button>

                    {/* WhatsApp */}
                    <a 
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-emerald-50 text-[#25D366] border border-[#25D366] font-black uppercase tracking-wider text-[8.5px] py-2 rounded transition-colors flex items-center justify-center gap-1 text-center"
                      title="Message on WhatsApp"
                    >
                      <span>WHATSAPP</span>
                    </a>

                    {/* Phone call link */}
                    <a 
                      href="tel:+918447512326"
                      className="bg-[#1E4D2B] hover:bg-[#14361E] text-white rounded font-black uppercase tracking-wider text-[8.5px] py-2 transition-colors flex items-center justify-center gap-1 text-center cursor-pointer"
                    >
                      <Phone className="w-3 h-3 shrink-0" />
                      <span>CALL NOW</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Wide B2B Costing Banner Below */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
          <div className="flex items-center gap-4">
            <div className="bg-[#1E4D2B]/5 text-[#1E4D2B] rounded-full p-3.5 shrink-0">
              <FileSpreadsheet className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-base text-gray-900">
                Complete Costsheets & Product Catalog
              </h3>
              <p className="text-xs text-gray-400 font-light max-w-xl">
                Need customized specifications or bulk orders? Download our consolidated bulk pricelist matrix today.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onDownloadCosting}
              className="px-5 py-2.5 bg-[#1E4D2B] hover:bg-[#14361E] text-white text-xs uppercase tracking-wider font-extrabold rounded flex items-center justify-center space-x-1.5 transition-all shadow-sm cursor-pointer"
            >
              <span>Download Costing Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Direct Specification Categories */}
        {onNavigateToPage && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-heading font-black text-[11px] text-gray-500 uppercase tracking-widest mb-4 text-center md:text-left">
              Direct B2B Specifications & Catalog Portals
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { slug: "petri-dish", label: "Petri Dishes Range" },
                { slug: "chemistry-lab-equipment", label: "Chemistry Equipment" },
                { slug: "laboratory-glassware", label: "Laboratory Glassware" },
                { slug: "scientific-instruments", label: "Scientific Instruments" },
                { slug: "laboratory-equipment-distributor", label: "Dealer Distribution" },
                { slug: "laboratory-plasticware", label: "Lab Plasticware" }
              ].map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    onNavigateToPage(cat.slug);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-white hover:bg-[#1E4D2B] text-gray-800 hover:text-white border border-gray-200 hover:border-[#1E4D2B] px-3 py-2.5 rounded text-[11px] font-black uppercase tracking-wider text-center transition-all duration-200 shadow-3xs flex items-center justify-center min-h-[42px] cursor-pointer"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
