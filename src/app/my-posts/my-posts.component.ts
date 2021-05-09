import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FriendService } from '../services/friend.service';
import { LoginService } from '../services/login.service';
import { PostService } from '../services/post.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  postForm: FormGroup;
  My_Posts = null;
  Friends_Posts = null;
  loggedin_user = null;
  myProfile = null;
  totalFriends = 0;
  
  @ViewChild("postFormDirective") postFormDirective;

  constructor(private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService,
    private postService: PostService,
    private profileService: ProfileService,
    private friendService: FriendService) { 
    this.createForm();
  }

  ngOnInit(): void {
    var userId = this.cookieService.get("test_loggedin_user");
    this.loggedin_user = userId;
    this.getMyPosts();
    this.getFriendsPosts();
    this.getMyProfile();
    this.totalFriendsCount();
  }

  navigateFriends()
  {
    this.router.navigate(['/friends']);
  }

  totalFriendsCount()
  { 
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      myId: userId
    };

    this.friendService.getFriends(payload)
      .subscribe(res => {
        this.totalFriends = res.response.length;
      })
  }

  onSubmitPost(): void {

    var userId = this.cookieService.get("test_loggedin_user");

    var info = this.postForm.value;
    
    let payload = {
      title: info.title,
      content: info.content,
      ownerId: userId
    };

    this.postService.createPost(payload)
      .subscribe(res => {
        console.log(res);
        this.getMyPosts();
      }, err => {
        console.log(err);
      })
  }

  getMyPosts() {
    
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      ownerId: userId
    };

    this.postService.getMyPosts(payload)
    .subscribe(res => {
      console.log(res);
      this.My_Posts = res.response;
    }, err => {
      console.log(err);
    })
  }

  getFriendsPosts() {
    
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      ownerId: userId
    };

    this.postService.getPostOfFriends(payload)
    .subscribe(res => {
      console.log(res);
      this.Friends_Posts = res.response;
    }, err => {
      console.log(err);
    })
  }

  getMyProfile() {
    var userId = this.cookieService.get("test_loggedin_user");

    this.profileService.getMyProfile(userId)
    .subscribe(res => {
      console.log(res);
      this.myProfile = res.response[0];
    }, err => {
      console.log(err);
    })
  }

  createForm()
  {
    this.postForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'content': ['', [Validators.required]]
    });
  }

}
