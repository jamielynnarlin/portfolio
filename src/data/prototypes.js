export const prototypes = [
  {
    id: "mobile-task-tracker",
    title: "Mobile Task Tracker",
    subtitle: "Event Staff Task Management Flow",
    description: "Click the highlighted areas to see how event staff access and complete their tasks in the BookedOut app.",
    caseStudySlug: "mobile-task-tracker",
    caseStudyTitle: "Mobile Task Tracker",
    thumbnail: import.meta.env.BASE_URL + "images/case-studies/Bookedout-profile.png",
    tags: ["Mobile App", "React Native", "Task Management", "UX Flow"],
    prototype: {
      title: "Profile & Task Flow",
      description: "Click the highlighted areas to navigate through the app",
      screens: [
        {
          id: "profile",
          label: "Profile Screen",
          description: "Users land on their profile where upcoming events are prominently displayed. The red 'Task Alert' banner immediately signals that action is needed, drawing attention to events requiring attention.",
          image: import.meta.env.BASE_URL + "images/case-studies/Bookedout-profile.png",
          hotspot: {
            top: "62%",
            left: "8%",
            width: "42%",
            height: "18%",
            hint: "Tap the event with Task Alert"
          },
          backHotspot: null,
          nextScreen: "tasks"
        },
        {
          id: "tasks",
          label: "Your Event Tasks",
          description: "Tasks are organized by time based milestones: Before, During, Check Out, and After. This helps event staff prioritize work based on the event timeline.",
          image: import.meta.env.BASE_URL + "images/case-studies/Bookedout-eventtasks.png",
          hotspot: {
            top: "30%",
            left: "8%",
            width: "84%",
            height: "12%",
            hint: "Tap a task card to expand"
          },
          backHotspot: {
            top: "8%",
            left: "4%",
            width: "10%",
            height: "5%"
          },
          nextScreen: "expanded"
        },
        {
          id: "expanded",
          label: "Expanded Task View",
          description: "The expanded view reveals specific actionable items like 'Check In' and 'Take Photo' that users complete directly within the app. Progress indicators show completion status at a glance.",
          image: import.meta.env.BASE_URL + "images/case-studies/Bookedout-completetasks.png",
          hotspot: null,
          backHotspot: {
            top: "8%",
            left: "4%",
            width: "10%",
            height: "5%"
          },
          nextScreen: null
        }
      ],
      bullets: [
        "Events bubbled up on profile for quick access",
        "Time based task categories: Before, During, Check Out, After",
        "Visual task alerts guide users to immediate action",
        "Check off tasks provide accountability and progress tracking",
        "Milestone progress bars show overall completion"
      ]
    }
  },
  {
    id: "ediscovery-ai",
    title: "AI-Assisted eDiscovery",
    subtitle: "Intelligent Document Review Platform",
    description: "Explore how AI transforms document review with natural language protocol building, citation-led analysis, and automated privilege logging.",
    caseStudySlug: "llm-integration-strategy",
    caseStudyTitle: "AI-Powered eDiscovery Review",
    thumbnail: import.meta.env.BASE_URL + "images/case-studies/ediscovery-hero.jpg",
    tags: ["Desktop App", "AI/ML", "Legal Tech", "Document Review"],
    isDesktop: true,
    isEDiscovery: true,
    prototype: {
      title: "eDiscovery AI Platform",
      description: "Navigate through the AI-assisted document review workflow with 2026-ready features",
      screens: [
        { id: "eca", label: "Case Assessment", description: "Concept map visualization, entity extraction, and sentiment analysis" },
        { id: "protocol", label: "Protocol Builder", description: "Write natural language review instructions or load a template" },
        { id: "params", label: "Review Parameters", description: "Configure confidence thresholds, prioritization, dedup, and reviewer routing" },
        { id: "subset", label: "Subset Test", description: "Validate protocol on a 1,000-document sample before full review" },
        { id: "results", label: "Review Results", description: "Full corpus results with relevance scores, findings, and AI rationale" }
      ]
    }
  },
  {
    id: "restaurant-dashboard",
    title: "Restaurant Owner Portal",
    subtitle: "Multi-Location Dashboard & AI Assistant",
    description: "Explore an interactive restaurant analytics dashboard with multi-location switching, review management with AI-drafted replies, and a conversational data assistant.",
    caseStudySlug: "restaurant-portal-redesign",
    caseStudyTitle: "Restaurant Portal Redesign",
    thumbnail: import.meta.env.BASE_URL + "images/case-studies/restaurant-hero.jpg",
    tags: ["Desktop App", "Dashboard", "AI Assistant", "Multi-Location"],
    isDesktop: true,
    isRestaurantDashboard: true,
    prototype: {
      title: "Mario's Trattoria Portal",
      description: "Navigate the dashboard tabs to explore analytics, reviews, events, and the AI assistant",
      screens: [
        { id: "overview", label: "Overview", description: "Notification-driven home with stats, charts, and quick actions" },
        { id: "reviews", label: "Reviews", description: "Diner review management with AI-generated reply drafts" },
        { id: "analytics", label: "Analytics", description: "Revenue breakdowns, rating distribution, and peak-hour heatmap" },
        { id: "events", label: "Events", description: "Manage dining promotions with AI-suggested new events" },
        { id: "funding", label: "Funding", description: "Merchant cash advance eligibility and history" },
        { id: "ai", label: "AI Assistant", description: "Ask natural language questions about your restaurant data" }
      ]
    }
  },
  {
    id: "investigation-platform",
    title: "AI Investigation Platform",
    subtitle: "NLP-Powered Document Search & Verification",
    description: "Explore how AI transforms corporate investigations with natural language search, automated source verification, and slide-out citation inspection.",
    caseStudySlug: "enterprise-designops-transformation",
    caseStudyTitle: "DesignOps Transformation",
    thumbnail: import.meta.env.BASE_URL + "images/case-studies/ediscovery-hero.jpg",
    tags: ["Desktop App", "AI/ML", "Legal Tech", "NLP Search"],
    isDesktop: true,
    isInvestigation: true,
    prototype: {
      title: "Investigate.ai Platform",
      description: "Navigate through the AI-powered investigation workflow - from search to source verification",
      screens: [
        { id: "search", label: "AI Search", description: "Natural language search interface with example queries and case context" },
        { id: "results", label: "Results & Analysis", description: "Document results with AI-generated summary, citations, and slide-out source viewer" },
        { id: "verify", label: "Source Verification", description: "Full document view with highlighted passages and contextual AI panel" }
      ]
    }
  }
]

export const getPrototypeById = (id) => {
  return prototypes.find(p => p.id === id)
}
