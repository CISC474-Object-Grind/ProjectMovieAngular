import express from 'express';
import request from 'request';

export class ProxyController {
    getFromOtherApi(req: express.Request, res: express.Response){
            const options={
                method: 'GET',
                url: 'http://www.omdbapi.com/?i=tt3896198&apikey=ae98a62e'+req.params.searchString,
                headers: {
				  'x-rapidapi-host': 'http://www.omdbapi.com/?i=tt3896198&',
                  'x-rapidapi-key': 'e97e484626msh64f79feff193ffap1dedc5jsn1974786af2c2' //change to your key
                }   
            };
            request(options,function(error,response,result){
                if (error) return res.status(500).send(error);
                return res.send(result);
            });
    }
}