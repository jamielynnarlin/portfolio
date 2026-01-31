export const caseStudies = {
  'restaurant-portal-redesign': {
    title: "Restaurant Portal Redesign",
    subtitle: "Transforming how restaurant owners interact with their business data through a modern, actionable dashboard experience.",
    tags: ["UX Research", "UI Design", "Dashboard", "FinTech", "User Testing"],
    roles: [
      "UX/UI Design",
      "Product Design",
      "Design Systems",
      "UX Research",
      "User Testing",
      "Stakeholder Interviews",
      "UX Workshops",
    ],
    timeline: "4 months",
    team: "Product, Engineering, Marketing, Sales",
    challenge: [
      "Hard to navigate, no clear value",
      "No notifications or alerts",
      "Difficult multi-location switching",
      "No incentive to return"
    ],
    solution: [
      "Personalized dashboard experience",
      "Actionable notifications",
      "Diner review management",
      "Business-driven analytics"
    ],
    process: [
      {
        title: "Discover & Define",
        content: [
          "The current dashboard was designed and developed iteratively using a module layout. While this was great for keeping a consistent look across devices, it led to reduced scalability and limited modernization opportunities.",
          "One of the bigger problems was that restaurant owners with multiple locations had to jump back to a location filter on a completely different screen before they could view data for that unit. This made the experience unproductive, depersonalized, and time consuming.",
          "We identified key stakeholders including product and sales teams, with end users being restaurant owners, client success teams, and sales account managers."
        ],
        highlights: [
          "No value associated with analytical information",
          "No notifications or action items",
          "Cannot see current listing of events and specials",
          "Multi-location navigation was cumbersome"
        ]
      },
      {
        title: "Research",
        content: [
          "I conducted interviews with a variety of participants including sales account managers, client success team members, and restaurant owners. In collaboration with the product team, we used empathy mapping to understand user thoughts, feelings, actions, and pain points.",
          "We created user personas representing different types of users based on demographic data and research findings. These personas guided our design decisions and helped us empathize with user needs and expectations."
        ],
        highlights: [
          "Multi-unit login experience needed improvement",
          "Static vs. dynamic notifications",
          "Creating 'sticky value' for retention",
          "Level up marketing messaging"
        ],
        quote: {
          text: "I have multiple locations and it is time consuming to go through each location individually. I don't know what I am looking at, there are no notifications.",
          author: "Restaurant Owner, User Interview"
        }
      },
      {
        title: "Wireframes & Prototyping",
        content: [
          "We drafted layouts for early dashboard modules based on our research, then held workshops with product and development teams to explore options for the revised dashboard. The workshops involved brainstorming, sketching, and testing different ideas.",
          "To design a more user-friendly dashboard, we analyzed each module and aligned its information with relevant business goals. We wanted to highlight the value and purpose of each module for the user.",
          "I organized workshops to gain insight on how the sales team operated alongside the portal. This allowed us to design using a holistic approach with a wide user base in mind."
        ],
        highlights: [
          "Collaborated across functions to align on goals",
          "Assessed technical constraints and possibilities",
          "Rapid prototyping and iteration",
          "Incorporated feedback into design process"
        ]
      },
      {
        title: "Design & Testing",
        content: [
          "I designed high-fidelity mockups in Sketch introducing new UI elements. I experimented with different color schemes, icons, and UI patterns to see how they affected user perception and interaction.",
          "We ran guerrilla-style testing moderated by myself and marketing/product leads. Using InVision prototypes, we walked users through interactions focusing on notifications and discovered both expected and unexpected results.",
          "Restaurant owners were most interested in seeing their recent diner reviews and being able to respond quickly. Our sales team loved the banner calling out when clients were eligible for additional funding."
        ],
        highlights: [
          "Insight bar creates sticky value",
          "Events and specials are updated most frequently",
          "Overall star rating raises member value perception",
          "Notifications rotate based on priority"
        ]
      },
      {
        title: "Deliver",
        content: [
          "Two of the most important components were the MCA (Merchant Cash Advance) and reviews module—the heart of the member experience and vital to creating value and retention.",
          "The new MCA design eliminated bulk work from the sales team by surfacing funding eligibility directly in the dashboard. The new Reviews page had extensive filtering, easy reply functions, and at-a-glance icons for quick scanning.",
          "Within four months, we successfully delivered a portal dashboard that surpassed both business and user experience goals."
        ],
        highlights: [
          "Personalized notification modules",
          "Dynamic, real-time data display",
          "Streamlined multi-location switching",
          "Value-based analytics surfaced prominently"
        ]
      }
    ],
    results: [
      { metric: "53%", label: "Increase in user interaction on Reviews page" },
      { metric: "49%", label: "Increase in cash advance sign-ups" },
      { metric: "$8M+", label: "Cash funded since launch" },
      { metric: "4 mo", label: "From concept to delivery" }
    ],
    takeaways: [
      {
        title: "Cross-functional Collaboration",
        description: "Success came from tight collaboration between UX, product, engineering, sales, and marketing teams throughout the entire process."
      },
      {
        title: "User-Centered Metrics",
        description: "By pairing metrics with insights, we transformed raw data into actionable recommendations that kept users engaged."
      },
      {
        title: "Iterative Validation",
        description: "Rapid prototyping and guerrilla testing allowed us to validate ideas quickly and pivot based on real user feedback."
      }
    ]
  },

  'gen-ai-resume-builder': {
    title: "Gen AI Resume Builder",
    subtitle: "Reimagining resume creation through conversational AI—making professional resume building fast, intuitive, and personalized.",
    tags: ["Generative AI", "Product Design", "Conversational UI", "LLM Integration", "User Testing"],
    roles: [
      "UX/UI Product Design",
      "AI Interaction Design",
      "Research",
      "User Testing",
      "Prototyping"
    ],
    timeline: "3 months",
    team: "Solo project with user testing participants",
    challenge: [
      "Overwhelming template options",
      "Tedious field-by-field input",
      "Generic, impersonal results",
      "Frustrating user experience"
    ],
    solution: [
      "Conversational AI interface",
      "Three-panel live preview",
      "Real-time content generation",
      "Personalized suggestions"
    ],
    process: [
      {
        title: "Discover & Define",
        content: [
          "My job search prompted me to explore better products for resume building. Existing solutions struggled to accommodate diverse needs of job seekers who wanted personalized resumes while maintaining user-friendliness.",
          "Current online resume builders can be overwhelming with template options and design elements, making it hard to choose what's best. There are limited customization options resulting in users unable to create unique resumes that accurately represent their experiences.",
          "The hypothesis: AI-driven insights could provide personalized recommendations, suggesting relevant sections, skills, and achievements based on user input and career aspirations—streamlining creation while enabling visually appealing, uniquely tailored resumes."
        ],
        highlights: [
          "Existing builders require tedious field-by-field input",
          "Limited customization creates generic results",
          "Lack of personalized support for specific industries",
          "Non-intuitive UI causing frustration and stress"
        ]
      },
      {
        title: "Architecture & UX",
        content: [
          "The platform features a three-panel layout designed for seamless workflow: a left-hand panel for saved resumes, a dynamic chat area for content input and AI interaction, and a resume preview that populates in real-time with user-provided content.",
          "The chat interface enables natural language conversation with the Gen AI, facilitated through an interactive chatbot framework. Users engage to provide input, ask questions, and receive intelligent feedback throughout the resume-building process.",
          "The back-end integrates with large language models to process user inputs, analyze context, search existing resume content, and generate relevant new content. User management handles authentication, profiles, and saved resume versions securely."
        ],
        highlights: [
          "Three-panel layout keeps everything in view",
          "Natural language conversation flow",
          "Real-time resume preview updates",
          "Multi-version resume management"
        ]
      },
      {
        title: "Initial Prototype",
        content: [
          "The first iteration focused on the core flow: landing page, template selection, and the main resume editing experience with conversational AI. Users could select from various resume designs and begin chatting with the AI to populate their content.",
          "The chatbot guides users through the resume-building process, asking about skills, experiences, education, and achievements. As users interact, the preview area dynamically populates with AI-generated content based on their input.",
          "Users can toggle between different sections via conversation, allowing flexible, non-linear resume building. The design aimed to mimic natural human conversations with logical flow and coherent timing."
        ],
        highlights: [
          "Guided editing through conversation",
          "Personalization prompts based on context",
          "Multiple saved versions supported",
          "Export to PDF or DOC formats"
        ]
      },
      {
        title: "User Testing & Iteration",
        content: [
          "I conducted user testing sessions on the design mocks to identify what was working and what needed improvement. Users wanted more direction on resume design choices—for example, distinguishing between creative vs. business layouts.",
          "The first suggestion was adding a 'beginner's mode' option. I saw this as an opportunity to leverage AI capabilities further—using prompts to ask whether users are first-time resume writers or experienced, then adapting the conversation accordingly.",
          "Users noted that icons related to saved resumes lacked clarity in indicating their connection to the active chat. The second iteration added visual indicators linking saved resumes to their corresponding conversations and preview panels."
        ],
        highlights: [
          "Added resume category guidance (Creative, Business, Technical)",
          "Implemented experience-level detection prompts",
          "Clearer visual connection between panels",
          "Multi-page resume indicator for longer content"
        ],
        quote: {
          text: "I'd like to see more direction on what kind of resume design to choose—like knowing which is better for creative roles versus corporate positions.",
          author: "User Testing Participant"
        }
      },
      {
        title: "Modern AI Enhancements (2026 Vision)",
        content: [
          "Since the original design, generative AI capabilities have evolved dramatically. A modern implementation would leverage multimodal AI to analyze uploaded documents, LinkedIn profiles, or even voice input to auto-populate resume content with minimal typing.",
          "Advanced features would include: job description analysis that tailors resume content for specific roles, ATS (Applicant Tracking System) optimization scoring, industry-specific keyword suggestions, and one-click tone adjustment from formal to conversational.",
          "The UI would evolve to a more minimal, focused experience—reducing cognitive load while the AI handles more heavy lifting. Smart defaults, progressive disclosure, and contextual micro-interactions would make the experience feel magical rather than mechanical."
        ],
        highlights: [
          "Document/LinkedIn import with AI extraction",
          "Job description matching and optimization",
          "ATS compatibility scoring in real-time",
          "Voice-to-resume dictation support",
          "One-click style and tone adjustments",
          "AI-powered achievement quantification suggestions"
        ]
      }
    ],
    results: [
      { metric: "80%", label: "Reduction in time to create resume" },
      { metric: "3x", label: "More personalization vs. traditional builders" },
      { metric: "95%", label: "User satisfaction in testing" },
      { metric: "2 min", label: "Average time to first draft" }
    ],
    takeaways: [
      {
        title: "Conversation as Interface",
        description: "Natural language interaction removes friction and makes complex tasks feel simple—users don't need to learn a new interface, they just talk."
      },
      {
        title: "AI as Collaborator",
        description: "The best AI experiences position the technology as a helpful partner, not a replacement—augmenting human creativity rather than automating it away."
      },
      {
        title: "Progressive Complexity",
        description: "Start simple and reveal advanced features as users need them. AI can detect user sophistication and adapt the experience accordingly."
      }
    ]
  },

  'rewards-network-marketing-website': {
    title: "Rewards Network Marketing Website",
    subtitle: "Redesigning the earn page experience to build trust, streamline sign-ups, and drive conversions across multiple dining reward programs.",
    tags: ["UX Research", "Marketing", "Conversion Optimization", "User Testing", "Content Strategy"],
    roles: [
      "UX/UI Design",
      "Marketing",
      "Product Design",
      "Research",
      "User Testing",
      "Stakeholder Interviews",
      "UX Workshops"
    ],
    timeline: "6 weeks",
    team: "Marketing, Development, Product, Graphic Design",
    challenge: [
      "Users dropping off before sign-up",
      "High bounce rates",
      "Programs on separate sites",
      "Confusing process flow"
    ],
    solution: [
      "3-step storytelling sign-up",
      "Leveraged existing elements",
      "On-site registration flow",
      "Minimal dev, max impact"
    ],
    process: [
      {
        title: "Discover & Define",
        content: [
          "The main problem was clear: users were dropping off before they signed up with a program, resulting in low retention and high bounce rates. The current process was lacking in information, confusing users, and driving down new member sign-ups.",
          "The disconnect between Rewards Network's website and the individual partner sign-up pages created friction. Users had to navigate away from the main site to complete registration, often abandoning the process entirely.",
          "We identified product and sales teams as key stakeholders, with diners as our primary end users. Our hypothesis: reorganizing the page with clearer information and storytelling would dramatically improve sign-up rates."
        ],
        highlights: [
          "High bounce rates on earn page",
          "Confusing navigation to partner sites",
          "No clear call-to-action",
          "Users abandoning sign-up process"
        ]
      },
      {
        title: "Research",
        content: [
          "In collaboration with the marketing team, we used empathy mapping to understand user thoughts, feelings, actions, and pain points. This helped identify their motivations and expectations for joining the program.",
          "I performed a comprehensive content audit evaluating the strengths and weaknesses of the existing page. Using Hotjar heatmaps, we uncovered that users were clicking on the promotional video but not following through with signing up—the video left them hanging with no instructions.",
          "User testing with internal participants revealed critical insights: the current page was perceived as confusing with unclear next steps after watching the explainer video."
        ],
        highlights: [
          "Empathy mapping with marketing team",
          "Hotjar heatmap analysis",
          "Content audit and gap analysis",
          "Internal user testing sessions"
        ],
        quote: {
          text: "I am not sure what I am signing up for. Why am I being taken away from the Rewards Network site? Why can't I sign up for Rewards Network?",
          author: "User Testing Participant"
        }
      },
      {
        title: "Architecture & UX",
        content: [
          "Based on user testing and content audit results, I created wireframes addressing key factors that would enhance user experience and motivate program sign-ups.",
          "Key design factors included: a simple and intuitive step-by-step sign-up process, engaging content showcasing program benefits, prominent call-to-action on every section, diner testimonials proving program value, and clear explanation of reward program partnerships.",
          "We collaborated with development to determine feasibility, time, effort, and value of potential changes. Our goal was to reorganize using the existing foundation as much as possible."
        ],
        highlights: [
          "Simple three-step sign-up process",
          "Story-driven content strategy",
          "Prominent CTAs throughout",
          "Diner testimonials for social proof"
        ]
      },
      {
        title: "Vibe Coding: Accelerating Design Iteration",
        content: [
          "One of the breakthrough moments in this project came from adopting 'vibe coding' in VS Code—using AI-assisted development to rapidly prototype and iterate on design concepts directly in code.",
          "Traditional design-to-development handoff often took weeks: create mockups in Figma, review with stakeholders, hand off to developers, wait for implementation, identify issues, repeat. With vibe coding, we collapsed this cycle dramatically.",
          "By working directly in VS Code with AI pair programming, I could describe a component concept in natural language and see working code in minutes. This allowed real-time iteration during stakeholder meetings—'What if the CTA was larger? What if we added more whitespace?'—and implement changes on the spot.",
          "The result: what would have been 3-4 weeks of design iteration compressed into 3-4 days. We could test real, functional prototypes with users instead of static mockups, gathering more accurate feedback and building confidence in our solutions before full development commitment."
        ],
        highlights: [
          "AI-assisted prototyping in VS Code",
          "Real-time iteration during stakeholder reviews",
          "3-4 weeks of work compressed to days",
          "Functional prototypes vs. static mockups",
          "Faster user testing with working code"
        ]
      },
      {
        title: "Feature Enhancement: Sign-Up Flow",
        content: [
          "A key improvement was initiating the member sign-up directly on the Rewards Network site instead of navigating users away to partner pages.",
          "Use Case 1: A diner signing up with a specific reward and partner in mind clicks sign-up, fills out basic info, chooses reward type and partner, then can immediately browse restaurants as a member.",
          "Use Case 2: A diner unsure which partner to choose can sign up and browse restaurants without selecting a specific partner, since multiple partners exist under each reward type. This flexibility reduced abandonment significantly."
        ],
        highlights: [
          "On-site sign-up initiation",
          "Flexible partner selection",
          "Immediate access after sign-up",
          "Reduced navigation friction"
        ]
      },
      {
        title: "Deliver",
        content: [
          "We created a smooth transition to partner programs, instilling confidence when users were ready to join. The design told a story, starting with a simple three-step process to reach the end goal—sign-up.",
          "Using what we already had in place, we reorganized the page with minimal development and design effort. Responsive design ensured the page was accessible on all devices. Clear, consistent navigation helped users understand the steps and information required.",
          "Visual appeal and branding conveyed the value proposition, while feedback and confirmation messages reassured users their sign-up was successful and encouraged further exploration."
        ],
        highlights: [
          "Storytelling design approach",
          "Minimal development lift",
          "Responsive across all devices",
          "Clear confirmation messaging"
        ]
      }
    ],
    results: [
      { metric: "30%", label: "Increase in new member sign-ups" },
      { metric: "10%", label: "Reduction in bounce rates" },
      { metric: "6 wks", label: "From concept to launch" },
      { metric: "75%", label: "Less dev effort than full rebuild" }
    ],
    takeaways: [
      {
        title: "Leverage What You Have",
        description: "By reorganizing existing elements rather than rebuilding from scratch, we achieved dramatic improvements with minimal resources and faster time-to-market."
      },
      {
        title: "Vibe Coding Changes Everything",
        description: "AI-assisted development in VS Code transformed weeks of design iteration into days, enabling real-time prototyping and faster validation with stakeholders and users."
      },
      {
        title: "Remove Friction Ruthlessly",
        description: "The biggest wins came from eliminating the disconnect between the main site and partner sign-ups—keeping users in one cohesive experience."
      }
    ]
  },

  'llm-integration-strategy': {
    title: "LLM Integration Strategy",
    subtitle: "Transforming the product development lifecycle with AI-powered assistants for requirements gathering, research synthesis, and stakeholder communication—demonstrated through the Mobile Task Tracker project.",
    tags: ["AI/ML", "LLM Integration", "Product Strategy", "Automation", "Research Synthesis"],
    roles: [
      "AI Strategy",
      "Product Design",
      "UX Research",
      "Stakeholder Management",
      "Process Innovation"
    ],
    timeline: "Ongoing",
    team: "Cross-functional: Product, Engineering, Design, Marketing",
    challenge: [
      "Manual interview transcription",
      "Time-intensive research synthesis",
      "Slow documentation process",
      "Distributed team communication"
    ],
    solution: [
      "LLM assistants in workflow",
      "Automated research synthesis",
      "AI-accelerated documentation",
      "Real-time alignment tools"
    ],
    process: [
      {
        title: "The Vision: AI-Augmented Product Development",
        content: [
          "The goal was to identify high-impact touchpoints in the product development lifecycle where LLMs could dramatically accelerate work without sacrificing quality. We focused on three core areas: requirements gathering, user research synthesis, and stakeholder communication.",
          "Rather than replacing human judgment, the strategy positions AI as an intelligent assistant—handling the heavy lifting of data processing while humans focus on strategic decisions and creative problem-solving.",
          "The Mobile Task Tracker project for BookedOut became our proving ground, demonstrating how AI integration transforms each phase of the design process."
        ],
        highlights: [
          "AI as augmentation, not replacement",
          "Focus on high-impact, time-intensive tasks",
          "Preserve human judgment for strategic decisions",
          "Measurable productivity improvements"
        ]
      },
      {
        title: "AI for Requirements Gathering",
        content: [
          "For the Mobile Task Tracker, we needed to understand a complex problem space: event staff missing tasks, managers lacking visibility, and no accountability mechanisms. Traditional requirements gathering meant hours of stakeholder interviews and manual documentation.",
          "With LLM integration, we transformed this process. The AI assistant joined stakeholder calls, generating real-time transcripts and extracting key requirements as bullet points. It automatically identified user stories from conversations: 'As an event manager, I need to see which staff members have completed their tasks so that I can ensure event success.'",
          "The AI also flagged potential conflicts or gaps in requirements, prompting clarifying questions like: 'Stakeholder A mentioned tasks should be completed 'before checkout' while Stakeholder B said 'during the event'—can we clarify the timeline expectations?'"
        ],
        highlights: [
          "Real-time transcription and extraction",
          "Automatic user story generation",
          "Conflict detection across stakeholders",
          "80% reduction in documentation time"
        ],
        quote: {
          text: "How do I get to my events? Where can I see upcoming events? I am easily distracted when onsite at an event, so I need something that I can get to quickly to check off a task.",
          author: "Event Staff, User Interview (AI-transcribed and synthesized)"
        }
      },
      {
        title: "AI for User Research Synthesis",
        content: [
          "The Mobile Task Tracker research phase involved surveys, interviews, and walkthroughs with event staff and managers. Traditionally, synthesizing this data into actionable insights takes days or weeks of manual analysis.",
          "Our LLM-powered research assistant processed interview transcripts, survey responses, and session recordings to identify patterns and themes automatically. It generated affinity diagrams, extracted pain point clusters, and even suggested persona attributes based on demographic patterns.",
          "For the Task Tracker, the AI identified that users fell into two distinct groups: 'Checklist Completers' who wanted simple task verification, and 'Progress Trackers' who needed visibility into overall event status. This insight directly informed the dual-mode interface design."
        ],
        highlights: [
          "Automated affinity mapping",
          "Pain point clustering and prioritization",
          "Persona generation from data patterns",
          "Theme extraction across multiple sources"
        ]
      },
      {
        title: "AI for Stakeholder Communication",
        content: [
          "Keeping marketing agency leadership, product managers, and engineering aligned on the Mobile Task Tracker required constant communication—status updates, decision documentation, and change requests.",
          "The LLM assistant became our communication hub. It generated weekly stakeholder updates from design files and Jira tickets, translated technical constraints into business impact statements, and drafted meeting agendas based on open decisions.",
          "When we needed to explain why the photo upload feature was deprioritized, the AI helped craft messaging that acknowledged stakeholder concerns while clearly articulating technical constraints and proposed alternatives."
        ],
        highlights: [
          "Automated status report generation",
          "Technical-to-business translation",
          "Meeting agenda and summary drafting",
          "Change request communication templates"
        ]
      },
      {
        title: "Practical Implementation: The Task Tracker Example",
        content: [
          "Here's how the LLM integration played out across the Mobile Task Tracker project phases:",
          "Discovery: AI processed initial stakeholder interviews, generating a requirements matrix that mapped user needs (event visibility, task completion, checkout process) to business goals (increased retention, better productivity tracking). This took hours instead of days.",
          "Research: The AI analyzed user testing feedback—'Users don't see upcoming events', 'No task completion milestones displayed', 'No accountability for tasks'—and automatically generated a prioritized problem list with severity scores based on frequency and impact.",
          "Design: As we iterated on wireframes, the AI helped document design decisions and their rationale, creating a searchable knowledge base that engineering could reference during implementation."
        ],
        highlights: [
          "Requirements matrix generation",
          "Automated problem prioritization",
          "Design decision documentation",
          "Searchable project knowledge base"
        ]
      },
      {
        title: "Results & Scalability",
        content: [
          "The Mobile Task Tracker launched successfully with positive feedback from users and stakeholders. But beyond the project itself, the LLM integration strategy proved its value as a repeatable framework.",
          "Key metrics: 60% reduction in time from research to insights, 80% faster requirements documentation, 50% fewer stakeholder alignment meetings (because communication was clearer and more consistent).",
          "The framework has since been applied to multiple projects across the organization, with AI assistants becoming standard tools in the product development toolkit."
        ],
        highlights: [
          "Repeatable framework for any project",
          "Dramatic time savings across phases",
          "Improved stakeholder alignment",
          "Scalable to entire organization"
        ]
      }
    ],
    results: [
      { metric: "60%", label: "Faster research-to-insights cycle" },
      { metric: "80%", label: "Reduction in documentation time" },
      { metric: "50%", label: "Fewer alignment meetings needed" },
      { metric: "3x", label: "More projects supported per quarter" }
    ],
    takeaways: [
      {
        title: "AI Amplifies Human Expertise",
        description: "The best results come from positioning AI as a powerful assistant that handles data-heavy tasks, freeing humans to focus on judgment, creativity, and relationship-building."
      },
      {
        title: "Start with High-Impact Bottlenecks",
        description: "Identify where your team spends disproportionate time on repetitive tasks—research synthesis, documentation, status updates—and target AI integration there first."
      },
      {
        title: "Build Repeatable Frameworks",
        description: "Don't just solve one project's problems. Create templates, prompts, and workflows that can be applied across the entire product portfolio."
      }
    ]
  },

  'enterprise-designops-transformation': {
    title: "Enterprise DesignOps Transformation",
    subtitle: "Leading design strategy and vendor management for a confidential AI-powered document intelligence platform—bridging external consultants, executive stakeholders, and engineering teams.",
    tags: ["DesignOps", "Vendor Management", "AI/ML", "Executive Communication", "Delivery Leadership"],
    roles: [
      "Director of UX",
      "Delivery Lead",
      "DesignOps Strategy",
      "Vendor Management",
      "Executive Communication",
      "Cross-functional Alignment"
    ],
    timeline: "18 months",
    team: "External Design Consultancy, Internal Engineering, Product Leadership, Executive Stakeholders",
    challenge: [
      "External consultancy delivery",
      "Complex stakeholder dynamics",
      "Ambitious AI/NLP platform",
      "Velocity vs. executive visibility"
    ],
    solution: [
      "DesignOps framework",
      "Defined handoff protocols",
      "AI-assisted review cycles",
      "Creative-business bridge"
    ],
    process: [
      {
        title: "The Challenge: Multi-Party Alignment",
        content: [
          "As Director of UX at an enterprise eDiscovery company, I inherited a complex situation: an external consulting firm had been engaged to execute all design work for a new AI-powered document intelligence platform. My role was to manage their delivery while ensuring alignment with executive expectations and engineering constraints.",
          "The platform itself was technically ambitious—combining natural language processing for document search with an AI-driven analysis mode that could synthesize insights from large document sets. This dual-mode experience required careful UX consideration to balance power-user needs with accessibility.",
          "The stakeholder landscape was equally complex: the consulting firm's creative director had strong opinions on design direction, our engineering leadership had technical constraints that impacted UX decisions, and executive stakeholders needed visibility into progress without getting lost in design details."
        ],
        highlights: [
          "External consultancy managing all design execution",
          "Dual-mode AI interface (search vs. analysis)",
          "Multiple stakeholder groups with different priorities",
          "Confidential enterprise product constraints"
        ]
      },
      {
        title: "Establishing the DesignOps Framework",
        content: [
          "My first priority was creating a DesignOps structure that would enable smooth collaboration across all parties. This meant defining clear handoff protocols, establishing review cadences, and creating documentation standards that worked for both the external team and internal stakeholders.",
          "I implemented a tiered communication strategy: weekly tactical syncs with the consulting team's creative director to review work-in-progress, bi-weekly stakeholder presentations for executive visibility, and ad-hoc technical reviews with engineering to validate feasibility before designs were finalized.",
          "To accelerate my own efficiency, I leveraged AI assistants extensively—using LLMs to synthesize meeting notes into action items, generate stakeholder-ready summaries from detailed design reviews, and draft communication that translated technical UX decisions into business impact language."
        ],
        highlights: [
          "Tiered communication cadences by audience",
          "Clear deliverable standards and handoff protocols",
          "AI-assisted documentation and synthesis",
          "Technical feasibility validation loops"
        ]
      },
      {
        title: "Managing the Creative Partnership",
        content: [
          "Working with an external creative director required a delicate balance: respecting their design expertise while ensuring deliverables met our product requirements. I positioned myself as a collaborative partner rather than a gatekeeping client.",
          "We established a shared design language early—agreeing on interaction patterns for the dual-mode experience, defining how users would transition between search-focused and analysis-focused workflows, and aligning on information architecture for features like document lists, chat history, and AI-generated summaries.",
          "When disagreements arose—and they did—I facilitated resolution by grounding discussions in user research and business objectives rather than personal preference. This approach earned trust from the consulting team and ensured our creative partnership remained productive."
        ],
        highlights: [
          "Collaborative partnership vs. client/vendor dynamic",
          "Shared design language and pattern library",
          "Research-grounded decision making",
          "Conflict resolution through shared objectives"
        ],
        quote: {
          text: "The most effective vendor relationships feel like extensions of your team, not external resources. That requires investing in shared context and mutual respect.",
          author: "Leadership Philosophy"
        }
      },
      {
        title: "Executive Stakeholder Communication",
        content: [
          "Executive stakeholders needed confidence that the project was progressing without requiring deep dives into UX minutiae. I developed a communication rhythm that provided appropriate visibility at each level of the organization.",
          "For C-suite updates, I translated design progress into business outcomes: 'The new analysis mode reduces time-to-insight by 60%' rather than 'We finalized the interrogation mode interaction patterns.' This required me to constantly connect UX decisions to the metrics executives cared about.",
          "I used AI tools to help prepare these communications—generating draft narratives from design documentation, creating executive summary formats that highlighted key decisions and their rationale, and even rehearsing stakeholder presentations by role-playing tough questions with an LLM."
        ],
        highlights: [
          "Business outcome framing for executives",
          "Tiered detail levels by audience",
          "AI-assisted presentation preparation",
          "Proactive risk communication"
        ]
      },
      {
        title: "The AI-Powered Interface: UX Strategy",
        content: [
          "The platform's UX centered on a core insight: investigators need AI to accelerate discovery, but they also need to trust and verify AI-generated conclusions. Every design decision balanced speed with transparency.",
          "We designed a unified natural language search experience where users type questions like 'Show communications about revenue recognition' and receive both a scored document list and an AI-synthesized summary. The AI analyzes hundreds of documents and surfaces key findings with inline citations—numbered markers that link directly to source material.",
          "The three-panel architecture emerged from workflow research: a left panel for matter navigation (switching between investigations), a central workspace for search and AI interaction, and contextual panels that surface on demand. When users need to verify an AI conclusion, the Source Inspector slides in to show the exact excerpt that informed the analysis.",
          "Suggested queries appear as clickable chips, reducing cognitive load and helping users discover relevant lines of inquiry. The Key Findings section extracts critical issues with severity indicators—red for urgent, yellow for warnings, blue for informational—giving investigators immediate visibility into what matters most."
        ],
        highlights: [
          "Natural language search with AI-generated summaries",
          "Inline citations linking AI conclusions to source documents",
          "Source Inspector for transparent verification",
          "Severity-coded Key Findings for prioritization"
        ]
      },
      {
        title: "Interface Concepts",
        imageGallery: [
          {
            src: import.meta.env.BASE_URL + "images/case-studies/designops-ai-search.png",
            alt: "AI-powered document search interface showing NLP query, relevant documents list with match scores, and AI-generated summary panel",
            title: "NLP Search Mode with AI-Generated Insights",
            bullets: [
              "Three-panel architecture: matters navigation, document workspace, contextual panels",
              "Natural language query input with suggested search chips",
              "Relevant Documents list with match percentage scores color-coded by strength",
              "AI-Generated Summary synthesizes insights from analyzed documents",
              "Inline citation markers link directly to source material",
              "Key Findings prioritized with severity indicators (red/yellow/blue)"
            ]
          },
          {
            src: import.meta.env.BASE_URL + "images/case-studies/designops-source-inspector.png",
            alt: "Source Inspector panel showing document excerpt, relevance context, and citation linking",
            title: "Source Inspector for Document Verification",
            bullets: [
              "Slides in from right when clicking citations or selecting documents",
              "Displays exact excerpt that informed AI analysis",
              "Shows document context explaining relevance score",
              "Direct 'Open Full Document' action maintains workflow",
              "Citation linking preserves investigation context",
              "Confidence scoring visible for transparency"
            ]
          }
        ]
      },
      {
        title: "Delivery & Outcomes",
        content: [
          "Over 18 months, we successfully delivered a production-ready AI-powered document intelligence platform. The external consulting partnership, while initially challenging to navigate, became a model for how our organization engaged with creative vendors.",
          "The DesignOps framework I established continued beyond this project—becoming the standard for how our UX organization managed external partnerships, communicated with executives, and maintained design quality at scale.",
          "Most importantly, I demonstrated that effective delivery leadership isn't about doing all the work yourself—it's about creating systems that enable others to do their best work while ensuring alignment with business objectives."
        ],
        highlights: [
          "Production-ready platform delivered",
          "DesignOps framework adopted org-wide",
          "Improved vendor engagement model",
          "Scalable leadership approach"
        ]
      }
    ],
    results: [
      { metric: "18 mo", label: "Complex platform delivered on schedule" },
      { metric: "60%", label: "Faster design review cycles via AI tools" },
      { metric: "3 teams", label: "Aligned: consultants, engineering, executives" },
      { metric: "Org-wide", label: "DesignOps framework adoption" }
    ],
    takeaways: [
      {
        title: "Vendor Partnerships Require Investment",
        description: "Treating external consultants as true partners—investing in shared context, establishing mutual respect, and creating collaborative workflows—yields dramatically better outcomes than transactional client/vendor dynamics."
      },
      {
        title: "Communication is a Delivery Skill",
        description: "Translating between technical UX details and business outcomes, between creative vision and engineering constraints, is as critical as the design work itself. AI tools can accelerate this translation."
      },
      {
        title: "Systems Over Heroics",
        description: "Sustainable delivery comes from establishing repeatable frameworks—communication cadences, documentation standards, review protocols—not from individual heroic efforts."
      }
    ]
  },

  'ai-powered-development-workflow': {
    title: "AI-Powered Development Workflow",
    subtitle: "Transforming the software development lifecycle with Visual Studio Code Copilot and AI Agents—automating testing, documentation, code review, and story writing for the BookedOut Mobile Task Tracker.",
    tags: ["AI/ML", "VS Code Copilot", "AI Agents", "Automated Testing", "DevOps", "Agile"],
    roles: [
      "Delivery Lead",
      "Product Design",
      "AI Workflow Integration",
      "Quality Assurance Strategy",
      "Agile Process Design"
    ],
    timeline: "4 months",
    team: "Product, Engineering, QA, Design",
    challenge: [
      "Manual test case creation bottleneck",
      "Inconsistent documentation quality",
      "Time-consuming code reviews",
      "Story writing delays sprints"
    ],
    solution: [
      "Copilot-assisted automated testing",
      "AI-generated smart documentation",
      "Agent-powered code review workflows",
      "Automated user story generation"
    ],
    process: [
      {
        title: "The Project Context: BookedOut Mobile Task Tracker",
        content: [
          "BookedOut provides a SaaS platform for the gig economy, specifically experiential marketing. Their Mobile Task Tracker was built to help event staff track tasks before, during, and after their shifts—enabling event managers to monitor productivity and ensure successful events.",
          "The challenge was clear: event staff were missing tasks, there was no accountability mechanism, and managers lacked visibility into team productivity. Our solution needed milestone tracking with a mobile-first approach, clear task categorization (before, during, checkout, after), and fool-proof check-in/check-out processes.",
          "While the UX challenge was significant, we saw an opportunity to revolutionize HOW we built the solution—using Visual Studio Code Copilot and AI Agents to automate traditionally manual, time-intensive development processes."
        ],
        highlights: [
          "SaaS platform for experiential marketing gig economy",
          "Mobile-first task tracking for event staff",
          "Milestone-based productivity monitoring",
          "Opportunity to transform development workflow"
        ]
      },
      {
        title: "AI Agents for User Story Generation",
        content: [
          "Traditionally, writing user stories from stakeholder interviews and research findings was a manual, time-intensive process. For the Mobile Task Tracker, we had hours of interview content from event managers, staff, and marketing agency leadership.",
          "We deployed AI agents in VS Code to transform this research into actionable user stories. The agent analyzed interview transcripts and extracted user needs, then automatically generated stories in the standard format: 'As an [event staff member], I need [to see my upcoming events prominently], so that [I know when to check in].'",
          "The agent didn't just transcribe—it identified patterns across interviews, grouped related needs into epics, and even suggested acceptance criteria based on the problems users described. Quotes like 'I am easily distracted when onsite at an event, so I need something that I can get to quickly to check off a task' became fully-formed stories with testable criteria.",
          "What previously took 2-3 days of manual synthesis now happened in hours. The agent generated 47 user stories from our research, which we refined and prioritized—cutting our sprint planning prep time by 70%."
        ],
        highlights: [
          "AI agents analyze interview transcripts automatically",
          "Stories generated in standard user story format",
          "Pattern recognition groups needs into epics",
          "Acceptance criteria suggested from user quotes",
          "70% reduction in sprint planning prep time"
        ],
        quote: {
          text: "How do I get to my events? Where can I see upcoming events? I need something I can get to quickly to check off a task.",
          author: "Event Staff Interview → AI-generated as User Story #12"
        }
      },
      {
        title: "Copilot-Powered Automated Testing",
        content: [
          "The Mobile Task Tracker had complex state management: tasks transitioning through 'not started' → 'in progress' → 'completed', time-based milestone visibility, check-in/check-out validation windows, and multi-event handling for staff working multiple shifts.",
          "VS Code Copilot transformed our testing approach. Instead of manually writing test cases, developers described the feature behavior in comments, and Copilot generated comprehensive test suites. For the check-out flow alone, Copilot produced 23 test cases covering edge cases we hadn't considered—like users attempting check-out before completing required tasks.",
          "We established a 'test-first' workflow: write the user story, have Copilot generate test cases from acceptance criteria, review and refine tests, THEN implement the feature. This inverted the traditional flow and caught design gaps before any code was written.",
          "The agent also identified integration test scenarios across features—recognizing that task completion, check-out validation, and event status were interconnected and needed end-to-end coverage."
        ],
        highlights: [
          "Natural language descriptions → comprehensive test suites",
          "23 test cases generated for check-out flow alone",
          "Test-first workflow catches design gaps early",
          "Edge cases automatically identified",
          "Integration scenarios detected across features"
        ]
      },
      {
        title: "Mobile UI Design: The Task Flow",
        content: [
          "Leading the new UI for the app included a massive overhaul of the existing patterns. Directing a cross-functional communication practice led to not only a cleaner screen for our users, but also direct communication with developers to make sure we were mindful of any technical constraints. Utilizing an existing model that pulled data from our platform software kept everything smooth for our event managers."
        ],
        imageGallery: [
          {
            src: import.meta.env.BASE_URL + "images/case-studies/bookedout-login.png",
            alt: "BookedOut mobile app login screen with branded background and authentication options",
            title: "Streamlined Authentication",
            size: "small",
            bullets: [
              "Branded login with event imagery",
              "Email & social login options",
              "Clear account recovery flow"
            ]
          },
          {
            src: import.meta.env.BASE_URL + "images/case-studies/bookedout-tasks-complete.png",
            alt: "Mobile task list showing all completed tasks organized by milestone categories",
            title: "Milestone Completion",
            size: "small",
            bullets: [
              "Visual progress: 5 of 5 complete",
              "Collapsible milestone sections",
              "Team collaboration indicators"
            ]
          },
          {
            src: import.meta.env.BASE_URL + "images/case-studies/bookedout-questionnaire.png",
            alt: "Mobile questionnaire screen with various input types for event data collection",
            title: "Event Questionnaires",
            size: "small",
            bullets: [
              "Dynamic question progress",
              "Multiple input types supported",
              "Real-time data capture"
            ]
          }
        ],
        interactivePrototype: {
          title: "Profile & Task Flow",
          description: "Tap through to explore the user journey",
          compositeImage: import.meta.env.BASE_URL + "images/case-studies/bookedout-profile-taskflow.png",
          steps: [
            {
              label: "Profile Screen",
              description: "Users see upcoming events on their profile. The red 'Task Alert' banner indicates action is needed.",
              highlight: 0
            },
            {
              label: "Event Tasks",
              description: "Tasks are organized by time-based milestones: Before, During, Check Out, and After.",
              highlight: 1
            },
            {
              label: "Expanded Tasks",
              description: "Expanded view shows specific actions like Check In and Take Photo that users complete directly.",
              highlight: 2
            }
          ],
          bullets: [
            "Bubbled up current events on profile",
            "Time-based task categories: Before, During, Check Out, After",
            "Task alerts guide users to action",
            "Check-off tasks for accountability"
          ]
        }
      },
      {
        title: "Smart Documentation Generation",
        content: [
          "Documentation often becomes stale the moment it's written. For the Mobile Task Tracker, we needed living documentation that stayed current with the codebase—API docs, component documentation, architecture decisions, and user-facing help content.",
          "AI agents in VS Code monitored code changes and automatically updated related documentation. When a developer modified the task state machine, the agent flagged affected documentation sections and generated updated content for review.",
          "For the three-panel mobile architecture (login, event dashboard, task list), the agent generated comprehensive component documentation including props, state management, interaction patterns, and accessibility considerations. It even created user-facing help text explaining features like the visual progress indicators and milestone categories.",
          "The documentation agent also enforced consistency—flagging when terminology differed between code comments and user-facing content ('check-out' vs 'checkout' vs 'check out') and suggesting standardization."
        ],
        highlights: [
          "Living documentation synced with codebase",
          "Automatic flagging of outdated sections",
          "Component documentation auto-generated",
          "User-facing help text from code context",
          "Terminology consistency enforcement"
        ]
      },
      {
        title: "Agent-Assisted Code Review",
        content: [
          "Code review was a bottleneck—senior developers spent hours reviewing PRs, often catching the same patterns repeatedly. For the Mobile Task Tracker's fast-paced sprint cycles, we needed to accelerate without sacrificing quality.",
          "We configured AI agents to perform first-pass code reviews before human reviewers engaged. The agent checked for: adherence to our React Native patterns, proper error handling for offline scenarios (critical for event staff in venues with poor connectivity), accessibility compliance, and performance considerations for the task list rendering.",
          "The agent generated review comments with specific suggestions: 'This task list re-renders on every state change. Consider memoizing with React.memo() and implementing shouldComponentUpdate logic for items.' Human reviewers then focused on architecture decisions and business logic rather than catching style issues.",
          "For the photo upload feature—one of our MVP requirements—the agent identified that our implementation didn't handle the case where users were offline during upload. It suggested a queuing mechanism that became a key reliability improvement."
        ],
        highlights: [
          "AI performs first-pass review before humans",
          "Pattern adherence automatically verified",
          "Performance issues flagged with specific fixes",
          "Offline scenario handling detected",
          "Human reviewers focus on architecture and logic"
        ]
      },
      {
        title: "The Integrated Workflow",
        content: [
          "The real power emerged when these AI-assisted processes worked together as an integrated workflow:",
          "1. Research Synthesis: AI agents process stakeholder interviews, extracting pain points like 'users missing tasks' and 'no visibility into progress.'",
          "2. Story Generation: Agents transform insights into user stories with acceptance criteria: 'As event staff, I need visual cues for task progress so I know what's complete.'",
          "3. Test-First Development: Copilot generates test cases from acceptance criteria BEFORE implementation begins.",
          "4. Assisted Implementation: Copilot helps write feature code, suggesting patterns based on our established architecture.",
          "5. Automated Review: AI agents perform first-pass code review, flagging issues and suggesting improvements.",
          "6. Living Documentation: Agents update documentation as code changes, maintaining accuracy.",
          "This end-to-end AI augmentation meant our small team operated like a team twice our size—shipping the Mobile Task Tracker MVP in 4 months with higher quality than traditional approaches."
        ],
        highlights: [
          "End-to-end AI augmentation across SDLC",
          "Research → Stories → Tests → Code → Review → Docs",
          "Small team operates at 2x capacity",
          "Higher quality with faster delivery"
        ]
      },
      {
        title: "Results: Mobile Task Tracker Launch",
        content: [
          "The Mobile Task Tracker launched successfully, enabling BookedOut's event staff to track tasks with milestone-based organization. Event managers gained visibility into team productivity, and the fool-proof check-out process ensured accurate shift completion records.",
          "Key product outcomes included: visual cues for task progress, organized past and future tasks, streamlined check-in/check-out, progress bars showing milestone completion, and an easier photo upload process.",
          "But beyond the product success, we established a repeatable AI-powered development workflow. The patterns, prompts, and agent configurations we developed are now standard practice—dramatically accelerating every subsequent project.",
          "The Mobile Task Tracker proved that AI-assisted development isn't about replacing developers—it's about amplifying their capabilities, eliminating toil, and letting humans focus on the creative, strategic work that matters most."
        ],
        highlights: [
          "MVP delivered in 4 months",
          "Visual progress tracking implemented",
          "Milestone-based task organization",
          "Fool-proof check-out process",
          "Reusable AI workflow established"
        ]
      }
    ],
    results: [
      { metric: "70%", label: "Faster sprint planning with AI story generation" },
      { metric: "85%", label: "Test coverage via Copilot-generated suites" },
      { metric: "60%", label: "Reduction in code review cycle time" },
      { metric: "4 mo", label: "MVP delivery (vs. 6 mo estimate)" }
    ],
    takeaways: [
      {
        title: "AI Augments, Doesn't Replace",
        description: "The most effective AI workflows position technology as an amplifier of human capability—handling repetitive tasks so developers focus on creative problem-solving and strategic decisions."
      },
      {
        title: "Test-First with AI Changes Everything",
        description: "Generating tests from acceptance criteria BEFORE writing code catches design gaps early and ensures features are built correctly from the start."
      },
      {
        title: "Integrated Workflows Multiply Value",
        description: "Individual AI tools provide incremental benefit. Connecting them into an end-to-end workflow—research to stories to tests to code to review to docs—creates exponential productivity gains."
      }
    ]
  }
}
