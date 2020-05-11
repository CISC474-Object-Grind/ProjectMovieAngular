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
var moviesController_1 = require("./moviesController");
//This is just an example second router to show how additional routers can be added
var MoviesRouter = /** @class */ (function (_super) {
    __extends(MoviesRouter, _super);
    function MoviesRouter() {
        return _super.call(this) || this;
    }
    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    MoviesRouter.prototype.setupRoutes = function () {
        this.expressRouter.get('/IDs', MoviesRouter.movieController.getID);
        // this.expressRouter.get('/projectNumbers/:semester',MoviesRouter.movieController.getProjectNumbers);
        this.expressRouter.get('/:movies', MoviesRouter.movieController.getMovies);
        this.expressRouter.get('/:name/:id', MoviesRouter.movieController.getMovie);
        this.expressRouter.post('/', [securityMiddleware_1.SecurityMiddleware.RequireAuth], MoviesRouter.movieController.addMovie);
        this.expressRouter.put('/:id', [securityMiddleware_1.SecurityMiddleware.RequireAuth], MoviesRouter.movieController.updateMovie);
        this.expressRouter.delete('/:id', [securityMiddleware_1.SecurityMiddleware.RequireAuth], MoviesRouter.movieController.deleteMovie);
    };
    MoviesRouter.movieController = new moviesController_1.MoviesController();
    return MoviesRouter;
}(AppRouter_1.AppRouter));
exports.MoviesRouter = MoviesRouter;
//# sourceMappingURL=moviesRouter.js.map