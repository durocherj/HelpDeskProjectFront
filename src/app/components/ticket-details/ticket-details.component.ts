import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:ApiService) { }

  ticket:Ticket | undefined;
  id:number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.GetTicketById(params['id']));
  }

  GetTicketById(id:number){
    this.service.GetTicketById(id).subscribe((data:Ticket) => this.ticket = data);
  }

}
