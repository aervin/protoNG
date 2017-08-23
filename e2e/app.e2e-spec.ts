import { FeaturePage } from './app.po'

describe('feature App', () => {
  let page: FeaturePage

  beforeEach(() => {
    page = new FeaturePage()
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('app works!')
  })
})
