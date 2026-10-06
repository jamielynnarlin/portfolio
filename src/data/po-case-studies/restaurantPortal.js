// Restaurant Owner Portal, in the Product Owner case study format.
// Source: caseStudies['restaurant-portal-redesign'] and the original
// RestaurantCaseStudy page. Designs live in src/components/restaurant-case-study.
export const restaurantPortal = {
  slug: 'restaurant-portal-redesign',
  title: 'Restaurant Owner Portal',
  subtitle: 'Reframing a dashboard refresh as a retention problem, then shipping a portal that gives restaurant owners a reason to log in every day.',
  meta: {
    role: 'Lead UX Designer',
    timeframe: '4 months',
    team: 'Product, engineering, marketing, sales',
    context: 'Rewards Network, FinTech',
  },
  tags: ['FinTech', 'Partner Portal', 'Notifications', 'Multi-Location'],
  heroImage: {
    src: import.meta.env.BASE_URL + 'images/case-studies/restaurant-hero.jpg',
    alt: 'Empty restaurant dining room with set tables',
    width: 1600,
    height: 1067,
    focusY: 0.6,
  },
  links: [{ label: 'Try the interactive prototype', to: '/prototypes/restaurant-dashboard' }],

  businessProblem: {
    summary: 'As Lead UX Designer, I led discovery and delivery for Rewards Network’s restaurant owner portal. Stakeholders asked for a modern dashboard, but discovery showed owners had no reason to come back.',
    statement: 'Restaurant owners logged in, found nothing actionable, and stopped coming back.',
    metrics: [
      { icon: 'trend', value: '12%', label: 'Of portal features owners discovered' },
      { icon: 'users', value: '5 clicks', label: 'To switch between locations' },
      { icon: 'document', value: '20 hrs/wk', label: 'Sales time on manual funding outreach' },
    ],
    constraints: [
      'Legacy module-based layout',
      'Existing API and data refresh limits',
    ],
  },

  whyItMattered: {
    stakes: [
      { icon: 'cost', title: 'Missed funding', detail: 'Owners eligible for a cash advance rarely learned about it unless sales reached out.' },
      { icon: 'time', title: 'Sales capacity', detail: 'Account managers spent hours each week on outreach the portal could have handled.' },
      { icon: 'users', title: 'Member retention', detail: 'With no reason to log in, owners couldn’t see the value of the partnership.' },
    ],
    callout: 'A portal owners never opened couldn’t sell funding, surface reviews, or prove the partnership’s value.',
  },

  initialRequest: {
    requestedBy: 'Product and sales leaders',
    request: 'Modernize the restaurant owner dashboard.',
    assumption: 'A cleaner, more modern dashboard would bring owners back.',
  },

  discovery: {
    activities: [
      { method: 'Stakeholder interviews', icon: 'users', stat: '3', statLabel: 'stakeholder groups', finding: 'Owners had no alerts and had to check each location one at a time.', ledTo: ['Lead with priority notifications', 'Switch locations without losing context'] },
      { method: 'Usage analytics audit', icon: 'data', stat: '3', statLabel: 'metrics reviewed', finding: 'Analytics showed raw numbers with no link to business value.', ledTo: ['Tie every metric to business value'] },
      { method: 'Sales workshops', icon: 'workflow', stat: '3', statLabel: 'functions involved', finding: 'Account managers found and pitched funding eligibility by hand.', ledTo: ['Surface funding eligibility in the dashboard'] },
      { method: 'Guerrilla prototype testing', icon: 'observe', stat: '3', statLabel: 'facilitators involved', finding: 'Owners wanted recent reviews first; sales loved the funding banner.', ledTo: ['Reply to reviews from the dashboard', 'Surface funding eligibility in the dashboard'] },
    ],
    stakeholders: [
      { group: 'Restaurant owners', need: 'See what needs attention today, across every location' },
      { group: 'Sales account managers', need: 'Spot clients eligible for funding without manual outreach' },
      { group: 'Client success', need: 'Show members the value of their partnership' },
    ],
  },

  actualProblem: {
    rootCause: 'The problem wasn’t a dated look. The portal gave owners nothing new or actionable, so there was no reason to return.',
    evidence: [
      'No notifications or action items at login',
      'Analytics showed numbers without business meaning',
      'Location data sat behind a separate filter screen',
      'Funding eligibility depended on sales outreach',
    ],
    reframe: 'How might we give owners something new and actionable at every login, so the portal earns daily visits and drives funding and review engagement?',
  },

  // One card per product screen, with the discovery → solution pairs it answers
  decisions: [
    {
      title: 'Dashboard Home',
      design: 'home',
      caption: 'A priority notification banner, the location switcher in the header, and key stats at login.',
      decisions: [
        {
          discovery: 'Owners logged in to static data with no alerts or action items.',
          solution: 'Lead with priority notifications',
        },
        {
          discovery: 'Multi-unit owners had to jump to a separate screen to change locations.',
          solution: 'Switch locations without losing context',
        },
      ],
    },
    {
      title: 'Merchant Cash Advance',
      design: 'funding',
      caption: 'Funding eligibility by location, with a direct path to apply. Shown in the interactive prototype.',
      decisions: [
        {
          discovery: 'Account managers tracked funding eligibility and pitched it to clients by hand.',
          solution: 'Surface funding eligibility in the dashboard',
        },
      ],
    },
    {
      title: 'Reviews',
      design: 'reviews',
      caption: 'Recent diner reviews across locations, filtered to the ones that need a reply.',
      decisions: [
        {
          discovery: 'In testing, owners most wanted to see recent reviews and respond quickly.',
          solution: 'Reply to reviews from the dashboard',
        },
      ],
    },
    {
      title: 'Analytics',
      design: 'analytics',
      caption: 'Revenue by location and peak dining hours, followed by the module variants tested with each persona.',
      decisions: [
        {
          discovery: 'Owners saw numbers but couldn’t tell what they meant for the business.',
          solution: 'Tie every metric to business value',
        },
      ],
    },
  ],

  engineering: [
    { title: 'Persona-based stories', detail: 'Each user story named a persona and a need the team could measure.' },
    { title: 'Constraints mapped early', detail: 'Reviewed API capabilities, data refresh rates, and the module system with engineering before scoping.' },
    { title: 'Joint workshops', detail: 'Explored options with product and development, then validated with quick prototypes before build.' },
  ],

  outcomes: {
    scorecard: [
      { label: 'Feature engagement', before: '12% of features found', after: '67% of notifications engaged' },
      { label: 'Switching locations', before: '5 clicks', after: '1 click, context kept' },
      { label: 'Reviews page interaction', before: 'Pre-launch baseline', after: '53% increase' },
      { label: 'Cash advance signups', before: 'Sales-led outreach', after: '49% increase' },
      { label: 'Cash funded', before: 'Pre-launch baseline', after: '$8M+ since launch' },
      { label: 'Manual sales outreach', before: '20 hrs/week', after: 'Bulk work eliminated' },
    ],
  },

  takeaways: [
    { title: 'Bring every revenue team in early', detail: 'Sales needed funding visibility, marketing needed events, and owners needed reviews. Involving each from day one meant one portal served all three.' },
    { title: 'Design for the return visit', detail: 'Static dashboards get abandoned. Showing something new and actionable at every login is what turns a portal into a habit.' },
    { title: 'Validate cheaply before committing engineering', detail: 'Guerrilla tests on clickable prototypes told us what owners valued before any build time was spent.' },
  ],
}
