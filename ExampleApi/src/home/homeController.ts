import express from 'express';
import request from 'request';

// this controller pulls from the api that will let you autocomplete titles and has more endpoints
export class HomeController {
	getFromOtherApi(req: express.Request, res: express.Response) {
		const options = {
			method: 'GET',
			url:'https://imdb8.p.rapidapi.com/title/auto-complete',
			qs: { q: req.params.searchString },
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				// 'x-rapidapi-key': 'd44c42e1c5msh2c86d382d3ce66fp175fbdjsn1c6180163297',
				'x-rapidapi-key': '9aab60c8eemshfa9dd7986704514p12a5f2jsn1e039852edcd',
				useQueryString: true
			}
		};
		request(options, function (error, response, result) {
			if (error) return res.status(500).send(error);
			return res.send(result);
		});
	}

	findShow(req: express.Request, res: express.Response) {
		const options = {
			method: 'GET',
			url:'https://imdb8.p.rapidapi.com/title/find',
			qs: { q: req.params.searchString },
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				// 'x-rapidapi-key': 'd44c42e1c5msh2c86d382d3ce66fp175fbdjsn1c6180163297',
				'x-rapidapi-key': '9aab60c8eemshfa9dd7986704514p12a5f2jsn1e039852edcd',
				// 'x-rapidapi-key': '4cb150e960msh1c6a8e1cccf054ap137887jsn3cbf9acb58bf',
				useQueryString: true
			}
		};
		request(options, function (error, response, result) {
			if (error) return res.status(500).send(error);
			return res.send(result);
		});
	}
}