import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resolve-ticket',
  templateUrl: './resolve-ticket.component.html',
  styleUrls: ['./resolve-ticket.component.css']
})
export class ResolveTicketComponent implements OnInit {
  

  constructor(private route:ActivatedRoute, private service:ApiService) { }

  ticket:Ticket | undefined;
  ticketId:number = 0;
  title:string = '';
  requestedBy:string = '';
  contents:string = '';
  closed:boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.GetTicketById(params['id']));
  }

  GetTicketById(ticketId:number){
    this.service.GetTicketById(ticketId).subscribe((data:Ticket) => this.ticket = data);
  }

  submitForm(form:any){
    console.log(form);
    console.log(this.ticketId);
    if(this.ticket !== undefined){
      this.service.ResolveAndCloseTicket({
        ticketId: this.ticket.ticketId,
        resolution: form.value["resolution"],
        resolvedBy: form.value["resolvedBy"],
        title: this.title,
        requestedBy: this.requestedBy,
        contents: this.contents,
        closed: false
      
        })
          
        .subscribe((data:Ticket) => console.log("Update Successful!"));
        form.reset();
      }
  }

}
