"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var showsModel_1 = require("./showsModel");
var MongoDB_1 = require("../common/MongoDB");
var config_1 = require("../config");
//This is just an example of a second controller attached to the security module
var ShowsController = /** @class */ (function () {
    function ShowsController() {
    }
    //getProjects
    //sends a json object with all projects in the system that match :year
    ShowsController.prototype.getProjects = function (req, res) {
        var semester = req.params.semester;
        ShowsController.db.getRecords(ShowsController.projectsTable, { semester: semester })
            .then(function (results) { return res.send({ fn: 'getProjects', status: 'success', data: results }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //getProject
    //sends the specific project as JSON with id=:id
    ShowsController.prototype.getProject = function (req, res) {
        var semester = req.params.semester;
        var id = MongoDB_1.Database.stringToId(req.params.id);
        ShowsController.db.getOneRecord(ShowsController.projectsTable, { _id: id, semester: semester })
            .then(function (results) { return res.send({ fn: 'getProject', status: 'success', data: results }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //addProject
    //adds the project to the database
    ShowsController.prototype.addProject = function (req, res) {
        var proj = showsModel_1.ShowsModel.fromObject(req.body);
        ShowsController.db.addRecord(ShowsController.projectsTable, proj.toObject())
            .then(function (result) { return res.send({ fn: 'addProject', status: 'success' }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //updateProject
    //updates the project in the database with id :id
    ShowsController.prototype.updateProject = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        var data = req.body;
        delete data.authUser;
        ShowsController.db.updateRecord(ShowsController.projectsTable, { _id: id }, { $set: req.body })
            .then(function (results) { return results ? (res.send({ fn: 'updateProject', status: 'success' })) : (res.send({ fn: 'updateProject', status: 'failure', data: 'Not found' })).end(); })
            .catch(function (err) { return res.send({ fn: 'updateProject', status: 'failure', data: err }).end(); });
    };
    //deleteProject
    //deletes the project int he database with id :id
    ShowsController.prototype.deleteProject = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        ShowsController.db.deleteRecord(ShowsController.projectsTable, { _id: id })
            .then(function (results) { return results ? (res.send({ fn: 'deleteProject', status: 'success' })) : (res.send({ fn: 'deleteProject', status: 'failure', data: 'Not found' })).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //getSemesters
    //returns all valid unique semesters in the database
    ShowsController.prototype.getSemesters = function (req, res) {
        ShowsController.db.getRecords(ShowsController.projectsTable)
            .then(function (results) {
            //extracts just the semester
            var semesters = results.map(function (x) { return x.semester; });
            //removes duplciates
            semesters = semesters.filter(function (value, index, array) {
                return !array.filter(function (v, i) { return value === v && i < index; }).length;
            });
            res.send({ fn: 'deleteProject', status: 'success', data: { semesters: semesters } });
        })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //getProjectNumbers
    //returns all valid unique projectNumbers for a given semesters in the database
    ShowsController.prototype.getProjectNumbers = function (req, res) {
        var semester = req.params.semester;
        ShowsController.db.getRecords(ShowsController.projectsTable, { semester: semester })
            .then(function (results) {
            //extracts just the projectNumber
            var projects = results.map(function (x) { return x.projectNumber; });
            //removes duplciates
            projects = projects.filter(function (value, index, array) {
                return !array.filter(function (v, i) { return value === v && i < index; }).length;
            });
            res.send({ fn: 'deleteProject', status: 'success', data: { projectNumbers: projects.sort() } });
        })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    ShowsController.db = new MongoDB_1.Database(config_1.Config.url, "shows");
    ShowsController.projectsTable = 'projects';
    return ShowsController;
}());
exports.ShowsController = ShowsController;
//# sourceMappingURL=showsController.js.map