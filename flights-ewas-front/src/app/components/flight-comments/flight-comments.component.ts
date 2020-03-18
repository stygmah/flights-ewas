import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { switchMap } from 'rxjs/operators';

import { Comment } from '../../models/Comment.model';

@Component({
  selector: 'app-flight-comments',
  templateUrl: './flight-comments.component.html',
  styleUrls: ['./flight-comments.component.scss']
})
export class FlightCommentsComponent implements OnInit {
  
  private selectedId: Number;
  private comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
    ) { }

  ngOnInit() {
    this.GetComments();
    this.GetId();
  }

  GetId(){
    this.route.params
    .subscribe(params=>this.selectedId = params["flightId"]);
  }


  GetComments(){
    this.route.params
    .pipe(switchMap(selectedId=> this.commentService.getComments(selectedId["flightId"])))
    .subscribe(comments => {
      this.comments = comments
    });
  }




}
