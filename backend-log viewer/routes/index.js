const express = require('express');
const loggerRoutes = require("./logger.rest.js");

function loadroutes(app) {


    const router = express.Router({ mergeParams: true });
    loggerRoutes(router);

    app.use(`/`, router);
}

module.exports = {
    load: loadroutes
};
