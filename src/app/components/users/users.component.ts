import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  singleUser: User;

  constructor(private userService: UserService) {}
  // ----MovieTone------
  // constructor(private httpClient: HttpClient) {
  // }
  // --------------

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
    // ------MovieTone
    // this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => {
    //   this.users = value;
    // });
    // ------
  }
  getBubble(user: User): void {
    this.singleUser = user;
  }

}
