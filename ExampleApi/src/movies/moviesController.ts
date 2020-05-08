import express, { RequestHandler } from 'express';
import { MoviesModel } from './moviesModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';
//This is just an example of a second controller attached to the security module

export class MoviesController {
    static db: Database = new Database(Config.url, "movies");
    static moviesTable = 'movies';

    //getMovies
    //sends a json object with all projects in the system that match :year
    getMovies(req: express.Request, res: express.Response) {
        const name = req.params.name;
        MoviesController.db.getRecords(MoviesController.moviesTable, { name: name })
            .then((results) => res.send({ fn: 'getMovies', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
	}
	
    //getMovie
    //sends the specific movie as JSON with id=:id
    getMovie(req: express.Request, res: express.Response) {
		const name = req.params.name;
        const id = Database.stringToId(req.params.id);
        MoviesController.db.getOneRecord(MoviesController.moviesTable, { _id: id, name: name })
            .then((results) => res.send({ fn: 'getMovie', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
	}
	
    //addMovie
    //adds the movie to the database
    addMovie(req: express.Request, res: express.Response) {
        const movie: MoviesModel = MoviesModel.fromObject(req.body);

        MoviesController.db.addRecord(MoviesController.moviesTable, movie.toObject())
            .then((result: boolean) => res.send({ fn: 'addMovie', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    //updateMovie
    //updates the movie in the database with id :id
    updateMovie(req: express.Request, res: express.Response) {
        const id = Database.stringToId(req.params.id);
        const data = req.body;
        delete data.authUser;
        MoviesController.db.updateRecord(MoviesController.moviesTable, { _id: id }, { $set: req.body })
            .then((results) => results ? (res.send({ fn: 'updateMovie', status: 'success' })) : (res.send({ fn: 'updateMovie', status: 'failure', data: 'Not found' })).end())
            .catch(err => res.send({ fn: 'updateMovie', status: 'failure', data: err }).end());

    }
    //deleteMovie
    //deletes the movie in the database with id :id
    deleteMovie(req: express.Request, res: express.Response) {
        const id = Database.stringToId(req.params.id);
        MoviesController.db.deleteRecord(MoviesController.moviesTable, { _id: id })
            .then((results) => results ? (res.send({ fn: 'deleteMovie', status: 'success' })) : (res.send({ fn: 'deleteMovie', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
	}
	
    //getIDs
    //returns all valid unique IDs in the database
    getID(req: express.Request, res: express.Response) {
        MoviesController.db.getRecords(MoviesController.moviesTable)
            .then(results => {
                //extracts just the semester
                let id = results.map((x: any) => x.id);
                //removes duplciates
                id = id.filter((value: string, index: number, array: any[]) =>
                    !array.filter((v, i) => value === v && i < index).length);
                res.send({ fn: 'deleteMovie', status: 'success', data: { id: id } })
            })
            .catch((reason) => res.status(500).send(reason).end());
    }
    // //getProjectNumbers
    // //returns all valid unique projectNumbers for a given semesters in the database
    // get(req: express.Request, res: express.Response) {
    //     const semester = req.params.semester;
    //     MoviesController.db.getRecords(MoviesController.moviesTable,{semester:semester})
    //         .then(results => {
    //             //extracts just the projectNumber
    //             let projects = results.map((x: any) => x.projectNumber);
    //             //removes duplciates
    //             projects = projects.filter((value: number, index: number, array: any[]) =>
    //                 !array.filter((v, i) => value === v && i < index).length);
    //             res.send({ fn: 'deleteProject', status: 'success', data: { projectNumbers:projects.sort()} });
    //         })
    //         .catch((reason) => res.status(500).send(reason).end());
    // }

}