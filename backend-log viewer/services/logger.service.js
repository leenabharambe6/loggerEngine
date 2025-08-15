const { loggerClient : { insertLog, retrieveLogs } } = require('../clients')

class LoggerService {
    saveLogs(logEntry){
        console.log('logEntry --- ', JSON.stringify(logEntry))
        insertLog(logEntry);
    }

    filterLogs(logEntry){
        return retrieveLogs(logEntry);
    }
}
module.exports = new LoggerService();