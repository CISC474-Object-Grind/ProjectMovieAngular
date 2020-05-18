import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service'

class MoviePage {
	items: any[] = [];
}

class MovieGenre {
	items: any[] = [];
}

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	moviesToGet = ["bloodshot", "the avengers", "inception", "twilight", "boyhood",
		"the social network", "jaws", "the goonies", "back to the future", "the wizard of oz",
		"the princess bride", "the dark crystal", "the martian", "arrival"];

	moviesTopMovies: MoviePage[] = [new MoviePage()];
	actionGenre: MoviePage[] = [new MoviePage()];
	adventureGenre: MoviePage[] = [new MoviePage()];
	fantasyGenre: MoviePage[] = [new MoviePage()];
	scifiGenre: MoviePage[] = [new MoviePage()];
	dramaGenre: MoviePage[] = [new MoviePage()];

	addMovie(movies: any) {
		const size = this.moviesTopMovies.length;
		if (this.moviesTopMovies[size - 1].items.length > 3) {
			const mp = new MoviePage();
			mp.items.push(movies);
			this.moviesTopMovies.push(mp);
		} else {
			this.moviesTopMovies[size - 1].items.push(movies);
		}
	}
	addAction(movies: any) {
		const size = this.actionGenre.length;
		if (this.actionGenre[size - 1].items.length > 3) {
			const mp = new MoviePage();
			mp.items.push(movies);
			this.actionGenre.push(mp);
		} else {
			this.actionGenre[size - 1].items.push(movies);
		}
	}
	addAdventure(movies: any) {
		const size = this.adventureGenre.length;
		if (this.adventureGenre[size - 1].items.length > 3) {
			const mp = new MoviePage();
			mp.items.push(movies);
			this.adventureGenre.push(mp);
		} else {
			this.adventureGenre[size - 1].items.push(movies);
		}
	}
	addFantasy(movies: any) {
		const size = this.fantasyGenre.length;
		if (this.fantasyGenre[size - 1].items.length > 3) {
			const mp = new MoviePage();
			mp.items.push(movies);
			this.fantasyGenre.push(mp);
		} else {
			this.fantasyGenre[size - 1].items.push(movies);
		}
	}
	addscifi(movies: any) {
		const size = this.scifiGenre.length;
		if (this.scifiGenre[size - 1].items.length > 3) {
			const mp = new MoviePage();
			mp.items.push(movies);
			this.scifiGenre.push(mp);
		} else {
			this.scifiGenre[size - 1].items.push(movies);
		}
	}
	adddrama(movies: any) {
		const size = this.dramaGenre.length;
		if (this.dramaGenre[size - 1].items.length > 3) {
			const mp = new MoviePage();
			mp.items.push(movies);
			this.dramaGenre.push(mp);
		} else {
			this.dramaGenre[size - 1].items.push(movies);
		}
	}
	actionMoviesToGet = ["birds of rey: and the fantabulous emancipation of one harley quinn", "inception"]
	adventureMoviesToGet = ["the goonies", "back to the future"]
	fantasyMoviesToGet = ["the princess bride", "the dark crystal"]
	scifiMoviesToGet = ["arrival", "the martian"]
	dramaMoviesToGet = ["boyhood", "the social network"]
	mobile: boolean;
	constructor(private OmdbService: OmdbServiceService, private AutocompleteTitleService: AutocompleteTitleService) {

	}

	ngOnInit(): void {
		if (window.screen.width === 360) { // 768px portrait
			this.mobile = true;
		}
		this.moviesToGet.forEach(movies => {
			this.OmdbService.getMovie(movies).subscribe(res => {
				// console.log(res);
				this.addMovie(res.titles[0])
			});
		});

		this.actionMoviesToGet.forEach(movies => {
			this.AutocompleteTitleService.getMovie(movies).subscribe(data => {
				console.log(data);
				this.addAction(data.d[0])
			});
		});
		this.adventureMoviesToGet.forEach(movies => {
			this.AutocompleteTitleService.getMovie(movies).subscribe(data => {
				console.log(data);
				this.addAdventure(data.d[0])
			});
		});
		this.fantasyMoviesToGet.forEach(movies => {
			this.AutocompleteTitleService.getMovie(movies).subscribe(data => {
				console.log(data);
				this.addFantasy(data.d[0])
			});
		});
		this.scifiMoviesToGet.forEach(movies => {
			this.AutocompleteTitleService.getMovie(movies).subscribe(data => {
				console.log(data);
				this.addscifi(data.d[0])
			});
		});
		this.dramaMoviesToGet.forEach(movies => {
			this.AutocompleteTitleService.getMovie(movies).subscribe(data => {
				console.log(data);
				this.adddrama(data.d[0])
			});
		});
	}
}