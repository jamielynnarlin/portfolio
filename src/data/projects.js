export const projects = [
  {
    id: 1,
    title: "AI Powered Development Workflow",
    description: "Implemented agentic AI systems to accelerate SDLC, reducing development cycle time by 40% through intelligent code review, automated testing, and smart documentation generation.",
    tags: ["AI/ML", "SDLC", "Automation"],
    category: "ai",
    liveUrl: null,
    caseStudyUrl: "/projects/mobile-task-tracker",
    mvp: true,
  },
  {
    id: 2,
    title: "DesignOps Transformation",
    description: "Led DesignOps strategy for an AI powered document intelligence platform, managing external design consultants while aligning executive stakeholders across a complex, multimodal user experience.",
    tags: ["DesignOps", "Leadership", "AI/ML", "Vendors"],
    category: "delivery",
    liveUrl: null,
    caseStudyUrl: "/projects/enterprise-designops-transformation",
    mvp: true,
  },
  {
    id: 3,
    title: "Conversational Document Review",
    description: "Designed an AI assistant for legal document review, helping contract reviewers analyze and tag 2,000+ documents through natural conversation. Achieved 60% faster review time and 2x documents processed per day.",
    tags: ["Conversational UI", "LLM Integration", "Legal Tech"],
    category: "ai",
    liveUrl: null,
    caseStudyUrl: "/projects/llm-integration-strategy",
  },
  {
    id: 4,
    title: "Restaurant Portal Redesign",
    description: "Led UX redesign of Rewards Network's restaurant owner portal, creating an interactive dashboard with dynamic notifications, diner review management, and actionable analytics. Achieved 53% increase in user interaction and 49% increase in cash advance signups.",
    tags: ["UX Research", "Dashboard Design", "FinTech"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/restaurant-portal-redesign",
  },
  {
    id: 5,
    title: "Rewards Network Redesign",
    description: "Redesigned the Rewards Network earn page to build user trust and streamline signups across multiple dining reward programs. Achieved 30% increase in new member signups and reduced bounce rates by 10%.",
    tags: ["UX Research", "Marketing", "Conversion Optimization"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/rewards-network-marketing-website",
  },
]

// MVP filtered projects - only show these in production
export const mvpProjects = projects.filter(p => p.mvp)

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Automation" },
  { id: "delivery", label: "Delivery Leadership" },
  { id: "ux", label: "UX & Design" },
]
