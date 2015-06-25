var test = require('tape')
var atob = require('./')

test('atob', function(t) {
  t.equal(atob('aGVsbG8gd29ybGQ='), 'hello world', 'decodes correctly')
  t.end()
})

if (process.browser) test('close', function(t) {
  t.end()
  setTimeout(function() {
    window.close()
  }, 500)
})
