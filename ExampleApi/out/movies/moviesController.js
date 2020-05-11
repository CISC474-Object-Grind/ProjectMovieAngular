"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moviesModel_1 = require("./moviesModel");
var MongoDB_1 = require("../common/MongoDB");
var config_1 = require("../config");
//This is just an example of a second controller attached to the security module
var MoviesController = /** @class */ (function () {
    function MoviesController() {
    }
    //getMovies
    //sends a json object with all projects in the system that match :year
    MoviesController.prototype.getMovies = function (req, res) {
        var name = req.params.name;
        MoviesController.db.getRecords(MoviesController.moviesTable, { name: name })
            .then(function (results) { return res.send({ fn: 'getMovies', status: 'success', data: results }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //getMovie
    //sends the specific movie as JSON with id=:id
    MoviesController.prototype.getMovie = function (req, res) {
        var name = req.params.name;
        var id = MongoDB_1.Database.stringToId(req.params.id);
        MoviesController.db.getOneRecord(MoviesController.moviesTable, { _id: id, name: name })
            .then(function (results) { return res.send({ fn: 'getMovie', status: 'success', data: results }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //addMovie
    //adds the movie to the database
    MoviesController.prototype.addMovie = function (req, res) {
        var movie = moviesModel_1.MoviesModel.fromObject(req.body);
        MoviesController.db.addRecord(MoviesController.moviesTable, movie.toObject())
            .then(function (result) { return res.send({ fn: 'addMovie', status: 'success' }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //updateMovie
    //updates the movie in the database with id :id
    MoviesController.prototype.updateMovie = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        var data = req.body;
        delete data.authUser;
        MoviesController.db.updateRecord(MoviesController.moviesTable, { _id: id }, { $set: req.body })
            .then(function (results) { return results ? (res.send({ fn: 'updateMovie', status: 'success' })) : (res.send({ fn: 'updateMovie', status: 'failure', data: 'Not found' })).end(); })
            .catch(function (err) { return res.send({ fn: 'updateMovie', status: 'failure', data: err }).end(); });
    };
    //deleteMovie
    //deletes the movie in the database with id :id
    MoviesController.prototype.deleteMovie = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        MoviesController.db.deleteRecord(MoviesController.moviesTable, { _id: id })
            .then(function (results) { return results ? (res.send({ fn: 'deleteMovie', status: 'success' })) : (res.send({ fn: 'deleteMovie', status: 'failure', data: 'Not found' })).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    //getIDs
    //returns all valid unique IDs in the database
    MoviesController.prototype.getID = function (req, res) {
        MoviesController.db.getRecords(MoviesController.moviesTable)
            .then(function (results) {
            //extracts just the semester
            var id = results.map(function (x) { return x.id; });
            //removes duplciates
            id = id.filter(function (value, index, array) {
                return !array.filter(function (v, i) { return value === v && i < index; }).length;
            });
            res.send({ fn: 'deleteMovie', status: 'success', data: { id: id } });
        })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    MoviesController.db = new MongoDB_1.Database(config_1.Config.url, "movies");
    MoviesController.moviesTable = 'movies';
    return MoviesController;
}());
exports.MoviesController = MoviesController;
//# sourceMappingURL=moviesController.js.map