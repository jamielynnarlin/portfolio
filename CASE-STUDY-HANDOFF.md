# Case Study Rework: Handoff Notes

The case studies are being rewritten for a **Senior Product Owner** audience: a Director of Product Management should read each one as product work (business problem, discovery, decisions, delivery, outcomes), not UX/UI work. One case study is done and serves as the reference implementation. The rest still use their old pages.

## Status

| Case study | Route | Status |
|---|---|---|
| Conversational Document Review | `/#/projects/llm-integration-strategy` | **Done** in the new format |
| DesignOps Transformation | `/#/projects/enterprise-designops-transformation` | Not started (old `DesignOpsCaseStudy.jsx`) |
| Mobile Task Tracker (BookedOut) | `/#/projects/mobile-task-tracker` | Not started (old generic `CaseStudy.jsx`) |
| Restaurant Portal Redesign | `/#/projects/restaurant-portal-redesign` | Not started (old `RestaurantCaseStudy.jsx`) |
| Rewards Network | `/#/projects/rewards-network-marketing-website` | Not started; not shown in production (`mvp` not set) |

The template preview with writing guidance for every section is at `/#/projects/po-template`. It is registered only in dev.

**Nothing from this work is committed yet.** Pushing to `main` deploys straight to production (Cloud Run via `.github/workflows/deploy-cloudrun.yml`), so check everything locally first.

## Running locally

- `npm run dev` starts the site at http://localhost:5174 (port set in `vite.config.js`; the README's 5173 is outdated).
- The site uses **HashRouter**, so URLs need `/#/`, for example `http://localhost:5174/#/projects/llm-integration-strategy`.
- Because of HashRouter, in-page `#anchor` links change the route. Scroll with `element.scrollIntoView()` instead (the table of contents already does this).
- Production: https://jamie-arlin.thesentimentanalysis.com

## How the template works

| File | Role |
|---|---|
| `src/data/poCaseStudyTemplate.js` | `poSections`: section order, titles, and writing guidance (single source of truth). `poCaseStudyTemplate`: starter data with bracketed placeholders and comments on every optional field. |
| `src/data/poCaseStudies.js` | All rewritten case studies, keyed by slug. Plain data only. |
| `src/components/po-case-study/POCaseStudyLayout.jsx` | Renders a whole case study: header, sticky table of contents, and every section in order. Maps each section id to its blocks. |
| `src/components/po-case-study/blocks.jsx` | Reusable section blocks (listed below). |
| `src/components/po-case-study/Section.jsx` | Section wrapper; shows the guidance box when `showGuidance` is set. |
| `src/components/po-case-study/HeroPhoto.jsx` | Header background photo. Can also warp a product screen onto a device in the photo (currently unused). |
| `src/pages/POCaseStudy.jsx` | Looks up a study by slug and passes through `extras`, `designs`, and `heroVisual`. |
| `src/pages/DocumentReviewCaseStudy.jsx` | The finished case study's page: supplies its designs and extras. Copy this pattern for each new one. |
| `src/components/llm-case-study/visuals.jsx` | Case-specific visuals for Document Review: prototype screens in browser frames, interactive demos, pain-point flip cards, technical challenges list, prototype call to action. |

**Sections, in order** (`poSections` id → title → block):

1. `business-problem`: **Business Problem**. `SummaryCard` (navy, 2-sentence summary) + `ProblemGlance` (one-line statement, 2–3 icon stat tiles, constraint chips)
2. `why-it-mattered`: **The Stakes**. `StakesList` (3 icon bullets + optional navy callout)
3. `initial-request`: **Initial Request**. `InitialRequestCard` (big quote + "Hypothesis to test" callout)
4. `discovery`: **Discovery Activities**. `DiscoveryTable` (navy bento cards with stat, icon, finding, and "Led to" chips that scroll to the matching decision) + `StakeholderList` (avatar cards)
5. `actual-problem`: **What We Uncovered**. `RootCause` (headline, short bullets, "Reframed problem" box)
6. `decisions`: **Key Product Decisions**. `DecisionChains`: one card per product screen, titled with the screen name, containing Discovery (yellow box) → Solution pairs, then the design (open by default, collapsible with a chevron)
7. `engineering`: **Engineering Collaboration**. `TitledList` (3 short cards)
8. `outcomes`: **Outcomes**. `Scorecard` (Measure / Before / After table) + `QuotePairs` ("before" → "after" quotes)
9. `takeaways`: **Key Product Owner Takeaways**. `TitledList`

