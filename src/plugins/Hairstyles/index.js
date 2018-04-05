import pkg from './package'

export default {
  pkg,
  dependencies: ['mongo'],
  register(server, options = {}) {
    const { db } = server.plugins['mongo']
    const styles = db.get('HairStyles')

    server.route({
      method: 'GET',
      path: '/v1/HairStyles',
      options: {
        tags: ['api']
      },
      async handler(request, h) {
        return await styles.find({})
      }
    })
  }
}
