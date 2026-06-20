import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, User } from 'lucide-react';

interface StickyQuoteFormProps {
  onSubmit: (data: QuoteFormData) => void;
  title?: string;
  buttonText?: string;
}

export default function StickyQuoteForm({ 
  onSubmit, 
  title = "Get The Best Quote", 
  buttonText = "Get In Touch" 
}: StickyQuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [countryCode, setCountryCode] = useState('+91');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      onSubmit({
        ...formData,
        phoneNumber: `${countryCode} ${formData.phoneNumber}`
      });
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phoneNumber: '' });
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div id="sticky-quote-sidebar" className="w-full bg-[#F8F9F8] lg:bg-white rounded-[8px] border border-gray-200 lg:shadow-custom p-6 sticky top-28 z-20">
      <div className="bg-[#14361E] text-white -mx-6 -mt-6 rounded-t-[8px] px-6 py-4 flex flex-col justify-center items-center text-center">
        <h3 className="font-heading font-bold text-lg tracking-wide uppercase">
          {title}
        </h3>
        <span className="text-[10px] uppercase text-green-300 tracking-widest font-semibold mt-1">
          Direct Factory Pricing
        </span>
      </div>

      {submitted ? (
        <div className="py-8 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">Thank You!</h4>
          <p className="text-sm text-gray-600 px-4 mb-6">
            Your inquiry has been sent successfully. Our executive will call you within 15 minutes.
          </p>
          <button 
            type="button"
            onClick={handleReset}
            className="text-xs text-primary font-bold hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4 font-sans text-sm">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 align-middle">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-9 pr-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
              Email Address (Optional)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-9 pr-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
              />
            </div>
          </div>

          {/* Phone Field with Country Code Selection */}
          <div>
            <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-1.5">
              <select 
                value={countryCode} 
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-1/3 border border-gray-300 bg-white h-[42px] rounded text-xs px-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 font-medium"
              >
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+971">UAE (+971)</option>
                <option value="+61">Australia (+61)</option>
              </select>
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  placeholder="10-Digit Mobile"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full pl-9 pr-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-[46px] rounded uppercase font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-300 tracking-wider shadow flex items-center justify-center ${
              loading ? 'bg-primary-dark opacity-80 cursor-wait' : ''
            }`}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="w-4 h-4 mr-2" />
                {buttonText}
              </span>
            )}
          </button>

          <p className="text-[10px] text-gray-500 text-center flex items-center justify-center mt-2 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#1E4D2B]" /> Your connection is secure. We never share your data.
          </p>
        </form>
      )}
    </div>
  );
}
