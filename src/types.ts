export type ServiceCategory = 'branding' | 'design' | 'development' | 'marketing';

export interface ServicePillar {
  id: string;
  category: ServiceCategory;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  capabilities: string[];
  impactMetric: string;
  impactLabel: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'Branding' | 'Web Development' | 'Digital Marketing' | 'UI/UX Design' | '360° Transformation';
  headline: string;
  tagline: string;
  heroImage: string;
  summary: string;
  startingState: string;
  scaledOutcome: string;
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  servicesProvided: string[];
  deliverables: string[];
  teamLead: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  pillar: string;
  bio: string;
  specialties: string[];
  philosophy: string;
  experienceYears: number;
  notableAchievement: string;
}

export interface ScaleStage {
  id: string;
  stageNumber: string;
  title: string;
  concept: string;
  smallElement: string;
  scaledTransformation: string;
  timeline: string;
  deliverables: string[];
  multiplier: string;
}
