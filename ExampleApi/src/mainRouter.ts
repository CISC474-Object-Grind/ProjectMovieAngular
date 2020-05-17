
import express from 'express'
import { AppRouter } from './common/AppRouter';
import { SecurityRouter } from './security/securityrouter';
import { ProxyRouter } from './proxy/proxyrouter';
import { HomeRouter } from './home/homeRouter';

//root router for the API

export class MainRouter extends AppRouter{
    constructor(){super();}

    //adds the child routers to various paths to form the overall API. 
    setupRoutes(): void {
        this.addRouter('/security',new SecurityRouter());
		this.addRouter('/proxy', new ProxyRouter()); //the original API route he gave us
		this.addRouter('/imdb', new HomeRouter());   //the newer API he provided us
    }
}