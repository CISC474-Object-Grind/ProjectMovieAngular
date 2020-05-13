"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var ProxyController = /** @class */ (function () {
    function ProxyController() {
    }
    ProxyController.prototype.getFromOtherApi = function (req, res) {
        var options = {
            method: 'GET',
            url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/' + req.params.searchString,
            headers: {
                'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                'x-rapidapi-key': '4cb150e960msh1c6a8e1cccf054ap137887jsn3cbf9acb58bf' //change to your key
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