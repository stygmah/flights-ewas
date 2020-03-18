import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommentFormComponent } from './components/flight-comments/comment-form/comment-form.component';
import { FlightCommentsComponent } from './components/flight-comments/flight-comments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommentTableComponent } from './components/flight-comments/comment-table/comment-table.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CommentFormComponent,
    FlightCommentsComponent,
    PageNotFoundComponent,
    CommentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
