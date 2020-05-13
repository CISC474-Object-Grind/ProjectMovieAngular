import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AutocompleteTitleService {
	private path = "http://localhost:3000/api/imdb/"

	constructor(private http: HttpClient) { }

	getMovie(partialTitle: string): Observable<any> {
		return this.http.get(this.path + partialTitle);
	}

	getShow(partialTitle: string): Observable<any> {
		return this.http.get(this.path + partialTitle);
	}
}
