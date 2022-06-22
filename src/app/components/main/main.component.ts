import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:ApiService) { }

  ticketArray:Ticket[] = [];

  ngOnInit(): void {
    this.GetAllTicketsOderedById();
  }

  GetAllTicketsOderedById(){
    this.service.GetAllTicketsOderedById().subscribe((data:Ticket[]) => this.ticketArray = data);
  }

}
