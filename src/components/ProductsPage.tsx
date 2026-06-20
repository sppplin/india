import React, { useState } from 'react';
import { Layers, GraduationCap, Sparkles, ShoppingBag, ArrowRight, Download, FlaskConical, CircleHelp, Shield, Atom, Settings, Star, Phone, MessageSquare, Check, ShieldCheck } from 'lucide-react';

// Import real Yukon laboratory images
import glasswareImg from '../assets/images/yukon_glassware_1781842618995.jpg';
import plasticwareImg from '../assets/images/yukon_plasticware_1781842633957.jpg';
import labHeroImg from '../assets/images/yukon_lab_hero_1781842601969.jpg';
import facilityTourImg from '../assets/images/yukon_facility_tour_1781842648913.jpg';

// Exact premium image map for all Yukon laboratory list items
const exactProductImageMap: Record<string, string> = {
  // GLASSWARE
  "Beakers (Griffin, Low Form, Tall Form)": glasswareImg,
  "Test Tubes (Borosilicate, Rimmed & Rimless)": "https://m.media-amazon.com/images/I/415GpcX33sL._SX342_SY445_QL70_FMwebp_.jpg",
  "Measuring Cylinders (Class A & B, Graduated)": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_OKhNNBeZT08NsZ0DhIfdZ9koZv56kSmP-bL-ThAyI0RRZ4sgI122P84AHpwXL1OhQROsZDSKqd81vFxsg_HrUWgX_OR6lVds8X0nhNvIlFBceH88ZwpphQ",
  "Conical Flasks (Erlenmeyer, Ground Joint)": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRyVbnaYactHv20JlkwSFJi0CsY2q2gDtFwgVoFX5YhOTEoDQ5T-ZAmr_7RlLtC4bBT-SFjtWwD2vF6724OL9iHS08Et5ojLQMrDptd--vJaYW5shc2UgYOpw",
  "Graduated Pipettes & Volumetric Pipettes": "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=400",
  "Reagent Bottles (Clear & Amber Screw Cap)": "https://static1.industrybuying.com/products/lab-supplies/laboratory-glassware/glass-bottles/LAB.GLA.721884962_1695994032948.webp",
  "Round Bottom Flasks (Single/Multi-neck)": "https://static1.industrybuying.com/products/lab-supplies/laboratory-glassware/flasks/round-bottom-flask/LAB.ROU.828218828_1734347320254.webp",
  "Petri Dishes (Borosilicate Stacking Type)": "https://ik.imagekit.io/z6mqjyyzz/media/public/remediolife-petri-dish-90mm-pack-of-100-pieces-07_04_2026-d39580c7.webp?tr=w-800,q-65,f-avif",

  // PLASTICWARE
  "Sample Containers (PP & HDPE, Wide-mouth)": "https://m.media-amazon.com/images/I/61+8Zjv39qL.jpg",
  "Centrifuge Tubes (15ml & 50ml Conical)": "https://ik.imagekit.io/z6mqjyyzz/media/public/buy-well-centrifuge-tubes-15ml-pack-of-100-pieces-07_04_2026-0843071a.webp?tr=w-800,q-65,f-avif",
  "Wash Bottles (LDPE with Nozzle)": "https://m.media-amazon.com/images/I/411AKj9Ti4L._AC_UF1000,1000_QL80_.jpg",
  "Storage Bottles (Wide & Narrow Mouth)": "https://static1.industrybuying.com/products/lab-supplies/laboratory-glassware/glass-bottles/LAB.GLA.436797202_1765771468425.webp",
  "Petri Dishes (Sterile Disposable PP)": "https://ik.imagekit.io/z6mqjyyzz/media/public/remediolife-petri-dish-90mm-pack-of-100-pieces-07_04_2026-d39580c7.webp?tr=w-800,q-65,f-avif",
  "Pipette Tips (Universal Fit, Filtered/Non-filtered)": "https://images.unsplash.com/photo-1620259163098-b64fe419fa79?auto=format&fit=crop&q=80&w=400",
  "Microcentrifuge Tubes (0.2ml to 2.0ml)": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400",
  "Reagent Reservoirs (Multi-channel PP)": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400",

  // LAB INSTRUMENTS
  "Analytical Balances & Precision Scales": "https://m.media-amazon.com/images/I/61a9qduyfvL.jpg",
  "Heating & Stirring Mantles & Hotplates": "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=400",
  "Biological microscopes & Stereomicroscopes": "https://www.magnusopto.com/pub/media/catalog/product/cache/21966314c9334a05efc66cdc051a208c/m/a/magnus-microscopes-msz.png",
  "Microcentrifuges & Tabletop Centrifuges": "https://images.unsplash.com/photo-1579154204601-01552f474667?auto=format&fit=crop&q=80&w=400",
  "Digital pH Meters & Conductivity Meters": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
  "UV-Vis Spectrophotometers": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=400",
  "Vortex Mixers & Shakers": "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&q=80&w=400",
  "Thermostatic Water Baths": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400",

  // CONSUMABLES
  "Disposable Gloves, Masks & Aprons": "https://static1.industrybuying.com/products/safety/safety-gloves/disposable-gloves/SAF.DIS.520236272_1689154596834.webp",
  "Syringe Filters, Membrane Filters": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400",
  "Glass Slides, Cover Slips, Cuvettes": "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400",
  "Lab Markers, Notebooks & Stationery": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",

  // EDUCATIONAL
  "School Physics & Chemistry Kits": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
  "Biological Models, Charts & Slide Boxes": "https://images.unsplash.com/photo-1530210120071-01b51408f443?auto=format&fit=crop&q=80&w=400",
  "Student Lab Starter Packs": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=400",
  "Basic Measurement Apparatus": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=400",

  // SAFETY
  "Chemical Splash Goggles (Anti-fog)": "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=400",
  "Safety Fire Blanket & Extinguishers": "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=400",
  "Nitrile & Neoprene Protective Gloves": "https://static1.industrybuying.com/products/safety/safety-gloves/disposable-gloves/SAF.DIS.520236272_1689154596834.webp",
  "Comprehensive Laboratory First Aid Kits": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",

  // CHEMICALS
  "AR Grade Analytical Reagents & Acids": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400",
  "LR Grade Chemicals & General Powders": "https://images.unsplash.com/photo-1559819614-81fea9efd090?auto=format&fit=crop&q=80&w=400",
  "Specialty Stains, Indicators & Buffers": "https://images.unsplash.com/photo-1581093588401-f3c22d74591a?auto=format&fit=crop&q=80&w=400",
  "Pharma Grade Raw Solvents & Standards": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400"
};

