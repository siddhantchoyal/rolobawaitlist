import { 
  PhoneCall, 
  MessageSquare, 
  Video, 
  Globe, 
  TrendingUp, 
  Smartphone, 
  Calendar, 
  BarChart3,
  CreditCard,
  Star,
  LayoutTemplate,
  Users
} from 'lucide-react';
import { Feature, PricingTier, Testimonial, CaseStudy } from './types';

export const ROLOBA_SYSTEM_PROMPT = `
You are the AI Sales Assistant for Roloba. 
Roloba is the ultimate Operating System for home service businesses (plumbers, HVAC, landscapers, roofers, etc.).
We combine traditional SaaS tools (Website, Booking, Payments) with ACTIVE Lead Generation.

Your Goal: Convince the user to schedule a demo or start a trial.

Key Value Proposition:
- We don't just manage your business; we GROW it by actively hunting for leads.
- Price: $197/month flat. No hidden fees.

Core Differentiation (The "Roloba Advantage"):
1. **Done-For-You Lead Gen**: 
   - Commercial: We Cold Call and Cold Email property managers and businesses to get you big contracts.
   - Residential: We target homeowners in your specific zip codes.
   - Partnerships: We reach out to realtors and other contractors for referrals.
2. **AI Workforce**: 
   - Voice AI: Answers missed calls 24/7, books appointments, qualifies leads.
   - Chat AI: Handles Webchat, SMS, Facebook, and Instagram DMs instantly.
3. **Viral Local Marketing**: We create and post short-form video content (Reels/TikToks) for you.
4. **White-Label App**: Your customers download *your* branded app (PWA) to book you easily.

Standard Features (Included):
- High-converting Website Builder
- Online Scheduling & Dispatching
- Invoicing & Payments
- 5-Star Review Automation (Reputation Management)

Tone: Professional, high-energy, confident, and helpful.
Keep responses short and punchy.
`;

export const FEATURES: Feature[] = [
  {
    id: 'lead-gen',
    title: 'Active Lead Hunting',
    description: 'We cold call businesses for commercial contracts and homeowners for residential jobs.',
    icon: PhoneCall,
  },
  {
    id: 'ai-voice',
    title: 'AI Voice Receptionist',
    description: 'An AI agent that sounds human answers missed calls 24/7 to book jobs while you sleep.',
    icon: Smartphone,
  },
  {
    id: 'ai-chat',
    title: 'Unified Inbox & Chat AI',
    description: 'Auto-replies to leads on SMS, Website, Facebook, and Instagram to close deals instantly.',
    icon: MessageSquare,
  },
  {
    id: 'viral-content',
    title: 'DFY Viral Content',
    description: 'We edit and post short-form videos to your socials to dominate your local market.',
    icon: Video,
  },
  {
    id: 'web-seo',
    title: 'Website & Unlimited SEO',
    description: 'A stunning website with unlimited blog posts and GBP updates to rank #1 on Google.',
    icon: Globe,
  },
  {
    id: 'app',
    title: 'Your Custom App',
    description: 'A downloadable mobile app (PWA) fully branded to your business for client retention.',
    icon: TrendingUp,
  }
];

export const CORE_SERVICES: Feature[] = [
  {
    id: 'scheduling',
    title: 'Smart Scheduling',
    description: 'Drag-and-drop calendar that syncs with your team and allows customers to book online.',
    icon: Calendar,
  },
  {
    id: 'payments',
    title: 'Invoicing & Payments',
    description: 'Send professional estimates and invoices. Get paid faster with text-to-pay.',
    icon: CreditCard,
  },
  {
    id: 'reviews',
    title: 'Review Automation',
    description: 'Automatically request reviews after every job to build your 5-star reputation.',
    icon: Star,
  },
  {
    id: 'website',
    title: 'Website Builder',
    description: 'Launch a high-converting, mobile-friendly website in minutes, not weeks.',
    icon: LayoutTemplate,
  }
];

export const PRICING: PricingTier = {
  name: 'The All-In-One Growth Plan',
  price: '$197',
  period: '/month',
  cta: 'Start 14-Day Free Trial',
  popular: true,
  features: [
    '**DFY Cold Calling (Commercial & Residential)**',
    '**DFY Cold Email Campaigns**',
    '**24/7 AI Voice Receptionist**',
    'Unified AI Chat (Web, SMS, Socials)',
    'DFY Short-Form Video Creation',
    'Unlimited SEO Blog Posting',
    'Your Own Branded Mobile App',
    'Website Builder & Hosting',
    'Scheduling, Invoicing & Payments',
    'Review Management System'
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mike Henderson',
    role: 'Owner',
    business: 'Henderson Plumbing',
    content: "I used Topline Pro for a year, but they just managed what I already had. Roloba actually brings me new work. The cold calling team landed me a contract with a local apartment complex that's worth $40k a year.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Founder',
    business: 'Elite Cleaners',
    content: "The AI voice receptionist is insane. I missed a call at 9 PM on a Friday, the AI picked up, sounded exactly like a person, and booked a $450 deep clean for Saturday morning. It paid for the subscription in one call.",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    role: 'CEO',
    business: 'CR Landscaping',
    content: "The viral video content is a game changer. I don't have time to make TikToks, but Roloba does it for me. We've gotten 30+ leads just from Instagram Reels in the last two months.",
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    stars: 5
  }
];

export const FEATURED_CASE_STUDY: CaseStudy = {
  business: "Apex Roofing & Exteriors",
  industry: "Roofing Contractor",
  challenge: "Stuck at $35k/month revenue. Relying purely on word-of-mouth and expensive Angi leads. Missed calls while on the roof.",
  solution: "Roloba Commercial Cold Calling + AI Voice Receptionist.",
  stats: [
    { label: 'Monthly Revenue', value: '$115k', growth: '+228%' },
    { label: 'Commercial Contracts', value: '4', growth: 'New' },
    { label: 'Missed Call Booking', value: '92%', growth: '+80%' }
  ],
  quote: "Roloba isn't just software, it's a sales team in a box. Their outreach team got us into 4 property management firms we'd been trying to reach for years.",
  image: "https://picsum.photos/800/600?grayscale"
};