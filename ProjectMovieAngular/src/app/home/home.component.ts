import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service'

class MoviePage{
	items: any[]=[];
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	moviesToGet = ["avengers endgame", "parasite", "moana", "frozen 2", "aquaman", "wonder woman",
		"to all the boys I've loved before", "zombieland"]
	homeMovies: MoviePage[] = [new MoviePage()];
	
	addMovie(movie:any){
		const size = this.homeMovies.length;
		if(this.homeMovies[size-1].items.length > 3){
			const mp=new MoviePage();
			mp.items.push(movie);
			this.homeMovies.push(mp);
		} else {
			this.homeMovies[size-1].items.push(movie);
		}
	}

	recommendedShows = ["the office", "outer banks","upload","rick and morty"]
	shows = [];

	mobile: boolean;

	constructor(private OmdbService: OmdbServiceService, private AutocompleteTitleService: AutocompleteTitleService) { 
	
	}

	ngOnInit(): void {
		if (window.screen.width === 360) { // 768px portrait
			this.mobile = true;
		}

		this.moviesToGet.forEach(movie => {
			this.OmdbService.getMovie(movie).subscribe(res => {console.log(res);this.addMovie(res.titles[0])});
		});

		this.recommendedShows.forEach(show => {
			// this.AutocompleteTitleService.getShow(show).subscribe(data =>
			// 	console.log(data.d[0]));
			this.AutocompleteTitleService.getShow(show).subscribe(data =>
				this.shows.push(data.d[0]));
		});
		console.log(this.shows);

		// var j = -1;
		// for (var i = 0; i < this.moviesToGet.length; i++) {
		// 	if (i % 3 == 0) {
		// 		j++;
		// 		this.homeMovies[j]=new MoviePage();
		// 		this.homeMovies[j].items.push(this.moviesToGet[i]);
		// 	}
		// 	else {
		// 		this.homeMovies[j].items.push(this.moviesToGet[i]);
		// 	}
		// }
		// console.log(this.homeMovies)
	}
}
