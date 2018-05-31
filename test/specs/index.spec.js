import Test from '../fixtures/Test.html'

describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    const el = document.createElement('div')
    new Test({
      target: el
    })
    expect(el.textContent).toBe('Hello World')
  })

  it('should update the dom', () => {
    const el = document.createElement('div')
    const test = new Test({
      target: el
    })

    expect(el.textContent).toBe('Hello World')

    test.set({
      message: 'Test'
    })

    expect(el.textContent).toBe('Hello Test')
  })

  it('should be Svelte instance', () => {
    const el = document.createElement('div')
    const test = new Test({
      target: el
    })

    expect(test.get().message).toBe('World')

    test.set({
      message: 'Test'
    })

    expect(test.get().message).toBe('Test')
  })
})
