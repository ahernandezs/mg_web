import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor() { }
 
    canActivate() {
        return localStorage.getItem('X-AUTH-USER-MG') ? true : false; 
    }

}