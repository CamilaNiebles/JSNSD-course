'use strict'
const http = require('http')
const PORT = process.env.PORT || 3000

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

/**
 * http is a node core, it is not common or recommendable
 * uses for production but is useful to learn.
 * createServer is all in this module, receives one request and send one
 * response for every call.
 */
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.end(hello)
})

server.listen(PORT)
