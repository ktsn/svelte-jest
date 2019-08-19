const svelte = require('svelte/compiler')

function process(src, filename) {
  const result = svelte.compile(src, {
    filename,
    format: 'cjs'
  })

  return {
    code: result.js ? result.js.code : result.code,
    map: result.js ? result.js.map : result.map
  }
}

exports.process = process
