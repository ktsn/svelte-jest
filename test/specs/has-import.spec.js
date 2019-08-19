import HasImport from '../fixtures/HasImport.svelte'

describe('HasImport', () => {
  it('should load a component having import declaration', () => {
    const target = document.createElement('div')
    new HasImport({ target, props: { message: 'hello' } })
    expect(target.textContent).toBe('HELLO')
  })
})
