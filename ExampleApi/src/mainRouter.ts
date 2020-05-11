
import express from 'express'
import { AppRouter } from './common/AppRouter';
import { SecurityRouter } from './security/securityrouter';
import { ProjectsRouter } from './projects/projectsRouter';
import { MoviesRouter } from './movies/moviesRouter';
import { ShowsRouter } from './shows/showsRouter';
import { ProxyRouter } from './proxy/proxyrouter';

//root router for the API

export class MainRouter extends AppRouter{
    constructor(){super();}

    //adds the child routers to various paths to form the overall API. 
    setupRoutes(): void {
        this.addRouter('/security',new SecurityRouter());        
		this.addRouter('/projects',new ProjectsRouter());
		this.addRouter('/movies', new MoviesRouter());
		this.addRouter('/shows', new ShowsRouter());
		this.addRouter('/imdb', new ProxyRouter());
    }
}