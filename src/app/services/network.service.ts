import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NetworkService {
    baseUrl: string;
constructor(private httpClient: HttpClient) {
this.baseUrl = BaseUrl;
}

getData(endPoint: string) {
 return this.httpClient.get(`${this.baseUrl}\${endPoint}`);
}


postData(endPoint: string, data: any) {
    return this.httpClient.post(`${this.baseUrl}/${endPoint}`, data);
   }
   

}