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

		let headers = new Headers({'X-CLIENT-TYPE': 'WEB', 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        console.log("antes de mandar el post: "+user+password+csrf);
        let loginRequest = new LoginRequest(user,password,csrf);
		return this.http.post("http://localhost:8090/MG-Core/reports/getLog", loginRequest, options)
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
