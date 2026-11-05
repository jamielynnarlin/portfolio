import assert from 'node:assert/strict'
import test from 'node:test'
import { chromium } from 'playwright'

test('BookedOut highlights the first action and opens event tasks by click and keyboard', {
  skip: !process.env.PORTFOLIO_TEST_URL,
}, async () => {
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(new URL('/#/prototypes/mobile-task-tracker', process.env.PORTFOLIO_TEST_URL).href)
    const firstAction = page.getByRole('button', { name: 'View tasks for Boat House Cruise', exact: true })
    const hint = page.getByText('Start here: tap View Tasks', { exact: true })
    await firstAction.waitFor()
    assert.equal(await hint.count(), 0)
    assert.equal(await firstAction.getAttribute('aria-describedby'), null)
    const target = firstAction.getByText('View Tasks', { exact: true })
    const ring = await target.evaluate(element => getComputedStyle(element).boxShadow)
    assert.notEqual(ring, 'none')
    assert.equal(await target.evaluate(element => getComputedStyle(element).animationName), 'none')
    await page.emulateMedia({ reducedMotion: 'no-preference' })
    const animation = await target.evaluate(element => {
      const style = getComputedStyle(element)
      return { name: style.animationName, duration: style.animationDuration, iterations: style.animationIterationCount }
    })
    assert.deepEqual(animation, { name: 'bookedout-halo', duration: '1.8s', iterations: 'infinite' })
    const frames = await target.evaluate(element => element.getAnimations()[0].effect.getKeyframes().map(frame => frame.boxShadow))
    assert.ok(new Set(frames).size > 1, 'Halo animates instead of remaining a static ring')
    await target.click()
    await page.getByRole('heading', { name: 'YOUR EVENT TASKS', exact: true }).waitFor()
    assert.equal(await hint.count(), 0)
    await page.reload()
    await firstAction.waitFor()
    await firstAction.focus()
    await page.keyboard.press('Enter')
    await page.getByRole('heading', { name: 'YOUR EVENT TASKS', exact: true }).waitFor()
    await page.setViewportSize({ width: 375, height: 900 })
    await page.reload()
    await firstAction.waitFor()
    await target.scrollIntoViewIfNeeded()
    assert.equal(await hint.count(), 0)
    const bounds = await target.boundingBox()
    assert.ok(bounds && bounds.x >= 0 && bounds.x + bounds.width <= 375)
    await target.click()
    await page.getByRole('heading', { name: 'YOUR EVENT TASKS', exact: true }).waitFor()
    assert.deepEqual(errors, [])
  } finally {
    await browser.close()
  }
})
