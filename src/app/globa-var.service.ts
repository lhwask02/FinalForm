import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobaVarService {

  table:string[]=["1","2","3"];
  constructor(private http:HttpClient) { }
  getEnsignants()
  {
    return this.http.get( ' ');
  }
  getGroupes()
  {
    return this.http.get( ' ');
  }
  getSalles()
  {
    return this.http.get( ' ');
  }
  getStudents()
  {
    return this.http.get( ' ');
  }
  getProgrammes()
  {
    return this.http.get( ' ');
  }
  getNodules()
  {
    return this.http.get( ' ');
  }
  getHistoriqus()
  {
    return this.http.get( ' ');
  }
  getEmplois()
  {
    return this.http.get( ' ');
  }
  getMainData()
  {
    return this.http.get( ' ');
  }
    postEnsignants()
    {
      return this.http.post( ' ','');
    }
    postGroupes()
    {
      return this.http.post( ' ','');
    }
    postSalles()
    {
      return this.http.post( ' ','');
    }
    postStudents()
    {
      return this.http.post( ' ','');
    }
    postProgrammes()
    {
      return this.http.post( ' ','');
    }
    postNodules()
    {
      return this.http.post( ' ','');
    }
    postHistoriqus()
    {
      return this.http.post( ' ','');
    }
    postEmplois()
    {
      return this.http.post( ' ','');
    }

    Global()
    {
      return this.table;
    }


}
