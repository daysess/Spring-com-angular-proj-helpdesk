import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/model/current-user.model';
import { UserDTO } from 'src/app/model/userDTO.model';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDTO = new UserDTO('','');
  shared : SharedService;
  message: string = "";
  currentUser: CurrentUser = new CurrentUser();

  constructor(
    private userService : UserService,
	  private router: Router
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    this.currentUser = new CurrentUser();
  }

  login(){
    this.message = '';
    this.userService.login(this.userDTO).subscribe(userAuthentication => {
      this.shared.token = this.currentUser.token;
      this.shared.userDTO = this.currentUser.userDTO;
     // this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = "null";
		  this.shared.userDTO = new UserDTO('','');
		  this.shared.showTemplate.emit(false);
		  this.message='Erro';
    });
  }

  cancelLogin(){
    this.message = '';
    this.userDTO = new UserDTO('','');
    window.location.href = '/login';
    window.location.reload();
  }


}
