import { ServicePillar, CaseStudy, TeamMember, ScaleStage } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_studio_1794332893198.jpg';
export const TEAM_IMAGE = '/src/assets/images/team_fionex_studio_1794332894439.jpg';

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: 'branding',
    category: 'branding',
    num: '01',
    title: '360° Brand Transformation',
    subtitle: 'From Nascent Idea to Market Icon',
    description: 'We construct timeless brand architectures from foundational DNA to comprehensive identity systems. Every touchpoint is engineered to command prestige, cultivate deep trust, and outshine competitors.',
    deliverables: [
      'Brand Identity Systems & Visual Guidelines',
      'Strategic Positioning & Narrative Framing',
      'Verbal Tone of Voice & Microcopy Playbooks',
      'Luxury Packaging & Spatial Environmental Assets',
      'Omnichannel Brand Style Architecture'
    ],
    capabilities: ['Archetype Strategy', 'Typography Design', 'Iconography Sets', 'Packaging CAD', 'Brand Governance'],
    impactMetric: '3.8x',
    impactLabel: 'Average Brand Equity Multiplier in 12 Months'
  },
  {
    id: 'design',
    category: 'design',
    num: '02',
    title: 'Avant-Garde UI/UX Design',
    subtitle: 'Intuitive Interfaces with Haute Couture Aesthetic',
    description: 'We merge effortless ergonomic user journeys with editorial luxury design. Every interaction is sculpted with micro-delight, zero-friction layouts, and mathematically balanced spatial harmony.',
    deliverables: [
      'High-Fidelity Web & App Interface Design',
      'Interactive Design Systems & Figma Tokens',
      'Custom 3D Art Direction & Asset Creation',
      'User Journey Mapping & Usability Audits',
      'Motion Design & Micro-interaction Systems'
    ],
    capabilities: ['Spatial Hierarchy', 'Figma Tokenization', 'Adaptive Responsive Grid', 'Haptic Prototyping'],
    impactMetric: '+184%',
    impactLabel: 'Higher User Session Dwell Time'
  },
  {
    id: 'development',
    category: 'development',
    num: '03',
    title: 'Full-Stack Web Engineering',
    subtitle: 'Bespoke Architecture Engineered for Speed & Scale',
    description: 'We develop ultra-fast, modern web applications built on cutting-edge stacks. Clean code, sub-second latency, headless APIs, and responsive perfection that effortlessly scales with your company.',
    deliverables: [
      'Next.js & React High-Performance Web Applications',
      'Headless Commerce & Luxury E-Commerce Platforms',
      'Bespoke CMS & Digital Asset Management',
      'Custom API Architecture & Real-Time Sync',
      'Enterprise Performance & Security Audits'
    ],
    capabilities: ['TypeScript Perfection', 'Tailwind CSS Mastery', 'WebGL & Three.js', 'Core Web Vitals 99+'],
    impactMetric: '<0.4s',
    impactLabel: 'Average First Contentful Paint'
  },
  {
    id: 'marketing',
    category: 'marketing',
    num: '04',
    title: 'Omnichannel Digital Marketing',
    subtitle: 'High-Velocity Growth Engines That Convert',
    description: 'We transform brand prestige into measurable enterprise revenue. Through precision customer acquisition, search authority, content distribution, and funnel engineering, we scale your audience exponentially.',
    deliverables: [
      'Performance Marketing & Paid Social Scale',
      'High-Intent Organic Search (SEO) Dominance',
      'Data-Driven Conversion Rate Optimization (CRO)',
      'Multi-Touch Attribution Modeling',
      'Lifecycle Email & Retention Funnels'
    ],
    capabilities: ['Funnel Architecture', 'High-ROAS Media Buying', 'Programmatic Campaigns', 'LTV Amplification'],
    impactMetric: '+310%',
    impactLabel: 'Average Qualified Lead Inflow Surge'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aura-luxury',
    title: 'Aura Haute Joaillerie',
    client: 'Aura Paris & Geneva',
    year: '2025',
    category: '360° Transformation',
    headline: 'Scaling a Heritage Atelier into a Global Digital Luxury Icon',
    tagline: 'High Jewelry Digital Flagship & 3D Interactive Showroom',
    heroImage: '/src/assets/images/work_aura_luxury_1794332894190.jpg',
    summary: 'Aura was a private European jewelry atelier with an exquisite product but an antiquated digital footprint. Fionex overhauled their complete brand narrative, designed a museum-grade digital flagship, and launched an exclusive private client VIP acquisition funnel.',
    startingState: 'Boutique European atelier with appointment-only foot traffic, zero digital sales channel, and $1.2M annual regional revenue.',
    scaledOutcome: 'Scaled to an internationally recognized digital luxury brand commanding worldwide VIP orders across 22 countries.',
    metrics: [
      { label: 'Global Revenue Generated', value: '$18.4M', context: 'In first 12 months post-launch' },
      { label: 'High-Ticket Conversion', value: '+340%', context: 'On bespoke jewelry pieces over $15,000' },
      { label: 'Average Client Dwell Time', value: '7m 42s', context: 'Industry benchmark is 1m 50s' }
    ],
    servicesProvided: ['360° Brand Strategy', 'Editorial Design & Art Direction', 'Custom Web Architecture', 'VIP Performance Marketing'],
    deliverables: [
      'Gold-foiled physical brand collateral & packaging suite',
      'Bespoke digital showroom with real-time gem lighting rendering',
      'Private concierge booking portal with calendar synchronization',
      'Targeted ultra-high-net-worth digital acquisition campaign'
    ],
    teamLead: 'Julian Vance & Elena Rostova',
    quote: {
      text: 'Fionex took our heritage craft and translated it into digital pure gold. They understood the soul of our maison and scaled our global reach beyond what we believed was possible.',
      author: 'Claire de Montmirail',
      role: 'Creative Director & Co-Founder, Aura'
    }
  },
  {
    id: 'nexus-platform',
    title: 'Nexus Wealth Technologies',
    client: 'Nexus Global FinTech',
    year: '2025',
    category: 'Web Development',
    headline: 'Zero-to-One Platform Architecture for Modern Wealth Orchestration',
    tagline: 'High-Velocity Wealth Management System & Enterprise Rebrand',
    heroImage: '/src/assets/images/work_nexus_platform_1794332895875.jpg',
    summary: 'Nexus needed a revolutionary interface for family offices and institutional investors. Fionex devised an ultra-clean dark obsidian interface, sub-second financial telemetry charts, and an authoritative corporate brand positioning that inspired institutional trust.',
    startingState: 'Seed-stage FinTech concept with an unpolished beta prototype and difficulty closing Tier-1 institutional funds.',
    scaledOutcome: 'Raised $24M Series A backed by institutional partners, onboarding over $184M in assets within 6 months.',
    metrics: [
      { label: 'Assets Managed on Platform', value: '$184M+', context: 'Grown from $0 at launch' },
      { label: 'Telemetry & Chart Latency', value: '<180ms', context: 'Sub-second real-time streaming' },
      { label: 'Institutional Close Rate', value: '68%', context: 'Up from 14% prior to rebrand' }
    ],
    servicesProvided: ['UI/UX Product Architecture', 'Full-Stack Web Development', 'Enterprise Brand Identity', 'Content Strategy'],
    deliverables: [
      'Unified design system with 240+ dark glass interface tokens',
      'High-performance React/Node web portal with real-time financial sockets',
      'Pitch deck and investor narrative architecture',
      'Security-verified compliance visual framework'
    ],
    teamLead: 'Kaelen Thorne & Aria Chen',
    quote: {
      text: 'Our product transformed from looking like an early prototype to looking like an established multi-billion dollar financial institution overnight. The valuation impact was immediate.',
      author: 'David Sterling',
      role: 'CEO & Founder, Nexus Wealth'
    }
  },
  {
    id: 'verve-brand',
    title: 'Botanica Rare / Verve',
    client: 'Verve Fragrance Group',
    year: '2024',
    category: 'Digital Marketing',
    headline: 'Omnichannel Launch of Sustainable Luxury Botanical Perfumery',
    tagline: '360° Sustainable Luxury Packaging, E-Commerce & Customer Acquisition',
    heroImage: '/src/assets/images/work_verve_brand_1794332894702.jpg',
    summary: 'Botanica Rare created zero-synthetics botanical perfumes. Fionex crafted their poetic narrative, tactile sustainable packaging, a sensory digital shopping experience, and a hyper-targeted creator seeding and paid social engine.',
    startingState: 'Independent laboratory batch of 3,000 bottles with zero initial market awareness or brand narrative.',
    scaledOutcome: 'Sold out initial batch in 14 days, driving 4.8x ROAS and securing distribution in 18 premium boutique department stores.',
    metrics: [
      { label: 'Return on Ad Spend (ROAS)', value: '4.8x', context: 'Across Meta and Google Search' },
      { label: 'Time to Sold-Out Batch', value: '14 Days', context: 'Original 90-day forecast exceeded' },
      { label: 'Repeat Customer Rate', value: '41%', context: 'Within 90 days of initial purchase' }
    ],
    servicesProvided: ['Packaging & Structural Design', 'Sensory E-Commerce Development', 'Performance Marketing', 'Creator Strategy'],
    deliverables: [
      'Eco-luxury flacon packaging and embossed FSC paper suite',
      'Custom headless Shopify storefront with scent profiling quiz',
      'High-conversion video and static creative catalog',
      'VIP subscriber pre-launch email sequence generating $120k on Day 1'
    ],
    teamLead: 'Elena Rostova & Aria Chen',
    quote: {
      text: 'Fionex proved that small, passionate ideas can outmaneuver global conglomerates with the right design discipline and marketing horsepower.',
      author: 'Sophia Lindqvist',
      role: 'Co-Founder & Master Perfumer, Botanica Rare'
    }
  }
];

