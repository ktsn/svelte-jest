const svelte = require('svelte')

exports.process = process

function process(src, filename) {
  const result = svelte.compile(src, {
    format: 'cjs',
    filename
  })

  return {
    code: result.js ? result.js.code : result.code,
    map: result.js ? result.js.map : result.map
  }
}
