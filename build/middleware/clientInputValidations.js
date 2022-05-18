"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInputValidations = void 0;
var clientInputValidations = function (req, res, next) {
    var query = req.query;
    if (!query || !query.width || !query.height || !query.filename) {
        res.status(400).send("Error: Please provide parameters in this form 'filename=full-img&width=200&height=200' ");
        return;
    }
    next();
};
exports.clientInputValidations = clientInputValidations;
