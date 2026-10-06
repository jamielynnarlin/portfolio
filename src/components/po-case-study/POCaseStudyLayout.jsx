import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { poSections } from '../../data/poCaseStudyTemplate'
import { Section } from './Section'
import { HeroPhoto } from './HeroPhoto'
import { WorkflowDiagram } from '../WorkflowDiagram'
import {
  SummaryCard,
  ProblemGlance,
  StakesList,
  InitialRequestCard,
  DiscoveryTable,
  StakeholderList,
  RootCause,
  DecisionChains,
  Scorecard,
  QuotePairs,
  TitledList,
} from './blocks'

// Maps each section id to the block(s) that render its data.
const sectionRenderers = {
  'business-problem': study => (
    <>
      <SummaryCard summary={study.businessProblem.summary} metrics={study.businessProblem.highlights} />
      <ProblemGlance
        statement={study.businessProblem.statement}
        metrics={study.businessProblem.metrics}
        constraints={study.businessProblem.constraints}
      />
    </>
  ),
  'why-it-mattered': study => <StakesList items={study.whyItMattered.stakes} callout={study.whyItMattered.callout} />,
  'initial-request': study => <InitialRequestCard {...study.initialRequest} />,
  'product-management': study => (
    <>
      <TitledList items={study.productManagement} columns={2} />
      <div className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 md:p-6">
        <WorkflowDiagram variant="designops" />
      </div>
    </>
  ),
  discovery: study => (
    <>
      <DiscoveryTable activities={study.discovery.activities} />
      <StakeholderList stakeholders={study.discovery.stakeholders} />
    </>
  ),
  'actual-problem': study => <RootCause {...study.actualProblem} />,
  decisions: (study, designs) => <DecisionChains decisions={study.decisions} designs={designs} />,
  engineering: study => <TitledList items={study.engineering} columns={study.engineering.length === 3 ? 3 : 2} />,
  outcomes: study => (
    <>
      <Scorecard rows={study.outcomes.scorecard} />
      <QuotePairs title={study.outcomes.quotesTitle} pairs={study.outcomes.quotes} />
    </>
  ),
  takeaways: study => <TitledList items={study.takeaways} columns={1} variant="takeaways" />,
}

// Highlights the last section whose top has scrolled past 30% of the viewport
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.3
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ids])

  return active
}

// Case study header. `study.heroImage` places a photo behind a navy overlay;
// if the photo has a `screenQuad`, `visual` (a product screen) is drawn onto
// the device in the photo. Otherwise `visual` sits beside the text. Either
// one switches the text to light colors.
function Hero({ study, visual }) {
  const metaItems = [
    ['Role', study.meta?.role],
    ['Timeframe', study.meta?.timeframe],
    ['Team', study.meta?.team],
    ['Context', study.meta?.context],
  ].filter(([, value]) => value)
  const photo = study.heroImage
  const screenInPhoto = Boolean(photo?.screenQuad && visual)
  const sideVisual = visual && !screenInPhoto
  // textSide: 'right' moves the text off a device on the left of the photo
  const textRight = photo?.textSide === 'right'
  const dark = Boolean(photo || visual)

  return (
    <header className={`relative overflow-hidden border-b ${dark ? 'bg-navy-900 border-navy-800' : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-800'}`}>
      {photo && (
        <>
          <HeroPhoto photo={photo} screen={screenInPhoto ? visual : null} />
          <div aria-hidden="true" className={`absolute inset-0 ${textRight ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} ${screenInPhoto ? 'from-navy-900/95 via-navy-900/75 via-45% to-navy-900/10' : 'from-navy-900/95 via-navy-900/85 to-navy-900/60'}`} />
          {screenInPhoto && <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900 to-transparent" />}
          {screenInPhoto && <div aria-hidden="true" className="absolute inset-0 bg-navy-900/70 md:hidden" />}
        </>
      )}
      {sideVisual && (
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-primary-500/15 blur-3xl" />
      )}
      <div className={`relative max-w-7xl mx-auto px-4 pt-28 pb-14 ${sideVisual ? 'grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-center' : ''}`}>
        <div className={screenInPhoto ? `max-w-2xl ${textRight ? 'md:ml-auto md:max-w-md xl:max-w-xl' : ''}` : ''}>
          <Link to="/projects" className={`text-sm font-medium hover:underline ${dark ? 'text-primary-200' : 'text-primary-600 dark:text-primary-400'}`}>
            ← All projects
          </Link>
          <div className="flex flex-wrap gap-2 mt-6">
            {study.tags?.map(tag => (
              <span
                key={tag}
                className={`px-2 py-1 text-xs font-medium rounded-full ${dark ? 'bg-white/10 text-white ring-1 ring-white/20' : 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className={`mt-4 font-display text-5xl md:text-6xl uppercase tracking-wide ${dark ? 'text-white' : 'text-navy-900 dark:text-white'}`}>
            {study.title}
          </h1>
          <p className={`mt-3 text-xl max-w-3xl ${dark ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>{study.subtitle}</p>
          {study.links?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {study.links.map(link => (
                <Link key={link.to} to={link.to} className="btn-primary">
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
          {metaItems.length > 0 && (
            <dl className={`mt-10 grid grid-cols-2 gap-6 ${visual ? 'sm:grid-cols-3' : 'md:grid-cols-4'}`}>
              {metaItems.map(([term, value]) => (
                <div key={term}>
                  <dt className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{term}</dt>
                  <dd className={`mt-1 ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {sideVisual && <div>{visual}</div>}
      </div>
    </header>
  )
}

function TableOfContents({ active, sections }) {
  return (
    <nav aria-label="Case study sections" className="hidden lg:block sticky top-28 self-start">
      <ol className="space-y-1 border-l border-gray-200 dark:border-gray-800">
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={event => {
                // The site uses HashRouter, so a plain #anchor would change the route
                event.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`block -ml-px border-l-2 pl-4 py-1.5 text-sm transition-colors ${
                active === section.id
                  ? 'border-primary-500 text-primary-700 dark:text-primary-300 font-medium'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Renders a complete Product Owner case study from a data object shaped like
// poCaseStudyTemplate. Pass `showGuidance` to display writing guidance for
// each section (template preview only).
//
// Supporting visuals (prototype screens, interactive demos) stay secondary to
// the narrative: `extras` maps a section id to a node rendered after that
// section's content, `designs` maps a decision's `design` key to the screen
// or demo shown in its decision chain, and `heroVisual` shows beside the title.
export function POCaseStudyLayout({ study, showGuidance = false, extras = {}, designs = {}, heroVisual }) {
  const visibleSections = poSections.filter(section => section.id !== 'product-management' || study.productManagement?.length)
  const active = useActiveSection(visibleSections.map(section => section.id))

  return (
    <article className="bg-white dark:bg-gray-900">
      <Hero study={study} visual={heroVisual} />
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-[14rem_1fr] gap-12">
        <TableOfContents active={active} sections={visibleSections} />
        <div className="max-w-3xl min-w-0">
          {visibleSections.map(section => (
            <Section key={section.id} section={section} showGuidance={showGuidance}>
              {sectionRenderers[section.id]?.(study, designs) ?? null}
              {extras[section.id] && <div className="mt-10">{extras[section.id]}</div>}
            </Section>
          ))}
        </div>
      </div>
    </article>
  )
}
