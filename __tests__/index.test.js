/* eslint-env jest */
import { setup, teardown, getFile } from '../jest/test.utils'

let chromeless = null

beforeAll(() => { chromeless = setup() })
afterAll(async () => { await teardown(chromeless) })

test('landing page renders correctly (visual)', async () => {
  const screenshotPath = await chromeless.goto(global.config.baseUrl).wait('button').screenshot()
  const screenshot = await getFile(screenshotPath)
  const customDiffConfig = {
    composeLeftToRight: true,
  }
  expect(screenshot).toMatchImageSnapshot({ customDiffConfig })
})