export const SCALE_STAGES: ScaleStage[] = [
  {
    id: 'catalyst',
    stageNumber: '01',
    title: 'The Micro-Catalyst',
    concept: 'Uncovering the Singular Edge',
    smallElement: 'A refined brand positioning statement, typographic tone, and customer hook.',
    scaledTransformation: 'Eliminates commodity status, immediately capturing executive attention and pricing power.',
    timeline: 'Weeks 1 – 3',
    deliverables: ['Brand DNA Archetype', 'Core Value Proposition', 'Competitive Differentiation Matrix'],
    multiplier: '2x Credibility'
  },
  {
    id: 'foundation',
    stageNumber: '02',
    title: 'Digital Flagship Foundation',
    concept: 'Designing for Flawless Authority',
    smallElement: 'Precision spatial layout, 60fps micro-interactions, and sub-second load times.',
    scaledTransformation: 'Converts casual visitors into high-intent inbound inquiries and prestigious buyers.',
    timeline: 'Weeks 4 – 8',
    deliverables: ['Custom Web Architecture', 'Design System & Component Library', 'Conversion-Optimized User Flows'],
    multiplier: '3.5x Conversion Rate'
  },
  {
    id: 'momentum',
    stageNumber: '03',
    title: 'Omnichannel Velocity',
    concept: 'Amplifying Reach Through Science',
    smallElement: 'Micro-tested creative angles, search authority keywords, and retention funnels.',
    scaledTransformation: 'Predictable, repeatable customer acquisition with compounding return on spend.',
    timeline: 'Weeks 9 – 14',
    deliverables: ['Performance Ad Engine', 'Search Engine Authority Strategy', 'VIP Retention Sequence'],
    multiplier: '4.8x Pipeline Growth'
  },
  {
    id: 'dominance',
    stageNumber: '04',
    title: 'Market Leadership Scale',
    concept: 'Sustained Category Dominance',
    smallElement: 'Consistent brand governance, iterative split testing, and global expansion readiness.',
    scaledTransformation: 'Category-defining brand equity that attracts premium valuations, partnerships, and market acclaim.',
    timeline: 'Ongoing Sustained',
    deliverables: ['Omnichannel Brand Playbook', 'Quarterly Growth Sprints', 'Enterprise Scalability Framework'],
    multiplier: '10x+ Valuation Impact'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'julian',
    name: 'Julian Vance',
    role: 'Creative Director & Brand Strategist',
    pillar: 'Brand Architecture & Narrative',
    bio: 'Julian directs the conceptual soul of Fionex. With over 12 years directing luxury fashion, architectural studios, and tech brands, he crafts identities that evoke reverence and undeniable prestige.',
    specialties: ['360° Brand Strategy', 'Haute Art Direction', 'Typography Systems', 'Narrative Architecture'],
    philosophy: 'A brand is not a logo; it is the emotional gravity a company exerts on the world.',
    experienceYears: 12,
    notableAchievement: 'Directed brand identity for 3 unicorn exits totaling over $1.4B in enterprise value.'
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Principal Product & Visual Designer',
    pillar: 'UI/UX & Spatial Systems',
    bio: 'Former senior designer at top European design houses, Elena bridges pure fine art with ergonomic digital interaction. Her interfaces feel tactile, serene, and mathematically harmonious.',
    specialties: ['Design Systems (Figma)', 'Luxury Interaction Design', 'Micro-interactions', 'Design Thinking'],
    philosophy: 'Simplicity is the final revelation of luxury. Every pixel must justify its existence.',
    experienceYears: 10,
    notableAchievement: 'Designed interfaces honored by Awwwards Site of the Day and Red Dot Design Award.'
  },
  {
    id: 'kaelen',
    name: 'Kaelen Thorne',
    role: 'Lead Full-Stack & Web Architect',
    pillar: 'Engineering & Performance',
    bio: 'Kaelen ensures that what looks breathtaking also performs with blistering, faultless speed. He specializes in headless architectures, React/Next.js performance engineering, and modern cloud deployment.',
    specialties: ['React / TypeScript / Next.js', 'Sub-second Web Vitals', 'Headless API Design', 'Interactive Canvas/WebGL'],
    philosophy: 'Speed is an aesthetic. A luxury website must respond instantaneously to human touch.',
    experienceYears: 11,
    notableAchievement: 'Engineered web applications supporting over 4.5 million concurrent global requests without downtime.'
  },
  {
    id: 'aria',
    name: 'Aria Chen',
    role: 'Head of Growth & Digital Marketing',
    pillar: 'Acquisition & Funnel Science',
    bio: 'Aria turns brand prestige into compounding revenue. She blends high-velocity performance marketing with organic search domination and retention algorithms that scale businesses reliably.',
    specialties: ['Paid Media Strategy (Meta, Google)', 'High-Intent SEO', 'LTV & Retention Funnels', 'Multi-Touch Analytics'],
    philosophy: 'Great creative without precision distribution is a whisper in a thunderstorm.',
    experienceYears: 9,
    notableAchievement: 'Managed over $28M in profitable ad spend generating an aggregate $140M in validated client revenue.'
  },
  {
    id: 'marcus',
    name: 'Marcus Sterling',
    role: '3D & Motion Craft Specialist',
    pillar: 'Interactive & Motion Assets',
    bio: 'Marcus creates the visual depth that separates ordinary websites from immersive sensory journeys. He sculpts photorealistic 3D assets, fluid motion physics, and cinematic brand video.',
    specialties: ['Three.js & WebGL Prototyping', 'Cinematic 3D Rendering', 'Spline & Blender', 'Physics-Based Motion'],
    philosophy: 'Motion gives digital interfaces weight, tactility, and breath.',
    experienceYears: 8,
    notableAchievement: 'Created bespoke 3D brand assets featured at Milan Design Week and Venice Biennale.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Fionex took our boutique jewelry maison and positioned us alongside the most revered global heritage houses. Their 5-person team gave us more attention and vastly superior execution than the 50-person agency we previously retained.',
    author: 'Claire de Montmirail',
    role: 'Creative Director & Co-Founder',
    company: 'Aura Haute Joaillerie',
    result: '+340% High-Ticket Conversions'
  },
  {
    id: '2',
    quote: 'Most agencies either understand visual design or technical engineering—never both. Fionex delivered an institutional financial platform with sub-200ms latency wrapped in an interface that closed our $24M Series A round.',
    author: 'David Sterling',
    role: 'Chief Executive Officer',
    company: 'Nexus Wealth Technologies',
    result: '$184M Assets Onboarded'
  },
  {
    id: '3',
    quote: 'The small-to-large compounding philosophy is real. They identified three critical friction points in our checkout and brand narrative, and within 14 days of launch our entire initial batch was completely sold out.',
    author: 'Sophia Lindqvist',
    role: 'Founder & Master Perfumer',
    company: 'Botanica Rare',
    result: '4.8x Sustained ROAS'
  }
];

