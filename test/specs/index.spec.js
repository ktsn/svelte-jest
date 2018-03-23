import Test from '../fixtures/Test.html'

describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    const el = document.createElement('div')
    new Test({
      target: el
    })
    expect(el.textContent).toBe('Hello World')
  })
})
