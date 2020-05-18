import express from 'express';
import request from 'request';

export class ProxyController {
    getFromOtherApi(req: express.Request, res: express.Response){
            const options={
                method: 'GET',
                url: 'http://www.omdbapi.com/?i=tt3896198&apikey=ae98a62e'+req.params.searchString,
                headers: {
				  'x-rapidapi-host': 'http://www.omdbapi.com/?i=tt3896198&',
                  'x-rapidapi-key': '6e2b71cca6msh8ed431b60a3455ep19fa49jsn3c1f6960664d' //change to your key
                }   
            };
            request(options,function(error,response,result){
                if (error) return res.status(500).send(error);
                return res.send(result);
            });
    }
}