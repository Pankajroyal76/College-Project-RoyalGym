import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class EveryoneService {
  private _membersUrl ="http://localhost:3000/api/members";
  private _trainnerUrl ="http://localhost:3000/api/trainner";
  constructor(private http:HttpClient) { }

  getMembers(){
    return this.http.get<any>(this._membersUrl)
  }
   getTrainners(){
     return this.http.get<any>(this._trainnerUrl)
   }
}
