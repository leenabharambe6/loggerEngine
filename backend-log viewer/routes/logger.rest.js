const { loggerService } = require('../services');
const validation = require('../middlewares/validation');
function loadRoutes(app) {
    app.get('/logs', async function (req, res, next) {
        console.log('in get API', req.query);
        const results = loggerService.filterLogs(req.query);
        console.log('RESSSSSSSSSS',results)
        res.send(results);
    });

    app.post('/logs', validation.saveLogs, async function (req, res, next) {
        //save data to logger system
        try{
            loggerService.saveLogs(req.body);
        }catch(err){
            res.status(500);
            res.send({ error: "error in insertion" })
        }
        
        res.status(201);
        res.send({ result: "saved successfully" })
    });
}
module.exports = loadRoutes;
