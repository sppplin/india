export type ActiveView = 'home' | 'products' | 'contact' | 'specializations' | 'petri-dish' | 'chemistry-lab-equipment' | 'laboratory-glassware' | 'scientific-instruments' | 'laboratory-equipment-distributor' | 'laboratory-plasticware' | 'blog' | 'blog-post-delhi-ncr' | 'low-moq-beakers-bulk-supply' | 'pipette-manufacturer-india-moq-500' | 'blood-collection-tube-supplier-delhi-moq-500' | 'surgical-gloves-manufacturer-india-low-moq' | 'gem-vendor-registration-expert-delhi' | 'gem-vendor-registration-expert-noida' | 'glass-beaker-supplier-delhi' | 'glass-beaker-manufacturer-india' | 'glass-beaker-supplier-kolkata' | 'pipette-supplier-delhi' | 'pipette-supplier-mumbai' | 'test-tube-manufacturer-delhi' | 'test-tube-manufacturer-mumbai' | 'low-moq-test-tube-supplier' | 'faq';

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface ProductSection {
  title: string;
  subtitle: string;
  items: string[];
}

export interface QuoteFormData {
  name: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  message?: string;
}

export interface ReviewFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  reviewMessage: string;
}
