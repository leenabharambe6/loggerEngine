const loggerClient = require('./logger-client/logger.client.impl');

//here any other external dependecy(REDIS, PostgreSQl, MongoDB, CouchDB) can be added instead of logger client which is currently using JSON file

module.exports = {
    loggerClient
}