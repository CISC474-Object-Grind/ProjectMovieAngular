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
exports.ProxyRouter = void 0;
var AppRouter_1 = require("../common/AppRouter");
var proxyController_1 = require("./proxyController");
//This is just an example second router to show how additional routers can be added
var ProxyRouter = /** @class */ (function (_super) {
    __extends(ProxyRouter, _super);
    function ProxyRouter() {
        return _super.call(this) || this;
    }
    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    ProxyRouter.prototype.setupRoutes = function () {
        this.expressRouter.get('/:searchString', ProxyRouter.proxController.getFromOtherApi);
    };
    ProxyRouter.proxController = new proxyController_1.ProxyController();
    return ProxyRouter;
}(AppRouter_1.AppRouter));
exports.ProxyRouter = ProxyRouter;
//# sourceMappingURL=proxyrouter.js.map