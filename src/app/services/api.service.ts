import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client:HttpClient) { }

  //Get all tickets
  GetAllTicketsOderedById() : Observable<Ticket[]>{
    let ticket = this.client.get<Ticket[]>(environment.apiUrl + "Ticket/GetAllTicketsOderedById");

    return ticket;
  }

  //Create ticket

  //Resolve and close ticket

  //Bookmark ticket
}
