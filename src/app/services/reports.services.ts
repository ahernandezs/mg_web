import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';

import { CompleteResponse } from '../models/complete-response';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

	constructor(private http: Http) {}

	complete (): Observable<CompleteResponse[]> {

		let headers = new Headers({'X-CLIENT-TYPE': 'WEB', 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

		return this.http.get(environment.baseURL + 'app/mocks/complete.json', options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response){
		let body = res.json();
		return body.data || { };
	}

	private handleError(error: Response | any){
		let errMsg: String;
		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = "${error.status} - ${error.statusText || ''} ${err}"
		}else{
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Promise.reject(errMsg);
	}

}
