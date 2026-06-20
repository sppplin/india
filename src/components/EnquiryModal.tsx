import React, { useState, useEffect } from 'react';
import { X, Phone, User, Building, Layers, Mail, Send, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  categoryName: string;
}

export default function EnquiryModal({ isOpen, onClose, productName, categoryName }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [quantity, setQuantity] = useState('100');
  const [email, setEmail] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  // Lock body scroll while modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset inputs
      setName('');
      setCompanyName('');
      setPhoneNumber('');
      setQuantity('100');
      setEmail('');
      setCustomMessage('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !companyName || !phoneNumber || !quantity) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    const fullPhone = `${countryCode} ${phoneNumber}`;
    
    // Construct professional, structured B2B procurement catalog inquiry text
    const textMessage = `YUKON INDIA B2B Procurement Inquiry

Category: ${categoryName}
Item: ${productName}
Quantity: ${quantity} units

B2B Partner Details:
- Partner Name: ${name}
- Company/Institution: ${companyName}
- Phone Number: ${fullPhone}
${email ? `- Email: ${email}` : ''}

${customMessage ? `Special System Customizations:
${customMessage}` : ''}

Please send standard product datasheet and commercial pricing tier quote.`;

    const whatsappUrl = `https://wa.me/918447512326?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg border border-gray-200 shadow-xl max-w-md w-full overflow-hidden relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Compact Header */}
        <div className="bg-[#1E4D2B] text-white py-3 px-4 pr-10 relative shrink-0">
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal dialog"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-300 block">
            Direct B2B Wholesale Portal
          </span>
          <h3 className="font-heading font-black text-sm uppercase tracking-wide mt-0.5">
            Procurement Enquiry
          </h3>
        </div>

        {/* Selected Product Area (Highly Compact block) */}
        <div className="bg-gray-50 border-b border-gray-100 py-2 px-4 flex items-center justify-between gap-2 shrink-0 select-none">
          <div className="min-w-0">
            <span className="text-[8px] font-mono uppercase text-gray-400 font-bold block leading-none">Selected Item</span>
            <span className="text-[10px] uppercase font-black text-[#1A1A1A] tracking-wider truncate block mt-0.5">
              {productName || 'Laboratory Equipment Selection'}
            </span>
          </div>
          <span className="text-[8px] uppercase font-bold text-emerald-800 tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/60 shrink-0">
            {categoryName || 'OEM Class'}
          </span>
        </div>

        {/* Form Container (Scrollable if viewport height is extremely small) */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3 text-xs font-sans overflow-y-auto flex-1">
          
          {/* Contact Person */}
          <div>
            <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                <User className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-8 pr-3 h-[32px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-800 text-[11px]"
              />
            </div>
          </div>

          {/* Company/Institution */}
          <div>
            <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
              Company / Institution <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                <Building className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                required
                placeholder="e.g. Diagnostics laboratory / University"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full pl-8 pr-3 h-[32px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-800 text-[11px]"
              />
            </div>
          </div>

          {/* Mobile phone & target quantity side-by-side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-1">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-[60px] border border-gray-300 bg-white h-[32px] rounded text-[10px] px-1 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-850"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-Digit Mobile"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 min-w-0 px-2 h-[32px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-800 text-[11px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
                Required Qty <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                  <Layers className="w-3.5 h-3.5" />
                </span>
                <input
                  type="number"
                  required
                  min="1"
                  placeholder="Qty"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full pl-8 pr-3 h-[32px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-800 text-[11px]"
                />
              </div>
            </div>
          </div>

          {/* Optional Email field */}
          <div>
            <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
              Email Address <span className="text-gray-400 font-light">(Optional)</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <input
                type="email"
                placeholder="procurement@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-8 pr-3 h-[32px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-800 text-[11px]"
              />
            </div>
          </div>

          {/* Custom specifications notes */}
          <div>
            <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
              Custom Requirements <span className="text-gray-400 font-light">(Optional)</span>
            </label>
            <textarea
              rows={1.5}
              placeholder="Dimension details, special glass volume, custom standards..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 text-gray-800 text-[11px] resize-none leading-normal"
            ></textarea>
          </div>

          {/* Action Trigger Block */}
          <div className="pt-2 shrink-0">
            <button
              type="submit"
              className="w-full h-10 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded font-extrabold uppercase tracking-wider text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs hover:shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Enquiry to WhatsApp</span>
            </button>
          </div>

          {/* Security Shield Label */}
          <div className="flex items-center justify-center gap-1 text-[9px] text-gray-400 font-medium pt-1 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Encrypted Direct Messaging. No data stored online.</span>
          </div>

        </form>
      </div>
    </div>
  );
}
