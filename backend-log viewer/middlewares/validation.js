const { header, body, param, query, validationResult } = require('express-validator');

const rejectIfInvalid = (req, res, next) => {
    const err = validationResult(req);
    if (err.isEmpty()) {
        return next();
    }
    res.status(400);
    res.send({"code": "BAD_REQUEST", "message": `validation error ${JSON.stringify(err)}`})
};

const saveLogs = () => {
    return [
        body("level")
            .isString()
            .withMessage("level should be string")
            .trim()
            .notEmpty()
            .withMessage("level mandatory"),

        body("message")
            .isString()
            .withMessage("message should be string")
            .trim()
            .notEmpty()
            .withMessage("message mandatory"),

        body("resourceId")
            .isString()
            .withMessage("resourceId should be string")
            .trim()
            .notEmpty()
            .withMessage("resourceId mandatory"),

        body("timestamp")
            .isString()
            .withMessage("timestamp should be string")
            .trim()
            .notEmpty()
            .withMessage("timestamp mandatory"),

        body("traceId")
            .isString()
            .withMessage("traceId should be string")
            .trim()
            .notEmpty()
            .withMessage("traceId mandatory"),

        body("spanId")
            .isString()
            .withMessage("spanId should be string")
            .trim()
            .notEmpty()
            .withMessage("spanId mandatory"),

        body("commit")
            .isString()
            .withMessage("commit should be string")
            .trim()
            .notEmpty()
            .withMessage("commit mandatory"),

        body("metadata")
            .isObject()
            .withMessage("metadata should be object")
            .trim()
            .notEmpty()
            .withMessage("metadata mandatory"),

        body().custom((body) => {
            //allowing only specific keys
            const allowedKeys = ['metadata', 'commit', 'spanId', 'traceId', 'timestamp', 'resourceId', 'message', 'level'];
            return Object.keys(body).filter(item => !allowedKeys.includes(item)).length > 0 ? false : true;
        })
    ];
};

module.exports = {
    saveLogs: [
        saveLogs(),
        rejectIfInvalid,
    ],
};  