import { Component, OnInit } from '@angular/core';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service';
import { OmdbServiceService } from '../services/omdbService.service';

class ShowPage {
	items: any[] = [];
}

class ShowGenre {
	items: any[] = [];
}

@Component({
	selector: 'app-shows',
	templateUrl: './shows.component.html',
	styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
	showsToGet = ["Breaking Bad", "Game Of Thrones", "Westworld", "Ozark", "The Office",
		"Better Call Saul", "The Walking Dead", "Homeland", "The Wire", "Prison Break",
		"The Witcher", "Shameless"];

	showsTopShows: ShowPage[] = [new ShowPage()];
	actionGenre: ShowGenre[] = [new ShowGenre()];
	adventureGenre: ShowGenre[] = [new ShowGenre()];
	fantasyGenre: ShowGenre[] = [new ShowGenre];
	scifiGenre: ShowGenre[] = [new ShowGenre];
	dramaGenre: ShowGenre[] = [new ShowGenre];

	addShow(show: any) {
		const size = this.showsTopShows.length;
		if (this.showsTopShows[size - 1].items.length > 3) {
			const mp = new ShowPage();
			mp.items.push(show);
			this.showsTopShows.push(mp);
		} else {
			this.showsTopShows[size - 1].items.push(show);
		}
	}
	addAction(show: any) {
		const size = this.actionGenre.length;
		if (this.actionGenre[size - 1].items.length > 3) {
			const sp = new ShowGenre();
			sp.items.push(show);
			this.actionGenre.push(sp);
		} else {
			this.actionGenre[size - 1].items.push(show);
		}
	}
	addAdventure(show: any) {
		const size = this.adventureGenre.length;
		if (this.adventureGenre[size - 1].items.length > 3) {
			const sp = new ShowGenre();
			sp.items.push(show);
			this.adventureGenre.push(sp);
		} else {
			this.adventureGenre[size - 1].items.push(show);
		}
	}
	addFantasy(show: any) {
		const size = this.fantasyGenre.length;
		if (this.fantasyGenre[size - 1].items.length > 3) {
			const sp = new ShowGenre();
			sp.items.push(show);
			this.fantasyGenre.push(sp);
		} else {
			this.fantasyGenre[size - 1].items.push(show);
		}
	}
	addscifi(show: any) {
		const size = this.scifiGenre.length;
		if (this.scifiGenre[size - 1].items.length > 3) {
			const sp = new ShowGenre();
			sp.items.push(show);
			this.scifiGenre.push(sp);
		} else {
			this.scifiGenre[size - 1].items.push(show);
		}
	}
	adddrama(show: any) {
		const size = this.dramaGenre.length;
		if (this.dramaGenre[size - 1].items.length > 3) {
			const sp = new ShowGenre();
			sp.items.push(show);
			this.dramaGenre.push(sp);
		} else {
			this.dramaGenre[size - 1].items.push(show);
		}
	}
	actionShowsToGet = ["grimm", "breaking bad", "arrow"]
	adventureShowsToGet = ["vikings", "the mandalorian", "the witcher"]
	fantasyShowsToGet = ["game of thrones", "supernatural", "stranger things"]
	scifiShowsToGet = ["westworld", "dark", "black mirror"]
	dramaShowsToGet = ["peaky blinders", "doctor who", "ozark"]
	mobile: boolean;
	constructor(private OmdbService: OmdbServiceService, private AutocompleteTitleService: AutocompleteTitleService) {

	}

	ngOnInit(): void {
		if (window.screen.width === 360) { // 768px portrait
			this.mobile = true;
		}
		this.showsToGet.forEach(shows => {
			this.OmdbService.getShow(shows).subscribe(res => {
				// console.log(res);
				this.addShow(res.titles[0])
			});
		});

		this.actionShowsToGet.forEach(show => {
			this.AutocompleteTitleService.getShow(show).subscribe(data => {
				console.log(data);
				this.addAction(data.d[0])
			});
		});
		this.adventureShowsToGet.forEach(show => {
			this.AutocompleteTitleService.getShow(show).subscribe(data => {
				console.log(data);
				this.addAdventure(data.d[0])
			});
		});
		this.fantasyShowsToGet.forEach(show => {
			this.AutocompleteTitleService.getShow(show).subscribe(data => {
				console.log(data);
				this.addFantasy(data.d[0])
			});
		});
		this.scifiShowsToGet.forEach(show => {
			this.AutocompleteTitleService.getShow(show).subscribe(data => {
				console.log(data);
				this.addscifi(data.d[0])
			});
		});
		this.dramaShowsToGet.forEach(show => {
			this.AutocompleteTitleService.getShow(show).subscribe(data => {
				console.log(data);
				this.adddrama(data.d[0])
			});
		});
	}
}
