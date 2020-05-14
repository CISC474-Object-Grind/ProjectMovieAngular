import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service'

class MoviePage{
	items: any[]=[];
}

class ShowPage{
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
	recommendedShows: ShowPage[] = [new ShowPage()];
	
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

	addShow(show:any){
		const size = this.recommendedShows.length;
		if(this.recommendedShows[size-1].items.length > 1){
			const sp=new ShowPage();
			sp.items.push(show);
			this.recommendedShows.push(sp);
		} else {
			this.recommendedShows[size-1].items.push(show);
		}
	}

	showsToGet = ["the office", "outer banks","upload","rick and morty", 
	"grey's anatomy","legacies", "new girl", "west world","gossip girl","lucifer"]
	
	mobile: boolean;

	constructor(private OmdbService: OmdbServiceService, private AutocompleteTitleService: AutocompleteTitleService) { 
	
	}

	ngOnInit(): void {
		if (window.screen.width === 360) { // 768px portrait
			this.mobile = true;
		}

		this.moviesToGet.forEach(movie => {
			this.OmdbService.getMovie(movie).subscribe(res => {
				// console.log(res);
				this.addMovie(res.titles[0])});
		});

		this.showsToGet.forEach(show => {
			// this.AutocompleteTitleService.getShow(show).subscribe(data =>
			// 	console.log(data.d[0]));
			this.AutocompleteTitleService.getShow(show).subscribe(data => {
				console.log(data);
				this.addShow(data.d[0])});
			// this.AutocompleteTitleService.getShow(show).subscribe(data =>
			// 	this.shows.push(data.d[0]));
		});
		console.log(this.recommendedShows)
	}
}
