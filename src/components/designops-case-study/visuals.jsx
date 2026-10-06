import { InvestigationApp } from '../PrototypeScreens'
import { WorkflowDiagram } from '../WorkflowDiagram'

function ScreenWrap({ children }) {
  return <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">{children}</div>
}

function ScreenShell({ currentScreen }) {
  return (
    <div className="h-[560px] bg-gray-50 dark:bg-gray-950 p-4 md:p-6">
      <InvestigationApp currentScreen={currentScreen} onScreenChange={() => {}} />
    </div>
  )
}

export const designOpsDesigns = {
  search: (
    <ScreenWrap>
      <ScreenShell currentScreen={0} />
    </ScreenWrap>
  ),
  results: (
    <ScreenWrap>
      <ScreenShell currentScreen={1} />
    </ScreenWrap>
  ),
  verify: (
    <ScreenWrap>
      <ScreenShell currentScreen={2} />
    </ScreenWrap>
  ),
  workflow: (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 md:p-6">
      <WorkflowDiagram variant="designops" />
    </div>
  ),
}
