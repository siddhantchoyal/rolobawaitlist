import { 
  Calendar, 
  MapPin,
  Trees,
  Search,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  UserCheck,
  Gift
} from 'lucide-react';
import { Feature, PricingTier, Testimonial, CaseStudy } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'free-trial',
    title: '3 Quotes on the House',
    description: 'We book your first 3 residential estimates for free. No credit card required. Experience the caliber of our bookings before paying a dime.',
    icon: Gift,
  },
  {
    id: 'precision-marketing',
    title: 'Exclusive Removal Leads',
    description: 'Proprietary omni-channel strategies to find homeowners ready for $2.5k+ removals. No shared leads—every prospect is 100% exclusive.',
    icon: Search,
  },
  {
    id: 'calendar-booking',
    title: 'Direct Schedule Sync',
    description: 'We qualify every homeowner and book the quote directly into your mobile calendar. Wake up and see your route filled with revenue.',
    icon: Calendar,
  },
  {
    id: 'zero-risk',
    title: '10% Performance Plan',
    description: 'After your free trial, you only pay a 10% commission when you close a job and get paid. We only win when you grow.',
    icon: ShieldCheck,
  },
  {
    id: 'wealthy-targeting',
    title: 'Affluent Area Dominance',
    description: 'We target specific zip codes where homeowners prioritize safety and expertise over the lowest price point.',
    icon: MapPin,
  },
  {
    id: 'roi-dashboards',
    title: 'Total Transparency',
    description: 'Weekly dashboards showing your ROI. Real-time access to every homeowner conversation we handle for you.',
    icon: DollarSign,
  }
];

export const CORE_SERVICES: Feature[] = [
  {
    id: 'marketing',
    title: 'Local Authority',
    description: 'We build your reputation as the elite residential choice in your county through aggressive outreach.',
    icon: Trees,
  },
  {
    id: 'qualification',
    title: 'Strict Qualification',
    description: 'We filter out small trims and "just curious" callers to focus on high-margin residential removals.',
    icon: UserCheck,
  },
  {
    id: 'booking',
    title: 'Ready-to-Quote Booking',
    description: 'Quotes are placed directly in your calendar with full project details and homeowner notes attached.',
    icon: Calendar,
  },
  {
    id: 'success',
    title: 'Scalable ROI',
    description: 'Get your first 3 quotes free, then a flat 10% after you close. No monthly retainers, ever.',
    icon: TrendingUp,
  }
];

export const PRICING: PricingTier = {
  name: 'Performance Partner',
  price: '10%',
  period: 'Per Closed Job',
  cta: 'Claim Your 3 Free Quotes',
  popular: true,
  features: [
    '**First 3 Quotes 100% Free**',
    '**Exclusive Residential Estimates**',
    '**$0 Monthly Management Fee**',
    '**No Setup or Onboarding Fees**',
    'Wealthy Zip Code Hyper-Targeting',
    'Direct Google/Apple Calendar Sync',
    'High-Ticket Removal Pre-Qualification',
    'Exclusive Territory Rights',
    'Detailed Weekly Performance ROI',
    'No Long-Term Contracts'
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jim Dawson',
    role: 'Owner',
    business: 'Dawson Tree Experts',
    content: "Roloba booked 3 quotes in my first week for free. All three were $3k+ removals. I've been on the performance plan since day one.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5
  },
  {
    id: '2',
    name: 'Sarah Miller',
    role: 'Co-Founder',
    business: 'ArborTech Services',
    content: "No other agency puts their money where their mouth is. The free trial proved they can land $10k+ crane jobs consistently.",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5
  },
  {
    id: '3',
    name: 'Kevin Vance',
    role: 'Operations Manager',
    business: 'Vance Residential Tree',
    content: "The calendar sync is a game changer. My estimator just follows the phone. We added $75k in new revenue last month alone.",
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    stars: 5
  }
];

export const FEATURED_CASE_STUDY: CaseStudy = {
  business: "Oak & Iron Tree Care",
  industry: "Residential Tree Service",
  challenge: "Struggling with low-quality shared leads and no predictable removal schedule.",
  solution: "Strategic county-wide outreach focusing on hazard-tree removals for high-net-worth homeowners.",
  stats: [
    { label: 'Monthly Revenue', value: '$92k', growth: '+140%' },
    { label: 'Quote Volume', value: '12/wk', growth: 'Exclusive' },
    { label: 'Avg. Job Size', value: '$3,800', growth: '+45%' }
  ],
  quote: "I tried the free trial as a skeptic. They booked three big removals in 48 hours. I haven't paid for a 'lead' since.",
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1200"
};

export const ROLOBA_SYSTEM_PROMPT = `You are the Roloba AI Dispatcher...`;
