//6
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  scraperApi: string = 'http://localhost:9090/scrape';
  constructor(private httpClient: HttpClient) {
  }
  scrape(data: any) {
    return this.httpClient.post<any>(this.scraperApi, data);
  }
  
}
