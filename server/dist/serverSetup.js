"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSetup = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes.js");
var cors_1 = __importDefault(require("cors"));
var serverSetup = /** @class */ (function () {
    function serverSetup(port) {
        if (port === void 0) { port = 3001; }
        this.port = port;
        this.app = express_1.default();
    }
    serverSetup.prototype.setupExpress = function () {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(routes_1.router);
    };
    serverSetup.prototype.init = function () {
        this.setupExpress();
    };
    serverSetup.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server listening port:" + _this.port);
        });
    };
    return serverSetup;
}());
exports.serverSetup = serverSetup;
