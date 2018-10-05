import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { PostContentService } from '../../services/post-content.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-wall',
  templateUrl: './post-wall.component.html',
  styleUrls: ['./post-wall.component.css']
})
export class PostWallComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public photoUser: string;
  public userId: string;
  public posts: Post[];
  public postId: string;

  post : Post = {
    id:'',
    datePublic: '',
    userId: '',
    userName: '',
    descriptionPost:''
  }

  constructor(
    public authentication: AuthenticationService,
    public router: Router,
    public postContentService: PostContentService,
    public reute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.loginAuth();
    this.allPost();
    this.onCheckUserLogin();
    this.onClickDelete();
    this.getDetailsPost();
  }

  loginAuth() {
    this.authentication.stateAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.emailUser = auth.email;
        this.photoUser = auth.photoURL;
        this.userId = auth.uid;
      } else {
        this.isLogin = false;
        this.router.navigate(['/'])
      }
    });
  }

  onSavePost({value}:{value:Post}){
    value.datePublic = (new Date()).getTime();
    this.authentication.stateAuth().subscribe( user => {
      value.userId = user.uid;
      value.userName = user.displayName;
      this.postContentService.addPost(value);
    });
  }

  allPost(){
    this.postContentService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  onCheckUserLogin(){
  this.authentication.stateAuth().subscribe(user => {
    if(user){
      this.userId = user.uid;
    }
  })
}

 getDetailsPost(){
  this.postId = this.reute.snapshot.params['id'];
  this.postContentService.getPost(this.postId).subscribe(post => {
    this.post = post;
  });
}

onClickDelete(){
  if(confirm('¡Seguro que desea eliminarlo?')){
      this.postContentService.deletePost(this.post);
    }
  }
}
