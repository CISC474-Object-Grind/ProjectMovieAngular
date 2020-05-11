import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../services/omdbService.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  constructor(private OmdbService:OmdbServiceService) {
   }

  ngOnInit(): void {
	
  }

  
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  

}
