import HasImport from '../fixtures/HasImport.html'

describe('HasImport', () => {
  it('should load a component having import declaration', () => {
    const target = document.createElement('div')
    new HasImport({
      target,
      data: { message: 'hello' }
    })
    expect(target.textContent).toBe('HELLO')
  })
})
