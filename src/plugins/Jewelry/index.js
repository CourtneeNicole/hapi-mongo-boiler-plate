import pkg from './package'

export default {
  pkg,
  dependencies: ['mongo'],
  register(server, options = {}) {
    const { db } = server.plugins['mongo']
    const jewels = db.get('Jewelry')

    server.route({
      method: 'GET',
      path: '/v1/Jewelry',
      options: {
        tags: ['api']
      },
      async handler(request, h) {
        return await jewels.find({})
      }
    })
  }
}
