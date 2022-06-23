import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Ticket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
  }


submitForm(form:any){
  console.log(form);

  this.service.CreateTicket({title: form.value["title"], requestedBy: form.value["requestedBy"], contents: form.value["contents"], closed:false});
  form.reset();
}

}
