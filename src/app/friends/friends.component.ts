import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FriendService } from '../services/friend.service';
import { LoginService } from '../services/login.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  postForm: FormGroup;
  My_Friends = [];
  Not_My_Friends = [];
  loggedin_user = null;
  
  @ViewChild("postFormDirective") postFormDirective;

  constructor(private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService,
    private postService: PostService,
    private friendService: FriendService) { 
    this.createForm();
  }

  ngOnInit(): void {
    var userId = this.cookieService.get("test_loggedin_user");
    this.loggedin_user = userId;
    this.getMyFriends();
    this.getFriendSuggestions();
  }

  getMyFriends() {
    
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      myId: userId
    };

    this.friendService.getFriends(payload)
    .subscribe(res => {
      console.log(res);
      this.My_Friends = res.response;
    }, err => {
      console.log(err);
    })
  }

  getFriendSuggestions() {
    
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      myId: userId
    };

    this.friendService.getNotFriends(payload)
    .subscribe(res => {
      console.log(res);
      this.Not_My_Friends = res.response;
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

  unfriendAction(friend: any)
  {
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      myId: userId,
      friendId: friend.username
    };

    this.friendService.removeFriend(payload)
    .subscribe(res => {
      console.log(res);
      this.getMyFriends();
      this.getFriendSuggestions();
    }, err => {
      console.log(err);
    })
  }

  navigateHome()
  { 
    this.router.navigate(['/home']);
  }

  sendRequestAction(friend: any)
  {
    var userId = this.cookieService.get("test_loggedin_user");

    let payload = {
      myId: userId,
      friendId: friend.username
    };

    this.friendService.addFriend(payload)
    .subscribe(res => {
      console.log(res);
      this.getFriendSuggestions();
      this.getMyFriends()
    }, err => {
      console.log(err);
    })
  }

}
