export const projects = [
  {
    id: 1,
    title: "Mobile Task Tracker Redesign — BookedOut",
    description: "A mobile app that turns gig event staff's invisible labor into documented proof of work, validated across three live events.",
    tags: ["Product Design", "Mobile UX", "User Research"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/mobile-task-tracker",
    mvp: true,
  },
  {
    id: 2,
    title: "DesignOps Transformation",
    description: "Led DesignOps for an AI document intelligence platform, aligning executives and managing external design vendors.",
    tags: ["DesignOps", "Leadership", "AI/ML", "Vendors"],
    category: "delivery",
    liveUrl: null,
    caseStudyUrl: "/projects/enterprise-designops-transformation",
    mvp: true,
  },
  {
    id: 3,
    title: "Conversational Document Review",
    description: "An AI assistant for legal document review that cut review time 60% and doubled daily throughput.",
    tags: ["Conversational UI", "LLM Integration", "Legal Tech"],
    category: "ai",
    liveUrl: null,
    caseStudyUrl: "/projects/llm-integration-strategy",
    mvp: true,
  },
  {
    id: 4,
    title: "Restaurant Portal Redesign",
    description: "Redesigned a restaurant owner portal, driving 53% more engagement and 49% more cash advance signups.",
    tags: ["UX Research", "Dashboard Design", "FinTech"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/restaurant-portal-redesign",
    mvp: true,
  },
  {
    id: 5,
    title: "Rewards Network Redesign",
    description: "Rebuilt the dining rewards earn page to build trust and streamline signups, lifting new members 30%.",
    tags: ["UX Research", "Marketing", "Conversion Optimization"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/rewards-network-marketing-website",
  },
]

// In development, show all projects. In production, only show MVP projects.
export const mvpProjects = import.meta.env.DEV ? projects : projects.filter(p => p.mvp)

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Automation" },
  { id: "delivery", label: "Delivery Leadership" },
  { id: "ux", label: "UX & Design" },
]
