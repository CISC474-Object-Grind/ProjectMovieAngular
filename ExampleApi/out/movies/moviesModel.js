"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoviesModel = /** @class */ (function () {
    function MoviesModel() {
        this.id = '';
        this.title = '';
        this.description = '';
        this.genre = '';
    }
    MoviesModel.fromObject = function (object) {
        var p = new MoviesModel();
        p.title = object.title;
        p.description = object.description;
        p.genre = object.genre;
        return p;
    };
    MoviesModel.prototype.toObject = function () {
        return { title: this.title, description: this.description, groupid: this.genre };
        // return {name:this.name,description:this.description,groupid:this.genre,groupMembers:this.groupMembers,projectNumber:this.projectNumber};
    };
    return MoviesModel;
}());
exports.MoviesModel = MoviesModel;
//# sourceMappingURL=moviesModel.js.map