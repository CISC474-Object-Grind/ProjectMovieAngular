"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
// this controller pulls from the api that will let you autocomplete titles and has more endpoints
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.getFromOtherApi = function (req, res) {
        var options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
            qs: { q: req.params.searchString },
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                // 'x-rapidapi-key': 'd44c42e1c5msh2c86d382d3ce66fp175fbdjsn1c6180163297',
                'x-rapidapi-key': 'eb7be4121dmshc61a14ca144f069p1c2086jsn5c1ea10f7807',
                // 'x-rapidapi-key': 'e1b3a89f74msh0debf0632ebfccfp15b381jsn73bde87118fa',
                useQueryString: true
            }
        };
        request_1.default(options, function (error, response, result) {
            if (error)
                return res.status(500).send(error);
            return res.send(result);
        });
    };
    HomeController.prototype.findShow = function (req, res) {
        var options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/find',
            qs: { q: req.params.searchString },
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                // 'x-rapidapi-key': 'd44c42e1c5msh2c86d382d3ce66fp175fbdjsn1c6180163297',
                'x-rapidapi-key': 'eb7be4121dmshc61a14ca144f069p1c2086jsn5c1ea10f7807',
                // 'x-rapidapi-key': 'e1b3a89f74msh0debf0632ebfccfp15b381jsn73bde87118fa',
                // 'x-rapidapi-key': '4cb150e960msh1c6a8e1cccf054ap137887jsn3cbf9acb58bf',
                useQueryString: true
            }
        };
        request_1.default(options, function (error, response, result) {
            if (error)
                return res.status(500).send(error);
            return res.send(result);
        });
    };
    return HomeController;
}());
exports.HomeController = HomeController;
//# sourceMappingURL=homeController.js.map