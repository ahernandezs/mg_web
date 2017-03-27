import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpClient } from './http.service';

import { Observable } from 'rxjs/Observable';

import { CompleteResponse } from '../models/complete-response';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

	constructor(private http: HttpClient) {}

	complete (desde, hasta, bank): Observable<CompleteResponse[]> {

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'});
		headers.append("Authorization", "Basic " + btoa(localStorage.getItem('X-AUTH-USER-MG') + ":" + localStorage.getItem('X-AUTH-PASS-MG')));
		headers.append('X-AUTH-TOKEN', localStorage.getItem('X-AUTH-TOKEN-MG'));
		headers.append('Access-Control-Allow-Headers', "Authorization");
        let options = new RequestOptions({ headers: headers });

		return this.http.get(environment.baseURL + 'getLog?dateSince='+desde+'&dateUntil='+hasta+'&client='+bank, options)
			.map(res => res.json())
			.catch(err => Promise.reject("Error: "+err));
	}

}
