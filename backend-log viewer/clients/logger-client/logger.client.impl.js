const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'log.json');

function insertLog(logData) {
    let logFileJson = [];
    try {
        logFileJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.log('error in reading file  :: ', err);
    }
    logFileJson.push(logData);
    fs.writeFileSync(filePath, JSON.stringify(logFileJson, null, 2), 'utf8');

    return;
}

function retrieveLogs(filter) {
    let logFileJson = [];
    try {
        logFileJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.log('error in reading file  :: ', err);
        return [];
    }
    const { timestamp_start, timestamp_end, ...fieldCriteria } = filter;
    return logFileJson.filter(logEntry => {
        const fieldMatch = Object.entries(fieldCriteria).every(([key, value]) => logEntry[key] === value)
        
        const timestampMatch =
            (!timestamp_start || logEntry.timestamp >= timestamp_start) &&
            (!timestamp_end || logEntry.timestamp <= timestamp_end);

        return fieldMatch && timestampMatch
    });

}

module.exports = {
    insertLog,
    retrieveLogs
}