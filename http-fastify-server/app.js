'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const pointOfView = require('point-of-view')
const handlebars = require('handlebars')

module.exports = async function (fastify, opts) {
  /**
   * Point of view allows server render, here some handlebars
   * allowed by point of view
   * ht‌tp://handlebarsjs.com
   * Fastify-static removed because now the app render dynamic files.
   * Set dirname with views, it's the folder where fastify is going to search.
   */
  fastify.register(pointOfView, {
    engine: { handlebars },
    root: path.join(__dirname, 'views'),
    layout: 'layout.hbs'
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== 'GET') {
      reply.status(405)
      return 'Method Not Allowed\n'
    }
    return 'Not Found\n'
  })
}
