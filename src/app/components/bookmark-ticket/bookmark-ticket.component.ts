import { Component, OnInit } from '@angular/core';
import { BookMark } from 'src/app/interfaces/bookmark';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bookmark-ticket',
  templateUrl: './bookmark-ticket.component.html',
  styleUrls: ['./bookmark-ticket.component.css']
})
export class BookmarkTicketComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
  }

  submitForm(form:any){
    console.log(form);
  
    this.service.BookMarkTicket({ticketId: form.value["ticketId"],userId: form.value["userId"]})
    .subscribe((data:BookMark) => console.log("Post Successful!"));
    form.reset();
  }
}
