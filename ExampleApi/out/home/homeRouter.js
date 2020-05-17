"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRouter = void 0;
var AppRouter_1 = require("../common/AppRouter");
var homeController_1 = require("./homeController");
//This is just an example second router to show how additional routers can be added
var HomeRouter = /** @class */ (function (_super) {
    __extends(HomeRouter, _super);
    function HomeRouter() {
        return _super.call(this) || this;
    }
    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    HomeRouter.prototype.setupRoutes = function () {
        this.expressRouter.get('/:searchString', HomeRouter.homeController.getFromOtherApi);
        this.expressRouter.get('/:find', HomeRouter.homeController.findShow);
    };
    HomeRouter.homeController = new homeController_1.HomeController();
    return HomeRouter;
}(AppRouter_1.AppRouter));
exports.HomeRouter = HomeRouter;
//# sourceMappingURL=homeRouter.js.map