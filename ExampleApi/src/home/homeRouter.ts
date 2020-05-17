import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { HomeController } from "./homeController";

//This is just an example second router to show how additional routers can be added
export class HomeRouter extends AppRouter {
	static homeController: HomeController = new HomeController();
	constructor() { super(); }

	//sets up the routes within this module shows an example of a route that requires authorization, and one that does not
	setupRoutes(): void {
		this.expressRouter.get('/:searchString', HomeRouter.homeController.getFromOtherApi);
		this.expressRouter.get('/:find', HomeRouter.homeController.findShow);
	}
}