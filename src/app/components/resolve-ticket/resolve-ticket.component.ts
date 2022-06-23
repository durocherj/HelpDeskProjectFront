import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resolve-ticket',
  templateUrl: './resolve-ticket.component.html',
  styleUrls: ['./resolve-ticket.component.css']
})
export class ResolveTicketComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
  }

}
