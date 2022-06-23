import { Component, OnInit } from '@angular/core';
import { BookMark } from 'src/app/interfaces/bookmark';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-bookmarks',
  templateUrl: './view-bookmarks.component.html',
  styleUrls: ['./view-bookmarks.component.css']
})
export class ViewBookmarksComponent implements OnInit {

  constructor(private service:ApiService) { }

  bookMarkArray:BookMark[] = [];
  
  ngOnInit(): void {
    this.GetBookMarksById();
  }

  GetBookMarksById(){
    this.service.GetBookMarksById().subscribe((data:BookMark[]) => this.bookMarkArray = data);
  }
}
