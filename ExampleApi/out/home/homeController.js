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
                'x-rapidapi-key': '4cb150e960msh1c6a8e1cccf054ap137887jsn3cbf9acb58bf',
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