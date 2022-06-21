import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkTicketComponent } from './components/bookmark-ticket/bookmark-ticket.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { MainComponent } from './components/main/main.component';
import { ResolveTicketComponent } from './components/resolve-ticket/resolve-ticket.component';
import { ViewBookmarksComponent } from './components/view-bookmarks/view-bookmarks.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:"full"},
  {path:"main", component:MainComponent},
  {path:"create", component:CreateTicketComponent},
  {path:"bookmark", component:BookmarkTicketComponent},
  {path:"resolve", component:ResolveTicketComponent},
  {path:"viewBookmark", component:ViewBookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
