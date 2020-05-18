"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyController = void 0;
var request_1 = __importDefault(require("request"));
var ProxyController = /** @class */ (function () {
    function ProxyController() {
    }
    ProxyController.prototype.getFromOtherApi = function (req, res) {
        var options = {
            method: 'GET',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=ae98a62e' + req.params.searchString,
            headers: {
                'x-rapidapi-host': 'http://www.omdbapi.com/?i=tt3896198&',
                'x-rapidapi-key': '6e2b71cca6msh8ed431b60a3455ep19fa49jsn3c1f6960664d' //change to your key
            }
        };
        request_1.default(options, function (error, response, result) {
            if (error)
                return res.status(500).send(error);
            return res.send(result);
        });
    };
    return ProxyController;
}());
exports.ProxyController = ProxyController;
//# sourceMappingURL=proxyController.js.map