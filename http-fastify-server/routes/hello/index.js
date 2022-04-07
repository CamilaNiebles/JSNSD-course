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
    /**
     * This value is a query param, by default has Hello value.
     */
    const { greeting = 'Hello ' } = request.query
    /**
     * Method with the logic to render the hello.hbs file.
     */
    return reply.view(`hello.hbs`, { greeting })
  })
}
