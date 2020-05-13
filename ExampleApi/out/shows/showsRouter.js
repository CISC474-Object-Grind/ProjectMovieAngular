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
var AppRouter_1 = require("../common/AppRouter");
var securityMiddleware_1 = require("../security/securityMiddleware");
var showsController_1 = require("./showsController");
//This is just an example second router to show how additional routers can be added
var ShowsRouter = /** @class */ (function (_super) {
    __extends(ShowsRouter, _super);
    function ShowsRouter() {
        return _super.call(this) || this;
    }
    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    ShowsRouter.prototype.setupRoutes = function () {
        this.expressRouter.get('/semesters', ShowsRouter.sController.getSemesters);
        this.expressRouter.get('/projectNumbers/:semester', ShowsRouter.sController.getProjectNumbers);
        this.expressRouter.get('/:semester', ShowsRouter.sController.getProjects);
        this.expressRouter.get('/:semester/:id', ShowsRouter.sController.getProject);
        this.expressRouter.post('/', [securityMiddleware_1.SecurityMiddleware.RequireAuth], ShowsRouter.sController.addProject);
        this.expressRouter.put('/:id', [securityMiddleware_1.SecurityMiddleware.RequireAuth], ShowsRouter.sController.updateProject);
        this.expressRouter.delete('/:id', [securityMiddleware_1.SecurityMiddleware.RequireAuth], ShowsRouter.sController.deleteProject);
    };
    ShowsRouter.sController = new showsController_1.ShowsController();
    return ShowsRouter;
}(AppRouter_1.AppRouter));
exports.ShowsRouter = ShowsRouter;
//# sourceMappingURL=showsRouter.js.map