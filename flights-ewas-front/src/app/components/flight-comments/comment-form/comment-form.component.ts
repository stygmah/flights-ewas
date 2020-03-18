import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() flightId: Number;
  @Output() reloadComments = new EventEmitter();

  private loading: boolean;
  private editingComment: boolean;

  constructor(
    private router:Router,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.editingComment = false;
  }

  public onSubmit(form:HTMLFormElement){
    this.loading = true;
    this.commentService.postComment(this.SetComment(form.form.value))
      .subscribe(ret => {
        this.WhenSubmitted();
      });
  }

  private WhenSubmitted(){
    this.ToggleCommentEditor();
    this.reloadComments.emit("any");
    this.loading = false;
  }

  private SetComment(comment: any): any{
    let result: any = {
      comment: comment.comment,
      userId: parseInt(comment.userId),
      flightId: this.flightId,
      tags: this.SetTags(comment.tags)
    }
    return result;
  }

  private SetTags (tags: String){
    return tags.split(',');
  }

  public ToggleCommentEditor(){
    this.editingComment = !this.editingComment;
  }

}
