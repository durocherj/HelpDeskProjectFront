import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ResolveTicketComponent } from './components/resolve-ticket/resolve-ticket.component';
import { BookmarkTicketComponent } from './components/bookmark-ticket/bookmark-ticket.component';
import { ViewBookmarksComponent } from './components/view-bookmarks/view-bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateTicketComponent,
    ResolveTicketComponent,
    BookmarkTicketComponent,
    ViewBookmarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