export const FAQS = [
  {
    q: 'How does Fionex differ from traditional large agencies?',
    a: 'Traditional agencies hand off your strategic brief to junior interns. At Fionex, you work directly with our five senior partners—each a master in Brand Direction, UI/UX, Full-Stack Engineering, Performance Marketing, and 3D Motion. No bloat, no telephone games, pure craftsmanship.'
  },
  {
    q: 'What do you mean by taking "small things and scaling to large things"?',
    a: 'We believe sustainable, massive growth originates in micro-precision. A subtly sharpened value proposition, a bespoke typography system that commands respect, a 0.3-second load speed, and a frictionless purchase journey. When these small elements align, they trigger an exponential multiplier effect, scaling boutique brands into category leaders.'
  },
  {
    q: 'What types of companies do you partner with?',
    a: 'We collaborate with ambitious ventures across all stages: high-growth tech startups needing brand authority, boutique luxury artisans expanding globally, and established mid-market enterprises executing a modern digital rebirth. If you value uncompromising aesthetic and engineering excellence, we are the right team.'
  },
  {
    q: 'How long does a typical 360° branding and web development project take?',
    a: 'Because our 5 specialists work in synchronized parallel sprints, our typical complete transformation takes 6 to 10 weeks from initial Brand DNA workshops to live production deployment. We also offer focused 3-week acceleration sprints for targeted deliverables.'
  },
  {
    q: 'Do you provide ongoing growth and digital marketing after launch?',
    a: 'Yes. For select partners, our Head of Growth (Aria Chen) leads dedicated post-launch scaling sprints covering performance marketing, conversion rate optimization, search dominance, and continuous creative refinement.'
  }
];
