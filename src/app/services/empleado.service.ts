import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private URL = 'https://tallerjdpautos.herokuapp.com'; // donde esta el back
  constructor(private http: HttpClient,
              private router:Router) { }

  getEmpleado(userId){
    return this.http.get<any>(this.URL + '/user/id_user/'+userId); // devuelve un observable
  }
  

  update(user, userID){
    return this.http.put<any>(this.URL + '/user/id_user/'+ userID, user);
  }
  
}
