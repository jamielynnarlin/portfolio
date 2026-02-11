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
      "Difficult multilocation switching",
      "No incentive to return"
    ],
    solution: [
      "Personalized dashboard experience",
      "Actionable notifications",
      "Diner review management",
      "Business driven analytics"
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
          "Multilocation navigation was cumbersome"
        ]
      },
      {
        title: "Research",
        content: [
          "I conducted interviews with a variety of participants including sales account managers, client success team members, and restaurant owners. In collaboration with the product team, we used empathy mapping to understand user thoughts, feelings, actions, and pain points.",
          "We created user personas representing different types of users based on demographic data and research findings. These personas guided our design decisions and helped us empathize with user needs and expectations."
        ],
        highlights: [
          "Multiunit login experience needed improvement",
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
          "To design a more user friendly dashboard, we analyzed each module and aligned its information with relevant business goals. We wanted to highlight the value and purpose of each module for the user.",
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
          "I designed high fidelity mockups in Sketch introducing new UI elements. I experimented with different color schemes, icons, and UI patterns to see how they affected user perception and interaction.",
          "We ran guerrilla style testing moderated by myself and marketing/product leads. Using InVision prototypes, we walked users through interactions focusing on notifications and discovered both expected and unexpected results.",
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
          "Two of the most important components were the MCA (Merchant Cash Advance) and reviews module, the heart of the member experience and vital to creating value and retention.",
          "The new MCA design eliminated bulk work from the sales team by surfacing funding eligibility directly in the dashboard. The new Reviews page had extensive filtering, easy reply functions, and at a glance icons for quick scanning.",
          "Within four months, we successfully delivered a portal dashboard that surpassed both business and user experience goals."
        ],
        highlights: [
          "Personalized notification modules",
          "Dynamic, realtime data display",
          "Streamlined multilocation switching",
          "Value based analytics surfaced prominently"
        ]
      }
    ],
    results: [
      { metric: "53%", label: "Increase in user interaction on Reviews page" },
      { metric: "49%", label: "Increase in cash advance signups" },
      { metric: "$8M+", label: "Cash funded since launch" },
      { metric: "4 mo", label: "From concept to delivery" }
    ],
    takeaways: [
      {
        title: "Cross Functional Collaboration",
        description: "Success came from tight collaboration between UX, product, engineering, sales, and marketing teams throughout the entire process."
      },
      {
        title: "User Centered Metrics",
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
    subtitle: "Reimagining resume creation through conversational AI, making professional resume building fast, intuitive, and personalized.",
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
      "Tedious field by field input",
      "Generic, impersonal results",
      "Frustrating user experience"
    ],
    solution: [
      "Conversational AI interface",
      "Three panel live preview",
      "Realtime content generation",
      "Personalized suggestions"
    ],
    process: [
      {
        title: "Discover & Define",
        content: [
          "My job search prompted me to explore better products for resume building. Existing solutions struggled to accommodate diverse needs of job seekers who wanted personalized resumes while maintaining user friendliness.",
          "Current online resume builders can be overwhelming with template options and design elements, making it hard to choose what's best. There are limited customization options resulting in users unable to create unique resumes that accurately represent their experiences.",
          "The hypothesis: AI driven insights could provide personalized recommendations, suggesting relevant sections, skills, and achievements based on user input and career aspirations, streamlining creation while enabling visually appealing, uniquely tailored resumes."
        ],
        highlights: [
          "Existing builders require tedious field by field input",
          "Limited customization creates generic results",
          "Lack of personalized support for specific industries",
          "Non intuitive UI causing frustration and stress"
        ]
      },
      {
        title: "Architecture & UX",
        content: [
          "The platform features a three panel layout designed for seamless workflow: a left hand panel for saved resumes, a dynamic chat area for content input and AI interaction, and a resume preview that populates in realtime with user provided content.",
          "The chat interface enables natural language conversation with the Gen AI, facilitated through an interactive chatbot framework. Users engage to provide input, ask questions, and receive intelligent feedback throughout the resume building process.",
          "The backend integrates with large language models to process user inputs, analyze context, search existing resume content, and generate relevant new content. User management handles authentication, profiles, and saved resume versions securely."
        ],
        highlights: [
          "Three panel layout keeps everything in view",
          "Natural language conversation flow",
          "Realtime resume preview updates",
          "Multiversion resume management"
        ]
      },
      {
        title: "Initial Prototype",
        content: [
          "The first iteration focused on the core flow: landing page, template selection, and the main resume editing experience with conversational AI. Users could select from various resume designs and begin chatting with the AI to populate their content.",
          "The chatbot guides users through the resume building process, asking about skills, experiences, education, and achievements. As users interact, the preview area dynamically populates with AI generated content based on their input.",
          "Users can toggle between different sections via conversation, allowing flexible, nonlinear resume building. The design aimed to mimic natural human conversations with logical flow and coherent timing."
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
          "I conducted user testing sessions on the design mocks to identify what was working and what needed improvement. Users wanted more direction on resume design choices, for example, distinguishing between creative vs. business layouts.",
          "The first suggestion was adding a 'beginner's mode' option. I saw this as an opportunity to leverage AI capabilities further, using prompts to ask whether users are first time resume writers or experienced, then adapting the conversation accordingly.",
          "Users noted that icons related to saved resumes lacked clarity in indicating their connection to the active chat. The second iteration added visual indicators linking saved resumes to their corresponding conversations and preview panels."
        ],
        highlights: [
          "Added resume category guidance (Creative, Business, Technical)",
          "Implemented experience level detection prompts",
          "Clearer visual connection between panels",
          "Multipage resume indicator for longer content"
        ],
        quote: {
          text: "I'd like to see more direction on what kind of resume design to choose, like knowing which is better for creative roles versus corporate positions.",
          author: "User Testing Participant"
        }
      },
      {
        title: "Modern AI Enhancements (2026 Vision)",
        content: [
          "Since the original design, generative AI capabilities have evolved dramatically. A modern implementation would leverage multimodal AI to analyze uploaded documents, LinkedIn profiles, or even voice input to auto populate resume content with minimal typing.",
          "Advanced features would include: job description analysis that tailors resume content for specific roles, ATS (Applicant Tracking System) optimization scoring, industry specific keyword suggestions, and one click tone adjustment from formal to conversational.",
          "The UI would evolve to a more minimal, focused experience, reducing cognitive load while the AI handles more heavy lifting. Smart defaults, progressive disclosure, and contextual micro interactions would make the experience feel magical rather than mechanical."
        ],
        highlights: [
          "Document/LinkedIn import with AI extraction",
          "Job description matching and optimization",
          "ATS compatibility scoring in realtime",
          "Voice to resume dictation support",
          "One click style and tone adjustments",
          "AI powered achievement quantification suggestions"
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
        description: "Natural language interaction removes friction and makes complex tasks feel simple. Users don't need to learn a new interface, they just talk."
      },
      {
        title: "AI as Collaborator",
        description: "The best AI experiences position the technology as a helpful partner, not a replacement, augmenting human creativity rather than automating it away."
      },
      {
        title: "Progressive Complexity",
        description: "Start simple and reveal advanced features as users need them. AI can detect user sophistication and adapt the experience accordingly."
      }
    ]
  },

  'rewards-network-marketing-website': {
    title: "Rewards Network Marketing Website",
    subtitle: "Redesigning the earn page experience to build trust, streamline signups, and drive conversions across multiple dining reward programs.",
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
      "Users dropping off before signup",
      "High bounce rates",
      "Programs on separate sites",
      "Confusing process flow"
    ],
    solution: [
      "3 step storytelling signup",
      "Leveraged existing elements",
      "Onsite registration flow",
      "Minimal dev, max impact"
    ],
    process: [
      {
        title: "Discover & Define",
        content: [
          "The main problem was clear: users were dropping off before they signed up with a program, resulting in low retention and high bounce rates. The current process was lacking in information, confusing users, and driving down new member signups.",
          "The disconnect between Rewards Network's website and the individual partner signup pages created friction. Users had to navigate away from the main site to complete registration, often abandoning the process entirely.",
          "We identified product and sales teams as key stakeholders, with diners as our primary end users. Our hypothesis: reorganizing the page with clearer information and storytelling would dramatically improve signup rates."
        ],
        highlights: [
          "High bounce rates on earn page",
          "Confusing navigation to partner sites",
          "No clear call to action",
          "Users abandoning signup process"
        ]
      },
      {
        title: "Research",
        content: [
          "In collaboration with the marketing team, we used empathy mapping to understand user thoughts, feelings, actions, and pain points. This helped identify their motivations and expectations for joining the program.",
          "I performed a comprehensive content audit evaluating the strengths and weaknesses of the existing page. Using Hotjar heatmaps, we uncovered that users were clicking on the promotional video but not following through with signing up. The video left them hanging with no instructions.",
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
          "Based on user testing and content audit results, I created wireframes addressing key factors that would enhance user experience and motivate program signups.",
          "Key design factors included: a simple and intuitive step by step signup process, engaging content showcasing program benefits, prominent call to action on every section, diner testimonials proving program value, and clear explanation of reward program partnerships.",
          "We collaborated with development to determine feasibility, time, effort, and value of potential changes. Our goal was to reorganize using the existing foundation as much as possible."
        ],
        highlights: [
          "Simple three step signup process",
          "Story driven content strategy",
          "Prominent CTAs throughout",
          "Diner testimonials for social proof"
        ]
      },
      {
        title: "Vibe Coding: Accelerating Design Iteration",
        content: [
          "One of the breakthrough moments in this project came from adopting 'vibe coding' in Visual Studio with GitHub Copilot, using AI assisted development to rapidly prototype and iterate on design concepts directly in code.",
          "Traditional design to development handoff often took weeks: create mockups in Figma, review with stakeholders, hand off to developers, wait for implementation, identify issues, repeat. With vibe coding, we collapsed this cycle dramatically.",
          "By working directly in Visual Studio with AI pair programming, I could describe a component concept in natural language and see working code in minutes. This allowed realtime iteration during stakeholder meetings, 'What if the CTA was larger? What if we added more whitespace?' and implement changes on the spot.",
          "The result: what would have been 3 to 4 weeks of design iteration compressed into 3 to 4 days. We could test real, functional prototypes with users instead of static mockups, gathering more accurate feedback and building confidence in our solutions before full development commitment."
        ],
        highlights: [
          "AI assisted prototyping in Visual Studio",
          "Realtime iteration during stakeholder reviews",
          "3 to 4 weeks of work compressed to days",
          "Functional prototypes vs. static mockups",
          "Faster user testing with working code"
        ]
      },
      {
        title: "Feature Enhancement: SignUp Flow",
        content: [
          "A key improvement was initiating the member signup directly on the Rewards Network site instead of navigating users away to partner pages.",
          "Use Case 1: A diner signing up with a specific reward and partner in mind clicks signup, fills out basic info, chooses reward type and partner, then can immediately browse restaurants as a member.",
          "Use Case 2: A diner unsure which partner to choose can sign up and browse restaurants without selecting a specific partner, since multiple partners exist under each reward type. This flexibility reduced abandonment significantly."
        ],
        highlights: [
          "Onsite signup initiation",
          "Flexible partner selection",
          "Immediate access after signup",
          "Reduced navigation friction"
        ]
      },
      {
        title: "Deliver",
        content: [
          "We created a smooth transition to partner programs, instilling confidence when users were ready to join. The design told a story, starting with a simple three step process to reach the end goal: signup.",
          "Using what we already had in place, we reorganized the page with minimal development and design effort. Responsive design ensured the page was accessible on all devices. Clear, consistent navigation helped users understand the steps and information required.",
          "Visual appeal and branding conveyed the value proposition, while feedback and confirmation messages reassured users their signup was successful and encouraged further exploration."
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
      { metric: "30%", label: "Increase in new member signups" },
      { metric: "10%", label: "Reduction in bounce rates" },
      { metric: "6 wks", label: "From concept to launch" },
      { metric: "75%", label: "Less dev effort than full rebuild" }
    ],
    takeaways: [
      {
        title: "Leverage What You Have",
        description: "By reorganizing existing elements rather than rebuilding from scratch, we achieved dramatic improvements with minimal resources and faster time to market."
      },
      {
        title: "Vibe Coding Changes Everything",
        description: "AI assisted development in Visual Studio with GitHub Copilot transformed weeks of design iteration into days, enabling realtime prototyping and faster validation with stakeholders and users."
      },
      {
        title: "Remove Friction Ruthlessly",
        description: "The biggest wins came from eliminating the disconnect between the main site and partner signups, keeping users in one cohesive experience."
      }
    ]
  },

  'llm-integration-strategy': {
    title: "LLM Integration Strategy",
    subtitle: "Transforming the product development lifecycle with AI powered assistants for requirements gathering, research synthesis, and stakeholder communication, demonstrated through the Mobile Task Tracker project.",
    tags: ["AI/ML", "LLM Integration", "Product Strategy", "Automation", "Research Synthesis"],
    roles: [
      "AI Strategy",
      "Product Design",
      "UX Research",
      "Stakeholder Management",
      "Process Innovation"
    ],
    timeline: "Ongoing",
    team: "Cross functional: Product, Engineering, Design, Marketing",
    challenge: [
      "Manual interview transcription",
      "Time intensive research synthesis",
      "Slow documentation process",
      "Distributed team communication"
    ],
    solution: [
      "LLM assistants in workflow",
      "Automated research synthesis",
      "AI accelerated documentation",
      "Realtime alignment tools"
    ],
    process: [
      {
        title: "The Vision: AI Augmented Product Development",
        content: [
          "The goal was to identify high impact touchpoints in the product development lifecycle where LLMs could dramatically accelerate work without sacrificing quality. We focused on three core areas: requirements gathering, user research synthesis, and stakeholder communication.",
          "Rather than replacing human judgment, the strategy positions AI as an intelligent assistant, handling the heavy lifting of data processing while humans focus on strategic decisions and creative problem solving.",
          "The Mobile Task Tracker project for BookedOut became our proving ground, demonstrating how AI integration transforms each phase of the design process."
        ],
        highlights: [
          "AI as augmentation, not replacement",
          "Focus on high impact, time intensive tasks",
          "Preserve human judgment for strategic decisions",
          "Measurable productivity improvements"
        ]
      },
      {
        title: "AI for Requirements Gathering",
        content: [
          "For the Mobile Task Tracker, we needed to understand a complex problem space: event staff missing tasks, managers lacking visibility, and no accountability mechanisms. Traditional requirements gathering meant hours of stakeholder interviews and manual documentation.",
          "With LLM integration, we transformed this process. The AI assistant joined stakeholder calls, generating realtime transcripts and extracting key requirements as bullet points. It automatically identified user stories from conversations: 'As an event manager, I need to see which staff members have completed their tasks so that I can ensure event success.'",
          "The AI also flagged potential conflicts or gaps in requirements, prompting clarifying questions like: 'Stakeholder A mentioned tasks should be completed before checkout while Stakeholder B said during the event. Can we clarify the timeline expectations?'"
        ],
        highlights: [
          "Realtime transcription and extraction",
          "Automatic user story generation",
          "Conflict detection across stakeholders",
          "80% reduction in documentation time"
        ],
        quote: {
          text: "How do I get to my events? Where can I see upcoming events? I am easily distracted when onsite at an event, so I need something that I can get to quickly to check off a task.",
          author: "Event Staff, User Interview (AI transcribed and synthesized)"
        }
      },
      {
        title: "AI for User Research Synthesis",
        content: [
          "The Mobile Task Tracker research phase involved surveys, interviews, and walkthroughs with event staff and managers. Traditionally, synthesizing this data into actionable insights takes days or weeks of manual analysis.",
          "Our LLM powered research assistant processed interview transcripts, survey responses, and session recordings to identify patterns and themes automatically. It generated affinity diagrams, extracted pain point clusters, and even suggested persona attributes based on demographic patterns.",
          "For the Task Tracker, the AI identified that users fell into two distinct groups: 'Checklist Completers' who wanted simple task verification, and 'Progress Trackers' who needed visibility into overall event status. This insight directly informed the dual mode interface design."
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
          "Keeping marketing agency leadership, product managers, and engineering aligned on the Mobile Task Tracker required constant communication: status updates, decision documentation, and change requests.",
          "The LLM assistant became our communication hub. It generated weekly stakeholder updates from design files and Jira tickets, translated technical constraints into business impact statements, and drafted meeting agendas based on open decisions.",
          "When we needed to explain why the photo upload feature was deprioritized, the AI helped craft messaging that acknowledged stakeholder concerns while clearly articulating technical constraints and proposed alternatives."
        ],
        highlights: [
          "Automated status report generation",
          "Technical to business translation",
          "Meeting agenda and summary drafting",
          "Change request communication templates"
        ]
      },
      {
        title: "Practical Implementation: The Task Tracker Example",
        content: [
          "Here's how the LLM integration played out across the Mobile Task Tracker project phases:",
          "Discovery: AI processed initial stakeholder interviews, generating a requirements matrix that mapped user needs (event visibility, task completion, checkout process) to business goals (increased retention, better productivity tracking). This took hours instead of days.",
          "Research: The AI analyzed user testing feedback, noting that users don't see upcoming events, no task completion milestones displayed, no accountability for tasks, and automatically generated a prioritized problem list with severity scores based on frequency and impact.",
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
      { metric: "60%", label: "Faster research to insights cycle" },
      { metric: "80%", label: "Reduction in documentation time" },
      { metric: "50%", label: "Fewer alignment meetings needed" },
      { metric: "3x", label: "More projects supported per quarter" }
    ],
    takeaways: [
      {
        title: "AI Amplifies Human Expertise",
        description: "The best results come from positioning AI as a powerful assistant that handles data heavy tasks, freeing humans to focus on judgment, creativity, and relationship building."
      },
      {
        title: "Start with High Impact Bottlenecks",
        description: "Identify where your team spends disproportionate time on repetitive tasks like research synthesis, documentation, and status updates, then target AI integration there first."
      },
      {
        title: "Build Repeatable Frameworks",
        description: "Don't just solve one project's problems. Create templates, prompts, and workflows that can be applied across the entire product portfolio."
      }
    ]
  },

  'enterprise-designops-transformation': {
    title: "Enterprise DesignOps Transformation",
    subtitle: "Leading UX and delivery for an AI assisted document investigation platform, aligning agency, engineering, and product teams.",
    tags: ["UX Direction", "Delivery Leadership", "DesignOps", "Agency Management", "AI Enablement"],
    roles: [
      "Director of UX",
      "Delivery Lead",
      "DesignOps Strategy",
      "Research Orchestration",
      "Agency Management",
      "Cross functional Alignment"
    ],
    timeline: "6 months",
    team: "External Design Agency, Internal Engineering, Product Leadership, AI/ML Team",
    // Hero section
    heroImage: {
      src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80",
      alt: "Wooden gavel on legal documents with law books in background",
      clientName: "Enterprise eDiscovery",
      clientDescription: "A leading enterprise software company building AI powered document intelligence tools for legal and compliance teams investigating large document sets."
    },
    challenge: [
      "LLM complexity",
      "External agency",
      "Competing priorities",
      "AI/user alignment"
    ],
    solution: [
      "AI first SDLC",
      "MCP + Figma Make",
      "AI powered testing",
      "LLM dialogue flows"
    ],
    process: [
      {
        problemBento: {
          callout: {
            headline: "Investigators were drowning in documents.",
            subtext: "Legal teams needed to review thousands of documents for each case. Traditional search wasn't enough. They needed AI to surface insights, but they also needed to trust and verify every conclusion.",
            painPoints: [
              "Manual document review",
              "Can't trace AI conclusions",
              "Information overload",
              "Slow verification loops",
              "Critical details buried"
            ]
          },
          image: {
            src: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80",
            alt: "Magnifying glass on scattered documents"
          }
        }
      },
      {
        researchSection: true,
        backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
        tagline: "Research and Setup",
        headline: "Aligning stakeholders and agency around feedback loops",
        insights: [
          {
            icon: "users",
            finding: "Stakeholder map",
            detail: "Aligned product, legal, and investigation leaders on goals and constraints."
          },
          {
            icon: "calendar",
            finding: "Feedback cadence",
            detail: "Scheduled prototype reviews tied to sprint planning so learning landed in time."
          },
          {
            icon: "workflow",
            finding: "Delivery choreography",
            detail: "Sequenced discovery, design, and build to keep teams moving together."
          }
        ]
      },
      {
        researchSection: true,
        backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
        tagline: "Evidence at Scale",
        headline: "AI captured patterns from interviews and walkthroughs",
        insights: [
          {
            icon: "document",
            finding: "Feedback compilation",
            detail: "Compiled interview calls and stakeholder emails into searchable insights."
          },
          {
            icon: "pattern",
            finding: "Pain point extraction",
            detail: "When users walked through flows, AI captured their responses and frustrations."
          },
          {
            icon: "spark",
            finding: "Theme synthesis",
            detail: "Trust, traceability, and context emerged as top investigator concerns."
          }
        ],
        aiPainPoints: {
          title: "AI Captured Pain Points",
          description: "Automated extraction from user interviews and prototype walkthroughs",
          sources: [
            {
              type: "Interview",
              label: "Senior Investigator",
              timestamp: "Session 3 - 14:32",
              quote: "I spend hours clicking through documents just to find one email thread. By the time I find it, I've lost my train of thought.",
              painPoints: ["Document navigation", "Context switching", "Time pressure"]
            },
            {
              type: "Walkthrough",
              label: "Compliance Lead",
              timestamp: "Prototype Review",
              quote: "When the AI shows me a summary, I need to know exactly where that came from. I can't present findings I can't verify.",
              painPoints: ["Source verification", "Trust in AI", "Audit trail"]
            },
            {
              type: "Email",
              label: "Legal Team Feedback",
              timestamp: "Stakeholder Thread",
              quote: "The current search returns too many results. We need relevance scoring and the ability to see why a document matched.",
              painPoints: ["Search relevance", "Result overload", "Match explanation"]
            }
          ],
          clusteredThemes: [
            { theme: "Trust & Verification", count: 18, color: "rose" },
            { theme: "Navigation & Context", count: 14, color: "amber" },
            { theme: "Time Efficiency", count: 11, color: "emerald" }
          ]
        }
      },
      {
        title: "Early Concepts",
        wireframesSection: true,
        tagline: "Design Evolution",
        headline: "From research insights to design direction",
        intro: "User feedback drove our early explorations. Before committing to high fidelity designs, we sketched concepts that addressed the core pain points: finding relevant documents, understanding AI reasoning, and verifying conclusions.",
        wireframes: [
          {
            title: "Search Input Exploration",
            description: "How might investigators express complex queries in natural language?",
            sketch: "search",
            insights: ["Users wanted to type questions, not boolean operators", "Auto extracted chips helped refine without retyping"]
          },
          {
            title: "Results + Relevance",
            description: "Surfacing documents with confidence scores investigators could trust",
            sketch: "results",
            insights: ["Percentage match gave quick scan ability", "Document type icons aided recognition"]
          },
          {
            title: "Summary + Citation Flow",
            description: "Connecting AI conclusions back to source material",
            sketch: "summary",
            insights: ["Inline citations were essential for trust", "One click to verify any claim"]
          }
        ]
      },
      {
        title: "Agency Tooling",
        agencySection: true,
        backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        tagline: "Bridging Design and Development",
        headline: "MCP servers and Figma Make",
        transformation: {
          before: {
            label: "Before MCP",
            items: [
              "Designers work in isolation",
              "Handoffs create delays",
              "Context lost between tools"
            ]
          },
          after: {
            label: "With MCP + Figma Make",
            items: [
              "Real components in Figma",
              "Prototypes in hours, not days",
              "Design tokens auto sync"
            ]
          }
        },
        stats: [
          { value: "70%", label: "Less handoff friction", icon: "sync" },
          { value: "3x", label: "Faster prototyping", icon: "clock" },
          { value: "1", label: "Source of truth", icon: "target" }
        ]
      },
      {
        screenGallery: [
          {
            component: "EmptySearchScreen",
            title: "Starting Point: Natural Language Input",
            bullets: [
              "Investigators begin with a blank canvas and a simple prompt",
              "Plain English queries replace complex boolean syntax",
              "Example queries guide users toward effective search patterns",
              "AI processes natural language to understand investigator intent"
            ]
          },
          {
            component: "NLPDocumentSearchScreen",
            title: "Results with Relevance Scoring",
            bullets: [
              "Auto extracted search chips let users refine without retyping",
              "Document list shows relevance percentages for quick scanning",
              "Selecting a document reveals AI generated summary with key findings",
              "Inline citation markers show exactly where each conclusion originated"
            ]
          },
          {
            component: "SourceInspectorScreen",
            title: "Verify Any AI Conclusion",
            bullets: [
              "One click on any citation opens the source document",
              "Highlighted excerpts show exactly where the AI found its answer",
              "Confidence scoring and document context build investigator trust",
              "Confirm or Flag actions feed back into AI accuracy over time"
            ]
          }
        ]
      },
      {
        title: "Validating the Experience",
        designValidation: true,
        introText: "With high fidelity designs in staging, we ran hands-on QA sessions to validate that the interfaces above worked exactly as intended - from search input to citation verification.",
        bulletPoints: [
          {
            icon: "eye",
            title: "Interface walkthrough testing",
            description: "Tested each screen flow: natural language input, relevance filtering, document selection, and citation verification. Caught edge cases where results didn't match the query context."
          },
          {
            icon: "check",
            title: "AI response validation",
            description: "Verified that AI summaries accurately reflected source documents. When citations didn't match highlighted excerpts, we logged issues and iterated with engineering."
          },
          {
            icon: "layout",
            title: "Visual consistency review",
            description: "Flagged spacing issues, color inconsistencies, and component states that didn't match the Figma specs. Design tokens from MCP kept most styling aligned."
          },
          {
            icon: "users",
            title: "Stakeholder sign-off sessions",
            description: "Ran live demos with legal leads to confirm the search-to-verify flow met their investigation workflow. Their feedback shaped final refinements."
          }
        ]
      },
      {
        title: "Working with Developers: LLM Integration",
        llmIntegrationSection: true,
        pillars: [
          {
            icon: "message",
            title: "Dialogue Flow",
            tagline: "Natural conversation with AI",
            description: "Users ask questions in plain English, AI returns scored results with summaries",
            example: {
              input: "Show communications about revenue recognition",
              output: "847 documents • AI synthesis • Key findings"
            },
            color: "indigo"
          },
          {
            icon: "link",
            title: "Citation System",
            tagline: "Every AI claim is traceable",
            description: "Numbered markers connect conclusions to source documents instantly",
            example: {
              input: "AI finding: CFO requested acceleration",
              output: "[1] links to email excerpt"
            },
            color: "amber"
          },
          {
            icon: "shield",
            title: "Source Inspector",
            tagline: "Trust but verify",
            description: "One click reveals the exact text that informed each AI conclusion",
            example: {
              input: "Click citation [1]",
              output: "Highlighted excerpt + context"
            },
            color: "emerald"
          }
        ],
        codeReviewIntro: {
          title: "LLM Response Handling in Practice",
          description: "I oversaw this implementation with engineering. The review highlights how the AI summary and citation components were built to support trust and verification."
        },
        showCodeReviewViewer: true
      },
      {
        alignmentSection: true,
        backgroundImage: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&q=80",
        tagline: "How We Got Here",
        headline: "A repeatable AI SDLC approach",
        pipeline: [
          {
            step: "Interview",
            output: "Raw transcripts",
            icon: "mic"
          },
          {
            step: "AI Synthesis",
            output: "User stories",
            icon: "spark"
          },
          {
            step: "Validation",
            output: "Tech constraints",
            icon: "check"
          },
          {
            step: "Translation",
            output: "Business impact",
            icon: "chart"
          }
        ],
        examples: [
          {
            input: "As an investigator, I need to see why AI flagged this document",
            output: "Citation system reduces investigation time by 40%"
          },
          {
            input: "I need to verify AI conclusions before presenting to counsel",
            output: "Source Inspector increases confidence in AI assisted findings"
          },
          {
            input: "Searching returns too many irrelevant documents",
            output: "Relevance scoring prioritizes high value evidence first"
          }
        ],
        workflowIntro: {
          title: "AI Powered Alignment Workflow",
          description: "Every feature traced back to real user needs."
        },
        showWorkflowDiagram: true
      },
      {
        outcomeShowcase: true,
        backgroundImage: {
          src: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80",
          alt: "Wooden gavel on sounding block with dramatic lighting"
        },
        headline: "From Drowning to Discovery",
        subheadline: "AI transformed how investigators work with documents",
        stats: [
          { value: "6 mo", label: "Platform delivered", icon: "calendar" },
          { value: "60%", label: "Faster review cycles", icon: "clock" },
          { value: "3", label: "Teams aligned", icon: "users" },
          { value: "Org-wide", label: "AI SDLC adopted", icon: "check" }
        ],
        transformation: {
          before: {
            title: "Before: Manual Search",
            time: "Hours per query",
            description: "Investigators clicking through thousands of documents, losing context, missing connections."
          },
          after: {
            title: "After: AI Discovery",
            time: "Minutes per query", 
            description: "Natural language search surfaces relevant documents instantly, with AI summaries and source verification."
          }
        },
        humanAI: {
          headline: "How I Led AI-Augmented Delivery",
          ai: ["Interview synthesis", "User story generation", "Design-code sync", "Communication drafts"],
          human: ["Research orchestration", "Agency trust-building", "LLM decision-making", "Executive alignment"]
        }
      }
    ],
    results: [
      { metric: "6 mo", label: "Platform delivered on schedule" },
      { metric: "60%", label: "Faster design review cycles" },
      { metric: "3 teams", label: "Aligned: agency, engineering, product" },
      { metric: "Org wide", label: "AI SDLC framework adopted" }
    ],
    takeaways: [
      {
        title: "AI SDLC Leadership",
        description: "The biggest impact came from leading the integration strategy: deciding where AI added value, training teams on new workflows, and ensuring tools enhanced rather than replaced human judgment."
      },
      {
        title: "Agency + AI = Force Multiplier",
        description: "MCP servers and Figma Make transformed our external agency partnership. Designers could work with real components and data, eliminating the friction that usually plagues outsourced design."
      },
      {
        title: "Research Grounded AI",
        description: "AI generated user stories only work when grounded in real research. The combination of AI synthesis and human interpretation created alignment that pure automation never could."
      }
    ]
  },

  'mobile-task-tracker': {
    title: "Mobile Task Tracker",
    subtitle: "Designing a task management system that transformed how BookedOut's event staff track their work, from invisible effort to recognized contribution.",
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
      "No system to track work so staff couldn't prove their value",
      "Managers lacked visibility into team productivity",
      "Good workers passed over because their effort was invisible"
    ],
    solution: [
      "Mobile first task tracking aligned to shift rhythm",
      "Time based milestones: Before, During, Check Out, After",
      "One tap completion for busy moments",
      "Visual progress that makes work visible"
    ],
    process: [
      {
        problemBento: {
          callout: {
            headline: "Event staff were missing tasks during shifts.",
            subtext: "Managers couldn't see who was doing good work. And the workers who showed up every day, did everything right, and gave their best? They had no way to prove it."
          }
        },
        researchBanner: {
          headline: "We immersed ourselves in the world of event staffing.",
          subtext: "Before designing anything, we needed to understand the real challenges workers faced, not just what managers assumed.",
          stats: [
            { number: "12", label: "In depth interviews", description: "One on one conversations with event staff about their daily frustrations" },
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
            text: "I know I do good work. I just wish there was a way to show it. When I apply for the better paying events, they don't know who I am.",
            source: "Event Staff Interview"
          },
          journey: {
            headline: "A Day in Sam's Life",
            subtext: "Here's what a typical shift looks like and why the current tools fail him.",
            steps: [
              {
                time: "6:30 AM",
                label: "Morning",
                icon: "sun",
                mood: "anxious",
                description: "Event details buried in a 47 reply email thread. Sam leaves home unsure what to expect."
              },
              {
                time: "12:00 PM",
                label: "Midday",
                icon: "clock",
                mood: "overwhelmed",
                description: "Juggling spreadsheets, texts, and mental notes. He photographs the booth but forgets to log it."
              },
              {
                time: "4:00 PM",
                label: "Afternoon",
                icon: "users",
                mood: "stressed",
                description: "Rush hits. Sam shines with customers but loses track of tasks. Great work, zero documentation."
              },
              {
                time: "9:00 PM",
                label: "Evening",
                icon: "moon",
                mood: "exhausted",
                description: "Struggling to remember his day. Submits an incomplete report. Worries he'll be passed over again."
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
              alt: "Unnecessary in app gallery"
            },
            story: "A photo gallery Sam has never used. Not once. He takes event photos with his phone's camera, like everyone else.",
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
            story: "This screen holds Sam's profile info: skills, availability, experience, the data that matches him to premium events. But the dated, confusing design means he's unsure if his info is even correct or complete.",
            painPoints: ["Profile data affects matching", "Unclear what's missing", "Could be losing gigs"]
          }
        ],
        highlights: [
          "No way to record task completion",
          "Upcoming events buried in clutter",
          "Staff couldn't prove their work"
        ]
      },
      {
        title: "Design Decisions",
        beforeAfterScreens: [
          {
            id: "discovery",
            title: "Find Your Event",
            pain: "Events buried in cluttered profile",
            solution: "Dashboard with clear next steps",
            oldImage: import.meta.env.BASE_URL + "images/case-studies/Bookedout-OldProfileScreen.png",
            newScreen: "discovery"
          },
          {
            id: "activations",
            title: "Browse Opportunities",
            pain: "Confusing activations list",
            solution: "Clean event discovery",
            oldImage: import.meta.env.BASE_URL + "images/case-studies/Bookedout-ActivationsList.png",
            newScreen: "activations"
          },
          {
            id: "photo",
            title: "Document Your Work",
            pain: "Unused gallery feature",
            solution: "Integrated photo capture",
            oldImage: import.meta.env.BASE_URL + "images/case-studies/Bookedout-Gallery.png",
            newScreen: "photo"
          }
        ]
      },
      {
        title: "The Solution",
        content: [
          "We redesigned the entire experience around Sam's actual workday, not an ideal workflow, but the reality of managing tasks during chaotic events."
        ],
        interactivePrototype: {
          title: "The New Experience",
          description: "Explore how the redesigned app transforms Sam's day",
          prototypeLink: "/prototypes/mobile-task-tracker",
          steps: [
            {
              label: "Profile",
              description: "Next event and tasks visible immediately. Sam knows what's expected."
            },
            {
              label: "Task Categories",
              description: "Before, During, Check Out, After. Only see what matters now."
            },
            {
              label: "One Tap Complete",
              description: "Tap to complete. Integrated camera. Record work in seconds."
            },
            {
              label: "Check Out",
              description: "Time windowed checkout ensures work is captured while fresh."
            }
          ],
          bullets: [
            "Profile: Next event surfaced immediately with task count",
            "Categories: Time based milestones match the natural shift rhythm",
            "Completion: One tap + camera = work recorded in seconds",
            "Check Out: 30 minute window ensures accountability",
            "Progress: Visual indicators make completed work visible",
            "Questionnaire: Quick post event data capture"
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
              "Checks app over breakfast. Knows the plan",
              "Taps tasks complete without breaking flow",
              "Camera captures work instantly",
              "Checkout ensures everything is recorded",
              "Managers see he's one of the most reliable"
            ]
          }
        }
      },
      {
        title: "What We Delivered",
        celebrationSection: true,
        backgroundImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
        outcomesMetrics: [
          { metric: "40%", label: "Increase in task completion rates" },
          { metric: "3x", label: "More visibility for managers" },
          { metric: "90%", label: "Staff felt 'more prepared'" },
          { metric: "Zero", label: "Missed checkouts reported" }
        ]
      },
      // ============================================
      // PART 2: REIMAGINED WITH AI
      // ============================================
      {
        title: "Reimagining This Project with AI",
        isAISection: true,
        aiHero: {
          tagline: "PART 2: THE AI ADVANTAGE",
          headline: "Same Project. Fraction of the Time.",
          subheadline: "What if we rebuilt the Mobile Task Tracker using AI powered tools? The design thinking stays human. Everything else accelerates."
        },
        aiIntroComparison: {
          headline: "What if we could do this 4x faster?",
          subtext: "The Mobile Task Tracker was designed using traditional methods. Here's what that looked like and how AI transforms the design process.",
          traditional: {
            label: "Traditional Process",
            timeline: "12 to 16 weeks",
            items: [
              { phase: "Research", pain: "Interview 5 to 10 users if you're lucky. Transcribe manually. Spend weeks compiling notes into insights, hoping you didn't miss critical patterns buried in the data." },
              { phase: "Synthesis", pain: "Create user stories based on gut interpretation. Human error and bias creep in. Stakeholder alignment meetings drag on because everyone reads the data differently." },
              { phase: "Prototyping", pain: "Sketch wireframes for days. Build high fidelity prototypes for weeks. Then watch users struggle in testing and back to the drawing board." },
              { phase: "Validation", pain: "Run usability tests manually. Iterate slowly. By the time you've validated, the project timeline is already stressed." }
            ]
          },
          accelerated: {
            label: "AI Accelerated Process",
            timeline: "3 to 4 weeks",
            items: [
              { phase: "Research", benefit: "AI processes 50+ interviews in hours. Patterns emerge automatically. You talk to more users because synthesis isn't the bottleneck." },
              { phase: "Synthesis", benefit: "AI identifies themes across all data: 'invisible work' appeared in 73% of interviews. User stories generate from actual quotes, not memory." },
              { phase: "Prototyping", benefit: "AI generates wireframe variations from user stories. Prototype faster, test earlier, iterate before you're emotionally attached." },
              { phase: "Validation", benefit: "Test more variations with less effort. AI generates test scenarios from user stories. Validated designs reach development faster." }
            ]
          }
        },
        content: [
          "The design decisions would remain the same: understanding Sam's day still requires human insight. But the process of getting there? Dramatically faster, with fewer gaps between what users need and what we build."
        ]
      },
      {
        title: "AI-Accelerated Product Design",
        introText: "Here's how AI transformed each phase of the Mobile Task Tracker design process:",
        bulletPoints: [
          {
            icon: "search",
            title: "Gathering User Insights",
            description: "AI processed transcripts from 50+ user interviews in hours instead of weeks. It automatically identified that 73% of staff mentioned 'invisible work' - a pattern that would have taken manual analysis much longer to surface.",
            example: "Input: Raw interview transcripts → Output: Categorized themes with supporting quotes"
          },
          {
            icon: "layers",
            title: "Rapid Prototyping",
            description: "Generated multiple wireframe variations from user stories instantly. We tested 3x more concepts in the same timeframe, finding the one-tap task completion approach before committing to high-fidelity designs.",
            example: "Input: 'Staff need to log tasks quickly' → Output: 5 wireframe variations to test"
          },
          {
            icon: "user",
            title: "User Story Generation",
            description: "AI extracted user stories directly from research quotes, ensuring nothing was lost in translation. Sam's morning conflict became 'As event staff, I need to see my next event on login' - traced back to his actual words.",
            example: "Input: Interview quote about morning stress → Output: Formatted user story with acceptance criteria"
          },
          {
            icon: "bolt",
            title: "AI Agents for Repetitive Tasks",
            description: "Automated the tedious work: formatting design specs, generating acceptance criteria from mockups, and cross-checking designs against requirements. Designers spent time designing, not documenting.",
            example: "Input: Figma mockup → Output: Formatted spec with dimensions, states, and edge cases"
          }
        ]
      },
      {
        title: "The Integrated Workflow",
        workflowIntro: {
          title: "See the AI-Integrated Process",
          description: "Click through each phase below to see how AI accelerates the work - from research to launch. This is the workflow that could cut timeline from 4 months to 2, without sacrificing quality."
        },
        showWorkflowDiagram: true
      },
      {
        title: "The Impact",
        humanSection: {
          showMetrics: true
        }
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
        description: "Sam's chaotic morning, overwhelming afternoon, and exhausted evening weren't edge cases. They were the normal experience. Designing for his actual day, not an ideal workflow, made the difference."
      },
      {
        title: "Make Recording Easier Than Ignoring",
        description: "The old system made documenting work harder than just doing it. One tap completion with integrated camera flipped that equation. Now recording is the path of least resistance."
      },
      {
        title: "AI Accelerates, Humans Direct",
        description: "AI can find patterns in research and generate code from requirements. But choosing whose story to tell and what transformation to design for, that remains human work. The best results combine both."
      }
    ]
  }
}
