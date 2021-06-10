import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {AboutComponent} from "./about.component";
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private httpClient: any;
  getImage(imageUrl: string):Observable<Blob>{
    return this.httpClient.get(imageUrl,{responseType:'blob'})
  }
  constructor() { }
}
