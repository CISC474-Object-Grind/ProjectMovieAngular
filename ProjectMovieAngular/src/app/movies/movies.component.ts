import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  moviesToGet = ['avengers','parasite','moana','frozen 2','aquaman','wonder woman']
  constructor(private OmdbService:OmdbServiceService) { }

  ngOnInit(): void {
	// this.moviesToGet.forEach(movie => {
	// 	this.OmdbService.getMovie(movie).subscribe(data => console.log(data)
	// 	)
	// });
	
	// this.OmdbService.getMovie('inception').subscribe(data => console.log(data))
  }
  
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  

}
