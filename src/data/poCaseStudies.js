import { poCaseStudyTemplate } from './poCaseStudyTemplate'

// Product Owner case studies, keyed by slug. Add each rewritten case study
// here using the shape of poCaseStudyTemplate.
export const poCaseStudies = {
  [poCaseStudyTemplate.slug]: poCaseStudyTemplate,

  'llm-integration-strategy': {
    slug: 'llm-integration-strategy',
    title: 'Conversational Document Review',
    subtitle: 'Reframing a request for faster AI review as a trust problem, then shipping explainable, human-in-the-loop review that cut time to production in half.',
    meta: {
      role: 'UX/Product Manager',
      timeframe: '4 months',
      team: 'PM, engineering lead, AI/ML engineers, legal SMEs',
    },
    tags: ['eDiscovery', 'LLM Integration', 'Human-in-the-Loop', 'Legal Tech'],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=1920&q=80',
      alt: 'Tall stacks of paper files in an office',
      width: 1920,
      height: 1280,
      focusY: 0.5,
    },
    links: [{ label: 'Try the interactive prototype', to: '/prototypes/ediscovery-ai' }],

    businessProblem: {
      summary: 'As UX/Product Manager, I led discovery, backlog, and delivery for an AI document review platform. Stakeholders asked for speed, but discovery showed the real barrier was trust.',
      statement: 'Privilege review was slow, manual, and least accurate where the risk was highest.',
      metrics: [
        { icon: 'users', value: '50+', label: 'Attorneys per review' },
        { icon: 'document', value: '48,000+', label: 'Documents per case' },
        { icon: 'trend', value: '3% → 12%', label: 'Error rate on complex threads' },
      ],
      constraints: [
        'Every call must hold up in court',
        'Zero tolerance for privilege errors',
      ],
    },

    whyItMattered: {
      stakes: [
        { icon: 'legal', title: 'Legal risk', detail: 'One missed privilege call could waive protection and derail a case worth hundreds of millions.' },
        { icon: 'time', title: 'Missed deadlines', detail: 'PMs padded timelines by 40% and still missed them on complex cases.' },
        { icon: 'cost', title: 'Unreviewed cases', detail: 'When review cost more than a case was worth, the case went unreviewed.' },
      ],
      callout: 'Faster review wouldn’t matter if the attorneys signing the privilege log wouldn’t rely on it.',
    },

    initialRequest: {
      requestedBy: 'Business stakeholders',
      request: 'Use AI to accelerate document review.',
      assumption: 'Review speed was the bottleneck, and adding AI would make the existing team faster.',
    },

    discovery: {
      activities: [
        { method: 'Contextual inquiry', icon: 'observe', stat: '12', statLabel: 'Reviewers shadowed over 2 weeks', finding: 'Reviewers kept private flagging systems, invisible to QC and inconsistent.', ledTo: ['Log every processing exception'] },
        { method: 'Process mapping', icon: 'workflow', stat: '23', statLabel: 'Decision points mapped', finding: 'One missed privileged document could restart an entire production cycle.', ledTo: ['Test on a sample first'] },
        { method: 'Stakeholder interviews', icon: 'users', stat: '3', statLabel: 'Stakeholder groups', finding: 'Attorneys feared court risk, PMs cost overruns, and support staff job loss.', ledTo: ['Assess the corpus before review', 'Write protocols in plain English', 'Log every processing exception'] },
        { method: 'Workflow analysis', icon: 'data', stat: '6', statLabel: 'Prior cases analyzed', finding: 'At a steady 50 docs/hr, errors jumped from 3% to 12% on complex threads.', ledTo: ['Route documents by confidence'] },
        { method: 'AI benchmarking', icon: 'ai', stat: '4', statLabel: 'AI tools evaluated', finding: 'Showed where AI added accuracy and where human judgment was irreplaceable.', ledTo: ['Let attorneys make the final call'] },
      ],
      stakeholders: [
        { group: 'Partners and lead counsel', need: 'Defend every privilege call in front of a judge' },
        { group: 'Project managers', need: 'Predict volume and complexity before falling behind' },
        { group: 'Litigation support', need: 'Trace who decided what, and why, without days of log review' },
      ],
    },

    actualProblem: {
      rootCause: 'The bottleneck wasn’t speed. It was trust: attorneys wouldn’t adopt AI they couldn’t defend in court.',
      evidence: [
        'Errors quadrupled on complex threads (3% to 12%)',
        'Complex threads were assigned at random',
        'QC sampled only 5% of decisions',
        'Every stakeholder group raised trust before speed',
      ],
      reframe: 'How might we give attorneys the transparency and control to trust AI-assisted decisions, so AI handles volume while humans own the judgment calls?',
    },

    // One card per product screen, with the discovery → solution pairs it answers
    decisions: [
      {
        title: 'Case Assessment',
        design: 'caseAssessment',
        caption: 'Topic clusters, volume, and key entities before review starts.',
        decisions: [
          {
            discovery: 'PMs couldn’t predict case volume or complexity until they were already behind.',
            solution: 'Assess the corpus before review',
          },
        ],
      },
      {
        title: 'Protocol Builder',
        design: 'protocolBuilder',
        caption: 'Attorneys write review rules in plain English. The AI suggests related terms and flags conflicting instructions.',
        decisions: [
          {
            discovery: 'Attorneys feared they couldn’t defend AI-assisted decisions in court.',
            solution: 'Write protocols in plain English',
          },
        ],
      },
      {
        title: 'Sample Validation',
        design: 'sampleValidation',
        caption: 'Precision and recall are checked on a 1,000-document sample before the full run.',
        decisions: [
          {
            discovery: 'One missed privileged document could restart an entire production cycle.',
            solution: 'Test on a sample first',
          },
        ],
      },
      {
        title: 'Review Parameters',
        design: 'reviewParameters',
        caption: 'Confidence thresholds and reviewer assignment send complex documents to senior reviewers. AI autonomy is set to “Suggest”: the AI recommends, and attorneys decide.',
        decisions: [
          {
            discovery: 'Errors jumped from 3% to 12% on complex email threads.',
            solution: 'Route documents by confidence',
          },
          {
            discovery: 'AI added accuracy, but human judgment was still irreplaceable.',
            solution: 'Let attorneys make the final call',
          },
        ],
      },
      {
        title: 'Exception Audit Trail',
        design: 'auditTrail',
        caption: 'Every unreadable file is logged with how it was resolved.',
        decisions: [
          {
            discovery: 'Reviewers’ flags were invisible to QC, and no one could trace who decided what.',
            solution: 'Log every processing exception',
          },
        ],
      },
    ],

    engineering: [
      { title: 'Traceable backlog', detail: '47 user stories, each tied to an interview quote.' },
      { title: 'Clear acceptance criteria', detail: 'Validated with legal SMEs, then turned into tests.' },
      { title: 'Release ownership', detail: 'Owned final QA and release sign-off.' },
    ],

    outcomes: {
      scorecard: [
        { label: 'Documents to review', before: 'All 48,000+', after: '90% fewer' },
        { label: 'Reviewer throughput', before: '50 docs/hr', after: '3x faster' },
        { label: 'Accuracy', before: '3–12% error rate', after: '96% precision' },
        { label: 'Contract attorney fees', before: 'Full manual review', after: '$2M saved' },
      ],
      quotesTitle: 'What attorneys said',
      quotes: [
        { before: 'AI is replacing me', after: 'I’m teaching the AI my expertise' },
        { before: 'I can’t verify its decisions', after: 'Every decision shows reasoning' },
        { before: 'Courts won’t accept AI', after: 'Full audit trail for court' },
        { before: 'My expertise is devalued', after: 'I focus on complex cases' },
      ],
    },

    takeaways: [
      { title: 'Question the request before scoping it', detail: 'The ask was speed, but the blocker was trust. Two weeks of discovery prevented us from building a faster tool nobody would use.' },
      { title: 'Treat explainability as a requirement, not a feature', detail: 'In regulated work, “flagged as privileged” isn’t enough. Every AI decision needs a reason a user can defend, and that belongs in the acceptance criteria.' },
      { title: 'Govern prompts like production code', detail: 'A “minor” prompt change can break accuracy silently. Version control and golden-dataset regression tests belong in the definition of done.' },
    ],
  },
}
