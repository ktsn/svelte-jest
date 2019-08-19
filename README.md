# svelte-jest

[![Build Status](https://travis-ci.org/ktsn/svelte-jest.svg?branch=master)](https://travis-ci.org/ktsn/svelte-jest)
[![svelte-jest Dev Token](https://badge.devtoken.rocks/svelte-jest)](https://devtoken.rocks/package/svelte-jest)

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
      "\\.svelte$": "svelte-jest"
    },
    "moduleFileExtensions": [
      "js",
      "json",
      "svelte"
    ]
  }
}
```

Then you import your Svelte component in your test code:

```js
import Foo from '../components/Foo.svelte'

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
