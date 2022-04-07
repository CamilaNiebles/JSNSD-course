#!/usr/bin/env node
'use strict'

/**
 * App is an instance of express that is configured to receive
 * request and response params.
 * For that reason is possible to send it to createServer method.
 */
const app = require('../app')
const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT)

/**
 * This File is the entry point of the app.
 * And it's going to use the app module exported
 * in the app.js file.
 */
