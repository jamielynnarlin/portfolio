// AI Investigation Platform, in the Product Owner case study format.
// Source: src/data/caseStudies.js and the legacy DesignOpsCaseStudy page.
export const designOps = {
  slug: 'enterprise-designops-transformation',
  title: 'AI Investigation Platform',
  subtitle: 'Aligning agency, engineering, and product teams around an AI-powered document intelligence platform.',
  meta: {
    role: 'Director of UX',
    timeframe: '4 months',
    team: 'External design agency, internal engineering, product leadership, AI/ML team',
    context: 'Enterprise eDiscovery, legal tech',
  },
  tags: ['UX Direction', 'Delivery Leadership', 'DesignOps', 'Agency Management', 'AI Enablement'],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80',
    alt: 'Wooden gavel on legal documents with law books in the background',
    width: 1200,
    height: 800,
  },
  links: [{ label: 'View the investigation platform', to: '/prototypes/investigation-platform' }],

  businessProblem: {
    summary: 'As Director of UX, I led design operations and delivery for an AI document intelligence platform. Stakeholders wanted a faster search experience, but discovery showed the harder problem was trust, verification, and keeping agency, product, and engineering aligned.',
    highlights: [
      { value: '60%', label: 'Faster design review cycles' },
      { value: '3', label: 'Teams aligned' },
      { value: 'Org-wide', label: 'AI SDLC adopted' },
    ],
    statement: 'Investigators were drowning in documents and could not trust AI conclusions.',
    metrics: [
      { icon: 'users', value: '10,000+', label: 'documents per case' },
      { icon: 'document', value: '4-6 hrs', label: 'per manual search query' },
      { icon: 'trend', value: '60%', label: 'of findings missed connections' },
    ],
    constraints: [
      'External agency',
      'Competing priorities',
      'LLM trust gap',
    ],
  },

  whyItMattered: {
    stakes: [
      { icon: 'legal', title: 'Trust risk', detail: 'If investigators could not verify AI output, the platform would not earn adoption.' },
      { icon: 'time', title: 'Slow review loops', detail: 'Every extra round of manual checking delayed legal teams and burned analyst time.' },
      { icon: 'cost', title: 'Agency friction', detail: 'Handoffs between the external agency and the internal team created avoidable rework.' },
    ],
    callout: 'The product had to earn trust and the team had to earn speed.',
  },

  initialRequest: {
    requestedBy: 'Product and legal leadership',
    request: 'Build an AI search experience for investigators.',
    assumption: 'A better interface would be enough to speed review.',
  },

  discovery: {
    activities: [
      { method: 'Stakeholder alignment workshops', icon: 'workflow', stat: '3', statLabel: 'stakeholder groups', finding: 'Recurring syncs exposed goals and constraints early.', ledTo: ['Align stakeholders around feedback loops'] },
      { method: 'AI synthesis of interviews', icon: 'ai', stat: '8', statLabel: 'investigator sessions', finding: 'AI clustered trust, traceability, and context into the main themes.', ledTo: ['Capture pain points at scale'] },
      { method: 'Prototype walkthroughs', icon: 'observe', stat: '3', statLabel: 'core themes', finding: 'Walkthroughs surfaced search relevance, source traceability, and time pressure.', ledTo: ['Verify AI conclusions with citations'] },
      { method: 'Early concept testing', icon: 'search', stat: '3', statLabel: 'core flows tested', finding: 'Users wanted plain English search and a way to inspect sources.', ledTo: ['Make search conversational', 'Prioritize relevant evidence'] },
    ],
    stakeholders: [
      { group: 'Investigators', need: 'Search large case sets and trust the answers they get' },
      { group: 'Legal leads', need: 'Verify sources before presenting findings' },
      { group: 'Agency and engineering', need: 'Ship from the same source of truth' },
    ],
  },

  actualProblem: {
    rootCause: 'The problem was not just document volume. The team needed a trustworthy AI workflow and a delivery model that kept the agency, product, and engineering in sync.',
    evidence: [
      '10,000+ documents per case made manual review untenable',
      'Search queries still took 4-6 hours without better prioritization',
      '60% of findings missed connections in the old workflow',
      'Handoffs between teams were slowing decisions down',
    ],
    reframe: 'How might we make investigator search conversational, verification traceable, and delivery repeatable so the platform earns trust and ships through a shared process?',
  },

  decisions: [
    {
      title: 'Search Input',
      design: 'search',
      caption: 'A natural-language prompt with suggested queries and active case context.',
      decisions: [
        {
          discovery: 'Investigators wanted to type questions, not boolean syntax.',
          solution: 'Make search conversational',
        },
      ],
    },
    {
      title: 'Results and Analysis',
      design: 'results',
      caption: 'Relevance scores, AI summaries, and clear source links kept the results list usable.',
      decisions: [
        {
          discovery: 'Search results were too noisy to scan quickly.',
          solution: 'Prioritize relevant evidence',
        },
      ],
    },
    {
      title: 'Source Verification',
      design: 'verify',
      caption: 'A source inspector let investigators review the exact passage behind each AI conclusion.',
      decisions: [
        {
          discovery: 'Legal teams would not trust AI findings without traceability.',
          solution: 'Verify AI conclusions with citations',
        },
      ],
    },
  ],

  productManagement: [
    {
      title: 'AI-Assisted Planning',
      detail: 'AI turned interviews, stakeholder notes, and review comments into draft stories, acceptance criteria, and summaries faster, so the team spent less time on admin and more time on decisions.',
    },
    {
      title: 'Delivery Cadence',
      detail: 'Recurring sync points kept discovery, validation, and build moving together, giving product, legal, and agency a repeatable way to stay aligned.',
    },
  ],

  engineering: [
    { title: 'Recurring feedback cadence', detail: 'We held kickoff, prototype, trust, and sprint syncs so product, legal, and agency decisions landed before each build cycle.' },
    { title: 'AI-assisted backlog shaping', detail: 'Claude turned interview notes and stakeholder emails into draft stories, acceptance criteria, and executive summaries.' },
    { title: 'Shared design source of truth', detail: 'MCP and Figma Make let the agency use real components and synced tokens instead of screenshots.' },
  ],

  outcomes: {
    scorecard: [
      { label: 'Delivery schedule', before: 'Ad hoc coordination', after: '4-month delivery, 2 months ahead of estimate' },
      { label: 'Design review cycles', before: 'Manual review loops', after: '60% faster' },
      { label: 'Document review time', before: 'Hours per query', after: 'Minutes per query' },
      { label: 'Delivery process', before: 'No shared AI workflow', after: 'Org-wide AI SDLC adopted' },
    ],
  },

  takeaways: [
    { title: 'Trust needs traceability', detail: 'AI output did not matter unless teams could see why a document matched. Source inspection was as important as the search results themselves.' },
    { title: 'Prioritize the highest-friction moments first', detail: 'The backlog worked when we focused on the steps that cost reviewers the most time and confidence, then balanced quick wins with engineering feasibility and sequenced the rest around those risks.' },
    { title: 'Keep every decision tied to workflow impact', detail: 'Every story had to earn its place by improving reviewer time, adoption, or trust so the team shipped changes that actually moved the workflow forward.' },
  ],
}
