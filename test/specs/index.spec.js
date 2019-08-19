import Test from '../fixtures/Test.html'

describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    const target = document.createElement('div')

    new Test({ target })

    expect(target.textContent).toBe('Hello World')
  })

  it('should update the dom', () => {
    const target = document.createElement('div')
    const test = new Test({ target, accessors: true })

    expect(target.textContent).toBe('Hello World')

    test.message = 'Test'

    expect(target.textContent).toBe('Hello Test')
  })

  it('should be Svelte instance', () => {
    const target = document.createElement('div')
    const test = new Test({ target })

    expect(test.message).toBe('World')

    test.message = 'Test'

    expect(test.message).toBe('Test')
  })
})
