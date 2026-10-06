// Rewards Network Earn Page, in the Product Owner case study format.
// Source: the 'rewards-network-marketing-website' entry in src/data/caseStudies.js.
// Static screen previews are shown in the case study; the interactive prototype lives on /prototypes.
export const rewardsNetwork = {
  slug: 'rewards-network-marketing-website',
  title: 'Rewards Network Earn Page',
  subtitle: 'Delivering a simple, clean design that makes the move from earn page to signup feel seamless.',
  links: [{ label: 'View consumer site', to: '/rewards-network' }],
  meta: {
    role: 'Senior Product Designer',
    timeframe: '6 weeks',
    team: 'Marketing, product, development, graphic design',
    context: 'Dining rewards, B2C',
  },
  tags: ['Dining Rewards', 'Conversion', 'Signup Flow', 'Marketing Site'],

  businessProblem: {
    summary: 'As Senior Product Designer, I led discovery and delivery for the consumer-facing Rewards Network earn page with marketing, product, and development. The ask was a clearer page, but discovery showed the real problem was that diners were sent away to partner sites right when they were ready to join, so the experience needed a smoother transition and more confidence at the point of signup.',
    highlights: [
      { value: '30%', label: 'More new member signups' },
      { value: '10%', label: 'Lower bounce rate' },
      { value: '75%', label: 'Less dev effort than rebuild' },
    ],
    statement: 'Diners were leaving the earn page before joining a rewards program.',
    metrics: [
      { icon: 'users', value: 'Multiple', label: 'Reward programs, each on a separate partner site' },
      { icon: 'trend', value: 'High', label: 'Bounce rate on the earn page' },
    ],
    constraints: [
      'Reuse the existing page foundation',
      'Minimal development effort',
    ],
  },

  whyItMattered: {
    stakes: [
      { icon: 'trend', title: 'Fewer new members', detail: 'Every diner who bounced before signup was a member the business never gained.' },
      { icon: 'cost', title: 'Lost at the handoff', detail: 'Diners sent to partner sites to register often abandoned the process entirely.' },
      { icon: 'users', title: 'Low retention', detail: 'A confusing, information-light process drove down retention as well as signups.' },
    ],
    callout: 'A cleaner page wouldn’t help if signup still started somewhere else.',
  },

  initialRequest: {
    requestedBy: 'Product and sales teams',
    request: 'Reorganize the earn page so more diners sign up.',
    assumption: 'Clearer information and storytelling on the page would be enough to lift signups.',
  },

  discovery: {
    activities: [
      { method: 'Heatmap analysis', icon: 'data', scope: 'Hotjar heatmaps', finding: 'Diners clicked the explainer video, then stalled because there was no next step or clear CTA.', ledTo: ['Tell the story in 3 steps', 'Add a CTA to every section'] },
      { method: 'Content audit', icon: 'search', scope: 'Existing earn page', finding: 'The page lacked key information, user proof, and a simple path to signup.', ledTo: ['Reorganize existing content, not rebuild', 'Add a CTA to every section'] },
      { method: 'User testing', icon: 'observe', scope: 'Internal participants', finding: 'Testers did not understand what they were joining or why they were leaving the site.', ledTo: ['Start signup on Rewards Network', 'Show benefits and diner testimonials'] },
      { method: 'UX structure review', icon: 'workflow', scope: 'Page hierarchy and flow', finding: 'We needed a simple three-step process, prominent CTAs, testimonials, partner explanations, and an FAQ/checklist.', ledTo: ['Tell the story in 3 steps', 'Show benefits and diner testimonials'] },
    ],
    stakeholders: [
      { group: 'Product team', need: 'Grow new member signups across reward programs' },
      { group: 'Sales team', need: 'Turn interested diners into program members' },
      { group: 'Diners', need: 'Understand the program and join without leaving the site' },
    ],
  },

  actualProblem: {
    rootCause: 'The page wasn’t just unclear. Signup happened off-site, so diners left Rewards Network right when they were ready to join.',
    evidence: [
      'Heatmaps showed video clicks with no follow-through to signup',
      'Testers asked why they were sent away from the site',
      'Each reward program had its own partner signup page',
      'The explainer video ended with no next step',
    ],
    reframe: 'How might we help diners understand the program and start signup on Rewards Network, so interest turns into membership?',
  },

  // One card per screen or capability. The case study shows static screen previews.
  decisions: [
    {
      title: 'How It Works',
      design: 'howItWorks',
      caption: 'The page opens with a short three-step story, a strong primary CTA, and a path that keeps diners on Rewards Network instead of sending them away.',
      decisions: [
        {
          discovery: 'Diners watched the explainer video, then had no instructions on what to do next.',
          solution: 'Tell the story in 3 steps',
        },
        {
          discovery: 'The page had no clear call to action.',
          solution: 'Add a CTA to every section',
        },
      ],
    },
    {
      title: 'Browse Rewards',
      design: 'browseRewards',
      caption: 'Diners could understand the program and browse rewards without having to commit to a partner too early.',
      decisions: [
        {
          discovery: 'Testers were not sure what they were signing up for or which reward to choose.',
          solution: 'Show the value first',
        },
        {
          discovery: 'Some diners knew their restaurant already, while others needed a starting point.',
          solution: 'Make partner selection optional',
        },
      ],
    },
    {
      title: 'Member Sign Up Flow',
      design: 'memberSignUpFlow',
      caption: 'The signup flow starts onsite and supports both diners who already know their partner and diners who need help choosing one.',
      decisions: [
        {
          discovery: 'Diners sent to partner sites to register often abandoned signup.',
          solution: 'Start signup on Rewards Network',
        },
        {
          discovery: 'Several partners sit under each reward type, so some diners couldn’t choose.',
          solution: 'Make partner selection optional',
        },
      ],
    },
  ],

  engineering: [
    { title: 'Feasibility-first scoping', detail: 'Sized every change with development by feasibility, time, effort, and value before committing.' },
    { title: 'Use-case requirements', detail: 'Scoped onsite signup around two use cases: diners who know their partner, and diners who don’t yet.' },
    { title: 'Working prototypes', detail: 'Prototyped in code with GitHub Copilot, iterating live in stakeholder reviews and testing working builds.' },
  ],

  outcomes: {
    scorecard: [
      { label: 'New member signups', before: 'Signup on partner sites', after: '30% more' },
      { label: 'Bounce rate', before: 'High', after: '10% lower' },
      { label: 'Development effort', before: 'Full rebuild', after: '75% less' },
      { label: 'Design iteration', before: '3–4 weeks', after: '3–4 days' },
    ],
    quotesTitle: 'What diners said',
    quotes: [
      { before: 'I am not sure what I am signing up for.', after: 'I can see the benefits and start on the Rewards Network site.' },
      { before: 'Why am I being taken away from the site?', after: 'I know what happens next before I click signup.' },
      { before: 'It feels like I have to figure it out myself.', after: 'The page feels simpler and the next step is obvious.' },
    ],
  },

  takeaways: [
    { title: 'Look past the page to the flow', detail: 'The ask was a clearer page, but the bigger loss was signup happening off-site. Tracing where diners dropped changed the scope.' },
    { title: 'Size value against effort with engineering', detail: 'Reviewing each change with development showed most of the win came from reorganizing, not new build.' },
    { title: 'Test working builds, not mockups', detail: 'Functional prototypes gave stakeholders and users something real to react to, so decisions came faster and with more confidence.' },
  ],
}
