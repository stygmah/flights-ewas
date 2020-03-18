import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss']
})
export class CommentTableComponent implements OnInit {


  
  @Input() comments: Comment[];
  constructor() { }

  ngOnInit() {
  }

}
