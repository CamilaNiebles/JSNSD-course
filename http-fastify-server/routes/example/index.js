'use strict'

/**
 * Fastify allows to load files in the public folder, for example
 * http://127.0.0.1:3000/hello.html this url will render the
 * hello.html file in the public folder.
 * With the package fastify-static.
 * @param {*} fastify
 * @param {*} opts
 */
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}
