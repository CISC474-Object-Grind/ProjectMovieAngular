"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowsModel = /** @class */ (function () {
    function ShowsModel() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.groupid = '';
        this.groupMembers = [];
        this.semester = '';
        this.projectNumber = 0;
    }
    ShowsModel.fromObject = function (object) {
        var p = new ShowsModel();
        p.name = object.name;
        p.description = object.description;
        p.groupid = object.groupId;
        p.groupMembers = object.groupMembers;
        p.semester = object.semester;
        p.projectNumber = object.projectNumber;
        return p;
    };
    ShowsModel.prototype.toObject = function () {
        return { name: this.name, description: this.description, groupid: this.groupid, groupMembers: this.groupMembers, semester: this.semester, projectNumber: this.projectNumber };
    };
    return ShowsModel;
}());
exports.ShowsModel = ShowsModel;
//# sourceMappingURL=showsModel.js.map