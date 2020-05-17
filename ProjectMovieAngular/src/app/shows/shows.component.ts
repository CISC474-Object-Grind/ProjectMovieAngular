import { Component, OnInit } from '@angular/core';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service';
import { OmdbServiceService } from '../services/omdbService.service';
class ShowPage{
	items: any[]=[];
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
	
	genres = ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy',
	 'Historical', 'Horror', 'Mystery', 'Romance', 'Science Fiction', 'Thriller'];

	addShow(show:any){
		const size = this.showsTopShows.length;
		if(this.showsTopShows[size-1].items.length > 3){
			const mp=new ShowPage();
			mp.items.push(show);
			this.showsTopShows.push(mp);
		} else {
			this.showsTopShows[size-1].items.push(show);
		}
	}
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
				this.addShow(res.titles[0])});
		});
	}

}