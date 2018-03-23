# svelte-jest

Jest Svelte component transformer.

## Usage

Install it via npm:

```sh
$ npm install -D svelte-jest
```

Add Jest configuration:

```js
{
  "jest": {
    "transform": {
      "\\.js$": "babel-jest",
      "\\.html$": "svelte-jest"
    }
  }
}
```

Then you import your Svelte component in your test code:

```js
import Foo from '../components/Foo.html'

describe('Foo Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    new Foo({
      target: el
    })
    expect(el.textContent).toBe('Hello Foo!')
  })
})
```

## License

MIT
