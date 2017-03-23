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

	complete (): Observable<CompleteResponse[]> {

		let headers = new Headers({'X-CLIENT-TYPE': 'WEB', 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

		return this.http.get(environment.baseURL + 'complete.json', options)
			.map(res => res.json())
			.catch(err => Promise.reject("Error: "+err));
	}

}
