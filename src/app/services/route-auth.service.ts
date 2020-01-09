import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class RouteAuthService implements CanActivate {
    constructor() {}

canActivate(route: ActivatedRouteSnapshot, state: any) {
return true;
}
}