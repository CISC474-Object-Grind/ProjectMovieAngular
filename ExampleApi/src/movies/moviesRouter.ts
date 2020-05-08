import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { MoviesController } from "./moviesController";

//This is just an example second router to show how additional routers can be added
export class MoviesRouter extends AppRouter{
    static movieController: MoviesController=new MoviesController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.expressRouter.get('/IDs',MoviesRouter.movieController.getID);
        // this.expressRouter.get('/projectNumbers/:semester',MoviesRouter.movieController.getProjectNumbers);
        this.expressRouter.get('/:movies',MoviesRouter.movieController.getMovies);
        this.expressRouter.get('/:name/:id',MoviesRouter.movieController.getMovie);
        this.expressRouter.post('/',[SecurityMiddleware.RequireAuth],MoviesRouter.movieController.addMovie);
        this.expressRouter.put('/:id',[SecurityMiddleware.RequireAuth],MoviesRouter.movieController.updateMovie);
        this.expressRouter.delete('/:id',[SecurityMiddleware.RequireAuth],MoviesRouter.movieController.deleteMovie);
    }    
}