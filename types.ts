import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  content: string;
  avatar: string;
  stars: number;
}

export interface CaseStudy {
  business: string;
  industry: string;
  challenge: string;
  solution: string;
  stats: {
    label: string;
    value: string;
    growth: string;
  }[];
  quote: string;
  image: string;
}