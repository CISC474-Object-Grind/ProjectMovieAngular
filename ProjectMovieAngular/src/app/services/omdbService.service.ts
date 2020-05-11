import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OmdbServiceService {
	private path = "http://localhost:3000/api/proxy/"
	constructor(private http: HttpClient) { }
	
	getMovie(title: string): Observable<any> {
		return this.http.get(this.path+title);
	}

	getShow(title: string): Observable<any>{
		return this.http.get(this.path+title);
	}

}
