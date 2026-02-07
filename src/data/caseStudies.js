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
          "One of the breakthrough moments in this project came from adopting 'vibe coding' in Visual Studio with GitHub Copilot—using AI-assisted development to rapidly prototype and iterate on design concepts directly in code.",
          "Traditional design-to-development handoff often took weeks: create mockups in Figma, review with stakeholders, hand off to developers, wait for implementation, identify issues, repeat. With vibe coding, we collapsed this cycle dramatically.",
          "By working directly in Visual Studio with AI pair programming, I could describe a component concept in natural language and see working code in minutes. This allowed real-time iteration during stakeholder meetings—'What if the CTA was larger? What if we added more whitespace?'—and implement changes on the spot.",
          "The result: what would have been 3-4 weeks of design iteration compressed into 3-4 days. We could test real, functional prototypes with users instead of static mockups, gathering more accurate feedback and building confidence in our solutions before full development commitment."
        ],
        highlights: [
          "AI-assisted prototyping in Visual Studio",
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
        description: "AI-assisted development in Visual Studio with GitHub Copilot transformed weeks of design iteration into days, enabling real-time prototyping and faster validation with stakeholders and users."
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

  'mobile-task-tracker': {
    title: "Mobile Task Tracker",
    subtitle: "Designing a task management system that transformed how BookedOut's event staff track their work—from invisible effort to recognized contribution.",
    tags: ["Product Design", "Mobile UX", "User Research", "Journey Mapping", "AI/ML"],
    roles: [
      "Design Lead",
      "UX Research",
      "Product Strategy",
      "User Testing",
      "Stakeholder Management"
    ],
    timeline: "4 months",
    team: "Product, Engineering, QA, Design",
    // Hero section with immersive image
    heroImage: {
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80",
      alt: "Concert venue with purple lights, confetti falling over excited crowd",
      clientName: "BookedOut",
      clientDescription: "A SaaS platform powering the gig economy for experiential marketing. Their tools are used by thousands of event staff working for the world's largest brands and agencies."
    },
    challenge: [
      "Event staff overwhelmed managing tasks across chaotic shifts",
      "No system to track work—staff couldn't prove their value",
      "Managers lacked visibility into team productivity",
      "Good workers passed over because their effort was invisible"
    ],
    solution: [
      "Mobile-first task tracking aligned to shift rhythm",
      "Time-based milestones: Before, During, Check Out, After",
      "One-tap completion for busy moments",
      "Visual progress that makes work visible"
    ],
    process: [
      {
        title: "The Problem",
        problemBento: {
          callout: {
            headline: "Event staff were missing tasks during shifts.",
            subtext: "Managers couldn't see who was doing good work. And the workers who showed up every day, did everything right, and gave their best? They had no way to prove it."
          }
        }
      },
      {
        title: "Understanding the Problem",
        researchBanner: {
          headline: "We immersed ourselves in the world of event staffing.",
          subtext: "Before designing anything, we needed to understand the real challenges workers faced—not just what managers assumed.",
          stats: [
            { number: "12", label: "In-depth interviews", description: "One-on-one conversations with event staff about their daily frustrations" },
            { number: "3", label: "Live events observed", description: "Shadowing staff at concerts, corporate events, and festivals" },
            { number: "47", label: "Staff surveys completed", description: "Quantitative data on pain points, feature requests, and workflows" }
          ]
        }
      },
      {
        title: "Meet Sam",
        samPersona: {
          intro: "From our research, a clear pattern emerged. We created Sam to represent the hundreds of event staff whose voices shaped this project.",
          bio: [
            "Sam is 34, a single father who works event staffing for the flexible hours.",
            "He's reliable, hardworking, and great with customers. But he's been passed over for premium events three times this year.",
            "The problem isn't his work. It's that no one can see it."
          ],
          quote: {
            text: "I know I do good work. I just wish there was a way to show it. When I apply for the better-paying events, they don't know who I am.",
            source: "Event Staff Interview"
          },
          journey: {
            headline: "A Day in Sam's Life",
            subtext: "Here's what a typical shift looks like—and why the current tools fail him.",
            steps: [
              {
                time: "6:30 AM",
                label: "Morning",
                icon: "sun",
                mood: "anxious",
                description: "Sam checks his email for event details. They're buried in a thread with 47 replies. He's not sure what time to arrive or what tasks he needs to do."
              },
              {
                time: "12:00 PM",
                label: "Midday",
                icon: "clock",
                mood: "overwhelmed",
                description: "At the event, Sam juggles a spreadsheet, group texts, and mental notes. A manager asks him to photograph the booth—he does it but forgets to record it."
              },
              {
                time: "4:00 PM",
                label: "Afternoon",
                icon: "users",
                mood: "stressed",
                description: "The event gets busy. Sam is great with customers but completely loses track of his tasks. Great work, no documentation."
              },
              {
                time: "9:00 PM",
                label: "Evening",
                icon: "moon",
                mood: "exhausted",
                description: "After his son goes to bed, Sam tries to remember what he did. He submits an incomplete report and worries about his reputation."
              }
            ]
          }
        }
      },
      {
        title: "What We Discovered",
        discoveryIntro: "Watching Sam use the existing BookedOut app revealed four critical failure points.",
        discoveryCategories: [
          {
            id: "where",
            label: "Where?",
            question: "Where am I supposed to go?",
            color: "amber",
            screen: {
              src: import.meta.env.BASE_URL + "images/case-studies/Bookedout-OldProfileScreen.png",
              alt: "Original BookedOut profile screen"
            },
            story: "Sam opens the app before his shift. His next event? Buried somewhere in a cluttered profile. He sighs and checks his email instead.",
            painPoints: ["No clear hierarchy", "Events buried below fold", "Resorts to email for basics"]
          },
          {
            id: "what",
            label: "What?",
            question: "What am I supposed to do?",
            color: "rose",
            screen: {
              src: import.meta.env.BASE_URL + "images/case-studies/Bookedout-ActivationsList.png",
              alt: "Original activations list"
            },
            story: "The Activations screen shows events, but no tasks. Sam arrives at venues blind, hunting for his manager just to learn what he's doing.",
            painPoints: ["Zero task visibility", "No preparation possible", "Flying blind every shift"]
          },
          {
            id: "why",
            label: "Why?",
            question: "Why does this even exist?",
            color: "violet",
            screen: {
              src: import.meta.env.BASE_URL + "images/case-studies/Bookedout-Gallery.png",
              alt: "Unnecessary in-app gallery"
            },
            story: "A photo gallery Sam has never used. Not once. He takes event photos with his phone's camera—like everyone else.",
            painPoints: ["Unused feature", "Wasted screen space", "Staff use native camera"]
          },
          {
            id: "how",
            label: "How?",
            question: "How do I get better gigs?",
            color: "sky",
            screen: {
              src: import.meta.env.BASE_URL + "images/case-studies/Bookedout-Settings.png",
              alt: "Outdated settings screen"
            },
            story: "This screen holds Sam's profile info—skills, availability, experience—the data that matches him to premium events. But the dated, confusing design means he's unsure if his info is even correct or complete.",
            painPoints: ["Profile data affects matching", "Unclear what's missing", "Could be losing gigs"]
          }
        ],
        highlights: [
          "No way to record task completion",
          "Upcoming events not surfaced",
          "Unnecessary features cluttering the experience",
          "Staff couldn't prove their work"
        ]
      },
      {
        title: "Design Decisions",
        beforeAfterScreens: [
          {
            id: "profile",
            title: "Find Your Event",
            pain: "Events buried in cluttered profile",
            solution: "Next event front & center",
            oldImage: import.meta.env.BASE_URL + "images/case-studies/Bookedout-OldProfileScreen.png",
            newScreen: "profile"
          },
          {
            id: "tasks",
            title: "Know Your Tasks",
            pain: "No visibility into what to do",
            solution: "Time-based task categories",
            oldImage: import.meta.env.BASE_URL + "images/case-studies/Bookedout-ActivationsList.png",
            newScreen: "tasks"
          },
          {
            id: "progress",
            title: "Track Your Work",
            pain: "No way to record completed work",
            solution: "One-tap completion with proof",
            oldImage: import.meta.env.BASE_URL + "images/case-studies/Bookedout-Gallery.png",
            newScreen: "completed"
          }
        ]
      },
      {
        title: "The Solution",
        content: [
          "We redesigned the entire experience around Sam's actual workday—not an ideal workflow, but the reality of managing tasks during chaotic events."
        ],
        interactivePrototype: {
          title: "The New Experience",
          description: "Explore how the redesigned app transforms Sam's day",
          prototypeLink: "/prototypes/mobile-task-tracker",
          steps: [
            {
              label: "Profile",
              description: "Next event and tasks visible immediately—Sam knows what's expected."
            },
            {
              label: "Task Categories",
              description: "Before, During, Check Out, After—only see what matters now."
            },
            {
              label: "One-Tap Complete",
              description: "Tap to complete. Integrated camera. Record work in seconds."
            },
            {
              label: "Check Out",
              description: "Time-windowed checkout ensures work is captured while fresh."
            }
          ],
          bullets: [
            "Profile: Next event surfaced immediately with task count",
            "Categories: Time-based milestones match the natural shift rhythm",
            "Completion: One tap + camera = work recorded in seconds",
            "Check Out: 30-minute window ensures accountability",
            "Progress: Visual indicators make completed work visible",
            "Questionnaire: Quick post-event data capture"
          ]
        }
      },
      {
        title: "Before & After",
        beforeAfter: {
          before: {
            title: "Before",
            items: [
              "Arrives anxious, unsure what's expected",
              "Juggles apps, texts, and mental notes",
              "Great work goes unrecorded",
              "Evening: tries to remember, submits incomplete report",
              "Managers don't know his track record"
            ]
          },
          after: {
            title: "After",
            items: [
              "Checks app over breakfast—knows the plan",
              "Taps tasks complete without breaking flow",
              "Camera captures work instantly",
              "Check-out ensures everything is recorded",
              "Managers see he's one of the most reliable"
            ]
          }
        }
      },
      {
        title: "The Outcomes",
        content: [
          "The Mobile Task Tracker launched successfully. Staff reported feeling 'more prepared' before events. Task completion rates increased 40%. Manager visibility into staff performance improved dramatically."
        ],
        highlights: [
          "40% increase in task completion rates",
          "Staff felt 'more prepared' before events",
          "Managers gained visibility into performance",
          "Reduced missed tasks and check-out errors"
        ],
        quote: {
          text: "I finally feel like I can show what I actually do. My manager can see my track record now, and I'm getting assigned to better events.",
          author: "Event Staff, Post-Launch Feedback"
        }
      },
      // ============================================
      // PART 2: REIMAGINED WITH AI
      // ============================================
      {
        title: "Reimagining This Project with AI",
        content: [
          "The Mobile Task Tracker was designed before AI tools like Visual Studio with GitHub Copilot were available. The research synthesis, persona development, and implementation all happened through traditional methods.",
          "What if we had AI assistance? The design decisions would remain the same—understanding Sam's day still requires human insight. But the process of getting there could be dramatically faster."
        ],
        highlights: [
          "Same design outcomes, accelerated process",
          "AI assists synthesis, not strategy",
          "Human insight still drives decisions"
        ]
      },
      {
        title: "AI-Accelerated Research",
        content: [
          "The 12 interviews, 47 surveys, and observation notes took weeks to synthesize into Sam's story. AI changes this equation.",
          "Today, interview transcripts and survey responses can be processed by AI agents that identify patterns automatically. The same themes we found—morning anxiety, midday chaos, evening frustration—surface in hours instead of days.",
          "AI can identify emotional language across interviews, highlighting phrases like 'invisible,' 'can't prove,' and 'no one knows'—the signals that led us to Sam's core conflict. The synthesis that took 2-3 weeks becomes 2-3 days."
        ],
        highlights: [
          "Interview synthesis: weeks → days",
          "Pattern identification automated",
          "Emotional themes surface faster",
          "More time for strategic decisions"
        ],
        quote: {
          text: "AI identified 'invisible work' as a theme across 73% of interviews—the same insight that became Sam's core story. It found it in 20 minutes.",
          author: "Reflection on AI-Assisted Research"
        }
      },
      {
        title: "From Research to Development",
        content: [
          "Once we understood Sam's day, translating that into user stories and acceptance criteria was manual work. AI streamlines this translation.",
          "Sam's morning conflict becomes: 'As event staff, I need to see my next event on login, so I know what's expected before leaving home.' AI generates acceptance criteria: 'Next event displayed within 2 taps of login.'",
          "With GitHub Copilot, developers write comments describing Sam's needs, and Copilot generates implementation. The check-out flow that captures Sam's work? A developer describes the requirement in natural language, and Copilot handles the validation logic, edge cases, and error states."
        ],
        showCodeReviewViewer: true,
        highlights: [
          "Research insights → user stories automatically",
          "Natural language → working code",
          "Edge cases and validation generated",
          "Developers focus on architecture, not boilerplate"
        ]
      },
      {
        title: "Testing Sam's Journey",
        content: [
          "Testing the app manually consumed significant time each sprint. AI can generate tests directly from Sam's story.",
          "From 'Sam needs to see his event before leaving home,' AI generates: profile loads within 2 seconds, next event displayed prominently, task count visible.",
          "From 'Sam can't record tasks when busy,' AI generates: task completion requires single tap, works offline, visual feedback within 200ms.",
          "The tests verify not just functionality, but that Sam's experience is protected. Edge cases like network failures connect directly to his need for reliable work capture."
        ],
        showDocumentationViewer: true,
        highlights: [
          "Tests generated from user needs",
          "Sam's experience verified automatically",
          "Edge cases tied to real scenarios",
          "85%+ coverage achievable"
        ]
      },
      {
        title: "The Integrated Workflow",
        content: [
          "The real power emerges when AI supports the entire process:",
          "1. Research: AI processes interviews, identifies patterns and emotional themes.",
          "2. Synthesis: AI surfaces insights like 'invisible work' that define the core problem.",
          "3. Translation: AI converts research into user stories with acceptance criteria.",
          "4. Development: Copilot generates implementation from natural language descriptions.",
          "5. Testing: AI creates test suites that verify user experience, not just functionality.",
          "The Mobile Task Tracker took 4 months. With AI acceleration, similar quality could be achieved in 2 months—not by cutting corners, but by eliminating the mechanical work between insights and implementation."
        ],
        showWorkflowDiagram: true,
        highlights: [
          "End-to-end acceleration",
          "Research → Code → Testing streamlined",
          "4 months → 2 months potential",
          "Quality preserved, speed improved"
        ]
      },
      {
        title: "What Stays Human",
        content: [
          "AI can synthesize patterns from interviews. It can identify that 73% of staff mentioned invisible work. It can generate code and tests.",
          "But AI didn't decide that Sam's story was the right frame for this problem. It didn't recognize that a single father working flexible hours would resonate with stakeholders. It didn't craft the transformation from overwhelmed to in control.",
          "The strategic choices—whose story to tell, what transformation to design for, how to connect features to emotional outcomes—remain human work. AI accelerates the path to those decisions, but doesn't make them.",
          "Sam's story guided every design choice in the Mobile Task Tracker. In the AI era, we'd reach that story faster. But it would still be his story that mattered."
        ],
        highlights: [
          "AI accelerates synthesis, not strategy",
          "Story selection remains human judgment",
          "Emotional connection designed by people",
          "Speed without sacrificing insight"
        ]
      }
    ],
    results: [
      { metric: "4 mo", label: "Project delivered" },
      { metric: "40%", label: "Increase in task completion" },
      { metric: "↑", label: "Staff assigned to better events" },
      { metric: "2x", label: "Potential speed with AI" }
    ],
    takeaways: [
      {
        title: "Design for Real Days, Not Ideal Users",
        description: "Sam's chaotic morning, overwhelming afternoon, and exhausted evening weren't edge cases—they were the normal experience. Designing for his actual day, not an ideal workflow, made the difference."
      },
      {
        title: "Make Recording Easier Than Ignoring",
        description: "The old system made documenting work harder than just doing it. One-tap completion with integrated camera flipped that equation—now recording is the path of least resistance."
      },
      {
        title: "AI Accelerates, Humans Direct",
        description: "AI can find patterns in research and generate code from requirements. But choosing whose story to tell and what transformation to design for—that remains human work. The best results combine both."
      }
    ]
  }
}
