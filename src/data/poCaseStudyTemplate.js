// Product Owner case study template
//
// Audience: a Director of Product Management evaluating a Senior Product Owner.
// Every case study follows the same 9 sections, in this order. `poSections`
// is the single source of truth for section titles and writing guidance; the
// components in src/components/po-case-study read from it.
//
// Lead with business problems, stakeholders, discovery, prioritization,
// engineering partnership, and outcomes. Keep design artifacts, wireframes,
// visual design, design systems, and UX process out of the spotlight.

export const poSections = [
  {
    id: 'business-problem',
    title: 'Business Problem',
    purpose: 'Open with the whole story in 30 seconds (your role, the problem, the pivotal insight, and the headline results), then frame the problem in business terms (revenue, cost, risk, retention, efficiency) so the reader sees a product problem, not a screen problem.',
    length: '2-sentence summary with 1–3 headline results, a one-line problem statement, 2–3 problem stats, and 2–3 short constraints',
    include: [
      'Your role, scope, and the insight that changed the direction of the work',
      'Headline results, with numbers',
      'Who was affected: customers, internal teams, partners',
      'The current state and baseline metrics',
      'Constraints: budget, timeline, regulation, legacy systems',
    ],
    avoid: [
      'Process detail or a list of methods',
      'Describing the solution in detail',
      'UI complaints framed as the problem ("the page was cluttered")',
      'Adjectives without numbers ("significantly improved")',
    ],
  },
  {
    id: 'why-it-mattered',
    title: 'The Stakes',
    purpose: 'Show that you understood the strategic stakes and connected the work to company goals.',
    length: '3 stakes, each a short title and one sentence, plus an optional one-line callout',
    include: [
      'The cost of doing nothing',
      'The link to company strategy, OKRs, or a revenue target',
      'Which leaders cared and why',
      'What made it urgent now',
    ],
    avoid: [
      'Stakes you can’t support with evidence',
      'Generic goals like "improve the user experience"',
    ],
  },
  {
    id: 'initial-request',
    title: 'Initial Request',
    purpose: 'Set up the gap between what was asked for and what was actually needed. This shows you question requests instead of just taking orders.',
    length: '2–4 sentences',
    include: [
      'Who made the request (role, not name)',
      'What was asked for, close to their wording',
      'The assumption built into the request',
      'The initial scope or deadline',
    ],
    avoid: [
      'Criticizing the requester. Frame the request as a reasonable starting hypothesis.',
    ],
  },
  {
    id: 'discovery',
    title: 'Discovery Activities',
    purpose: 'Show how you reduced risk before committing engineering capacity, and who you brought along.',
    length: '3–5 activities, one line each with the finding, plus the stakeholder groups engaged',
    include: [
      'Method and scope (sample size, data range, number of sessions)',
      'Data sources: analytics, support tickets, sales calls, ops reports',
      'Stakeholders engaged and what each group needed',
      'The key finding from each activity',
    ],
    avoid: [
      'Methods listed without findings',
      'Usability test walkthroughs, journey maps, workshop photos',
    ],
  },
  {
    id: 'actual-problem',
    title: 'What We Uncovered',
    purpose: 'The pivot. Show your root cause analysis and why the original request would not have solved the problem.',
    length: '1–2 sentence root cause, 2–4 evidence bullets, and a reframed problem statement',
    include: [
      'The root cause, stated plainly',
      'The evidence that supports it, with numbers',
      'The technique used (5 Whys, funnel analysis, process mapping)',
      'Why building the original request would have missed it',
    ],
    avoid: [
      'Vague findings like "users were confused"',
      'Taking sole credit for team discoveries',
    ],
  },
  {
    id: 'decisions',
    title: 'Key Product Decisions',
    purpose: 'The core of a Product Owner case study. Connect discovery to the product: one card per screen or capability, showing what discovery revealed, the solution the team chose, and the design it produced.',
    length: '3–6 cards. Each discovery is one sentence; each solution is a 4–6 word action.',
    include: [
      'The screen or capability name as the card title',
      'The discovery behind it, in one sentence',
      'The solution, phrased as an action (“Route documents by confidence”)',
    ],
    avoid: [
      'Visual design choices (colors, layouts, components)',
      'Decisions you observed but didn’t shape',
      'Presenting every call as obviously right',
    ],
  },
  {
    id: 'product-management',
    title: 'Product Management',
    purpose: 'Show how you shaped the operating model around planning, cadence, and cross-functional alignment.',
    length: '2–3 items, each one to two sentences',
    include: [
      'How AI changed planning or backlog shaping',
      'The cadence or operating rhythm that kept the team aligned',
      'Any measurable delivery or coordination improvement',
    ],
    avoid: [
      'Screen-by-screen design details',
      'Implementation minutiae',
      'Generic process language without a specific outcome',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering Collaboration',
    purpose: 'Show that you work with engineering as a partner: backlog ownership, clear requirements, and negotiating technical constraints.',
    length: '3–4 practices, 1–2 sentences each',
    include: [
      'How you structured the backlog and wrote requirements (user stories, acceptance criteria)',
      'Refinement and sprint cadence',
      'Technical constraints you negotiated and how scope changed',
      'Release strategy: feature flags, phased rollout, pilot groups',
    ],
    avoid: [
      'Handoff language ("handed off the designs")',
      'Implying you dictated the technical solution',
      'Developer tooling minutiae',
    ],
  },
  {
    id: 'outcomes',
    title: 'Outcomes',
    purpose: 'Prove business impact by closing the loop on the business problem: each baseline next to its result.',
    length: '4–6 before → after rows, plus up to 4 before → after quotes',
    include: [
      'Before and after numbers, reusing the baselines from the business problem',
      'Business metrics: revenue, cost, retention, cycle time, adoption',
      'What happened next: roadmap changes, follow-on funding, rollout',
      'Relative percentages if the real numbers are confidential',
    ],
    avoid: [
      'Outputs disguised as outcomes ("shipped 12 features")',
      'Numbers without baselines',
      'Vanity metrics and unquantified praise',
    ],
  },
  {
    id: 'takeaways',
    title: 'Key Product Owner Takeaways',
    purpose: 'Show reflection and transferable judgment: what you would repeat, what you would change, and how it shapes your approach now.',
    length: '2–3 takeaways, 1–2 sentences each',
    include: [
      'Lessons a product leader would value',
      'One thing you would do differently',
      'How the lesson changed the way you work',
    ],
    avoid: [
      'Platitudes ("communication is key")',
      'Restating the outcomes',
      'Design-craft lessons',
    ],
  },
]

// Starter content. Copy this object into src/data/poCaseStudies.js, give it a
// new slug, and replace every bracketed prompt.
export const poCaseStudyTemplate = {
  slug: 'po-template',
  title: '[Case Study Title]',
  subtitle: '[One line: the business problem and the result]',
  meta: {
    role: '[e.g. Senior Product Owner]',
    timeframe: '[e.g. 6 months, 2024]',
    team: '[e.g. 6 engineers, 1 designer, 1 QA]',
    context: '[e.g. B2B SaaS, legal tech]',
  },
  tags: ['[Domain]', '[Product area]', '[Capability]'],
  // Optional. A background photo for the header, shown behind a navy overlay.
  // Add width/height and screenQuad (display corners in image pixels) to draw the
  // page's heroVisual onto a device in the photo; flip mirrors the photo, and
  // textSide: 'right' moves the header text off a device on the left.
  // heroImage: { src: '[Image URL]', alt: '[Short description]', width: 1920, height: 1280 },
  // Optional. Shown as buttons under the subtitle.
  links: [{ label: '[e.g. Try the interactive prototype]', to: '/prototypes' }],

  businessProblem: {
    summary: '[2 sentences. As [role], I led [scope] for [product]. Stakeholders asked for [request], but discovery showed [insight].]',
    // Headline results, shown with the summary
    highlights: [
      { value: '[X]', label: '[Headline result]' },
    ],
    statement: '[One sentence that names the problem]',
    // Problem at a glance. icon: users | document | trend | legal
    metrics: [
      { icon: 'users', value: '[X]', label: '[Who or how many were affected]' },
      { icon: 'document', value: '[X]', label: '[Scale of the problem]' },
      { icon: 'trend', value: '[X → Y]', label: '[The metric that was getting worse]' },
    ],
    constraints: [
      '[Constraint, under 8 words]',
      '[Constraint, under 8 words]',
    ],
  },

  whyItMattered: {
    // icon: legal | time | cost | users | trend
    stakes: [
      { icon: 'legal', title: '[Risk]', detail: '[One sentence on the cost of doing nothing]' },
      { icon: 'time', title: '[Risk]', detail: '[One sentence]' },
      { icon: 'cost', title: '[Risk]', detail: '[One sentence]' },
    ],
    callout: '[Optional: the one line that ties the stakes together]',
  },

  initialRequest: {
    requestedBy: '[Role of requester, e.g. VP of Sales]',
    request: '[What they asked for, close to their wording]',
    assumption: '[The assumption built into the request]',
  },

  discovery: {
    // icon: observe | workflow | users | data | ai | search
    // stat + statLabel show a headline number; use scope instead when there isn't one.
    // Keep each finding to about 70 characters so the cards stay even.
    // ledTo lists solutions this activity led to; each must match a decision's `solution`.
    activities: [
      { method: '[Method]', icon: 'observe', stat: '[12]', statLabel: '[Interviews]', finding: '[What you learned]', ledTo: ['[Solution this led to]'] },
      { method: '[Method]', icon: 'data', stat: '[6 mo]', statLabel: '[Of support tickets]', finding: '[What you learned]' },
      { method: '[Method]', icon: 'users', scope: '[Scope]', finding: '[What you learned]' },
    ],
    stakeholders: [
      { group: '[Stakeholder group]', need: '[What they needed to do, starting with a verb]' },
      { group: '[Stakeholder group]', need: '[What they needed to do, starting with a verb]' },
      { group: '[Stakeholder group]', need: '[What they needed to do, starting with a verb]' },
    ],
  },

  actualProblem: {
    rootCause: '[1–2 sentences stating the root cause plainly.]',
    evidence: [
      '[Evidence point with a number]',
      '[Evidence point with a number]',
    ],
    reframe: '[Reframed problem statement: How might we ... so that ...]',
  },

  // One card per screen or capability. `design` is an optional key into the
  // page's `designs` prop; the design shows open and can be collapsed. A card can
  // hold more than one discovery → solution pair. Discovery `ledTo` values must
  // match a `solution`.
  decisions: [
    {
      title: '[Screen or capability name]',
      design: '[optional design key]',
      caption: '[What the design shows]',
      decisions: [
        { discovery: '[One sentence: what discovery revealed]', solution: '[Solution, as an action]' },
      ],
    },
    {
      title: '[Screen or capability name]',
      decisions: [
        { discovery: '[What discovery revealed]', solution: '[Solution, as an action]' },
      ],
    },
  ],

  engineering: [
    { title: '[Practice, e.g. Backlog structure]', detail: '[1–2 sentences]' },
    { title: '[Practice, e.g. Acceptance criteria]', detail: '[1–2 sentences]' },
    { title: '[Practice, e.g. Phased rollout]', detail: '[1–2 sentences]' },
  ],

  outcomes: {
    // Before → after rows. Reuse the baselines from the business problem.
    scorecard: [
      { label: '[Measure]', before: '[Baseline]', after: '[Result]' },
      { label: '[Measure]', before: '[Baseline]', after: '[Result]' },
      { label: '[Measure]', before: '[Baseline]', after: '[Result]' },
    ],
    // Optional: how what users or stakeholders said changed
    quotesTitle: '[e.g. What users said]',
    quotes: [
      { before: '[Quote before]', after: '[Quote after]' },
    ],
  },

  takeaways: [
    { title: '[Lesson]', detail: '[1–2 sentences on how it shapes your approach now]' },
    { title: '[Lesson]', detail: '[1–2 sentences]' },
  ],
}