const getProductDetails = (item: string, catId: string) => {
  let desc = "Premium grade quality, tested under strict ISO 9001 quality standards for industrial and laboratory safety.";
  let rating = 4.8;
  let reviews = 24;
  let label = "ISO Approved";
  let color = "emerald";
  let price = "₹ 150/Piece";
  let moq = "100 Pieces";
  let specs: { [key: string]: string } = {
    "Location": "Noida, NCR",
    "Brand": "YUKON INDIA",
    "Service Mode": "Offline Delivery",
    "Standards": "ISO 9001:2015 Approved",
    "Supply Flow": "Direct OEM Dispatch"
  };

  if (catId === 'glassware') {
    label = "Borosilicate 3.3";
    color = "teal";
    moq = "150 Pieces";
    specs["Material"] = "Borosilicate 3.3 Glass";
    specs["Thermal Limit"] = "Up to 500°C";
    specs["Chemical Resistance"] = "High Acid & Alkali";
    if (item.includes("Beakers")) {
      desc = "Heavy-walled low-form Griffin beakers with dual graduated scales and high thermal resistance limits.";
      rating = 4.9;
      reviews = 58;
      price = "₹ 85/Piece";
    } else if (item.includes("Test Tubes")) {
      desc = "Autoclavable borosilicate glassware test tubes with standard rimmed/rimless designs for diverse reaction heatings.";
      rating = 4.8;
      reviews = 112;
      price = "₹ 12/Piece";
      moq = "1000 Pieces";
    } else if (item.includes("Measuring Cylinders")) {
      desc = "Highest accuracy graduated cylinders with protective hexagonal bases and bold blue ceramic volume readouts.";
      rating = 4.9;
      reviews = 43;
      price = "₹ 240/Piece";
    } else if (item.includes("Conical Flasks")) {
      desc = "Classic Erlenmeyer titration flasks with reinforced narrow necks to resist heavy mechanical shaking.";
      rating = 4.8;
      reviews = 37;
      price = "₹ 130/Piece";
    } else if (item.includes("Pipettes")) {
      desc = "Precision volumetric and graduated glass pipettes calibrated at exactly 20°C for error-free liquid transfers.";
      rating = 4.9;
      reviews = 29;
      price = "₹ 95/Piece";
    } else if (item.includes("Reagent Bottles")) {
      desc = "Clear or amber chemical storage bottles with high-integrity GL45 leakproof screw caps and drip-free pouring rings.";
      rating = 4.9;
      reviews = 74;
      price = "₹ 280/Piece";
      moq = "50 Pieces";
    } else if (item.includes("Flasks")) {
      desc = "Round-bottom flasks built for uniform heat distribution across single or multiple ground-glass joint necks.";
      rating = 4.8;
      reviews = 18;
      price = "₹ 160/Piece";
    } else if (item.includes("Petri Dishes")) {
      desc = "Premium flat culture glass dishes engineered for pristine microbial propagation and easy sterilization autoclaving.";
      rating = 4.8;
      reviews = 92;
      price = "₹ 75/Piece";
      moq = "200 Pieces";
    } else {
      price = "₹ 110/Piece";
    }
  } else if (catId === 'plasticware') {
    label = "Autoclavable PP";
    color = "indigo";
    moq = "200 Pieces";
    specs["Material"] = "Medical Grade Polypropylene (PP)";
    specs["Autoclavable"] = "Yes, at 121°C";
    specs["Safety Rating"] = "Shatterproof & Non-Toxic";
    if (item.includes("Containers")) {
      desc = "Durable, non-toxic wide-mouth specimen containers featuring leak-proof threaded seal caps.";
      rating = 4.8;
      reviews = 84;
      price = "₹ 18/Piece";
      moq = "500 Pieces";
    } else if (item.includes("Centrifuge Tubes")) {
      desc = "High-speed rating conical bottom tubes with molded graduations and writable frosted label zones.";
      rating = 4.9;
      reviews = 120;
      price = "₹ 8/Piece";
      moq = "1000 Pieces";
    } else if (item.includes("Wash Bottles")) {
      desc = "Squeeze-and-dispense narrow-nozzle wash bottles designed with chemical-resistant flexible LDPE.";
      rating = 4.7;
      reviews = 66;
      price = "₹ 45/Piece";
    } else if (item.includes("Storage Bottles")) {
      desc = "Heavy-grade plastic storage vessels suited for storing analytical buffers, standards, and solvents safely.";
      rating = 4.8;
      reviews = 41;
      price = "₹ 78/Piece";
    } else if (item.includes("Petri Dishes")) {
      desc = "Optically clear, gamma-sterilized disposable PP dishes for rapid clinical pathology incubation.";
      rating = 4.9;
      reviews = 210;
      price = "₹ 6.50/Piece";
      moq = "1200 Pieces";
    } else if (item.includes("Pipette Tips")) {
      desc = "Precision universal aerosol-barrier pipette tips ensuring zero sample cross-contamination in critical tests.";
      rating = 4.9;
      reviews = 145;
      price = "₹ 1.20/Piece";
      moq = "5000 Pieces";
    } else if (item.includes("Microcentrifuge")) {
      desc = "Excellent flat-top safe snap lock micro-tubes designed to withstand extreme centrifugal forces.";
      rating = 4.8;
      reviews = 98;
      price = "₹ 2.50/Piece";
      moq = "2000 Pieces";
    } else {
      desc = "Multi-channel reagent reservoirs with optimized angled bases for minimal residual waste.";
      reviews = 31;
      price = "₹ 62/Piece";
    }
  } else if (catId === 'instruments') {
    label = "Digital Precision";
    color = "amber";
    moq = "1 Piece";
    specs["Operation"] = "Continuous / Variable Mode";
    specs["Power Source"] = "AC Standard 220V plug-in";
    specs["Display Type"] = "LCD Backlit Reading Panel";
    if (item.includes("Balances")) {
      desc = "High sensitivity analytical balance scales featuring rapid stabilization and LCD backlights.";
      rating = 4.9;
      reviews = 26;
      price = "₹ 14,500/Piece";
    } else if (item.includes("Heating")) {
      desc = "Even heat distribution stirring mantles integrated with precise PID digital controllers.";
      rating = 4.8;
      reviews = 19;
      price = "₹ 5,800/Piece";
    } else if (item.includes("microscopes")) {
      desc = "High-definition optical microscopes with fully adjustable stage configurations and crisp magnification lenses.";
      rating = 4.9;
      reviews = 52;
      price = "₹ 18,500/Piece";
    } else if (item.includes("Centrifuges")) {
      desc = "Silent tabletop centrifuges engineered with integrated safety cover lids and automatic timer alerts.";
      rating = 4.8;
      reviews = 33;
      price = "₹ 12,200/Piece";
    } else if (item.includes("pH Meters")) {
      desc = "Calibrated digital pocket-sized testing markers for instant precise buffer measurements.";
      rating = 4.7;
      reviews = 47;
      price = "₹ 1,800/Piece";
    } else if (item.includes("Spectrophotometers")) {
      desc = "Professional grade spectrometry instruments suited for demanding scientific sample analysis.";
      rating = 4.9;
      reviews = 15;
      price = "₹ 64,000/Piece";
    } else if (item.includes("Mixers")) {
      desc = "Vortex variable speed mixing units designed with robust suction-foot stabilizers.";
      rating = 4.8;
      reviews = 42;
      price = "₹ 3,900/Piece";
    } else {
      desc = "Precision thermostatic warm water baths constructed from corrosion-proof steel components.";
      rating = 4.8;
      reviews = 22;
      price = "₹ 11,500/Piece";
    }
  } else if (catId === 'consumables') {
    label = "Bulk Ready";
    color = "blue";
    moq = "50 Packs";
    specs["Product Type"] = "Disposable Laboratory Accessory";
    specs["Material Grade"] = "Validated Clinical Safety standards";
    if (item.includes("Gloves")) {
      desc = "Hypoallergenic, nitrile material powder-free disposable protection gloves with micro-textured grip.";
      rating = 4.8;
      reviews = 194;
      price = "₹ 480/Pack of 100";
    } else if (item.includes("Filters")) {
      desc = "Individually blister-packed syringe filters with certified hydrophilic/hydrophobic molecular ratings.";
      rating = 4.9;
      reviews = 85;
      price = "₹ 35/Piece";
      moq = "100 Pieces";
    } else if (item.includes("Slides")) {
      desc = "Pristine, non-fogging glass slides featuring uniform thickness and safe ground-down edges.";
      rating = 4.9;
      reviews = 104;
      price = "₹ 180/Pack of 50";
    } else {
      desc = "Vapor-resistant archival lab markers and water-resistant chemistry records logs stationery.";
      rating = 4.7;
      reviews = 39;
      price = "₹ 120/Piece";
    }
  } else if (catId === 'educational') {
    label = "Curriculum Ready";
    color = "cyan";
    moq = "10 Sets";
    specs["Academic Stage"] = "CBSE/ICSE High School and Grad level";
    specs["Standards"] = "STEM Integrated Curriculum model";
    if (item.includes("Physics")) {
      desc = "Comprehensive mechanics and physics curriculum-aligned experiment kits with manual guidebooks.";
      rating = 4.8;
      reviews = 61;
      price = "₹ 1,950/Set";
    } else if (item.includes("Models")) {
      desc = "Highly detailed anatomical skeleton models, charts and custom prepared biological slide cases.";
      rating = 4.9;
      reviews = 45;
      price = "₹ 2,400/Set";
    } else if (item.includes("Starter")) {
      desc = "Student introductory chemistry laboratory set curated with essential containers and basic flasks.";
      rating = 4.8;
      reviews = 80;
      price = "₹ 850/Set";
    } else {
      desc = "Simple calibrated weights, tuning forks, lenses, and educational reflection prisms.";
      rating = 4.7;
      reviews = 28;
      price = "₹ 320/Set";
    }
  } else if (catId === 'safety') {
    label = "EN 166 Certified";
    color = "rose";
    moq = "20 Pieces";
    specs["Impact Safety"] = "High projectile and heat proof resistance";
    specs["Certifications"] = "CE / EN 166 Laboratory standard";
    if (item.includes("Goggles")) {
      desc = "Anti-fogging, chemical-splash eye goggles built with soft vinyl frame for comfort fit.";
      rating = 4.9;
      reviews = 77;
      price = "₹ 85/Piece";
      moq = "50 Pieces";
    } else if (item.includes("Blanket")) {
      desc = "Emergency fiberglass fire-smothering blankets packed in quick-pull wall bags.";
      rating = 4.8;
      reviews = 31;
      price = "₹ 750/Piece";
      moq = "10 Pieces";
    } else if (item.includes("Gloves")) {
      desc = "Heavy-gauge extreme temperature protection nitrile and chemical protective neoprene safety hand-wear.";
      rating = 4.8;
      reviews = 52;
      price = "₹ 180/Pair";
      moq = "50 Pairs";
    } else {
      desc = "Fully stocked certified workplace first-aid kits designed for lab burn and cut treatments.";
      rating = 4.9;
      reviews = 88;
      price = "₹ 1,250/Set";
      moq = "5 Sets";
    }
  } else {
    label = "Analytical Grade";
    color = "purple";
    moq = "10 Bottles";
    specs["Chemical Safety"] = "SDS Sheet Included";
    specs["Trace Elements"] = "Ultra-Low PPT levels certified";
    if (item.includes("AR Grade")) {
      desc = "Certified high-purity analytical research acids and premium trace-element analysis reagents.";
      rating = 4.9;
      reviews = 68;
      price = "₹ 1,150/Bottle";
    } else if (item.includes("LR Grade")) {
      desc = "Laboratory reference grade general chemical solids and reagents for general education programs.";
      rating = 4.8;
      reviews = 92;
      price = "₹ 480/Bottle";
    } else if (item.includes("Stains")) {
      desc = "Specialty bio-microscopy dyes, buffer reagents, indicators and titration test kits.";
      rating = 4.8;
      reviews = 34;
      price = "₹ 350/Set";
    } else {
      desc = "High-purity pharma-standard solvents, HPLC raw standards, and pure organic buffers.";
      rating = 4.9;
      reviews = 41;
      price = "₹ 2,100/Bottle";
    }
  }

  return { desc, rating, reviews, label, color, price, moq, specs };
};

