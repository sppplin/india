import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';


// Safe paths are resolved using process.cwd() elsewhere, so __filename and __dirname are not needed.


async function startServer() {
  const app = express();
  const PORT = 3000;

  // Shared Organization Schema
  const companyOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://yukonindia.com/#organization",
    "name": "YUKON INDIA Corporation",
    "alternateName": "Yukon India",
    "url": "https://yukonindia.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yukonindia.com/assets/logo.png",
      "width": 200,
      "height": 60
    },
    "description": "YUKON INDIA is an ISO 9001 certified manufacturer and supplier of laboratory glassware, plasticware, scientific instruments, chemicals, and consumables. Established in 1993, we serve research institutions, universities, pharma companies, and industries across Noida, Delhi, Mumbai, Chennai and PAN India.",
    "foundingDate": "1993",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "264, Gali No-5, Raghunathpuri, Baghu",
      "addressLocality": "Ghaziabad",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201001",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8447512326",
        "contactType": "sales",
        "areaServed": ["IN"],
        "availableLanguage": ["English", "Hindi"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8447512326",
        "contactType": "customer support",
        "areaServed": ["IN"]
      }
    ],
    "email": "yukonindia45@gmail.com",
    "telephone": "+91-8447512326",
    "sameAs": [],
    "areaServed": [
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "New Delhi" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laboratory Equipment & Supplies",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Laboratory Glassware" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Laboratory Plasticware" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Scientific Instruments" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Laboratory Chemicals & Reagents" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Safety Products" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Educational Laboratory Supplies" } }
      ]
    }
  };

  // Shared LocalBusiness Schema
  const companyBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "Organization"],
    "@id": "https://yukonindia.com/#localbusiness",
    "name": "YUKON INDIA Corporation",
    "image": "https://yukonindia.com/assets/storefront.jpg",
    "description": "ISO 9001 certified laboratory glassware and scientific equipment supplier in Ghaziabad, Noida, Delhi NCR. Serving universities, research labs, pharma and industry across India since 1993.",
    "url": "https://yukonindia.com",
    "telephone": "+91-8447512326",
    "email": "yukonindia45@gmail.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, Cheque, UPI",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "264, Gali No-5, Raghunathpuri, Baghu",
      "addressLocality": "Ghaziabad",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6692,
      "longitude": 77.4538
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Dr. Sharma" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "YUKON INDIA has been supplying our chemistry department for over 10 years. Excellent glassware quality, always on time.",
        "datePublished": "2024-08-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rajesh Kumar" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Their plasticware and consumables are of pharmaceutical grade quality. Best lab supplier in Noida-Delhi region.",
        "datePublished": "2024-11-02"
      }
    ],
    "hasMap": "https://maps.google.com/?q=264+Gali+No+5+Raghunathpuri+Baghu+Ghaziabad+UP"
  };

  // Helper to construct head SEO elements dynamically based on current route
  function getSEOHeadContent(routePath: string): string {
    const isProducts = routePath.includes('/products');
    const isContact = routePath.includes('/contact');
    const isPetriDish = routePath.includes('/petri-dish');
    const isChemistryEquip = routePath.includes('/chemistry-lab-equipment');
    const isLabGlassware = routePath.includes('/laboratory-glassware');
    const isScientificInst = routePath.includes('/scientific-instruments');
    const isDistributor = routePath.includes('/laboratory-equipment-distributor');
    const isLabPlasticware = routePath.includes('/laboratory-plasticware');

    // Default: Home Page Context (index.html equivalent)
    let title = "Laboratory Equipment Manufacturer & Supplier in India | YUKON INDIA";
    let description = "YUKON INDIA supplies premium laboratory glassware, plasticware, scientific instruments & chemicals since 1993. ISO 9001 certified. Trusted by DU, JNU, Dabur & Patanjali. Get a quote today.";
    let keywords = "laboratory glassware manufacturer India, industrial lab units supplier, scientific instruments manufacturer India, laboratory plasticware manufacturer, lab chemicals supplier Delhi, ISO certified lab supplier India, OEM lab equipment manufacturer";
    let canonical = "https://yukonindia.com/";

    // Breadcrumb list schema
    let breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yukonindia.com/"
        }
      ]
    };

    let uniqueSchemas = '';

    if (isProducts) {
      title = "Laboratory Glassware, Plasticware & Scientific Instruments | YUKON INDIA Products";
      description = "Buy laboratory glassware, plasticware, scientific instruments, chemicals & safety products from YUKON INDIA. Trusted supplier in Noida, Delhi, Mumbai, Chennai & across India. ISO 9001 certified. Bulk orders welcome.";
      keywords = "buy laboratory glassware India, lab plasticware supplier, scientific instruments manufacturer Noida, laboratory chemicals Delhi, borosilicate glassware supplier, lab consumables bulk India, educational lab supplies";
      canonical = "https://yukonindia.com/products.html";
      
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Our Products",
        "item": "https://yukonindia.com/products.html"
      } as any);

      const catalogSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Laboratory Equipment & Supplies — YUKON INDIA",
        "description": "Complete range of ISO certified laboratory glassware, plasticware, instruments, chemicals, and consumables available from YUKON INDIA for Noida, Delhi, Mumbai, Chennai and PAN India.",
        "url": "https://yukonindia.com/products.html",
        "numberOfItems": 7,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Laboratory Glassware",
              "description": "Borosilicate laboratory glassware including beakers, test tubes, measuring cylinders, conical flasks, pipettes and reagent bottles. ISO certified. Available in Noida, Delhi, Mumbai, Chennai and PAN India.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Laboratory Supplies",
              "material": "Borosilicate Glass",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Laboratory Plasticware",
              "description": "Chemical-resistant PP, HDPE and LDPE laboratory plasticware including centrifuge tubes, sample containers, wash bottles, petri dishes and pipette tips.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Laboratory Supplies",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Laboratory Scientific Instruments",
              "description": "Analytical balances, microscopes, centrifuges, pH meters, spectrophotometers, vortex mixers and water baths for research and industrial labs.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Scientific Instruments",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Product",
              "name": "Laboratory Chemicals & Reagents",
              "description": "AR grade, LR grade and pharma grade analytical reagents, stains and indicators. High purity laboratory chemicals for research and pharmaceutical use.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Laboratory Chemicals",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Product",
              "name": "Laboratory Safety Products",
              "description": "Complete lab safety equipment including safety goggles, protective gloves, fire safety equipment and first aid kits for laboratory environments.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Safety Equipment",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Product",
              "name": "Laboratory Consumables",
              "description": "Disposable lab products, research consumables, filters, membranes, syringe filters, cuvettes and scientific accessories for daily laboratory use.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Laboratory Consumables",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Product",
              "name": "Educational Laboratory Supplies",
              "description": "Student laboratory kits, teaching and demonstration materials, school science instruments and educational lab equipment for schools, colleges and training institutes.",
              "brand": { "@type": "Brand", "name": "YUKON INDIA" },
              "manufacturer": { "@id": "https://yukonindia.com/#organization" },
              "category": "Educational Supplies",
              "offers": {
                "@type": "Offer",
                "seller": { "@id": "https://yukonindia.com/#organization" },
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "areaServed": "IN"
              }
            }
          }
        ]
      };

      uniqueSchemas += `\n<script type="application/ld+json">${JSON.stringify(catalogSchema)}</script>`;
    } else if (isContact) {
      title = "Contact Laboratory Glassware Supplier in Noida & Delhi | YUKON INDIA";
      description = "Contact YUKON INDIA — leading laboratory glassware and scientific equipment supplier in Noida, Ghaziabad, Delhi NCR, Mumbai & Chennai. Call +91 8447512326 or email yukonindia45@gmail.com for bulk orders, quotes & enquiries.";
      keywords = "contact lab supplier Noida, laboratory equipment enquiry Delhi, lab glassware quote India, scientific instruments supplier contact, bulk lab equipment order India";
      canonical = "https://yukonindia.com/contact.html";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://yukonindia.com/contact.html"
      } as any);
    } else if (isPetriDish) {
      title = "Petri Dish Manufacturer & Supplier in India | Glass & Plastic | YUKON INDIA";
      description = "Buy glass & plastic petri dishes in bulk from YUKON INDIA — ISO 9001 certified manufacturer. Trusted by labs, colleges & research institutes. Get wholesale pricing today.";
      keywords = "petri dish, plastic petri dish, glass petri dish, petri dish glass, chemistry petri dish, lab equipment petri dish";
      canonical = "https://yukonindia.com/petri-dish";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Petri Dishes",
        "item": "https://yukonindia.com/petri-dish"
      } as any);
    } else if (isChemistryEquip) {
      title = "Chemistry Lab Equipment Supplier in India | YUKON INDIA";
      description = "YUKON INDIA supplies complete chemistry lab equipment — glassware, instruments & consumables. ISO 9001 certified, trusted by DU, JNU & Dabur. Get bulk pricing now.";
      keywords = "chemistry lab equipment, chemistry lab, chemical lab equipment, chemistry laboratory equipment, chemistry lab instruments, chemistry equipment";
      canonical = "https://yukonindia.com/chemistry-lab-equipment";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Chemistry Lab Equipment",
        "item": "https://yukonindia.com/chemistry-lab-equipment"
      } as any);
    } else if (isLabGlassware) {
      title = "Laboratory Glassware Manufacturer & Supplier in India | YUKON INDIA";
      description = "Shop premium borosilicate laboratory glassware — beakers, test tubes, flasks & more. ISO 9001 certified manufacturer trusted across India. Get wholesale pricing.";
      keywords = "laboratory glassware, lab glassware, scientific glassware, glass beakers, laboratory beakers, lab beakers, borosilicate glass";
      canonical = "https://yukonindia.com/laboratory-glassware";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Laboratory Glassware",
        "item": "https://yukonindia.com/laboratory-glassware"
      } as any);
    } else if (isScientificInst) {
      title = "Scientific Instruments Supplier in India | Precision Lab Tools | YUKON INDIA";
      description = "YUKON INDIA supplies precision scientific instruments — calipers, microscopes, stirrers & more. ISO 9001 certified, trusted across India. Get bulk pricing today.";
      keywords = "scientific instruments, laboratory instruments, lab instruments, scientific lab equipment, scientific laboratory instruments";
      canonical = "https://yukonindia.com/scientific-instruments";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Scientific Instruments",
        "item": "https://yukonindia.com/scientific-instruments"
      } as any);
    } else if (isDistributor) {
      title = "Laboratory Equipment Distributor in India | Bulk Supply | YUKON INDIA";
      description = "Looking for a reliable laboratory equipment distributor? YUKON INDIA offers ISO 9001 certified bulk supply of glassware, instruments & chemicals across India. Enquire now.";
      keywords = "laboratory equipment distributor, lab equipment distributor, distributor laboratory equipment, scientific equipment distributor";
      canonical = "https://yukonindia.com/laboratory-equipment-distributor";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Laboratory Equipment Distributor",
        "item": "https://yukonindia.com/laboratory-equipment-distributor"
      } as any);
    } else if (isLabPlasticware) {
      title = "Laboratory Plasticware Supplier in India | YUKON INDIA";
      description = "YUKON INDIA supplies durable laboratory plasticware — containers, tubes, bottles & petri dishes. ISO 9001 certified manufacturer. Get bulk pricing across India.";
      keywords = "laboratory plasticware, plastic lab equipment, plastic beaker, plastic petri dish, plastic pipette";
      canonical = "https://yukonindia.com/laboratory-plasticware";

      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Laboratory Plasticware",
        "item": "https://yukonindia.com/laboratory-plasticware"
      } as any);
    } else {
      // Home unique website and FAQ schemas
      const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://yukonindia.com/#website",
        "url": "https://yukonindia.com",
        "name": "YUKON INDIA — Laboratory Equipment Supplier India",
        "description": "ISO certified laboratory glassware, plasticware, scientific instruments and chemicals supplier. Serving Noida, Delhi, Mumbai, Chennai & PAN India since 1993.",
        "publisher": { "@id": "https://yukonindia.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://yukonindia.com/products.html?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      };

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is YUKON INDIA located and which cities do you deliver to?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "YUKON INDIA is headquartered at 264, Gali No-5, Raghunathpuri, Baghu, Ghaziabad, Uttar Pradesh — 201001, conveniently serving Noida and Delhi NCR. We deliver laboratory glassware, plasticware, scientific instruments, chemicals, and consumables across PAN India, including Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, and all major cities."
            }
          },
          {
            "@type": "Question",
            "name": "Are you an ISO certified laboratory equipment supplier?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YUKON INDIA is ISO 9001 certified. Our manufacturing and supply processes comply with global quality standards, ensuring every product meets stringent precision, reliability, and consistency benchmarks."
            }
          },
          {
            "@type": "Question",
            "name": "What types of laboratory glassware do you supply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We supply a comprehensive range of laboratory glassware including beakers, test tubes, measuring cylinders, conical flasks, round bottom flasks, pipettes, burettes, reagent bottles, and petri dishes. All available in borosilicate and soda-lime glass, compliant with ISO and BIS standards."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply laboratory equipment to universities and research institutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. YUKON INDIA is a trusted partner to leading academic and research institutions including Delhi University, JNU, and many state universities across India. We offer institutional pricing, bulk orders, and dedicated account support."
            }
          },
          {
            "@type": "Question",
            "name": "Can I place bulk orders for laboratory plasticware and consumables?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We welcome bulk and wholesale orders for all categories. Contact our sales team at +91 8447512326 or yukonindia45@gmail.com for volume pricing and customised quotes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply laboratory equipment to pharmaceutical companies in Mumbai and Chennai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly supply pharmaceutical-grade laboratory glassware, plasticware, analytical instruments, and consumables to pharma companies in Mumbai, Navi Mumbai, Chennai, Coimbatore, and across Maharashtra and Tamil Nadu."
            }
          },
          {
            "@type": "Question",
            "name": "How do I place an order or get a quote from YUKON INDIA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call +91 8447512326, email yukonindia45@gmail.com, or fill out the enquiry form on our Contact Us page. Our team responds within 24 business hours."
            }
          }
        ]
      };

      uniqueSchemas += `\n<script type="application/ld+json">${JSON.stringify(webSiteSchema)}</script>`;
      uniqueSchemas += `\n<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
    }

    return `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="YUKON INDIA Corporation">
    <meta name="geo.region" content="IN-UP">
    <meta name="geo.placename" content="Ghaziabad, Uttar Pradesh, India">
    <meta name="geo.position" content="28.6692;77.4538">
    <meta name="ICBM" content="28.6692, 77.4538">
    <link rel="canonical" href="${canonical}">

    <!-- Open Graph tags -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="YUKON INDIA">
    <meta property="og:image" content="https://yukonindia.com/assets/og-image.jpg">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">

    <!-- Preconnect for performance speed -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Technical standard optimization tags -->
    <meta name="theme-color" content="#1A2B4A">
    <meta name="category" content="Laboratory Equipment Supplier">
    <meta name="classification" content="Business">
    <meta name="coverage" content="India">
    <meta name="distribution" content="Global">
    <meta name="target" content="all">
    <meta name="rating" content="general">
    <meta name="revisit-after" content="7 days">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <link rel="alternate" hreflang="en-in" href="https://yukonindia.com/">

    <!-- JSON-LD SEO Schema Injections -->
    <script type="application/ld+json">${JSON.stringify(companyOrgSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(companyBusinessSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>${uniqueSchemas}
    `;
  }

  // Health API route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', serverTime: new Date().toISOString() });
  });

  // Main SEO Infill Middleware
  const serveInfilledIndex = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const isProd = process.env.NODE_ENV === 'production';
      let templatePath = '';
      if (isProd) {
        templatePath = path.join(process.cwd(), 'dist', 'index.html');
      } else {
        templatePath = path.join(process.cwd(), 'index.html');
      }

      if (!fs.existsSync(templatePath)) {
        return next();
      }

      let html = fs.readFileSync(templatePath, 'utf-8');

      // Intercept and inject Vite server if in dev mode
      if (!isProd && vite) {
        html = await vite.transformIndexHtml(req.originalUrl, html);
      }

      // Generate the replacement SEO section
      const seoInjections = getSEOHeadContent(req.path);

      // Inject language tag
      html = html.replace('<html lang="en">', '<html lang="en-IN">');

      // Inject custom SEO Block inside the <head> tag
      const existingTitleRegex = /<title>[^]*<\/title>/i;
      if (existingTitleRegex.test(html)) {
        html = html.replace(existingTitleRegex, seoInjections);
      } else {
        html = html.replace('</head>', seoInjections + '\n</head>');
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      console.error("Index HTML SEO dynamic injection error: ", e);
      next(e);
    }
  };

  // Specific custom URLs for SEO crawls
  app.get('/', serveInfilledIndex);
  app.get('/index.html', serveInfilledIndex);
  app.get('/products', serveInfilledIndex);
  app.get('/products.html', serveInfilledIndex);
  app.get('/contact', serveInfilledIndex);
  app.get('/contact.html', serveInfilledIndex);
  app.get('/petri-dish', serveInfilledIndex);
  app.get('/chemistry-lab-equipment', serveInfilledIndex);
  app.get('/laboratory-glassware', serveInfilledIndex);
  app.get('/scientific-instruments', serveInfilledIndex);
  app.get('/laboratory-equipment-distributor', serveInfilledIndex);
  app.get('/laboratory-plasticware', serveInfilledIndex);

  let vite: any = null;

  // Vite development middleware standard config
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));

    // Handle deep client-side routers on any remaining path
    app.get('*', serveInfilledIndex);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[YUKON INDIA BUILD] Full-stack Server listening on http://localhost:${PORT}`);
  });
}

startServer();
