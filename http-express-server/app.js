'use strict'
const express = require('express')

const app = express()

/**
 * Here we have a handle error for the
 * routes.
 */
app.use((req, res, next) => {
  if (req.method !== 'GET') {
    next(createError(405))
    return
  }
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
