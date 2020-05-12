import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	moviesToGet = ["avengers endgame", "parasite", "moana", "frozen 2", "aquaman", "wonder woman",
		"to all the boys I've loved before", "zombieland"]
	homeMovies = [];
	
	mobile: boolean;

	constructor(private OmdbService: OmdbServiceService, private AutocompleteTitleService: AutocompleteTitleService) { 
		// var j = -1;
		// for (var i = 0; i < this.moviesToGet.length; i++) {
		// 	if (i % 3 == 0) {
		// 		j++;
		// 		this.homeMovies[j] = [];
		// 		this.homeMovies[j].push(this.moviesToGet[i]);
		// 	}
		// 	else {
		// 		this.homeMovies[j].push(this.moviesToGet[i]);
		// 	}
		// }
	}

	ngOnInit(): void {
		if (window.screen.width === 360) { // 768px portrait
			this.mobile = true;
		}

		this.moviesToGet.forEach(movie => {
			this.OmdbService.getMovie(movie).subscribe(res => this.homeMovies.push(res.titles[0]));
			// this.OmdbService.getMovie(movie).subscribe(data => console.log(data)
			// )
		});
		// console.log(this.homeMovies)

	}
}