interface ProductsPageProps {
  onContactClick: () => void;
  onDownloadCatalog: () => void;
  onNavigateToPage: (view: any) => void;
  onProductEnquiry?: (name: string, category: string) => void;
  initialCategory?: string;
  onReviewClick?: (productName: string, rating: number, reviewsCount: number) => void;
}

export default function ProductsPage({ onContactClick, onDownloadCatalog, onNavigateToPage, onProductEnquiry, initialCategory, onReviewClick }: ProductsPageProps) {
  
  const categories = [
    {
      id: "glassware",
      title: "Laboratory Glassware",
      icon: FlaskConical,
      bg: "from-emerald-950 to-emerald-900",
      intro: "Precision-manufactured borosilicate and soda-lime glassware for every lab application. Compliant with ISO, BIS, and international standards.",
      seoParagraph: "YUKON INDIA is one of India's most trusted laboratory glassware suppliers, offering a complete range of borosilicate glassware to research institutions, universities, pharma companies, and industrial labs in Noida, Delhi, Mumbai, Chennai, and across India. Our glassware meets ISO and BIS standards, ensuring precision, thermal resistance, and chemical compatibility for all scientific applications.",
      items: [
        "Beakers (Griffin, Low Form, Tall Form)", 
        "Test Tubes (Borosilicate, Rimmed & Rimless)", 
        "Measuring Cylinders (Class A & B, Graduated)", 
        "Conical Flasks (Erlenmeyer, Ground Joint)", 
        "Graduated Pipettes & Volumetric Pipettes", 
        "Reagent Bottles (Clear & Amber Screw Cap)",
        "Round Bottom Flasks (Single/Multi-neck)",
        "Petri Dishes (Borosilicate Stacking Type)"
      ]
    },
    {
      id: "plasticware",
      title: "Laboratory Plasticware",
      icon: Layers,
      bg: "from-[#1E4D2B] to-[#14361E]",
      intro: "Autoclavable, chemical-resistant plasticware made from PP, HDPE, LDPE, and PC for diverse laboratory needs.",
      seoParagraph: "Our laboratory plasticware range includes autoclavable, chemical-resistant products manufactured from high-grade PP, HDPE, LDPE, and PC polymers. Widely used in research labs, pharmaceutical QC departments, and biotech facilities across Noida, Delhi NCR, Mumbai, and Chennai, our plasticware delivers consistent performance and long service life.",
      items: [
        "Sample Containers (PP & HDPE, Wide-mouth)", 
        "Centrifuge Tubes (15ml & 50ml Conical)", 
        "Wash Bottles (LDPE with Nozzle)", 
        "Storage Bottles (Wide & Narrow Mouth)", 
        "Petri Dishes (Sterile Disposable PP)", 
        "Pipette Tips (Universal Fit, Filtered/Non-filtered)",
        "Microcentrifuge Tubes (0.2ml to 2.0ml)",
        "Reagent Reservoirs (Multi-channel PP)"
      ]
    },
    {
      id: "instruments",
      title: "Laboratory Instruments",
      icon: Settings,
      bg: "from-emerald-900 to-emerald-800",
      intro: "Advanced analytical instruments and scientific equipment for accurate measurements and dependable research performance.",
      seoParagraph: "YUKON INDIA supplies advanced laboratory instruments including analytical balances, microscopes, centrifuges, pH meters, and spectrophotometers to research institutions and industrial labs across India. All instruments are sourced from quality-assured manufacturers and are backed by warranty, calibration certificates, and technical support.",
      items: [
        "Analytical Balances & Precision Scales", 
        "Heating & Stirring Mantles & Hotplates", 
        "Biological microscopes & Stereomicroscopes", 
        "Microcentrifuges & Tabletop Centrifuges", 
        "Digital pH Meters & Conductivity Meters", 
        "UV-Vis Spectrophotometers", 
        "Vortex Mixers & Shakers", 
        "Thermostatic Water Baths"
      ]
    },
    {
      id: "consumables",
      title: "Laboratory Consumables",
      icon: ShoppingBag,
      bg: "from-[#2F6A3D] to-[#1E4D2B]",
      intro: "Complete range of disposable lab products, research consumables, and scientific accessories for everyday laboratory use.",
      seoParagraph: "Laboratory consumables from YUKON INDIA are used in daily workflows across 200+ labs in India. From syringe filters and membrane filters to disposable gloves and cuvettes — our range covers everything you need to keep your lab running smoothly. Bulk orders for institutions and industry are welcome.",
      items: [
        "Disposable Gloves, Masks & Aprons", 
        "Syringe Filters, Membrane Filters", 
        "Glass Slides, Cover Slips, Cuvettes", 
        "Lab Markers, Notebooks & Stationery"
      ]
    },
    {
      id: "educational",
      title: "Educational Laboratory Supplies",
      icon: GraduationCap,
      bg: "from-[#3B7D4F] to-[#2F6A3D]",
      intro: "Purpose-built lab kits and supplies for schools, colleges, and training institutes. Safe, durable, curriculum-aligned.",
      seoParagraph: "YUKON INDIA is a preferred supplier of educational laboratory supplies to schools, colleges, polytechnics, and training institutes across Noida, Delhi, UP, and India. Our student lab kits, teaching aids, and demonstration materials are designed for safety, affordability, and curriculum alignment.",
      items: [
        "School Physics & Chemistry Kits", 
        "Biological Models, Charts & Slide Boxes", 
        "Student Lab Starter Packs", 
        "Basic Measurement Apparatus"
      ]
    },
    {
      id: "safety",
      title: "Safety Products",
      icon: Shield,
      bg: "from-[#14361E] to-[#14361E]",
      intro: "Lab safety equipment to ensure regulatory compliance and protect your team from hazards every day.",
      seoParagraph: "Laboratory safety is non-negotiable. YUKON INDIA's safety products range covers everything from chemical splash goggles and protective gloves to fire extinguishers and first aid kits, ensuring your lab meets all safety compliance standards. Trusted by pharma labs, industrial QC units, and research institutions across India.",
      items: [
        "Chemical Splash Goggles (Anti-fog)", 
        "Safety Fire Blanket & Extinguishers", 
        "Nitrile & Neoprene Protective Gloves", 
        "Comprehensive Laboratory First Aid Kits"
      ]
    },
    {
      id: "chemicals",
      title: "Chemicals & Reagents",
      icon: Atom,
      bg: "from-emerald-950 to-emerald-900",
      intro: "High-purity analytical reagents and laboratory chemicals for accurate, reproducible, and reliable results.",
      seoParagraph: "We supply AR grade, LR grade, and pharma-grade laboratory chemicals and reagents to pharmaceutical companies, government R&D labs, and research institutions in Delhi, Noida, Mumbai, Chennai, and PAN India. All chemicals are sourced from reputed manufacturers with proper COA documentation.",
      items: [
        "AR Grade Analytical Reagents & Acids", 
        "LR Grade Chemicals & General Powders", 
        "Specialty Stains, Indicators & Buffers", 
        "Pharma Grade Raw Solvents & Standards"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(initialCategory || 'all');

  React.useEffect(() => {
    if (initialCategory) {
      setActiveTab(initialCategory);
    }
  }, [initialCategory]);

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <div className="bg-[#FAFBF9] font-sans text-sm animate-fadeIn pb-16">
      
      {/* Horizontal Pill Badges - High Consistency Category Tabs */}
      <div className="bg-[#F0F2F1] border-b border-gray-200 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center gap-2 shrink-0">
          
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shrink-0 transition-colors cursor-pointer ${
              activeTab === 'all' 
                ? 'bg-[#1E4D2B] text-white shadow-xs' 
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            All Supplies
          </button>

          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shrink-0 transition-colors cursor-pointer ${
                activeTab === c.id 
                  ? 'bg-[#1E4D2B] text-white shadow-xs' 
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Location Pills Row */}
      <div className="bg-[#F8FAF9] py-1.5 overflow-x-auto scrollbar-none border-b border-gray-150">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center gap-2 shrink-0 text-[10.5px]">
          <span className="text-gray-400 font-bold shrink-0 uppercase text-[9px] tracking-wider">Nearby Regions:</span>
          
          {[
            "Greater Noida", 
            "Faridabad", 
            "Ghabad", 
            "Noida Sector 63", 
            "Uttar Pradesh", 
            "Delhi NCR", 
            "Mumbai Circle", 
            "Bengaluru Tech Hub",
            "Chennai Port"
          ].map((loc, lIdx) => (
            <button 
              key={lIdx}
              onClick={onContactClick}
              className="px-2.5 py-1 bg-white hover:bg-gray-50 text-gray-600 font-bold rounded border border-gray-200 shrink-0 shadow-3xs cursor-pointer"
            >
              {loc} {lIdx === 4 ? "v" : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Grey stripe / Breadcrumbs info bar (Visually hidden but preserved in the DOM for SEO) */}
      <div className="hidden bg-[#EDEFF2] border-b border-gray-300 py-2.5 px-4 shadow-3xs text-[11px] text-gray-600" style={{ display: 'none' }} aria-hidden="true">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5">
          <div>
            <span className="font-semibold text-gray-500">Scientific Instruments, Glassware & Safety Products</span>
            <span className="mx-1">&gt;</span>
            <span className="font-black text-gray-800">Laboratory Supplies OEM Noida Noida NCR UP</span>
          </div>
          <div className="flex items-center gap-1 font-extrabold text-[#D54A0F] uppercase tracking-wider text-[9.5px]">
            <span>Laboratory Equipment in Noida: OEM Catalogs & Specifications Listed</span>
            <span className="bg-gray-450 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-serif font-black lowercase text-[9px] ml-0.5 select-none">i</span>
          </div>
        </div>
      </div>

      {/* Product Category Content Area */}
      <div className="max-w-[1000px] mx-auto px-4 py-6">

        {/* List of Products (Mimicking search results perfectly) */}
        <div className="space-y-5">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            
            return (
              <div key={cat.id} className="space-y-4">
                
                {/* Embedded Inline Section Title */}
                <div className="bg-gray-100 border-l-4 border-[#1E4D2B] px-4 py-2 mt-2 flex justify-between items-center rounded-r">
                  <span className="font-black text-xs uppercase tracking-wider text-gray-800">
                    {cat.title} — Noida Warehouse Stock
                  </span>
                  <span className="text-[10px] text-[#1E4D2B] font-bold">
                    Direct OEM Catalog
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, id) => {
                    const det = getProductDetails(item, cat.id);
                    const waMessage = `Hi Yukon India, I would like to enquire details and request wholesale specification quotes for: ${item}. Please confirm minimum delivery schedules inside Noida and Delhi NCR.`;
                    const waLink = `https://wa.me/918447512326?text=${encodeURIComponent(waMessage)}`;

                    let containerBg = "from-emerald-50 to-emerald-100/30 text-emerald-800";
                    if (det.color === "teal") containerBg = "from-teal-50 to-teal-100/30 text-teal-800";
                    if (det.color === "indigo") containerBg = "from-indigo-50 to-indigo-100/30 text-indigo-800";
                    if (det.color === "amber") containerBg = "from-amber-50 to-amber-100/30 text-amber-700";
                    if (det.color === "blue") containerBg = "from-blue-50 to-blue-100/30 text-blue-800";
                    if (det.color === "cyan") containerBg = "from-cyan-50 to-cyan-100/30 text-cyan-800";
                    if (det.color === "rose") containerBg = "from-rose-50 to-rose-100/30 text-rose-850";
                    if (det.color === "purple") containerBg = "from-purple-50 to-purple-100/30 text-purple-800";

                    const productImg = exactProductImageMap[item] || (
                      cat.id === 'plasticware' ? plasticwareImg :
                      cat.id === 'instruments' ? labHeroImg :
                      cat.id === 'consumables' ? facilityTourImg :
                      cat.id === 'safety' ? facilityTourImg :
                      cat.id === 'educational' ? labHeroImg :
                      glasswareImg
                    );

                    return (
                      <div 
                        key={id}
                        className="bg-white rounded border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#1E4D2B] transition-all duration-300 p-4 sm:p-5 flex flex-col md:flex-row gap-5"
                      >
                        {/* Shaded Product Image Box with Real Asset */}
                        <div className="w-full md:w-44 lg:w-48 shrink-0 h-44 md:h-auto bg-[#F7F9F8] relative flex flex-col items-center justify-center border border-gray-150 rounded overflow-hidden select-none group">
                          <img 
                            src={productImg} 
                            alt={`${item} - ISO Certified Lab Equipment Supplier | Yukon India`} 
                            referrerPolicy="no-referrer"
                            className={`absolute inset-0 w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-300 pointer-events-none ${
                              productImg.includes('encrypted-tbn') || productImg.includes('shopping') || productImg.includes('vercel-storage.com') || productImg.includes('imagekit') || productImg.includes('amazon') || productImg.includes('magnus') || productImg.includes('industrybuying')
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
                            SKU-YI{catIdx}{id}
                          </div>

                          {/* Bottom Authentic Strap */}
                          <div className="absolute bottom-2 left-0 right-0 text-center text-[7.5px] uppercase tracking-widest font-black text-white drop-shadow-sm z-[5]">
                            YUKON DIRECT OEM
                          </div>
                        </div>

                        {/* Middle Information Panel */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            {/* Blue Clickable Hyperlink Title matches screenshot exactly */}
                            <h4 
                              onClick={() => {
                                if (onProductEnquiry) {
                                  onProductEnquiry(item, cat.title);
                                } else {
                                  onContactClick();
                                }
                              }}
                              className="font-heading font-black text-[#0D5BC6] hover:underline hover:text-blue-800 text-sm md:text-base lg:text-lg uppercase tracking-wide leading-snug cursor-pointer transition-colors inline-block"
                            >
                              {item}
                            </h4>

                            {/* Get Latest Price Placeholder Area (Omitted specific pricing figures, styled exactly as requested) */}
                            <div className="mt-1 flex items-baseline gap-1 bg-gray-50/80 px-2 py-1 rounded inline-flex border border-gray-100">
                              <span className="text-gray-950 font-black text-sm select-none uppercase tracking-wide">
                                Price on request 
                              </span>
                              <span className="text-gray-400 font-bold text-[10px]">/ Piece</span>
                              <button 
                                onClick={() => {
                                  if (onProductEnquiry) {
                                    onProductEnquiry(item, cat.title);
                                  } else {
                                    onContactClick();
                                  }
                                }}
                                className="text-[9.5px] text-[#1E4D2B] hover:underline font-black uppercase tracking-wider ml-2"
                              >
                                Ask Wholesale Price
                              </button>
                            </div>

                            {/* IndiaMART styled specs grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5 py-2.5 mt-2.5 border-y border-gray-150 border-dashed text-xs text-slate-700">
                              <div>
                                <span className="text-gray-400 font-bold uppercase text-[8px] tracking-wider block">Min Order Qty</span>
                                <span className="text-gray-850 font-black text-[10.5px]">{det.moq}</span>
                              </div>
                              <div>
                                <span className="text-gray-400 font-bold uppercase text-[8px] tracking-wider block">Seller Origin</span>
                                <span className="text-gray-850 font-black text-[10.5px]">Noida, UP</span>
                              </div>
                              <div>
                                <span className="text-gray-400 font-bold uppercase text-[8px] tracking-wider block">Supply Standard</span>
                                <span className="text-gray-850 font-black text-[10.5px]">{det.label}</span>
                              </div>
                              {Object.entries(det.specs).slice(1, 4).map(([key, val]) => (
                                <div key={key}>
                                  <span className="text-gray-400 font-bold uppercase text-[8px] tracking-wider block">{key}</span>
                                  <span className="text-gray-850 font-black text-[10.5px] truncate block">{val}</span>
                                </div>
                              ))}
                            </div>

                            {/* Description Paragraph */}
                            <p className="text-gray-500 text-xs font-light mt-2.5 leading-relaxed">
                              {det.desc} We provide robust technical specifications, custom calibrations, and bulk certificates. Immediate bulk dispatch to Delhi, NCR, Noida Sector 63 and PAN India destinations.
                            </p>
                          </div>

                          {/* Indian Marketplace Seller verification bar */}
                          <div className="flex flex-wrap items-center gap-2 pt-2.5 mt-2.5 border-t border-gray-100 text-xs">
                            <span className="font-black text-gray-850 uppercase tracking-wide text-[10px]">YUKON INDIA CO.</span>
                            <button 
                              type="button"
                              onClick={() => {
                                if (onReviewClick) {
                                  onReviewClick(item, det.rating, det.reviews);
                                }
                              }}
                              className="flex items-center text-[#FC913A] text-[9.5px] gap-0.5 font-bold cursor-pointer hover:opacity-85 active:scale-[0.98] transition-all bg-transparent border-0 p-0 text-left group/rating"
                            >
                              <Star className="w-3 h-3 fill-current text-amber-500" />
                              <span className="group-hover/rating:text-emerald-800 transition-colors">{det.rating} (<span className="group-hover/rating:underline">{det.reviews} verified ratings</span>)</span>
                            </button>
                            <span className="text-gray-400 font-semibold text-[9.5px]">• Noida, Uttar Pradesh • 1993 Establishment</span>
                            <span className="text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded text-[8px] font-black uppercase ml-auto">
                              🟢 98% RESPONSE RATE
                            </span>
                          </div>

                          {/* Multi-action B2B row direct response buttons */}
                          <div className="grid grid-cols-3 gap-2 mt-3.5 select-none shrink-0">
                            
                            {/* Blue-Green Chat bubble response portal */}
                            <button 
                              onClick={() => {
                                if (onProductEnquiry) {
                                  onProductEnquiry(item, cat.title);
                                } else {
                                  onContactClick();
                                }
                              }}
                              className="bg-[#1E4D2B] hover:bg-[#14361E] text-white rounded font-black uppercase tracking-wider text-[9px] py-2.5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-3xs"
                            >
                              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                              <span className="hidden xs:inline">CHAT NOW</span>
                            </button>

                            {/* WhatsApp Direct Portal */}
                            <a 
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white hover:bg-emerald-50 text-[#25D366] border border-[#25D366] font-black uppercase tracking-wider text-[9px] py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 text-center shadow-3xs"
                              title="Message Supplier on WhatsApp"
                            >
                              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.013-5.091-2.858-6.937C16.638 1.99 14.17 1.987 11.55 1.987 6.11 1.987 1.69 6.4 1.687 11.815c0 1.693.454 3.342 1.316 4.785L1.91 21.053l4.737-1.244zM16.92 14.73c-.267-.134-1.582-.78-1.828-.87-.247-.09-.427-.134-.607.135-.18.267-.697.87-.852 1.047-.156.178-.311.2-.578.066-.267-.134-1.127-.417-2.148-1.326-.793-.706-1.328-1.579-1.484-1.847-.156-.267-.016-.411.118-.544.121-.119.267-.311.4-.467.135-.156.18-.267.27-.446.09-.178.045-.334-.022-.467-.067-.134-.607-1.46-.832-2.004-.222-.533-.464-.46-.637-.468-.164-.008-.353-.01-.542-.01-.19 0-.498.07-.759.356-.26.289-1 .98-1 2.39s1.028 2.776 1.17 2.976c.143.197 2.023 3.09 4.898 4.33.685.295 1.22.473 1.637.605.69.219 1.318.188 1.815.114.553-.082 1.582-.647 1.81-.13c.227-.517.227-.962.158-1.047-.07-.086-.26-.134-.526-.268z"/>
                              </svg>
                              <span>WHATSAPP</span>
                            </a>

                            {/* Direct call button link */}
                            <a 
                              href="tel:+918447512326"
                              className="bg-[#1E4D2B] hover:bg-[#14361E] text-white rounded font-black uppercase tracking-wider text-[9px] py-2.5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-3xs text-center"
                              title="Call Supplier Helpline"
                            >
                              <Phone className="w-3.5 h-3.5 shrink-0" />
                              <span>CALL NOW</span>
                            </a>

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
    </div>
  );
}
