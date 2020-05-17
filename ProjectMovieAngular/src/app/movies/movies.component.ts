import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';

class MoviePage{
  items: any[]=[];
  letter: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesToGet = ["A Bug's Life", "Back to the Future", "Cabin in the Woods", "Daddy Day Care", "Evan Almighty", "Frozen"]
  
    movies: MoviePage[] = [new MoviePage()];


    addMovie(movie:any){
      const size = this.movies.length;
      if(this.movies[size-1].items.length > 1){
      // if(this.moviesToGet.includes(alphabet))
        const mp=new MoviePage();
        mp.items.push(movie);
        this.movies.push(mp);
      } else {
        this.movies[size-1].items.push(movie);
      }
    }
  
  constructor(private OmdbService:OmdbServiceService) { }

  // your OMDB service is linked to the OMDB proxy server and router
  // your autocomplete is linked to the IMDB8 which is in the homerouter and homecontroller in the example API

  ngOnInit(): void {

    this.moviesToGet.forEach(movie => {
			this.OmdbService.getMovie(movie).subscribe(res => {console.log(res);this.addMovie(res.titles[0])});
		});
	// this.moviesToGet.forEach(movie => {
	// 	this.OmdbService.getMovie(movie).subscribe(data => console.log(data)
	// 	)
	// });
	
	// this.OmdbService.getMovie('inception').subscribe(data => console.log(data))
  }
  
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  

}
