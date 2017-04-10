import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	constructor(private http: Http) {}

	login(user, password): Observable<any> {
		let headers = new Headers({'X-CLIENT-TYPE': 'WEB', 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'});
		headers.append('Authorization', 'Basic ' + btoa(user + ":" + password));
		headers.append('Access-Control-Allow-Headers', 'Authorization');
        let options = new RequestOptions({ headers: headers });

		return this.http.get(environment.baseURL+'login', options)
			.map((res: Response) => {
				console.log(res.headers);
				return res.json();
			})
			.catch(this.handleError);
	}

	private handleError(error: Response ){
		if(error.status === 401){
			console.log("Error 401");
			return Promise.reject(error);;
		}
		return Promise.reject(error);
	}

}
