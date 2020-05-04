import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { ShowsController } from "./showsController";

//This is just an example second router to show how additional routers can be added
export class ShowsRouter extends AppRouter{
    static sController: ShowsController=new ShowsController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.expressRouter.get('/semesters',ShowsRouter.sController.getSemesters);
        this.expressRouter.get('/projectNumbers/:semester',ShowsRouter.sController.getProjectNumbers);
        this.expressRouter.get('/:semester',ShowsRouter.sController.getProjects);
        this.expressRouter.get('/:semester/:id',ShowsRouter.sController.getProject);
        this.expressRouter.post('/',[SecurityMiddleware.RequireAuth],ShowsRouter.sController.addProject);
        this.expressRouter.put('/:id',[SecurityMiddleware.RequireAuth],ShowsRouter.sController.updateProject);
        this.expressRouter.delete('/:id',[SecurityMiddleware.RequireAuth],ShowsRouter.sController.deleteProject);
    }    
}