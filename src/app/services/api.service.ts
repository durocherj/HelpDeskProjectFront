import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TicketDetailsComponent } from '../components/ticket-details/ticket-details.component';
import { BookMark } from '../interfaces/bookmark';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client:HttpClient) { }

  //Get all tickets
  GetAllTicketsOrderedById() : Observable<Ticket[]>{
    let ticket = this.client.get<Ticket[]>(environment.apiUrl + "Ticket/GetAllTicketsOrderedById");

    return ticket;
  }

  //Get ticket by ID

  GetTicketById(id:number) : Observable<Ticket>{
    let ticket = this.client.get<Ticket>(environment.apiUrl + "Ticket/GetTicketById?id=" + id);

    return ticket;
  }

  //Create ticket
  CreateTicket(ticket:Ticket) : Observable<Ticket>{
    return this.client.post<Ticket>(environment.apiUrl + "Ticket/CreateTicket", ticket);
  }

  //Resolve and close ticket

  //Bookmark ticket
  BookMarkTicket(bookmark:BookMark) : Observable<BookMark>{
      return this.client.post<BookMark>(environment.apiUrl + "Ticket/BookMarkTicket", bookmark);
    }
}
