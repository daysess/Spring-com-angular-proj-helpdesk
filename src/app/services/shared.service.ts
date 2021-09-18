import { Injectable, EventEmitter } from '@angular/core';
import { UserDTO } from '../model/userDTO.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance : SharedService;
  userDTO: UserDTO = new UserDTO('','');
  token: string = "";
  public showTemplate = new EventEmitter<boolean>();


  constructor() { 
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }
  
  isLoggedIn():boolean{
    if(this.userDTO == null){
      return false;
    }
    return this.userDTO.email != '';
  }


}
