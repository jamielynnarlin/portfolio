export const prototypes = [
  {
    id: "mobile-task-tracker",
    title: "Mobile Task Tracker",
    subtitle: "Event Staff Task Management Flow",
    description: "An interactive prototype showcasing the user journey for event staff managing tasks in the BookedOut mobile app. This flow demonstrates how users navigate from their profile to view upcoming events, access task lists organized by time-based milestones, and complete individual tasks.",
    caseStudySlug: "ai-powered-development-workflow",
    caseStudyTitle: "AI-Powered Development Workflow",
    thumbnail: import.meta.env.BASE_URL + "images/case-studies/bookedout-profile-taskflow.png",
    tags: ["Mobile App", "React Native", "Task Management", "UX Flow"],
    prototype: {
      title: "Profile & Task Flow",
      description: "Tap through to explore the user journey from profile to task completion",
      compositeImage: import.meta.env.BASE_URL + "images/case-studies/bookedout-profile-taskflow.png",
      steps: [
        {
          label: "Profile Screen",
          description: "Users land on their profile where upcoming events are prominently displayed. The red 'Task Alert' banner immediately signals that action is needed, creating a clear call-to-action without overwhelming the interface.",
          highlight: 0
        },
        {
          label: "Event Tasks Overview",
          description: "Tasks are intelligently organized by time-based milestones: Before, During, Check Out, and After. This categorization helps event staff prioritize work based on the event timeline, reducing cognitive load and missed tasks.",
          highlight: 1
        },
        {
          label: "Expanded Task View",
          description: "The expanded view reveals specific actionable items like 'Check In' and 'Take Photo' that users complete directly within the app. Progress indicators show completion status at a glance.",
          highlight: 2
        }
      ],
      bullets: [
        "Events bubbled up on profile for quick access",
        "Time-based task categories: Before, During, Check Out, After",
        "Visual task alerts guide users to immediate action",
        "Check-off tasks provide accountability and progress tracking",
        "Milestone progress bars show overall completion"
      ]
    }
  }
]

export const getPrototypeById = (id) => {
  return prototypes.find(p => p.id === id)
}
