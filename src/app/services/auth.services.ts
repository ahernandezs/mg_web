import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/login-request'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	constructor(private http: Http) {}

	login(user, password, csrf): Observable<any> {

		user = "b830bcla";
		password = "12345678";
		let url = "http://ci.anzen.io/mg/login";

		let headers = new Headers({'X-CLIENT-TYPE': 'WEB', 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'});
		headers.append("Authorization", "Basic " + btoa(user + ":" + password));
		headers.append('Access-Control-Allow-Headers', "Authorization");

        let options = new RequestOptions({ headers: headers });
        let loginRequest = new LoginRequest(user,password,csrf);

		return this.http.get(url, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response){
		let body = res.json();
		return body || { };
	}

	private handleError(error: Response | any){
        console.error(error);
		return Promise.reject(error);
	}

}
