// Event Staffing App, in the Product Owner case study format.
// Source: caseStudies['mobile-task-tracker'] (Part 1 only). The Part 2 AI
// retrospective is hypothetical, so none of its numbers appear here.
export const mobileTaskTracker = {
  slug: 'mobile-task-tracker',
  title: 'Event Staffing App',
  subtitle: 'Reframing an app redesign as a proof-of-work problem, so gig event staff could record their work and managers could see who performed.',
  meta: {
    role: 'Design Lead',
    timeframe: '4 months',
    team: 'Product, engineering, QA, design',
    context: 'Gig economy SaaS, experiential marketing',
  },
  tags: ['Gig Economy', 'Mobile App', 'User Research', 'Task Management'],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=80',
    alt: 'Concert crowd filming the stage on a phone under bright stage lights',
    width: 1920,
    height: 1280,
    focusY: 0.5,
  },
  links: [{ label: 'Try the interactive prototype', to: '/prototypes/mobile-task-tracker' }],

  businessProblem: {
    summary: 'As Design Lead, I led research and shaped product strategy for BookedOut’s event staff app. The ask was a redesign, but research showed staff had no way to prove the work they did.',
    statement: 'Event staff did the work, but nothing recorded it, so managers couldn’t see who performed.',
    metrics: [
      { icon: 'users', value: 'Thousands', label: 'Event staff working for major brands and agencies' },
      { icon: 'document', value: '47', label: 'Email replies to dig through for shift details' },
    ],
    constraints: [
      'Used mid-shift at busy live events',
      'Built into the existing BookedOut app',
    ],
  },

  whyItMattered: {
    stakes: [
      { icon: 'users', title: 'Top performers overlooked', detail: 'Reliable staff were passed over for premium gigs because their effort was invisible.' },
      { icon: 'trend', title: 'Manager blind spot', detail: 'Managers had no view of team productivity when deciding who to staff.' },
      { icon: 'time', title: 'Unprepared shifts', detail: 'Staff arrived unsure what was expected and filed incomplete reports from memory.' },
    ],
    callout: 'If work isn’t recorded, the platform can’t match its best staff to its best gigs.',
  },

  initialRequest: {
    requestedBy: 'BookedOut stakeholders',
    request: 'Redesign the event staff app so it’s easier to use.',
    assumption: 'Cluttered, dated screens were the main reason staff struggled.',
  },

  discovery: {
    activities: [
      { method: 'Staff interviews', icon: 'users', stat: '12', statLabel: 'In-depth interviews', finding: 'Reliable staff were passed over for better gigs; no one saw their work.', ledTo: ['Show completed work to managers'] },
      { method: 'Live event observation', icon: 'observe', stat: '3', statLabel: 'Live events shadowed', finding: 'Once the rush hit, staff lost track of tasks and work went unlogged.', ledTo: ['Complete tasks with one tap', 'Check out within a set window'] },
      { method: 'Staff surveys', icon: 'data', stat: '47', statLabel: 'Surveys completed', finding: 'Shift details lived in email threads, not in the app staff relied on.', ledTo: ['Surface the next event first', 'Group tasks by shift phase'] },
      { method: 'Existing app walkthrough', icon: 'search', stat: '3', statLabel: 'issues flagged', finding: 'Events were buried, tasks were missing, and the gallery went unused.', ledTo: ['Surface the next event first', 'Replace gallery with task photos'] },
    ],
    stakeholders: [
      { group: 'Event staff', need: 'Know what’s expected and get credit for their work' },
      { group: 'Event managers', need: 'See team output and who is reliable' },
      { group: 'BookedOut product team', need: 'Match the best staff to premium events' },
    ],
  },

  actualProblem: {
    rootCause: 'The problem wasn’t a dated interface. The app had no way to record work, so good work stayed invisible.',
    evidence: [
      'No mid-shift task tracking: work was done but never recorded',
      'Managers had no view of who performed on a shift',
      'Profile data drove gig matching, but staff couldn’t tell if it was right',
    ],
    reframe: 'How might we make recording work easier than skipping it, so managers can see and reward reliable staff?',
  },

  // One card per product screen, with the discovery → solution pairs it answers
  decisions: [
    {
      title: 'Profile',
      design: 'profile',
      caption: 'The original home screen next to the redesigned profile, with upcoming events up front.',
      decisions: [
        {
          discovery: 'The next event was buried in a cluttered profile, so staff checked email instead.',
          solution: 'Surface the next event first',
        },
      ],
    },
    {
      title: 'Event Tasks',
      design: 'eventTasks',
      caption: 'The original activations list showed events but no tasks. Tasks are now grouped into Before, During, Check Out, and After.',
      decisions: [
        {
          discovery: 'The app listed events but no tasks, so staff arrived unprepared.',
          solution: 'Group tasks by shift phase',
        },
      ],
    },
    {
      title: 'Task Completion',
      design: 'taskCompletion',
      caption: 'The unused gallery was replaced by a camera built into each task.',
      decisions: [
        {
          discovery: 'Logging work was harder than doing it, so busy staff skipped it.',
          solution: 'Complete tasks with one tap',
        },
        {
          discovery: 'Staff never used the in-app gallery; they used their phone’s camera.',
          solution: 'Replace gallery with task photos',
        },
      ],
    },
    {
      title: 'Check Out and Shift Summary',
      design: 'checkOut',
      caption: 'A short post-event questionnaire, then a summary of completed work with photo proof.',
      decisions: [
        {
          discovery: 'End-of-day reports were written from memory and often incomplete.',
          solution: 'Check out within a set window',
        },
        {
          discovery: 'Managers couldn’t see who was doing good work.',
          solution: 'Show completed work to managers',
        },
      ],
    },
  ],

  // The source has no detail on backlog, refinement, or release practices.
  engineering: [
    { title: 'Clickable prototype', detail: 'Built an interactive prototype of the profile-to-task flow so the team could review it before build.' },
    { title: 'Cross-functional delivery', detail: 'Worked alongside product, engineering, and QA from research through validation.' },
  ],

  outcomes: {
    scorecard: [
      { label: 'Task completion rate', before: 'Pre-redesign rate', after: '+40%' },
      { label: 'Shift preparation', before: 'Arrived unsure what’s expected', after: '90% felt more prepared' },
      { label: 'Manager visibility', before: 'No view of team output', after: '3x more visibility' },
      { label: 'Missed checkouts', before: 'Reports written from memory', after: 'Zero reported' },
    ],
  },

  takeaways: [
    { title: 'Question the redesign brief', detail: 'The ask was a cleaner app, but the gap was missing capability. Research turned a visual refresh into a product that records work.' },
    { title: 'Make the right behavior the easy one', detail: 'Staff skipped logging because it was harder than the work itself. One tap and an in-task camera made recording the path of least resistance.' },
    { title: 'Use AI to speed synthesis, not judgment', detail: 'This project predates today’s AI tools. Now I’d use AI to sort interview themes and draft user stories faster, while the team still decides whose problem to solve.' },
  ],
}
