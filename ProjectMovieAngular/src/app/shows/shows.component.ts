import { Component, OnInit } from '@angular/core';
import { AutocompleteTitleService } from '../services/autocompleteTitle.service';

@Component({
	selector: 'app-shows',
	templateUrl: './shows.component.html',
	styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
	alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
		'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	shows = [];

	constructor(private AutocompleteService: AutocompleteTitleService) { }

	ngOnInit(): void {
		// this.alphabet.forEach(letter => {
		// 	this.AutocompleteService.getShow(letter).subscribe(data => console.log(data));
		// 	this.AutocompleteService.getShow(letter).subscribe(data => this.shows.push(data)
		// 	)
		// });
		// console.log(this.shows)
	}

}