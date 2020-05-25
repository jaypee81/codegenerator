import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(public httpClient : HttpClient) { }
  
  readTable(data)
  {
    console.log(data);
    return(this.httpClient.post("http://localhost:8080/codegenerator/readtable",data,this.httpOptions));
  }
}
