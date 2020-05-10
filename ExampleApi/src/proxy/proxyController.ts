import express from 'express';
import request from 'request';

export class ProxyController {
    getFromOtherApi(req: express.Request, res: express.Response){
            const options={
                method: 'GET',
                url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/'+req.params.searchString,
                headers: {
				  'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                  'x-rapidapi-key': '4cb150e960msh1c6a8e1cccf054ap137887jsn3cbf9acb58bf' //change to your key
                }   
            };
            request(options,function(error,response,result){
                if (error) return res.status(500).send(error);
                return res.send(result);
            });
    }
}