export const projects = [
  {
    id: 1,
    title: "Event Staffing App",
    description: "Gig staff task app validated in live events.",
    tags: ["Product Design", "Mobile UX", "User Research"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/mobile-task-tracker",
    mvp: true,
  },
  {
    id: 2,
    title: "AI Investigation Platform",
    description: "AI document intelligence platform with DesignOps support.",
    tags: ["DesignOps", "Leadership", "AI/ML", "Vendors"],
    category: "delivery",
    liveUrl: null,
    caseStudyUrl: "/projects/enterprise-designops-transformation",
    mvp: true,
  },
  {
    id: 3,
    title: "Conversational Document Review",
    description: "AI review assistant that cut review time 60%.",
    tags: ["Conversational UI", "LLM Integration", "Legal Tech"],
    category: "ai",
    liveUrl: null,
    caseStudyUrl: "/projects/llm-integration-strategy",
    mvp: true,
  },
  {
    id: 4,
    title: "Restaurant Owner Portal",
    description: "Restaurant portal that lifted engagement and cash advance signups.",
    tags: ["UX Research", "Dashboard Design", "FinTech"],
    category: "ux",
    liveUrl: null,
    caseStudyUrl: "/projects/restaurant-portal-redesign",
    mvp: true,
  },
  {
    id: 5,
    title: "Rewards Network Earn Page",
    description: "Rebuilt the dining rewards earn page to build trust and streamline signups, lifting new members 30%.",
    tags: ["UX Research", "Marketing", "Conversion Optimization"],
    category: "ux",
    liveUrl: "/rewards-network",
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
