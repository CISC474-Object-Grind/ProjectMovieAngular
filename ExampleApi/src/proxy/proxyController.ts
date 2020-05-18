import express from 'express';
import request from 'request';

export class ProxyController {
    getFromOtherApi(req: express.Request, res: express.Response){
            const options={
                method: 'GET',
                url: 'http://www.omdbapi.com/?i=tt3896198&apikey=ae98a62e'+req.params.searchString,
                headers: {
				  'x-rapidapi-host': 'http://www.omdbapi.com/?i=tt3896198&',
                  'x-rapidapi-key': '3e0f061d8dmshd3a0baf222a5525p17a137jsn2e043a90b36b' //change to your key
                }   
            };
            request(options,function(error,response,result){
                if (error) return res.status(500).send(error);
                return res.send(result);
            });
    }
}