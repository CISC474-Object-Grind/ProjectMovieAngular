import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { MoviesController } from "./moviesController";

//This is just an example second router to show how additional routers can be added
export class MoviesRouter extends AppRouter{
    static movieController: MoviesController=new MoviesController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.expressRouter.get('/semesters',MoviesRouter.movieController.getSemesters);
        this.expressRouter.get('/projectNumbers/:semester',MoviesRouter.movieController.getProjectNumbers);
        this.expressRouter.get('/:semester',MoviesRouter.movieController.getProjects);
        this.expressRouter.get('/:semester/:id',MoviesRouter.movieController.getProject);
        this.expressRouter.post('/',[SecurityMiddleware.RequireAuth],MoviesRouter.movieController.addProject);
        this.expressRouter.put('/:id',[SecurityMiddleware.RequireAuth],MoviesRouter.movieController.updateProject);
        this.expressRouter.delete('/:id',[SecurityMiddleware.RequireAuth],MoviesRouter.movieController.deleteProject);
    }    
}