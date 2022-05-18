"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var clientInputValidations_1 = require("./middleware/clientInputValidations");
var resizeImage_1 = __importDefault(require("./modules/resizeImage"));
var app = (0, express_1.default)();
var PORT = 3000;
app.get('/process', clientInputValidations_1.clientInputValidations, resizeImage_1.default);
app.listen(PORT, function () { return console.log("server running at ".concat(PORT)); });
exports.default = app;
