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
var AppRouter_1 = require("./common/AppRouter");
var proxyrouter_1 = require("./proxy/proxyrouter");
var homeRouter_1 = require("./home/homeRouter");
//root router for the API
var MainRouter = /** @class */ (function (_super) {
    __extends(MainRouter, _super);
    function MainRouter() {
        return _super.call(this) || this;
    }
    //adds the child routers to various paths to form the overall API. 
    MainRouter.prototype.setupRoutes = function () {
        // this.addRouter('/security',new SecurityRouter());
        this.addRouter('/proxy', new proxyrouter_1.ProxyRouter()); //the original API route he gave us
        this.addRouter('/imdb', new homeRouter_1.HomeRouter()); //the newer API he provided us
    };
    return MainRouter;
}(AppRouter_1.AppRouter));
exports.MainRouter = MainRouter;
//# sourceMappingURL=mainRouter.js.map