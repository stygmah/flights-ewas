import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comment } from '../models/Comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getComments(flightId: Number){
    return this.http.get<Comment[]>(environment.API_URL+'/comments/'+flightId);
  }
  postComment(comment: any){
    return this.http.post(environment.API_URL+'/comments', comment);
  }
}
