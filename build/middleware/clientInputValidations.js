"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInputValidations = void 0;
var clientInputValidations = function (req, res, next) {
    var mainParameters = ['filename', 'height', 'width'];
    for (var i = 0; i < mainParameters.length; i++) {
        var paramType = mainParameters[i];
        if (!req.query[paramType]) {
            res.status(400).send('Error: Parameter(s) missing..');
            return;
        }
        if (paramType === 'width') {
            var value = parseInt(req.query[paramType]);
            if (!value || isNaN(value)) {
                res.status(400).send('width should be a number');
                return;
            }
        }
        if (paramType === 'height') {
            var value = parseInt(req.query[paramType]);
            if (!value || isNaN(value)) {
                res.status(400).send('height should be a number');
                return;
            }
        }
    }
    next();
};
exports.clientInputValidations = clientInputValidations;
