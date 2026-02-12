export const prototypes = [
  {
    id: "mobile-task-tracker",
    title: "Mobile Task Tracker",
    subtitle: "Event Staff Task Management Flow",
    description: "Click the highlighted areas to see how event staff access and complete their tasks in the BookedOut app.",
    caseStudySlug: "mobile-task-tracker",
    caseStudyTitle: "AI Powered Development Workflow",
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
    caseStudyTitle: "LLM Integration Strategy",
    thumbnail: import.meta.env.BASE_URL + "images/case-studies/ediscovery-hero.jpg",
    tags: ["Desktop App", "AI/ML", "Legal Tech", "Document Review"],
    isDesktop: true,
    isEDiscovery: true,
    prototype: {
      title: "eDiscovery AI Platform",
      description: "Navigate through the AI-assisted document review workflow with 2026-ready features",
      screens: [
        { id: "eca", label: "Case Assessment", description: "Concept map visualization, entity extraction, and sentiment analysis" },
        { id: "protocol", label: "Protocol Builder", description: "Natural language review instructions with AI-suggested criteria" },
        { id: "review", label: "Document Review", description: "Citation-led viewer with AI rationale and hallucination checks" },
        { id: "privilege", label: "Privilege Log", description: "Batch-action workflow with AI-drafted descriptions" }
      ]
    }
  }
]

export const getPrototypeById = (id) => {
  return prototypes.find(p => p.id === id)
}
