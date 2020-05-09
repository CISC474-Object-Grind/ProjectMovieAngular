import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OmdbServiceService {
	private path = "http://localhost:3000/api/proxy/"
	constructor(private http: HttpClient) { }

}
