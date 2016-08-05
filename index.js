var process = require('process'),
    util = require('util')

process.on('unhandledRejection', function(reason, promise) {
  console.error('Unhandled Promise rejection:')

  if (reason.stack)
    console.error(reason.stack)
  else
    console.error(reason)

  process.exit(-1)
})
