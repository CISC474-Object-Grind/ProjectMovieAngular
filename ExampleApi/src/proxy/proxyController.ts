import express from 'express';
import request from 'request';

export class ProxyController {
    getFromOtherApi(req: express.Request, res: express.Response){
            const options={
                method: 'GET',
                url: 'http://www.omdbapi.com/?i=tt3896198&apikey=ae98a62e'+req.params.searchString,
                headers: {
				  'x-rapidapi-host': 'http://www.omdbapi.com/?i=tt3896198&',
                  'x-rapidapi-key': '9aab60c8eemshfa9dd7986704514p12a5f2jsn1e039852edcd' //change to your key
                }   
            };
            request(options,function(error,response,result){
                if (error) return res.status(500).send(error);
                return res.send(result);
            });
    }
}