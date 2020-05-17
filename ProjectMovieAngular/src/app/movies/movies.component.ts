import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service'

class MoviePreview{
	items: any[]=[];
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  topMovies: MoviePreview[] = [new MoviePreview()];
  topPicks = ["avengers endgame", "parasite", "moana", "frozen 2"]

  addTop(movie:any){
		const size = this.topMovies.length;
		if(this.topMovies[size-1].items.length > 3){
			const mp=new MoviePreview();
			mp.items.push(movie);
			this.topMovies.push(mp);
		} else {
			this.topMovies[size-1].items.push(movie);
		}
	}
  mobile: boolean;
	constructor(private OmdbService: OmdbServiceService, private AutocompleteTitleService: AutocompleteTitleService) {

   }

  ngOnInit(): void {
		if (window.screen.width === 360) { // 768px portrait
			this.mobile = true;
		}

		this.topPicks.forEach(movie => {
			this.OmdbService.getMovie(movie).subscribe(res => {
				// console.log(res);
				this.addTop(res.titles[0])});
		});
  }
  
  

  

}
