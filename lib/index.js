const svelte = require('svelte')

exports.process = process

function process(src, filename) {
  const result = svelte.compile(src, {
    format: 'cjs',
    filename
  })
  return result
}
