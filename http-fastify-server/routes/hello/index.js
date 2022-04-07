'use strict'

/**
 * With this configuration fastify can render hello.html file
 * because public file is declare in the app.js file and
 * We are writing this code in the index.js file.
 * @param {*} fastify
 * @param {*} opts
 */
module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return reply.sendFile('hello.html')
  })
}