**Page-level props** (passed from the case study's page file into `POCaseStudy`):
- `extras`: `{ sectionId: node }`, rendered after a section's own content (for example the pain-point flip cards in Discovery, the tech challenges list in Engineering).
- `designs`: `{ key: node }`. A decision card with `design: 'key'` shows that node.
- `heroVisual`: optional node, shown beside the header text, or drawn onto a device when `heroImage.screenQuad` is set.

### Converting another case study

1. Copy `poCaseStudyTemplate` into `poCaseStudies.js` under the study's slug, then fill it in from the old content in `src/data/caseStudies.js` (or the old page file).
2. Create `src/pages/<Name>CaseStudy.jsx` following `DocumentReviewCaseStudy.jsx`: pass `slug`, plus any `designs` and `extras`.
3. Point that study's route in `src/App.jsx` at the new page. The route must come before the `/projects/:slug` catch-all.
4. Keep the project card in `src/data/projects.js` consistent with the case study's numbers.

## Content and design rules (from the owner's feedback)

**Writing**
- Write for a Director of Product. Lead with business problems, decisions, trade-offs, and outcomes, not design process, wireframes, or design systems.
- Be short. The owner repeatedly asked to cut wordiness. Prefer one-line statements and short bullets over paragraphs.
- **No repeated information.** Each stat appears once on the page. The Outcomes "Before" column may restate a baseline, but nothing else should repeat.
- Use only facts from the existing case study content. Don't invent metrics. Flag anything inferred so the owner can confirm it.
- Only use stats the owner can confidently speak to. "Zero fabricated citations" was rejected as unbelievable.
- Credit the team. Avoid "I" in headings (for example "Key Product Decisions", not "Product Decisions I Influenced").
- Role on Document Review is "UX/Product Manager".

**Visual**
- Theme: **navy** (`navy-900`) panels for summaries and evidence, **teal** (`primary-*`) for accents and highlights. Matches the site's Tailwind config.
- **No section or card numbers** ("01, 02…"). They were removed everywhere, including the table of contents.
- **No red or warning icons.** Use neutral or teal styling.
- Avoid stray labels like "Over:", "Why:", "From…", and "Instead of…" lines. They were removed for clarity.
- Labels and text should line up. Icons in front of labels were removed because they broke alignment.
- Keep table cells and bullets on **one line** where possible.
- Tables get a **hover highlight** on rows.
- Prototype screens are shown full-width in browser frames, stacked, never squashed side by side. The "AI-Generated" badge was removed from the Case Assessment screen.
- Every new block must work in dark mode and at phone width.

## Open items to confirm with the owner

- **Subtitle claim:** the Document Review subtitle says the work "cut time to production in half", but nothing on the page backs it up now. The original data said 4 weeks → 72 hours, and that row was removed from Outcomes at the owner's request.
- **Accuracy figure:** Outcomes shows 96% precision. Elsewhere in `caseStudies.js` the same project lists 85% precision at 80% recall. The owner hasn't said which is right.
- **Inferred wording:** the decision insights, the "Assess the corpus before review" decision, and the Initial Request wording were written from surrounding facts, not stated in the source data.
- **Project card:** the Document Review card in `projects.js` still says "cut review time 60% and doubled daily throughput", which conflicts with the case study.
- **Stakes bullet:** "Missed deadlines" still includes the 40% timeline-padding figure, although its callout tile was removed.
- **Dropped content:** the "How I used AI across delivery" timeline, the multimodal speedups (9x / 7x / 12x), and "zero fabricated citations" were removed. They are still in `caseStudies.js` if wanted back.

## Housekeeping before committing

- `src/pages/LLMCaseStudy.jsx` is the old Document Review page, kept as a backup. It's no longer routed and can be deleted once the new version is approved.
- `src/App.jsx` also contains the owner's earlier, unrelated uncommitted edits. Review the diff before committing.
- The working tree has other uncommitted owner files (GIF scripts, SVG/HTML experiments, `vite.config.js`, `PrototypeScreens.jsx`, and others) that are unrelated to this work. Commit only what belongs.
- Run `npm run build` before pushing. It passed at the time of handoff.
