/* eslint-disable indent */
const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    })
}
