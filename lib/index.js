const svelte = require('svelte/compiler')

function process(src, filename) {
  const result = svelte.compile(src, {
    filename,
    format: 'cjs'
  })

  return {
    code: result.js.code,
    map: result.js.map
  }
}

exports.process = process
