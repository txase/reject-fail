var process = require('process')

process.on('unhandledRejection', function(err) {
  throw err
})
