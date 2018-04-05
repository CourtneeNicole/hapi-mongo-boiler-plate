import pkg from './package'

export default {
  pkg,
  dependencies: ['mongo'],
  register(server, options = {}) {
    const { db } = server.plugins['mongo']
    const makeup = db.get('Makeup')

    server.route({
      method: 'GET',
      path: '/v1/Makeup',
      options: {
        tags: ['api']
      },
      async handler(request, h) {
        return await makeup.find({})
      }
    })
  }
}
