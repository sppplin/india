import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckSquare, MessageSquareCode, Award } from 'lucide-react';
import { ReviewFormData } from '../types';

interface ContactSectionProps {
  onSubmitReview: (data: ReviewFormData) => void;
}

export default function ContactSection({ onSubmitReview }: ContactSectionProps) {
  const [formData, setFormData] = useState<ReviewFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    reviewMessage: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.reviewMessage) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      onSubmitReview(formData);
      setLoading(false);
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', companyName: '', reviewMessage: '' });
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section className="py-12 bg-white border-b border-custom font-sans text-sm" id="contact-us-section">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center md:text-left space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">Collaborative Scientific Research</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Let's Build The Future Of Science Together
          </h2>
          <div className="h-1 w-16 bg-[#1E4D2B] rounded md:mx-0 mx-auto"></div>
          <p className="text-[#555555] font-light max-w-2xl leading-relaxed pt-1 text-xs md:text-sm">
            Whether you're setting up a new lab, upgrading equipment, or looking for reliable partners — we're just a message away.
          </p>
        </div>

        {/* 2-Column layout: Contact Cards Left, Testimonial Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone block */}
            <div className="p-5 rounded-lg border border-gray-200 bg-[#F8F9F8] shadow-sm flex items-start space-x-4">
              <div className="bg-[#1E4D2B] text-white rounded p-3 shrink-0">
                <Phone className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#1A1A1A] uppercase text-xs tracking-wider">Phone Lines</h4>
                <a href="tel:+918447512326" className="text-base font-extrabold text-primary block mt-1 hover:underline">
                  +91 8447512326
                </a>
                <p className="text-[11px] text-gray-400 mt-0.5">Slightly delays on public holidays. Available 10am to 7pm.</p>
              </div>
            </div>

            {/* Email block */}
            <div className="p-5 rounded-lg border border-gray-200 bg-[#F8F9F8] shadow-sm flex items-start space-x-4">
              <div className="bg-[#1E4D2B] text-white rounded p-3 shrink-0">
                <Mail className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#1A1A1A] uppercase text-xs tracking-wider">Corporate Email</h4>
                <a href="mailto:yukonindia45@gmail.com" className="text-sm font-bold text-gray-800 block mt-1 hover:underline">
                  yukonindia45@gmail.com
                </a>
                <p className="text-[11px] text-gray-400 mt-0.5">Expect response inside 4 hours on business days.</p>
              </div>
            </div>

            {/* Address block */}
            <div className="p-5 rounded-lg border border-gray-200 bg-[#F8F9F8] shadow-sm flex items-start space-x-4">
              <div className="bg-[#1E4D2B] text-white rounded p-3 shrink-0">
                <MapPin className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#1A1A1A] uppercase text-xs tracking-wider">Storage & Office Address</h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold mt-1">
                  264, Gali No-5, Raghunathpuri, Baghu, Ghaziabad, Uttar Pradesh – 201001
                </p>
                <span className="inline-block mt-2 bg-emerald-100 text-emerald-800 text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded">
                  In-Store pickup available!
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Testimonial submission form */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-gray-200 p-6 shadow-custom">
            <div className="border-b border-gray-100 pb-3 mb-5">
              <h3 className="font-heading font-bold text-base text-[#1A1A1A] flex items-center">
                <MessageSquareCode className="w-5 h-5 mr-2 text-primary" />
                Submit Client Review/Testimonial
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Let us and your scientific colleagues know about your manufacturing experience with us.</p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckSquare className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-lg text-gray-900">Review Submitted!</h4>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Your feedback has been saved successfully and logged onto our local servers. Thank you for contributing to our scientific community.
                </p>
                
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-primary font-bold uppercase tracking-wider focus:outline-none hover:underline"
                >
                  Write another review
                </button>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                {/* Dual Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full text-xs md:text-sm px-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sharma"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full text-xs md:text-sm px-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                    />
                  </div>
                </div>

                {/* Institution Row */}
                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1">
                    Institution / Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CSIR National Lab / Delhi University"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full text-xs md:text-sm px-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>

                {/* Message Box */}
                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1">
                    Review Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your diagnostic feedback here..."
                    required
                    value={formData.reviewMessage}
                    onChange={(e) => setFormData({ ...formData, reviewMessage: e.target.value })}
                    className="w-full text-xs md:text-sm px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>

                {/* Terms Acceptance */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    id="consent-box"
                    className="mt-0.5 mr-2 rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent-box" className="text-[11px] text-gray-500">
                    I authorize Yukon India to format and display this testimonial review to potential corporate buyers and diagnostic institutes.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-[46px] rounded bg-primary hover:bg-primary-dark text-white uppercase font-bold tracking-wider text-xs transition-colors flex items-center justify-center space-x-2 ${
                    loading ? 'bg-primary-dark opacity-90 cursor-wait' : ''
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting review info...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-green-300" />
                      <span>Submit Review Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
